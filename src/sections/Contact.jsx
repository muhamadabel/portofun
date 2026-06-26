import Reveal from '../ui/Reveal.jsx'
import { profile } from '../data.js'
import { Star, Sparkle, Car } from '../ui/Decor.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Star style={{ top: '10%', left: '4%', transform: 'rotate(-14deg)' }} color="var(--blue)" />
      <Sparkle className="front" style={{ top: '18%', right: '12%' }} color="var(--green)" />
      <Star style={{ top: '14%', left: '14%', transform: 'rotate(8deg)' }} color="var(--yellow)" />
      <Car className="front" style={{ bottom: '5%', right: '4%', transform: 'rotate(-2deg)' }} color="var(--blue)" />

      <Reveal as="div" className="eyebrow" style={{ justifyContent: 'center' }}>
        contact · ngobrol yuk
      </Reveal>
      <Reveal as="h2" className="big" delay={50}>
        Let's <em>connect</em>
      </Reveal>

      <Reveal className="links" delay={130}>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            <b>{s.label}</b>
            <span>{s.handle} ↗</span>
          </a>
        ))}
      </Reveal>

      <Reveal as="p" className="footer-note" delay={220}>
        © {new Date().getFullYear()} {profile.name} · built from scratch, no template ★
      </Reveal>
    </section>
  )
}
