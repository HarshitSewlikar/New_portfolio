import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      closeRef.current?.focus()
    }, 30)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative card-elevated w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto shadow-pop border-base-border rounded-t-3xl sm:rounded-3xl animate-pop-in">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-base-elevated/95 backdrop-blur border-b-2 border-dashed border-base-border p-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-blue-deep font-extrabold">
              project {project.number}
            </p>

            <h3
              id="project-modal-title"
              className="text-lg sm:text-xl font-display font-extrabold text-base-ink truncate"
            >
              {project.title}
            </h3>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="h-10 w-10 shrink-0 rounded-full border-2 border-base-border bg-accent-pink text-zinc-950 shadow-pop flex items-center justify-center hover:rotate-90 hover:scale-110 transition-transform"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 space-y-7">

          {/* =========================================
              ACTUAL PROJECT SCREENSHOT
              Uses project.screenshot, NOT project.image
          ========================================== */}
          <div className="rounded-2xl overflow-hidden border-2 border-base-border bg-base-surface shadow-pop">

            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt={`${project.title} actual project screenshot`}
                className="w-full h-auto max-h-[500px] object-contain bg-white"
                onError={(e) => {
                  console.error(
                    'Screenshot failed to load:',
                    project.screenshot
                  )

                  e.currentTarget.style.display = 'none'

                  const fallback =
                    e.currentTarget.parentElement.querySelector(
                      '[data-image-fallback]'
                    )

                  if (fallback) {
                    fallback.classList.remove('hidden')
                  }
                }}
              />
            ) : null}

            {/* Fallback if screenshot is missing */}
            <div
              data-image-fallback
              className={`${
                project.screenshot ? 'hidden' : 'flex'
              } min-h-[280px] items-center justify-center text-center p-8`}
            >
              <div>
                <p className="font-display font-extrabold text-xl text-base-ink mb-2">
                  Project screenshot unavailable
                </p>

                <p className="text-sm text-base-ink-soft">
                  Expected image:
                </p>

                <code className="block mt-2 text-xs text-accent-blue-deep break-all">
                  {project.screenshot || 'No screenshot path provided'}
                </code>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-ink-mute mb-3 font-bold">
              technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={
                    index % 3 === 0
                      ? 'chip-primary sticker'
                      : index % 3 === 1
                      ? 'chip-warm sticker'
                      : 'chip-pink sticker'
                  }
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Project details */}
          <Section
            title="the problem"
            text={project.problem}
          />

          <Section
            title="overview"
            text={project.overview}
          />

          <Section
            title="my role"
            text={project.myRole}
          />

          <Section
            title="how i built it"
            text={project.implementation}
          />

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div>
              <h4 className="text-base-ink font-display font-extrabold text-base mb-3">
                key features
              </h4>

              <ul className="space-y-2.5">
                {project.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-base-ink-soft text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                        index % 3 === 0
                          ? 'bg-accent-blue'
                          : index % 3 === 1
                          ? 'bg-accent-yellow-deep'
                          : 'bg-accent-pink-deep'
                      }`}
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learning */}
          <Section
            title="what i learned"
            text={project.learning}
          />

          {/* Team */}
          {project.team?.length > 0 && (
            <Section
              title="team & guidance"
              text={`Built with ${project.team.join(', ')}${
                project.guide
                  ? `, guided by ${project.guide}`
                  : ''
              }.`}
            />
          )}

          {/* Links */}
          {(project.github || project.liveDemo) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t-2 border-dashed border-base-border">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.13-1.17 3.13-1.17.63 1.58.24 2.75.12 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                  </svg>

                  view repository
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  live demo

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

function Section({ title, text }) {
  if (!text) return null

  return (
    <div>
      <h4 className="text-base-ink font-display font-extrabold text-sm mb-2 uppercase tracking-wide">
        {title}
      </h4>

      <p className="text-base-ink-soft text-sm leading-relaxed">
        {text}
      </p>
    </div>
  )
}