import { socials } from '../data/socials.js'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate z-10 w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10 w-full">
        {/* Eyebrow: yellow dot + uppercase label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.28em] text-slate-300 font-medium">
            CONTACT
          </span>
        </div>

        {/* Title area with decorative 4-point sparkle stars on left and right */}
        <div className="relative max-w-3xl mx-auto text-center mb-4">
          {/* Left sparkle star */}
          <span
            aria-hidden="true"
            className="hidden sm:inline-block absolute -left-6 sm:-left-12 lg:-left-16 top-2 text-white/80 pointer-events-none select-none transition-transform hover:scale-110"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
          </span>

          {/* Right sparkle star */}
          <span
            aria-hidden="true"
            className="hidden sm:inline-block absolute -right-6 sm:-right-12 lg:-right-16 top-2 text-white/80 pointer-events-none select-none transition-transform hover:scale-110"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
          </span>

          {/* Main heading */}
          <h2 className="font-display font-black tracking-tight text-center leading-tight text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-md">
            let's build something
          </h2>
        </div>

        {/* Subtitle description */}
        <p
          className="text-center text-slate-200/90 text-sm sm:text-base lg:text-[17px] max-w-xl mx-auto leading-relaxed mb-12 sm:mb-16"
          style={{ textShadow: '0 1px 6px rgba(6, 14, 26, 0.6)' }}
        >
          if you're looking for a developer who enjoys turning ideas into
          <span className="block">working software, i'd love to connect.</span>
        </p>

        {/* 4 Frosted Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Email */}
          <ContactCard
            href={`mailto:${socials.email}`}
            label="email"
            value={socials.email}
            iconBg="bg-[#cfe2ff]"
            iconColor="text-[#2b6cb0]"
            iconBorder="border-[#93c5fd]"
            icon={
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
            }
          />

          {/* Card 2: LinkedIn */}
          <ContactCard
            href={socials.linkedin}
            external
            label="linkedin"
            value="in/harshitsewlikar"
            iconBg="bg-[#fef08a]"
            iconColor="text-[#b45309]"
            iconBorder="border-[#fde047]"
            icon={
              <g>
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <line x1="8" y1="10" x2="8" y2="16" />
                <line x1="8" y1="7" x2="8" y2="7.01" />
                <path d="M12 16v-3.5a2 2 0 0 1 4 0V16" />
                <line x1="12" y1="10" x2="12" y2="16" />
              </g>
            }
          />

          {/* Card 3: GitHub */}
          <ContactCard
            href={socials.github}
            external
            label="github"
            value="@HarshitSewlikar"
            iconBg="bg-[#fce7f3]"
            iconColor="text-[#db2777]"
            iconBorder="border-[#fbcfe8]"
            icon={
              <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 3-.3 6-1.5 6-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.3 1.6 4.1 2 4.1 2a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 2.5 9.4c0 5.5 3 6.7 6 7-.6.6-.6 1.2-.5 2V21" />
            }
          />

          {/* Card 4: Resume */}
          <ContactCard
            href={socials.resume}
            external
            label="resume"
            value="view pdf"
            iconBg="bg-[#fef08a]"
            iconColor="text-[#b45309]"
            iconBorder="border-[#fde047]"
            icon={
              <g>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </g>
            }
          />
        </div>
      </div>
    </section>
  )
}

function ContactCard({ href, external, label, value, icon, iconBg, iconColor, iconBorder }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative rounded-3xl p-7 sm:p-8 backdrop-blur-xl bg-slate-950/45 border border-white/15 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-white/35 hover:bg-slate-950/60 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
    >
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl pointer-events-none" />

      {/* Pastel rounded squircle icon container */}
      <div
        className={`h-16 w-16 sm:h-18 sm:w-18 rounded-2xl ${iconBg} ${iconColor} border ${iconBorder} flex items-center justify-center mb-5 shadow-md transition-transform duration-300 group-hover:scale-110`}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </div>

      {/* Text information */}
      <div className="w-full">
        <h3 className="text-white font-display font-bold text-lg sm:text-xl tracking-tight mb-1 group-hover:text-white">
          {label}
        </h3>
        <p className="text-slate-300/90 text-xs sm:text-[13px] break-all leading-normal">
          {value}
        </p>
      </div>
    </a>
  )
}
