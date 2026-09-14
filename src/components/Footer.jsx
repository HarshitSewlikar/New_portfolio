import { socials } from '../data/socials.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 text-white">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Top Row: Brand & Summary on left, Navigation links on right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#fed034] text-slate-950 text-base font-extrabold shadow-[0_2px_10px_rgba(254,208,52,0.4)] select-none shrink-0"
              >
                HS
              </span>
              <h2
                className="font-display font-black text-xl sm:text-2xl text-white tracking-tight"
                style={{
                  textShadow:
                    '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 8px rgba(0, 0, 0, 0.55)',
                }}
              >
                Harshit Sewlikar
              </h2>
            </div>

            <p
              className="text-slate-200/90 text-sm sm:text-[15px] mt-3 max-w-xl leading-relaxed"
              style={{
                textShadow:
                  '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              computer engineering graduate · building practical software with
              <span className="block sm:inline sm:ml-1">
                python, django, react &amp; SQL — based in pune, india.
              </span>
            </p>
          </div>

          {/* Social Navigation links on the right */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-slate-200/90"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{
                textShadow:
                  '0 1px 2px rgba(0, 0, 0, 0.85), 0 1px 8px rgba(0, 0, 0, 0.45)',
              }}
            >
              github
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{
                textShadow:
                  '0 1px 2px rgba(0, 0, 0, 0.85), 0 1px 8px rgba(0, 0, 0, 0.45)',
              }}
            >
              linkedin
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="hover:text-white transition-colors duration-200"
              style={{
                textShadow:
                  '0 1px 2px rgba(0, 0, 0, 0.85), 0 1px 8px rgba(0, 0, 0, 0.45)',
              }}
            >
              email
            </a>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{
                textShadow:
                  '0 1px 2px rgba(0, 0, 0, 0.85), 0 1px 8px rgba(0, 0, 0, 0.45)',
              }}
            >
              resume
            </a>
          </nav>
        </div>

        {/* Clean subtle dashed divider line across footer */}
        <div className="w-full border-t border-dashed border-white/25 my-6 sm:my-8" />

        {/* Bottom Row: Copyright on left, debug quote on right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-[13px] text-slate-300/85">
          <p
            style={{
              textShadow:
                '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            © {year} Harshit Sewlikar. all rights reserved.
          </p>
          <p
            className="font-mono text-slate-300/85 tracking-wide"
            style={{
              textShadow:
                '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            built with curiosity, code, and a lot of debugging.
          </p>
        </div>
      </div>
    </footer>
  )
}
