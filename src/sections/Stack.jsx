import Reveal from '../ui/Reveal.jsx'
import { stack } from '../data.js'
import { Sparkle, CarWatermark, Star } from '../ui/Decor.jsx'

export default function Stack() {
  return (
    <section id="stack">
      <CarWatermark style={{ top: '2%', right: '-10%' }} />
      <Star style={{ top: '8%', right: '6%', transform: 'rotate(12deg)' }} color="var(--green)" />
      <Sparkle className="front" style={{ top: '34%', right: '12%' }} color="var(--blue)" />

      <Reveal as="div" className="eyebrow">
        tech stack · senjata
      </Reveal>
      <Reveal as="h2" className="section-title" delay={50}>
        Tools of the <em>trade</em>
      </Reveal>

      <div className="stack-grid">
        {stack.map((s, i) => (
          <Reveal key={s.group} className="stack-card" delay={i * 70}>
            <h4>{s.group}</h4>
            <div className="chips">
              {s.items.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
