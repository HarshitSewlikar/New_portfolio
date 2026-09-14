import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    // scrollIntoView honors `html { scroll-padding-top: var(--nav-h) }`, so the
    // section top aligns exactly below the fixed Navbar with no previous-section
    // sliver and no manual offset that could leave a gap.
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-10 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="max-w-[1440px] mx-auto pointer-events-auto">
        <nav
          className={`relative flex items-center justify-between h-[68px] sm:h-[76px] px-4 sm:px-6 lg:px-8 rounded-full backdrop-blur-2xl bg-slate-950/40 border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            scrolled ? 'bg-slate-950/55 border-white/25 shadow-[0_16px_50px_rgba(0,0,0,0.45)]' : ''
          }`}
        >
          {/* Subtle top inner glass shine highlight */}
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* Left: HS Avatar Brand + Harshit. */}
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-3 font-display font-extrabold tracking-tight select-none"
            aria-label="Harshit Sewlikar — go to home"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fed034] text-slate-950 text-sm sm:text-base shadow-[0_2px_10px_rgba(254,208,52,0.4)] group-hover:scale-105 transition-transform duration-200 font-extrabold"
            >
              HS
            </span>
            <span className="text-white text-lg sm:text-xl font-black">
              Harshit<span className="text-[#60a5fa]">.</span>
            </span>
          </button>

          {/* Center: Nav links list with active frosted pill */}
          <ul className="hidden md:flex items-center gap-1 sm:gap-2">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.id} className="relative">
                  <button
                    onClick={() => scrollTo(l.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-4 sm:px-5 py-2 text-sm sm:text-[15px] font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#fde047] bg-white/10 border border-[#fde047]/60 shadow-[0_0_12px_rgba(253,224,71,0.2)] backdrop-blur-sm font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -top-0.5 right-1 h-2 w-2 rounded-full bg-[#f472b6] shadow-[0_0_6px_rgba(244,114,182,0.8)] animate-pulse-soft"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Right: Let's Chat vibrant royal blue pill button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.45)] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Let's Chat
            </button>

            {/* Mobile Hamburger toggle button */}
            <button
              className="md:hidden h-10 w-10 rounded-full border border-white/20 text-white flex items-center justify-center bg-slate-900/60 shadow-md backdrop-blur-md"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 p-4 rounded-3xl backdrop-blur-2xl bg-slate-950/80 border border-white/20 shadow-2xl transition-all"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l) => {
                const isActive = active === l.id
                return (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollTo(l.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-base font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-[#fde047] bg-white/10 border border-[#fde047]/60 shadow-[0_0_12px_rgba(253,224,71,0.2)]'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{l.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#f472b6] shadow-[0_0_6px_rgba(244,114,182,0.8)]" />
                      )}
                    </button>
                  </li>
                )
              })}
              <li className="pt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3 rounded-full text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_16px_rgba(37,99,235,0.4)] transition-all"
                >
                  Let's Chat
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
