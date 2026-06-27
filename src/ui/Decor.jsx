import { useId } from 'react'

// Bintang 5-sudut (motif utama tema).
export function Star({ className = '', style, color }) {
  return (
    <div className={`deco star ${className}`} style={{ color, ...style }} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <path
          fill="currentColor"
          d="M50 2 L61 38 L98 38 L68 60 L79 96 L50 74 L21 96 L32 60 L2 38 L39 38 Z"
        />
      </svg>
    </div>
  )
}

// Sparkle Y2K (bintang 4-sudut cekung).
export function Sparkle({ className = '', style, color }) {
  return (
    <div className={`deco sparkle ${className}`} style={{ color, ...style }} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <path
          fill="currentColor"
          d="M50 4 C55 40 60 45 96 50 C60 55 55 60 50 96 C45 60 40 55 4 50 C40 45 45 40 50 4 Z"
        />
      </svg>
    </div>
  )
}

// Groovy flower ala Matisse (petal biru + tengah kuning).
export function Flower({ className = '', style, petal = '#1e3ae0', center = '#f4b41a' }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <div className={`deco flower ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 100 140">
        <g>
          {angles.map((a) => (
            <ellipse
              key={a}
              cx="50"
              cy="22"
              rx="13"
              ry="30"
              fill={petal}
              transform={`rotate(${a} 50 70)`}
            />
          ))}
          <ellipse cx="50" cy="70" rx="15" ry="11" fill={center} />
        </g>
      </svg>
    </div>
  )
}

// Roda widebody (tire + velg), cx pusat roda.
function Wheel({ cx, detail }) {
  const cy = 84
  return (
    <g>
      <circle cx={cx} cy={cy} r="23" fill="currentColor" />
      {detail && (
        <>
          <circle cx={cx} cy={cy} r="13" fill="var(--paper)" />
          <circle cx={cx} cy={cy} r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* spoke */}
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1={cx}
              y1={cy}
              x2={cx + 12 * Math.cos((a * Math.PI) / 180)}
              y2={cy + 12 * Math.sin((a * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="2"
            />
          ))}
          <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />
        </>
      )}
    </g>
  )
}

// Porsche 911 RWB widebody, side profile + sayap GT.
export function CarSvg({ detail = true }) {
  return (
    <svg viewBox="0 0 240 115">
      {/* sayap GT (swan-neck) */}
      <g fill="currentColor">
        <path d="M182 60 L186 42 L191 42 L187 60 Z" />
        <path d="M208 58 L212 40 L217 40 L213 58 Z" />
        <path d="M168 44 L240 33 L240 41 L168 52 Z" />
      </g>

      {/* body 911 fastback dengan wheel arch */}
      <path
        fill="currentColor"
        d="M4 90 C4 84 5 80 9 78 L12 72 C15 62 24 57 36 56 C52 54 70 54 84 55 L97 40
           C101 34 109 32 122 33 C150 34 178 43 205 58 C214 62 221 69 221 79 L219 90
           L196 90 C195 74 188 66 174 66 C160 66 153 74 152 90 L78 90
           C77 74 70 66 56 66 C42 66 35 74 34 90 Z"
      />

      {detail && (
        <>
          {/* kaca (greenhouse) */}
          <path
            fill="var(--paper)"
            d="M101 43 C105 38 113 36 124 37 C146 39 166 46 186 57 L181 59
               C162 49 143 43 123 42 C113 41 107 42 104 46 Z"
          />
          {/* headlight bulat khas 911 */}
          <ellipse cx="22" cy="64" rx="5" ry="6" fill="var(--paper)" />
          {/* garis pintu + flare */}
          <path d="M126 41 L128 64" stroke="var(--paper)" strokeWidth="1.5" fill="none" />
          <path d="M150 52 C140 49 96 49 84 53" stroke="var(--paper)" strokeWidth="1.5" fill="none" opacity="0.7" />
          {/* lampu belakang */}
          <rect x="214" y="66" width="6" height="5" fill="var(--paper)" />
        </>
      )}

      <Wheel cx={56} detail={detail} />
      <Wheel cx={174} detail={detail} />
    </svg>
  )
}

// Mobil crisp (navy + detail cream).
export function Car({ className = '', style, color }) {
  return (
    <div className={`deco car ${className}`} style={{ color, ...style }} aria-hidden="true">
      <CarSvg detail />
    </div>
  )
}

// Mobil watermark gede & samar (siluet satu warna, sengaja bleed off-edge).
export function CarWatermark({ className = '', style }) {
  return (
    <div className={`car-wm ${className}`} style={style} aria-hidden="true">
      <CarSvg detail={false} />
    </div>
  )
}

// Emblem bundar JDM dengan teks melingkar (muter pelan).
export function Badge({
  text = 'FRONTEND DEVELOPER · EST 2026 · ',
  center = '★',
  className = '',
  style,
}) {
  const id = useId().replace(/:/g, '')
  return (
    <div className={`badge ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id={`b-${id}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
        </defs>
        <circle cx="60" cy="60" r="58" className="b-ring" />
        <circle cx="60" cy="60" r="40" className="b-ring" strokeDasharray="2 4" strokeWidth="1.5" />
        <text className="b-text">
          <textPath href={`#b-${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
        <text x="60" y="72" textAnchor="middle" className="b-center" style={{ fontSize: 34 }}>
          {center}
        </text>
      </svg>
    </div>
  )
}

// Pita catur oranye-cream (dipakai sebagai divider antar-section).
export function Checker({ className = '', style }) {
  return <div className={`checker ${className}`} style={style} aria-hidden="true" />
}

// Label katakana / mono kecil.
export function Kata({ children, className = '', style }) {
  return (
    <span className={`deco front kata ${className}`} style={style} aria-hidden="true">
      {children}
    </span>
  )
}
