import { useState } from 'react'
import { profile } from '../data.js'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const usingFormspree = !profile.formspree.includes('xxxx')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    // Fallback kalau Formspree belum di-setup: buka aplikasi email.
    if (!usingFormspree) {
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
      const subject = encodeURIComponent(`Halo Abel, dari ${data.name}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
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
        <span className="form-err">Gagal ngirim, coba lagi atau email langsung aja.</span>
      )}
    </form>
  )
}
