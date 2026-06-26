import { useEffect, useState } from 'react'

// Loader: bintang muter (motif tema) + persen.
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v += Math.random() * 16
      if (v >= 100) {
        v = 100
        clearInterval(id)
        setPct(100)
        setTimeout(() => {
          setDone(true)
          onDone?.()
        }, 400)
      } else {
        setPct(Math.floor(v))
      }
    }, 150)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <div className={`loader ${done ? 'done' : ''}`}>
      <div className="star-spin" />
      <div className="pct">loading {pct}%</div>
    </div>
  )
}
