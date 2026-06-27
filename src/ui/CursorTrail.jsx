import { useEffect } from 'react'

// Jejak sparkle warna-warni yang ngikutin kursor (Y2K vibe). Skip di touch device.
const COLORS = ['var(--orange)', 'var(--blue)', 'var(--yellow)', 'var(--pink)', 'var(--green)']
const GLYPHS = ['✦', '★', '✸']

export default function CursorTrail() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return // touch: skip
    let last = 0
    let i = 0

    const spawn = (x, y) => {
      const s = document.createElement('span')
      s.className = 'spark'
      s.textContent = GLYPHS[i % GLYPHS.length]
      s.style.left = x + 'px'
      s.style.top = y + 'px'
      s.style.color = COLORS[i % COLORS.length]
      s.style.setProperty('--r', Math.random() * 80 - 40 + 'deg')
      s.style.setProperty('--dx', Math.random() * 24 - 12 + 'px')
      document.body.appendChild(s)
      i++
      setTimeout(() => s.remove(), 750)
    }

    const onMove = (e) => {
      const now = e.timeStamp || 0
      if (now - last < 42) return
      last = now
      spawn(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}
