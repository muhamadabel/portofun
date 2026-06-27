import { useState } from 'react'
import { profile } from '../data.js'

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
      if (res.ok && (data.success === 'true' || data.success === true)) {
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
        <span className="form-err">Gagal ngirim, coba lagi atau DM/email langsung aja ya.</span>
      )}
    </form>
  )
}
