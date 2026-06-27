import { useEffect, useState } from 'react'
import { theme } from '../store.js'

const SWATCHES = [
  { name: 'blue', c: '#1e3ae0' },
  { name: 'orange', c: '#e8632a' },
  { name: 'green', c: '#1f9e6e' },
  { name: 'pink', c: '#e85a93' },
  { name: 'violet', c: '#6a3df0' },
]

export default function AccentSwitcher() {
  const [active, setActive] = useState(theme.accent)

  const apply = (c) => {
    document.documentElement.style.setProperty('--blue', c)
    theme.accent = c
    setActive(c)
    try {
      localStorage.setItem('accent', c)
    } catch {
      /* ignore */
    }
  }

  // restore pilihan terakhir
  useEffect(() => {
    let saved = null
    try {
      saved = localStorage.getItem('accent')
    } catch {
      /* ignore */
    }
    if (saved) apply(saved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="accent-switch" aria-label="Ganti warna aksen">
      <span className="lbl">warna</span>
      {SWATCHES.map((s) => (
        <button
          key={s.name}
          style={{ background: s.c }}
          data-on={active === s.c}
          onClick={() => apply(s.c)}
          aria-label={s.name}
          title={s.name}
        />
      ))}
    </div>
  )
}
