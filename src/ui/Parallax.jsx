import { useEffect, useRef } from 'react'

// Bikin elemen "ngambang di depan": pas scroll dia gerak beda dari halaman
// (parallax) + fade pelan pas mendekati tepi layar. Dipakai buat band/pita.
export default function Parallax({
  children,
  speed = 0.16, // makin gede makin "ngambang"
  fade = true,
  className = '',
  style,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const dist = rect.top + rect.height / 2 - vh / 2 // jarak pusat elemen ke tengah layar
      const shift = Math.max(-160, Math.min(160, -dist * speed))
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`
      if (fade) {
        const t = Math.min(1, Math.abs(dist) / (vh * 0.62))
        el.style.opacity = (1 - t * 0.88).toFixed(3)
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed, fade])

  return (
    <div ref={ref} className={`parallax-band ${className}`} style={style}>
      {children}
    </div>
  )
}
