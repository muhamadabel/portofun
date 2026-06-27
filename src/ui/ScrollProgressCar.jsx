import { useEffect, useRef } from 'react'
import { CarSvg } from './Decor.jsx'

// Mobil RWB kecil yang nyetir di sepanjang tepi bawah layar ngikutin progress scroll.
export default function ScrollProgressCar() {
  const carRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (carRef.current) carRef.current.style.left = `calc(${(p * 100).toFixed(2)}% )`
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p.toFixed(3)})`
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
  }, [])

  return (
    <div className="progress-road" aria-hidden="true">
      <span className="road-fill" ref={fillRef} />
      <span className="road-car" ref={carRef}>
        <CarSvg detail={false} />
      </span>
    </div>
  )
}
