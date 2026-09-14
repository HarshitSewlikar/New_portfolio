import { socials } from '../data/socials.js'

const highlights = [
  { label: 'Computer Engineering', tone: 'primary' },
  { label: 'Full-Stack Development', tone: 'warm' },
  { label: 'Backend Development', tone: 'primary' },
  { label: 'Problem Solving', tone: 'warm' },
  { label: 'AI Integration', tone: 'pink' },
]

export default function About() {
  return (
    <section id="about" className="container-px py-24 sm:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        {/* Left — narrative */}
        <div className="lg:col-span-7">
          <p className="eyebrow eyebrow-dot mb-4">about me</p>
          <h2 className="section-heading">
            a builder who likes the{' '}
            <span className="gradient-text-cream hand-underline-pink">craft</span>{' '}
            behind the code.
          </h2>

          <div className="space-y-5 text-base-ink-soft text-lg leading-relaxed mt-6 max-w-2xl">
            <p>
              i'm a computer engineering graduate from{' '}
              <span className="text-base-ink font-bold hand-underline-blue">
                siddhant college of engineering, pune
              </span>{' '}
              (sppu), with a strong foundation in software development
              fundamentals, data structures, and problem solving.
            </p>
            <p>
              i enjoy building full-stack applications end to end — from
              structuring a django backend and SQL database, to shaping the
              frontend experience with react, html, css, and javascript. my
              internship at{' '}
              <span className="text-base-ink font-bold">elite softwares</span>{' '}
              gave me hands-on experience with real-world django and full-stack
              development.
            </p>
            <p>
              i'm currently looking for entry-level roles as a{' '}
              <span className="text-accent-blue-deep font-bold">
                full stack, backend, or python developer
              </span>
              , where i can keep building practical software and learning from
              real production challenges.
            </p>
          </div>
        </div>

        {/* Right — info card grid */}
        <div className="lg:col-span-5">
          <div className="card-elevated p-6 shadow-pop border-base-ink">
            {/* Identity header */}
            <div className="flex items-center gap-4 pb-5 border-b-2 border-dashed border-base-border">
              <div
                aria-hidden="true"
                className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent-blue via-accent-blue-soft to-accent-yellow flex items-center justify-center text-white font-display font-extrabold text-xl border-2 border-base-ink shadow-pop animate-wobble"
              >
                HS
              </div>
              <div className="min-w-0">
                <p className="text-base-ink font-display font-extrabold text-lg leading-tight">
                  Harshit Sewlikar
                </p>
                <p className="text-base-ink-soft text-sm flex items-center gap-1.5 mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {socials.location}
                </p>
              </div>
            </div>

            {/* Quick info grid */}
            <dl className="grid grid-cols-2 gap-3 mt-5">
              <Info label="degree" value="B.E. Computer Engineering" />
              <Info label="university" value="SPPU, Pune" />
              <Info label="cgpa" value="8.46" />
              <Info label="status" value="open to opportunities" />
            </dl>

            {/* Focus tags */}
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-ink-mute mb-3">
                what i love doing
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className={
                      h.tone === 'primary'
                        ? 'chip-primary sticker'
                        : h.tone === 'warm'
                        ? 'chip-warm sticker'
                        : 'chip-pink sticker'
                    }
                  >
                    {h.label}
                  </span>
                ))}
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
    <div className="rounded-2xl border-2 border-base-border bg-base-surface/70 p-3 hover:border-accent-blue hover:rotate-[-1deg] transition-all duration-200">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-base-ink-mute">
        {label}
      </dt>
      <dd className="text-base-ink font-bold text-sm mt-1">{value}</dd>
    </div>
  )
}
