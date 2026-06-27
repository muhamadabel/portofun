import { useState } from 'react'
import { profile } from '../data.js'

const BURST_COLORS = ['#1e3ae0', '#e8632a', '#1f9e6e', '#e85a93', '#f4b41a']
function confettiBurst() {
  for (let k = 0; k < 28; k++) {
    const s = document.createElement('span')
    s.className = 'spark burst-spark'
    s.textContent = k % 2 ? '✦' : '★'
    s.style.left = '50%'
    s.style.top = '40%'
    s.style.color = BURST_COLORS[k % BURST_COLORS.length]
    s.style.fontSize = 12 + Math.random() * 16 + 'px'
    s.style.setProperty('--bx', (Math.random() * 2 - 1) * window.innerWidth * 0.42 + 'px')
    s.style.setProperty('--by', (Math.random() * 2 - 1) * window.innerHeight * 0.4 + 'px')
    document.body.appendChild(s)
    setTimeout(() => s.remove(), 1100)
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: `Pesan baru dari ${form.name.value} (porto)`,
          _template: 'box',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      const msg = String(data.message || '').toLowerCase()
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent')
        form.reset()
        confettiBurst()
      } else if (msg.includes('activ')) {
        setStatus('pending')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done">
        <b>Terkirim! ✦</b>
        <p>Makasih udah mampir, aku bakal bales secepatnya.</p>
      </div>
    )
  }

  if (status === 'pending') {
    return (
      <div className="form-done">
        <b>Sebentar ya ✦</b>
        <p>Form lagi diaktivasi. Coba kirim lagi beberapa saat lagi, pesanmu bakal langsung masuk.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="row2">
        <input name="name" type="text" placeholder="Nama" required autoComplete="name" />
        <input name="email" type="email" placeholder="Email" required autoComplete="email" />
      </div>
      <textarea name="message" rows="4" placeholder="Mau ngomong apa?" required />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Ngirim…' : 'Kirim pesan ↗'}
      </button>
      {status === 'error' && (
        <span className="form-err">Gagal ngirim, coba lagi atau DM/email langsung aja ya.</span>
      )}
    </form>
  )
}
