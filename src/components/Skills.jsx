import { skillCategories } from '../data/skills.js'

const themeByCategory = {
  Programming: {
    iconBox:
      'border-sky-500/50 bg-sky-950/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]',
    pill: 'border-sky-500/40 bg-sky-950/40 text-sky-200 hover:border-sky-400/60 hover:bg-sky-900/50',
  },
  Frontend: {
    iconBox:
      'border-amber-400/50 bg-amber-950/35 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)]',
    pill: 'border-amber-400/40 bg-amber-950/35 text-amber-200 hover:border-amber-300/60 hover:bg-amber-900/50',
  },
  Backend: {
    iconBox:
      'border-sky-500/50 bg-sky-950/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]',
    pill: 'border-sky-500/40 bg-sky-950/40 text-sky-200 hover:border-sky-400/60 hover:bg-sky-900/50',
  },
  'Database / Data': {
    iconBox:
      'border-amber-400/50 bg-amber-950/35 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)]',
    pill: 'border-amber-400/40 bg-amber-950/35 text-amber-200 hover:border-amber-300/60 hover:bg-amber-900/50',
  },
  Tools: {
    iconBox:
      'border-rose-400/50 bg-rose-950/35 text-rose-400 shadow-[0_0_15px_rgba(251,113,133,0.15)]',
    pill: 'border-rose-400/40 bg-rose-950/35 text-rose-200 hover:border-rose-300/60 hover:bg-rose-900/50',
  },
  Foundations: {
    iconBox:
      'border-sky-500/50 bg-sky-950/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]',
    pill: 'border-sky-500/40 bg-sky-950/40 text-sky-200 hover:border-sky-400/60 hover:bg-sky-900/50',
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate z-10 min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-start pt-5 sm:pt-6 lg:pt-7 pb-6 sm:pb-8">
        <div className="max-w-[1240px] mx-auto relative z-10 w-full">
        {/* Eyebrow: dot + uppercase label */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.28em] text-sky-200/90 font-medium">
            WHAT I WORK WITH
          </span>
        </div>

        {/* Big centered title: "my" on line 1, "technologies." on line 2 in powder blue */}
        <h2 className="font-display font-black tracking-tight text-center leading-[0.96] text-5xl sm:text-6xl lg:text-7xl mb-3">
          <span className="text-white block drop-shadow-sm">my</span>
          <span className="text-[#1591EA] block drop-shadow-sm">technologies.</span>
        </h2>

        {/* Subtitle description */}
        <p
          className="text-center text-slate-200/90 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
          style={{ textShadow: '0 1px 6px rgba(6, 14, 26, 0.6)' }}
        >
          technologies and fundamentals i've applied across coursework, projects, and
          my internship. these are the tools i reach for — not a leaderboard.
        </p>

        {/* 6 Category Frosted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((cat) => {
            const theme = themeByCategory[cat.category] || themeByCategory.Programming
            return (
              <div
                key={cat.category}
                className="relative rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-slate-950/45 border border-white/15 shadow-2xl transition-all duration-300 hover:border-white/30 hover:bg-slate-950/55 hover:-translate-y-1 group flex flex-col justify-between"
              >
                {/* Subtle top inner glow highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl" />

                <div>
                  {/* Card Header: Category Title + (Number Badge & Squircle Icon) */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-white font-display font-bold text-xl sm:text-[22px] tracking-tight">
                      {cat.category}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm sm:text-base text-slate-400 font-medium">
                        {cat.number}
                      </span>
                      <div
                        className={`h-11 w-11 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0 ${theme.iconBox}`}
                      >
                        <CategoryIcon category={cat.category} />
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-slate-300/90 text-sm sm:text-[14.5px] leading-relaxed mt-2.5 mb-6 min-h-[44px]">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium border backdrop-blur-sm transition-all duration-200 ${theme.pill}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}

function CategoryIcon({ category }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (category) {
    case 'Programming':
      return (
        <svg {...props}>
          <path d="m8 6-6 6 6 6" />
          <path d="m16 6 6 6-6 6" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    case 'Frontend':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'Backend':
      return (
        <svg {...props}>
          <rect width="20" height="7" x="2" y="4" rx="2" />
          <rect width="20" height="7" x="2" y="13" rx="2" />
          <circle cx="6" cy="7.5" r="1" fill="currentColor" />
          <circle cx="6" cy="16.5" r="1" fill="currentColor" />
        </svg>
      )
    case 'Database / Data':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    case 'Tools':
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    case 'Foundations':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    default:
      return null
  }
}
