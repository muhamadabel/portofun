import { useEffect } from 'react'

// Tilt 3D (kartu miring ngikutin kursor) + magnetic hover (link/tombol nempel ke kursor).
// Pakai event delegation di document biar elemen dinamis (repo dari GitHub) ikut kena.
const TILT = '.repo, .stack-card'
const MAGNET = '.nav ul li a, .contact .links a, .gh-cta, .contact .mail'

export default function Interactions() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const tilt = e.target.closest(TILT)
      if (tilt) {
        const r = tilt.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        tilt.style.transform = `perspective(800px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-4px)`
      }
      const mag = e.target.closest(MAGNET)
      if (mag) {
        const r = mag.getBoundingClientRect()
        const mx = e.clientX - (r.left + r.width / 2)
        const my = e.clientY - (r.top + r.height / 2)
        mag.style.transform = `translate(${mx * 0.32}px, ${my * 0.45}px)`
      }
    }

    const onOut = (e) => {
      // cuma reset kalau kursor beneran keluar elemen (bukan pindah ke anak-nya)
      const t = e.target.closest(TILT)
      if (t && !t.contains(e.relatedTarget)) t.style.transform = ''
      const m = e.target.closest(MAGNET)
      if (m && !m.contains(e.relatedTarget)) m.style.transform = ''
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return null
}
