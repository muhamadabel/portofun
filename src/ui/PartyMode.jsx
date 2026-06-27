import { useEffect } from 'react'
import { theme } from '../store.js'

// Easter egg: ketik Konami code (↑↑↓↓←→←→ B A) → hujan bintang + warna aksen disco ~5 detik.
const CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]
const COLORS = ['#1e3ae0', '#e8632a', '#1f9e6e', '#e85a93', '#6a3df0', '#f4b41a']
const GLYPHS = ['✦', '★', '✸', '✺']

export default function PartyMode() {
  useEffect(() => {
    let seq = []
    let partying = false

    const rainOne = () => {
      const s = document.createElement('span')
      s.className = 'spark party-spark'
      s.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      s.style.left = Math.random() * 100 + 'vw'
      s.style.top = '-30px'
      s.style.fontSize = 14 + Math.random() * 22 + 'px'
      s.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      s.style.setProperty('--fall', 60 + Math.random() * 40 + 'vh')
      s.style.animationDuration = 1.6 + Math.random() * 1.4 + 's'
      document.body.appendChild(s)
      setTimeout(() => s.remove(), 3200)
    }

    const party = () => {
      if (partying) return
      partying = true
      const original = theme.accent
      let i = 0
      const colorTimer = setInterval(() => {
        const c = COLORS[i++ % COLORS.length]
        document.documentElement.style.setProperty('--blue', c)
        theme.accent = c
      }, 260)
      const rainTimer = setInterval(rainOne, 90)
      setTimeout(() => {
        clearInterval(colorTimer)
        clearInterval(rainTimer)
        document.documentElement.style.setProperty('--blue', original)
        theme.accent = original
        partying = false
      }, 5200)
    }

    const onKey = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key
      seq.push(k)
      if (seq.length > CODE.length) seq.shift()
      if (seq.length === CODE.length && CODE.every((v, idx) => v === seq[idx])) {
        seq = []
        party()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return null
}
