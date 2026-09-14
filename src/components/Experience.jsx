import { experience, education } from '../data/experience.js'

export default function Experience() {
  const exp = experience[0] || {}

  return (
    <section
      id="experience"
      className="relative isolate z-10 w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-start pt-5 sm:pt-6 lg:pt-7 pb-6 sm:pb-8">
        <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        {/* Eyebrow: yellow dot + uppercase label */}
        <div className="flex items-center justify-center gap-2.5 mb-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.85)]" />
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.28em] text-slate-300 font-medium">
            MY JOURNEY
          </span>
        </div>

        {/* Big centered title: "where i've" on line 1, "grown." on line 2 */}
        <h2 className="font-display font-black tracking-tight text-center leading-[0.98] text-5xl sm:text-6xl lg:text-7xl mb-3">
          <span className="text-white block drop-shadow-sm">where i've</span>
          <span className="text-[#8FAFFE] block drop-shadow-sm">grown.</span>
        </h2>

        {/* Subtitle description */}
        <p
          className="text-center text-slate-200/90 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
          style={{ textShadow: '0 1px 6px rgba(6, 14, 26, 0.6)' }}
        >
          real experiences, real learning.
          <span className="block">here's where my hands-on journey comes from.</span>
        </p>

        {/* 2 Cards Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* Card 1: EXPERIENCE */}
          <article className="relative rounded-[32px] p-6 sm:p-8 lg:p-9 backdrop-blur-2xl bg-slate-950/40 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between transition-all duration-300 hover:border-white/35 hover:bg-slate-950/50">
            {/* Top inner subtle highlight glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-t-[32px] pointer-events-none" />

            <div>
              {/* Header row: Yellow dot + EXPERIENCE & circular arrow button */}
              <div className="flex items-center justify-between gap-3 mb-6 sm:mb-7">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.9)]" />
                  <span className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-slate-200 uppercase font-semibold">
                    EXPERIENCE
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="h-11 w-11 rounded-full border border-sky-400/50 bg-sky-950/40 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Role & Location block with gradient briefcase icon */}
              <div className="flex items-center gap-5 sm:gap-6 mb-8">
                {/* Gradient squircle icon matching the image: vibrant royal blue blending to golden amber at bottom-right */}
                <div
                  className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl p-[1.5px] shrink-0 flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 45%, #eab308 100%)',
                  }}
                >
                  <div
                    className="h-full w-full rounded-[22px] flex items-center justify-center text-white"
                    style={{
                      background: 'linear-gradient(145deg, #2563eb 0%, #1d4ed8 50%, #ca8a04 100%)',
                    }}
                  >
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight">
                    {exp.role || 'Intern'}
                  </h3>
                  <p className="flex items-center gap-2 text-slate-300 text-sm sm:text-base mt-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{exp.location || 'Wakad, Pune'}</span>
                  </p>
                </div>
              </div>

              {/* 3-Step Columns Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 lg:gap-5 mb-8">
                {/* WHAT I DID */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-sky-300 font-bold">
                      WHAT I DID
                    </span>
                  </div>
                  <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed">
                    {exp.whatIDid}
                  </p>
                </div>

                {/* HOW I DID IT */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">
                      HOW I DID IT
                    </span>
                  </div>
                  <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed">
                    {exp.howIImplemented}
                  </p>
                </div>

                {/* WHAT I LEARNED */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.8)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-bold">
                      WHAT I LEARNED
                    </span>
                  </div>
                  <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed">
                    {exp.whatILearned}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Pills: alternating blue and yellow borders */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {(exp.technologies || []).map((tech, idx) => {
                // Exact matching colors: Python(blue), Django(yellow), SQL(blue), HTML(yellow), CSS(blue), JS(yellow)
                const isYellow = idx % 2 === 1
                return (
                  <span
                    key={tech}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium backdrop-blur-md transition-transform duration-200 hover:scale-105 ${
                      isYellow
                        ? 'border border-amber-400/80 bg-slate-900/60 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.15)]'
                        : 'border border-sky-400/70 bg-slate-900/60 text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                    }`}
                  >
                    {tech}
                  </span>
                )
              })}
            </div>
          </article>

          {/* Card 2: EDUCATION */}
          <article
            id="education"
            className="relative rounded-[32px] p-6 sm:p-8 lg:p-9 backdrop-blur-2xl bg-slate-950/40 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between transition-all duration-300 hover:border-white/35 hover:bg-slate-950/50"
          >
            {/* Top inner subtle highlight glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-t-[32px] pointer-events-none" />

            <div>
              {/* Header row: Yellow dot + EDUCATION & circular arrow button */}
              <div className="flex items-center justify-between gap-3 mb-6 sm:mb-7">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.9)]" />
                  <span className="font-mono text-xs sm:text-[13px] tracking-[0.24em] text-slate-200 uppercase font-semibold">
                    EDUCATION
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="h-11 w-11 rounded-full border border-sky-400/50 bg-sky-950/40 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Education block with gradient graduation cap icon */}
              <div className="flex items-start gap-5 sm:gap-6 mb-8">
                {/* Gradient squircle icon matching the image: royal blue blending to warm golden amber */}
                <div
                  className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl p-[1.5px] shrink-0 flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 45%, #eab308 100%)',
                  }}
                >
                  <div
                    className="h-full w-full rounded-[22px] flex items-center justify-center text-white"
                    style={{
                      background: 'linear-gradient(145deg, #2563eb 0%, #1d4ed8 50%, #ca8a04 100%)',
                    }}
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="font-mono text-xs sm:text-sm tracking-wider text-slate-300 mb-2">
                    {education.duration}
                  </p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-[26px] text-white tracking-tight leading-snug mb-3">
                    {education.degree}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-snug">
                    {education.institution}
                  </p>
                  <p className="text-slate-300/85 text-xs sm:text-sm mt-1">
                    {education.affiliation}
                  </p>
                </div>
              </div>

              {/* Full-width Divider Line */}
              <div className="border-t border-white/15 my-6 sm:my-8" />
            </div>

            {/* Academic Highlights & Certifications */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {/* 8.46 CGPA - Blue Border */}
              <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-sky-400/80 bg-slate-900/60 text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.2)] backdrop-blur-md transition-transform duration-200 hover:scale-105">
                {education.cgpa}
              </span>

              {/* 9.40 SGPA - Yellow Border */}
              <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-amber-400/90 bg-slate-900/60 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.2)] backdrop-blur-md transition-transform duration-200 hover:scale-105">
                {education.highlight}
              </span>

              {/* NPTEL - Generative AI - Pink/Rose Border */}
              {(education.certifications || []).map((cert) => (
                <span
                  key={cert}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-rose-400/80 bg-slate-900/60 text-rose-200 shadow-[0_0_12px_rgba(251,113,133,0.2)] backdrop-blur-md transition-transform duration-200 hover:scale-105"
                >
                  {cert}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}
