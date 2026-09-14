import Navbar from './components/Navbar.jsx'
import ScrollImageSequence from './components/ScrollImageSequence.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import ProjectJourney from './components/ProjectJourney.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { structuredData } from './seo/structuredData.js'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-base-bg text-base-ink">
      {/* JSON-LD structured data for SEO / GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Dark background ambience — neon aura glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left blue glow */}
        <div className="absolute -top-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent-blue/15 blur-3xl" />
        {/* Top-right yellow glow */}
        <div className="absolute -top-24 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent-yellow/10 blur-3xl" />
        {/* Mid pink glow */}
        <div className="absolute top-1/2 left-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-pink/10 blur-3xl" />
        {/* Bottom-right blue glow */}
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-accent-blue/10 blur-3xl" />
        {/* Soft mint glow */}
        <div className="absolute bottom-1/3 left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-accent-mint/10 blur-3xl" />

        {/* Dotted dark grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.08) 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-accent-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar />

      {/*
        Global scroll stage — the 300-frame animation now spans the WHOLE portfolio.

        - `#scroll-stage` is the single tall container whose geometry drives the
          animation progress (0 -> 1 across Home -> Contact).
        - The canvas layer is pinned to the viewport for the entire stage, so the
          frame sequence advances continuously and never restarts between sections.
          It is `fixed` (not `sticky`) on purpose:
            * it stays out of normal flow, so it never adds height or pushes the
              sections down; and
            * it is immune to the root's `overflow-x-clip`, which can interfere
              with `position: sticky`.
        - The sections live in `<main>` (z-10) and scroll OVER the pinned canvas
          (z-0). A single ScrollImageSequence instance is used — no competing loops.
      */}
      <div id="scroll-stage" className="relative">
        <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full overflow-hidden">
          <ScrollImageSequence containerId="scroll-stage" />
        </div>

        <main className="relative z-10">
          <Hero />
          <Skills />
          <ProjectJourney />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App