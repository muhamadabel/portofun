import { profile } from '../data.js'
import { Star, Sparkle, Badge, Kata } from '../ui/Decor.jsx'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* dekor culture (animated, warna-warni) */}
      <Star style={{ top: '14%', left: '4%', transform: 'rotate(-12deg)' }} color="var(--ink)" />
      <Sparkle className="front spin-pop" style={{ top: '28%', left: '23%', width: 'clamp(36px, 5vw, 66px)' }} color="var(--orange)" />
      <Sparkle className="front" style={{ bottom: '26%', left: '2%' }} color="var(--pink)" />
      <Badge style={{ bottom: '12%', left: '4%' }} center="★" />
      <Kata style={{ top: '22%', right: '6%' }}>ポートフォリオ • 21</Kata>

      <div className="top">
        <span>★ PORTFOLIO 2026</span>
        <span>
          based in <b>{profile.location.toLowerCase()}</b>
        </span>
      </div>

      <h1>
        SOFT<span className="out">WARE</span>
        <br />
        <span className="blue">ENG</span>★
      </h1>

      <p className="sub">
        {profile.about[0]} <b>{profile.tagline}</b>
      </p>

      <div className="meta-row">
        <span>
          <b>//</b> {profile.role}
        </span>
        <span>
          <b>//</b> React · Next.js · TypeScript · Laravel
        </span>
        <span>
          <b>//</b> @{profile.username}
        </span>
      </div>

      {profile.cvUrl && (
        <a className="cv-btn" href={profile.cvUrl} target="_blank" rel="noreferrer" download>
          Download CV ↓
        </a>
      )}

      <div className="scroll-hint">scroll ↓</div>
    </section>
  )
}
