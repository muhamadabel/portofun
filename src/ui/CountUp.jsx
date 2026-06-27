import { useEffect, useRef, useState } from 'react'

// Angka yang ngitung naik dari 0 pas ke-scroll masuk viewport. Pertahanin suffix (mis. "+").
export default function CountUp({ value, duration = 1100 }) {
  const m = String(value).match(/^(\d+)(.*)$/)
  const target = m ? parseInt(m[1], 10) : null
  const suffix = m ? m[2] : ''
  const [n, setN] = useState(target === null ? value : 0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          io.disconnect()
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setN(Math.round(eased * target))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {target === null ? value : n}
      {suffix}
    </span>
  )
}
