import { socials } from '../data/socials.js'

const stackChips = ['Python', 'Django', 'React', 'SQL']

const highlights = [
  { label: 'Computer Engineering', tone: 'primary' },
  { label: 'Full-Stack Development', tone: 'warm' },
  { label: 'Backend Development', tone: 'primary' },
  { label: 'Problem Solving', tone: 'warm' },
  { label: 'AI Integration', tone: 'pink' },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      // Respects html { scroll-padding-top: var(--nav-h) } for a clean landing.
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen w-full flex flex-col justify-end"
    >
      {/* Hero viewport — the global sticky canvas (mounted at App level) renders behind this section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Foreground UI container */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end pt-20 sm:pt-24 pb-6 sm:pb-8 lg:pb-10 container-px pointer-events-none">
          {/* Main hero grid: Left HUD card + Right headline & action buttons */}
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-end pb-1 pointer-events-auto">

            {/* ============================================================
                LEFT: Profile HUD Card (compact, 31-34% viewport scale)
            ============================================================ */}
            <div className="lg:col-span-5 xl:col-span-4 w-full flex flex-col justify-end">
              <div className="relative w-full max-w-[360px] sm:max-w-[375px] xl:max-w-[390px]">
                {/* Frosted glass HUD container */}
                <div className="backdrop-blur-2xl bg-slate-950/35 border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl space-y-3 sm:space-y-3.5">
                  
                  {/* Header: Avatar, Name/Location & Open to work badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        aria-hidden="true"
                        className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-slate-900/60 border border-white/20 flex items-center justify-center font-display font-bold text-white text-sm sm:text-base shadow-sm shrink-0"
                      >
                        HS
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-display font-bold text-[15px] sm:text-base leading-tight truncate">
                          Harshit Sewlikar
                        </p>
                        <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 truncate">
                          Chinchwad, Pune, Maharashtra, India
                        </p>
                      </div>
                    </div>

                    {/* Status pill badge with green dot */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      OPEN TO WORK
                    </div>
                  </div>

                  {/* 2x2 Info Grid with rounded container boxes */}
                  <dl className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <Info label="DEGREE" value="B.E. Computer Eng." />
                    <Info label="UNIVERSITY" value="SPPU, Pune" />
                    <Info label="CGPA" value="8.46" />
                    <Info label="STATUS" value="open to roles" />
                  </dl>

                  {/* Progress bar HUD */}
                  <div className="pt-0.5">
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-400 uppercase tracking-[0.18em] text-[9.5px] sm:text-[10px]">
                        AVAILABILITY / READINESS
                      </span>
                      <span className="text-white font-mono font-bold text-[10px] sm:text-[11px]">100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full w-full" />
                    </div>
                  </div>

                  {/* What I love doing tags */}
                  <div className="pt-0.5">
                    <p className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 sm:mb-2">
                      WHAT I LOVE DOING
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {highlights.map((h) => (
                        <span
                          key={h.label}
                          className="px-2.5 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium border border-white/10 bg-slate-900/45 text-slate-200"
                        >
                          {h.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub-card metadata lines underneath card */}
                <div className="mt-2.5 sm:mt-3 px-1 flex flex-col gap-0.5 sm:gap-1 text-[11px] sm:text-xs font-mono text-slate-300/80">
                  <p className="flex items-center gap-2">
                    • B.E. Computer Engineering • SPPU, Pune
                  </p>
                  <p className="flex items-center gap-2 text-slate-400/80">
                    • Chinchwad, Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================
                RIGHT: Hero Content (placed to match reference image)
            ============================================================ */}
            <div className="lg:col-span-7 xl:col-span-8 w-full flex flex-col justify-end items-center lg:items-end">
              <div className="w-full max-w-[620px] xl:max-w-[640px] flex flex-col items-center text-center">
                
                {/* Main Headline — controlled responsive clamp, natural 2-line wrap matching reference image */}
                <h1
                  className="font-display font-extrabold tracking-tight leading-[1.08]"
                  style={{ fontSize: 'clamp(36px, 3.8vw, 62px)' }}
                >
                  <span
                    className="block"
                    style={{
                      color: '#1B2A3E',
                      textShadow: '0 2px 12px rgba(8, 20, 35, 0.35)',
                    }}
                  >
                    I build software{' '}
                    <span
                      style={{
                        color: '#FFFFFF',
                        textShadow: '0 2px 14px rgba(6, 14, 26, 0.75)',
                      }}
                    >
                      th
                    </span>
                    at
                  </span>
                  <span
                    className="block mt-1 text-white"
                    style={{
                      textShadow: '0 2px 14px rgba(6, 14, 26, 0.75)',
                    }}
                  >
                    actually{' '}
                    <span
                      className="font-serif italic font-normal text-[#9EC5E8]"
                      style={{
                        textShadow: '0 2px 14px rgba(6, 14, 26, 0.8)',
                      }}
                    >
                      helps people.
                    </span>
                  </span>
                </h1>

                {/* Bio paragraph — 4 lines matching reference image */}
                <p
                  className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[17px] xl:text-[18px] leading-[1.55] max-w-[510px] mx-auto text-center"
                  style={{
                    color: '#F5F7FA',
                    textShadow: '0 2px 8px rgba(8, 20, 35, 0.45)',
                  }}
                >
                  full-stack dev who likes the whole journey — from the SQL schema at
                  the back to the tiny hover state at the front. i turn ideas into
                  working apps with django, react, and a lot of debugging.
                </p>

                {/* Stack chips — reasonable spacing below paragraph */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 sm:mt-5">
                  <span
                    className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-slate-300 font-semibold mr-1.5"
                    style={{ textShadow: '0 1px 4px rgba(8, 20, 35, 0.5)' }}
                  >
                    STACK
                  </span>
                  {stackChips.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1 text-xs font-mono font-medium rounded-full border border-white/20 bg-black/50 text-[#F5F7FA] shadow-sm backdrop-blur-sm"
                      style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action Buttons — 28-36px spacing below stack, 1 row on desktop */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-7 sm:mt-8">
                  {/* Button 1: see my projects (solid white pill) */}
                  <button
                    type="button"
                    onClick={() => scrollTo('projects')}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm bg-white text-slate-950 hover:bg-slate-100 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-xl whitespace-nowrap"
                  >
                    see my projects
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Button 2: view resume (translucent glass pill) */}
                  <a
                    href={socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full font-medium text-sm bg-slate-900/60 hover:bg-slate-800/80 text-slate-100 border border-white/20 backdrop-blur-md hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-lg whitespace-nowrap"
                  >
                    view resume
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <path d="M12 3v13M6 11l6 6 6-6" />
                    </svg>
                  </a>

                  {/* Button 3: say hi (translucent dark pill) */}
                  <button
                    type="button"
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full font-medium text-sm bg-slate-900/50 hover:bg-slate-800/70 text-slate-200 hover:text-white border border-white/15 backdrop-blur-md hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-lg whitespace-nowrap"
                  >
                    say hi
                  </button>
                </div>

                {/* Social links — right-aligned beneath buttons matching reference image */}
                <div className="w-full flex items-center justify-center sm:justify-end gap-3 mt-4 sm:mt-5">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-slate-400 mr-1">
                    FIND ME
                  </span>

                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Harshit Sewlikar on GitHub"
                    className="h-9 w-9 rounded-full border border-white/15 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.13-1.17 3.13-1.17.63 1.58.24 2.75.12 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                    </svg>
                  </a>

                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Harshit Sewlikar on LinkedIn"
                    className="h-9 w-9 rounded-full border border-white/15 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                    </svg>
                  </a>

                  <a
                    href={`mailto:${socials.email}`}
                    aria-label="Email Harshit Sewlikar"
                    className="h-9 w-9 rounded-full border border-white/15 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-2.5 sm:p-3 hover:border-white/20 transition-colors">
      <dt className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">
        {label}
      </dt>
      <dd className="text-white font-semibold text-xs sm:text-[13px] mt-0.5 truncate">
        {value}
      </dd>
    </div>
  )
}
