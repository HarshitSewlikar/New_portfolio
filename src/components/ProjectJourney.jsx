import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function ProjectJourney() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="projects"
      className="relative isolate z-10 min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-start pt-5 sm:pt-6 lg:pt-7 pb-6 sm:pb-8">
        <div className="max-w-[1280px] mx-auto relative z-10 w-full">
        {/* Eyebrow: dot + uppercase label */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.28em] text-slate-300 font-medium">
            PROJECT JOURNEY
          </span>
        </div>

        {/* Big centered title: "where i've" on line 1, "built." on line 2 in powder blue */}
        <h2 className="font-display font-black tracking-tight text-center leading-[0.96] text-5xl sm:text-6xl lg:text-7xl mb-3">
          <span className="text-white block drop-shadow-sm">where i've</span>
          <span className="text-[#B2CFFC] block drop-shadow-sm">built.</span>
        </h2>

        {/* Subtitle description */}
        <p
          className="text-center text-slate-200/90 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
          style={{ textShadow: '0 1px 6px rgba(6, 14, 26, 0.6)' }}
        >
          three real projects that shaped my hands-on experience — each one a
          milestone in learning to build practical software.
        </p>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

