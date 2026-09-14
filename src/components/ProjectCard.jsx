import { useState } from 'react'

const themeByProject = {
  '01': {
    arrow: 'border-sky-400/60 bg-sky-950/40 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.25)]',
  },
  '02': {
    arrow: 'border-amber-400/60 bg-amber-950/40 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.25)]',
  },
  '03': {
    arrow: 'border-rose-400/60 bg-rose-950/40 text-rose-300 shadow-[0_0_15px_rgba(251,113,133,0.25)]',
  },
}

export default function ProjectCard({ project, onOpen }) {
  const [imageFailed, setImageFailed] = useState(false)
  const currentTheme = themeByProject[project.number] || themeByProject['01']

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Open details for ${project.title}`}
      className="relative rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-slate-950/45 border border-white/15 shadow-2xl transition-all duration-300 hover:border-white/30 hover:bg-slate-950/55 hover:-translate-y-1 group flex flex-col justify-between text-left w-full h-full cursor-pointer overflow-hidden"
    >
      {/* Subtle top inner glow highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl pointer-events-none" />

      {/* Subtle bottom-right plus accent */}
      <span className="absolute bottom-4 right-5 text-white/20 text-xs font-mono select-none pointer-events-none">
        +
      </span>

      <div>
        {/* Top row: PROJECT 0X + colored circular arrow button */}
        <div className="flex items-center justify-between gap-3 mb-5 w-full">
          <span className="font-mono text-xs sm:text-[13px] tracking-[0.22em] text-slate-300 uppercase font-semibold">
            PROJECT {project.number}
          </span>
          <span
            aria-hidden="true"
            className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${currentTheme.arrow}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        </div>

        {/* Project visual container */}
        <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/20 bg-slate-900/40 aspect-[16/10] flex items-center justify-center shadow-inner">
          {!imageFailed ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <ProjectFallback project={project} />
          )}

          {/* Project number sticker on top-right */}
          <div className="absolute top-3 right-3 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-amber-400 border border-slate-900/70 flex items-center justify-center font-display font-black text-slate-950 text-xs sm:text-sm shadow-md z-10">
            {project.number}
          </div>
        </div>

        {/* Title + description */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 leading-snug tracking-tight group-hover:text-sky-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-300/90 text-sm leading-relaxed mb-5 min-h-[4.2rem]">
          {project.oneLiner}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((t, i) => {
            const pillStyles = [
              'border-sky-400/40 bg-sky-950/40 text-sky-200',
              'border-amber-400/40 bg-amber-950/35 text-amber-200',
              'border-rose-400/40 bg-rose-950/35 text-rose-200',
            ]
            const pill = pillStyles[i % pillStyles.length]
            return (
              <span
                key={t}
                className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${pill}`}
              >
                {t}
              </span>
            )
          })}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 bg-slate-900/60 text-slate-300 backdrop-blur-sm">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Explore affordance footer */}
      <div className="mt-auto pt-2 flex items-center justify-between w-full">
        <div className="inline-flex flex-col">
          <span className="inline-flex items-center gap-2 text-white text-sm font-bold tracking-tight group-hover:text-sky-300 transition-colors">
            <span>explore project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span className="w-full h-0.5 bg-white/40 rounded-full mt-1.5 transition-colors group-hover:bg-sky-300" />
        </div>
      </div>
    </button>
  )
}

function ProjectFallback({ project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      style={{
        background:
          'linear-gradient(135deg, #FFD93D 0%, #FF8DAF 60%, #5C8FFF 100%)',
      }}
    >
      <span className="font-display font-extrabold text-4xl text-zinc-950 mb-1">
        {initials}
      </span>
      <span className="text-zinc-950 text-xs font-mono uppercase tracking-[0.18em] font-bold">
        {project.title}
      </span>
    </div>
  )
}

