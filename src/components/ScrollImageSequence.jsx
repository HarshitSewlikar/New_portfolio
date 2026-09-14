import { useEffect, useRef } from 'react'

const TOTAL_FRAMES = 300
const FRAME_PATH = '/frames/ezgif-frame-'
const LERP_FACTOR = 0.1 // Exact formula from prompt: currentFrame += (targetFrame - currentFrame) * 0.1
const CONCURRENT_LOADS = 10
// Memory retention window (in frames) around the current frame. Decoded frames
// outside this window are released and re-loaded on demand (the browser HTTP
// cache makes reloads cheap), keeping decoded bitmap memory bounded instead of
// permanently holding all 300 frames (~1 GB decoded).
const RETAIN_BEHIND = 20
const RETAIN_AHEAD = 40

function getFrameUrl(index) {
  return `${FRAME_PATH}${String(index).padStart(3, '0')}.png`
}

export default function ScrollImageSequence({ containerId = 'scroll-stage' }) {
  const canvasRef = useRef(null)
  const rafIdRef = useRef(null)

  // Motion & Frame state refs (zero React state re-renders during scroll)
  const currentFrameRef = useRef(1)
  const targetFrameRef = useRef(1)
  const lastDrawnFrameRef = useRef(-1)
  const hasDrawnFirstRef = useRef(false)

  // Image storage and loading status
  // status: 0 = unrequested, 1 = loading, 2 = loaded, 3 = failed
  const imagesRef = useRef(new Array(TOTAL_FRAMES + 1))
  const statusRef = useRef(new Uint8Array(TOTAL_FRAMES + 1))
  const priorityQueueRef = useRef([])
  const generalQueueRef = useRef([])
  const activeWorkersRef = useRef(0)
  const isDestroyedRef = useRef(false)
  const lastReleaseCenterRef = useRef(1)

  // Helper to draw a specific image onto the canvas
  const drawImageToCanvas = (img) => {
    const canvas = canvasRef.current
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cW = canvas.width
    const cH = canvas.height
    if (cW === 0 || cH === 0) return

    const iW = img.naturalWidth
    const iH = img.naturalHeight

    // Cover calculation to preserve aspect ratio and fill the viewport
    const scale = Math.max(cW / iW, cH / iH)
    const drawW = iW * scale
    const drawH = iH * scale
    const drawX = (cW - drawW) / 2
    const drawY = (cH - drawH) / 2

    ctx.fillStyle = '#08090C'
    ctx.fillRect(0, 0, cW, cH)
    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }

  // Find the closest loaded image so there is NEVER a blank screen or flicker
  const findNearestLoadedImage = (requestedIndex) => {
    const target = Math.max(1, Math.min(TOTAL_FRAMES, requestedIndex))
    if (statusRef.current[target] === 2 && imagesRef.current[target]) {
      return imagesRef.current[target]
    }

    // Search outward radiating from target
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const down = target - offset
      if (down >= 1 && statusRef.current[down] === 2 && imagesRef.current[down]) {
        return imagesRef.current[down]
      }
      const up = target + offset
      if (up <= TOTAL_FRAMES && statusRef.current[up] === 2 && imagesRef.current[up]) {
        return imagesRef.current[up]
      }
    }
    return null
  }

  const renderFrame = (frameIndex) => {
    const target = Math.max(1, Math.min(TOTAL_FRAMES, frameIndex))
    const img = findNearestLoadedImage(target)
    if (img) {
      drawImageToCanvas(img)
    }
  }

  // Bound memory usage: drop decoded frames that are far from the current
  // position and discard any queued-but-not-started loads for those frames.
  // Frames inside [center - RETAIN_BEHIND, center + RETAIN_AHEAD] are kept, so
  // the nearest-loaded-frame fallback still always has something to draw.
  const releaseDistantFrames = (centerFrame) => {
    const center = Math.round(centerFrame)
    const keepMin = Math.max(1, center - RETAIN_BEHIND)
    const keepMax = Math.min(TOTAL_FRAMES, center + RETAIN_AHEAD)

    // Drop far pending loads so we never load a frame only to release it.
    if (priorityQueueRef.current.length > 0) {
      priorityQueueRef.current = priorityQueueRef.current.filter(
        (i) => i >= keepMin && i <= keepMax
      )
    }

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if ((i < keepMin || i > keepMax) && statusRef.current[i] === 2) {
        imagesRef.current[i] = null
        statusRef.current[i] = 0 // releasable: prioritizeWindow can reload it
      }
    }
  }

  // Concurrent queue manager
  const pumpQueue = () => {
    if (isDestroyedRef.current) return

    while (activeWorkersRef.current < CONCURRENT_LOADS) {
      let nextIndex = null

      // Check high-priority queue first (current scroll neighborhood)
      while (priorityQueueRef.current.length > 0) {
        const candidate = priorityQueueRef.current.shift()
        if (candidate >= 1 && candidate <= TOTAL_FRAMES && statusRef.current[candidate] === 0) {
          nextIndex = candidate
          break
        }
      }

      // Check general sequential queue
      if (nextIndex === null) {
        while (generalQueueRef.current.length > 0) {
          const candidate = generalQueueRef.current.shift()
          if (candidate >= 1 && candidate <= TOTAL_FRAMES && statusRef.current[candidate] === 0) {
            nextIndex = candidate
            break
          }
        }
      }

      // Nothing left to load
      if (nextIndex === null) break

      // Start loading
      const index = nextIndex
      statusRef.current[index] = 1
      activeWorkersRef.current++

      const img = new Image()
      img.src = getFrameUrl(index)

      img.onload = () => {
        if (isDestroyedRef.current) return
        activeWorkersRef.current--
        statusRef.current[index] = 2
        imagesRef.current[index] = img

        // If this image is the current active frame or the initial frame 1, redraw immediately
        const cur = Math.round(currentFrameRef.current)
        if (index === cur || (!hasDrawnFirstRef.current && index === 1)) {
          renderFrame(cur)
          hasDrawnFirstRef.current = true
        }

        pumpQueue()
      }

      img.onerror = () => {
        if (isDestroyedRef.current) return
        activeWorkersRef.current--
        statusRef.current[index] = 3
        pumpQueue()
      }
    }
  }

  // Request frames around targetFrame with highest priority
  const prioritizeWindow = (centerFrame) => {
    const center = Math.round(centerFrame)
    const pendingSet = new Set(priorityQueueRef.current)
    const newPriority = []

    // Prioritize center, then forward, then backward
    for (let offset = 0; offset <= 30; offset++) {
      const fwd = center + offset
      if (fwd <= TOTAL_FRAMES && statusRef.current[fwd] === 0 && !pendingSet.has(fwd)) {
        newPriority.push(fwd)
        pendingSet.add(fwd)
      }
      if (offset > 0) {
        const bwd = center - offset
        if (bwd >= 1 && statusRef.current[bwd] === 0 && !pendingSet.has(bwd)) {
          newPriority.push(bwd)
          pendingSet.add(bwd)
        }
      }
    }

    if (newPriority.length > 0) {
      priorityQueueRef.current = [...newPriority, ...priorityQueueRef.current]
      pumpQueue()
    }
  }

  // Update canvas pixel dimensions for sharp Retina rendering
  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const displayW = window.innerWidth
    const displayH = window.innerHeight

    const bufferW = Math.round(displayW * dpr)
    const bufferH = Math.round(displayH * dpr)

    if (canvas.width !== bufferW || canvas.height !== bufferH) {
      canvas.width = bufferW
      canvas.height = bufferH
    }

    renderFrame(Math.round(currentFrameRef.current))
  }

  // Scroll listener: translates scroll progress into targetFrame
  const handleScroll = () => {
    const container = document.getElementById(containerId)
    if (!container) return

    const rect = container.getBoundingClientRect()
    const windowH = window.innerHeight
    const scrollableDist = rect.height - windowH

    let progress = 0
    if (scrollableDist > 0) {
      // rect.top starts at 0 and decreases as user scrolls down
      progress = Math.max(0, Math.min(1, -rect.top / scrollableDist))
    }

    // Global portfolio progress -> frame:
    // 0%   (start of Home)  -> Frame 1
    // 100% (end of Contact) -> Frame 300
    // One continuous progression across every section.
    const newTarget = 1 + progress * (TOTAL_FRAMES - 1)
    targetFrameRef.current = newTarget

    // Immediately push near frames to front of loading queue
    prioritizeWindow(newTarget)
  }

  // Continuous animation loop using lerp interpolation
  const animate = () => {
    if (isDestroyedRef.current) return

    const diff = targetFrameRef.current - currentFrameRef.current
    if (Math.abs(diff) > 0.005) {
      currentFrameRef.current += diff * LERP_FACTOR
    } else {
      currentFrameRef.current = targetFrameRef.current
    }

    const frameToDraw = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrameRef.current)))

    if (frameToDraw !== lastDrawnFrameRef.current || !hasDrawnFirstRef.current) {
      renderFrame(frameToDraw)
      lastDrawnFrameRef.current = frameToDraw
      hasDrawnFirstRef.current = true

      if (canvasRef.current) {
        canvasRef.current.dataset.currentFrame = String(frameToDraw)
      }

      // Release distant frames occasionally (hysteresis avoids thrashing when the
      // scroll position hovers around a retention boundary).
      if (Math.abs(frameToDraw - lastReleaseCenterRef.current) >= 5) {
        releaseDistantFrames(frameToDraw)
        lastReleaseCenterRef.current = frameToDraw
      }
    }

    if (Math.abs(diff) > 0.5) {
      prioritizeWindow(frameToDraw)
    }

    rafIdRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    isDestroyedRef.current = false

    // Initialize queues:
    // 1. High priority: the first frames, so the hero appears instantly and early
    //    scrolling through Home stays smooth.
    const initialPriority = []
    for (let i = 1; i <= 40; i++) initialPriority.push(i)
    priorityQueueRef.current = initialPriority

    // 2. No eager whole-sequence preload. Frames load on demand around the current
    //    scroll position (see prioritizeWindow) which — together with the retention
    //    window above — keeps decoded memory bounded.
    generalQueueRef.current = []

    // Resize canvas to viewport and DPR
    handleResize()

    // Start loading images immediately
    pumpQueue()

    // Check initial scroll progress
    handleScroll()

    // Listen to scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    // Start persistent requestAnimationFrame loop
    rafIdRef.current = requestAnimationFrame(animate)

    return () => {
      isDestroyedRef.current = true
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [containerId])

  return (
    <canvas
      ref={canvasRef}
      id="scroll-canvas"
      aria-hidden="true"
      role="img"
      aria-label="Cinematic scroll-linked camera movement"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{
        zIndex: 0,
        backgroundColor: '#08090C',
      }}
    />
  )
}
