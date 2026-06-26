import Reveal from '../ui/Reveal.jsx'
import { profile } from '../data.js'
import { Flower, Star, Sparkle } from '../ui/Decor.jsx'

export default function About() {
  return (
    <section id="about">
      <span className="watermark" style={{ top: '18%', right: '-2%' }}>
        ★
      </span>
      <Flower style={{ top: '34%', right: '4%', transform: 'rotate(8deg)' }} />
      <Star style={{ bottom: '10%', left: '-1%', transform: 'rotate(14deg)' }} color="var(--blue)" />
      <Sparkle className="front" style={{ top: '20%', left: '30%' }} color="var(--pink)" />

      <Reveal as="div" className="eyebrow">
        about · tentang saya
      </Reveal>
      <Reveal as="h2" className="section-title" delay={50}>
        Hi, I'm <em>Abel</em> 👋
      </Reveal>

      <div className="about-grid">
        <Reveal delay={120}>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="facts-row">
            {profile.facts.map((f) => (
              <div className="f" key={f.label}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="focus" delay={200}>
          <h4>What I'm working on</h4>
          <ul>
            {profile.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
