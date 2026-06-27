import { useState } from 'react'
import Reveal from '../ui/Reveal.jsx'
import { projects } from '../data.js'
import { Badge, Car, CarWatermark, Sparkle } from '../ui/Decor.jsx'
import ProjectModal from '../ui/ProjectModal.jsx'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="work">
      <CarWatermark style={{ bottom: '-6%', left: '-8%' }} />
      <Badge style={{ top: '8%', right: '4%' }} text="SELECTED WORK · SHIPPED · " center="✦" />
      <Car className="front" style={{ bottom: '4%', right: '3%', transform: 'rotate(-3deg)' }} />
      <Sparkle className="front" style={{ top: '14%', left: '32%' }} color="var(--green)" />

      <Reveal as="div" className="eyebrow">
        work · karya pilihan
      </Reveal>
      <Reveal as="h2" className="section-title" delay={50}>
        Selected <em>work</em>
      </Reveal>

      <div className="project-list">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div
              className="project"
              role="button"
              tabIndex={0}
              onClick={() => setActive(p)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(p)}
            >
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="meta">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <span className="arrow">→</span>
            </div>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
