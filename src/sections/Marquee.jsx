import { skills } from '../data.js'

export default function Marquee() {
  const items = [...skills, ...skills]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((s, i) => (
          <span key={i}>
            {s} <span className="dot">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
