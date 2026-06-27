import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Experience from './three/Experience.jsx'
import Nav from './ui/Nav.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Stack from './sections/Stack.jsx'
import Github from './sections/Github.jsx'
import Marquee from './sections/Marquee.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Loader from './ui/Loader.jsx'
import { Checker } from './ui/Decor.jsx'
import Parallax from './ui/Parallax.jsx'
import CursorTrail from './ui/CursorTrail.jsx'
import Interactions from './ui/Interactions.jsx'
import AccentSwitcher from './ui/AccentSwitcher.jsx'
import ScrollProgressCar from './ui/ScrollProgressCar.jsx'
import PartyMode from './ui/PartyMode.jsx'
import BackToTop from './ui/BackToTop.jsx'
import { scrollState } from './store.js'

export default function App() {
  const [ready, setReady] = useState(false)
  const lenisRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    window.__lenis = lenis

    lenis.on('scroll', ({ progress, velocity }) => {
      scrollState.progress = progress
      scrollState.velocity = velocity
      // boombox = bintang hero doang → fade keluar pas lewat hero
      if (wrapRef.current) {
        wrapRef.current.style.opacity = String(Math.max(0, 1 - progress * 3.6))
      }
    })

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  // Nudge resize beberapa frame setelah mount, R3F kadang miss ukuran awal
  // pas canvas mount di belakang loader (ResizeObserver telat di sebagian webview).
  useEffect(() => {
    const t1 = requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
    const t2 = setTimeout(() => window.dispatchEvent(new Event('resize')), 250)
    return () => {
      cancelAnimationFrame(t1)
      clearTimeout(t2)
    }
  }, [])

  const handleAnchor = (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (id.length < 2) return
    const el = document.querySelector(id)
    if (el && lenisRef.current) {
      e.preventDefault()
      lenisRef.current.scrollTo(el, { offset: 0 })
    }
  }

  return (
    <>
      <Loader onDone={() => setReady(true)} />

      <div className="paper-tex" />
      <div className="halftone" />
      <div className="canvas-wrap" ref={wrapRef} style={{ transition: 'opacity 0.25s ease' }}>
        <Experience ready={ready} />
      </div>

      <div className="content" onClick={handleAnchor}>
        <Nav />
        <Hero />
        <Parallax speed={0.2}>
          <Checker />
        </Parallax>
        <About />
        <Stack />
        <Parallax speed={0.26}>
          <Marquee />
        </Parallax>
        <Github />
        <Parallax speed={0.2}>
          <Checker />
        </Parallax>
        <Projects />
        <Contact />
      </div>

      <div className="grain" />

      <AccentSwitcher />
      <BackToTop />
      <ScrollProgressCar />
      <CursorTrail />
      <Interactions />
      <PartyMode />
    </>
  )
}
