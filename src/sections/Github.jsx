import { useEffect, useState } from 'react'
import Reveal from '../ui/Reveal.jsx'
import { profile } from '../data.js'
import { fetchGithub } from '../github.js'
import { Star, Sparkle } from '../ui/Decor.jsx'

const U = profile.username
const STATS_IMG = `https://github-readme-stats.vercel.app/api?username=${U}&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=ECE6D6&title_color=1E3AE0&icon_color=1E3AE0&text_color=16213E`
const LANGS_IMG = `https://github-readme-stats.vercel.app/api/top-langs/?username=${U}&layout=compact&hide_border=true&bg_color=ECE6D6&title_color=1E3AE0&text_color=16213E&langs_count=8`

export default function Github() {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    // guard buat verifikasi screenshot tanpa network eksternal: ?nogh
    if (new URLSearchParams(location.search).has('nogh')) {
      setErr(true)
      return
    }
    let alive = true
    fetchGithub(U)
      .then((d) => alive && setData(d))
      .catch(() => alive && setErr(true))
    return () => {
      alive = false
    }
  }, [])

  // gambar stats (server-side, berat) baru di-load pas section keliatan
  useEffect(() => {
    const el = document.querySelector('#github')
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShowStats(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="github">
      <Star style={{ top: '6%', right: '2%', transform: 'rotate(-10deg)' }} color="var(--blue)" />
      <Sparkle className="front" style={{ top: '16%', left: '34%' }} color="var(--yellow)" />

      <Reveal as="div" className="eyebrow">
        github — live dari @{U}
      </Reveal>
      <Reveal as="h2" className="section-title" delay={50}>
        Straight from <em>GitHub</em>
      </Reveal>

      {/* profile card */}
      <Reveal delay={120}>
        {data ? (
          <div className="gh-top">
            <img className="ava" src={data.user.avatar} alt={data.user.login} loading="lazy" />
            <div className="who">
              <b>{data.user.name || data.user.login}</b>
              <p>{data.user.bio || profile.tagline}</p>
            </div>
            <div className="gh-stats">
              <div className="s">
                <b>{data.user.publicRepos}</b>
                <span>Repos</span>
              </div>
              <div className="s">
                <b>{data.user.followers}</b>
                <span>Followers</span>
              </div>
              <div className="s">
                <b>{data.stats.totalStars}</b>
                <span>Stars</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="gh-top">
            <div className="who">
              <b>@{U}</b>
              <p>{err ? 'Lagi nggak bisa ngambil data GitHub (rate limit). Mampir langsung aja 👇' : 'Loading dari GitHub…'}</p>
            </div>
          </div>
        )}
      </Reveal>

      {/* repo grid live */}
      {data && data.repos.length > 0 && (
        <div className="repo-grid">
          {data.repos.map((r, i) => (
            <Reveal as="a" key={r.id} className="repo" href={r.html_url} target="_blank" rel="noreferrer" delay={i * 50}>
              <h5>{r.name}</h5>
              <p>{r.description || 'No description.'}</p>
              <div className="row">
                {r.language && <span className="lang">{r.language}</span>}
                <span>★ {r.stargazers_count}</span>
                <span>⑂ {r.forks_count}</span>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* stats images (theme-matched) — load pas keliatan aja */}
      {showStats && (
        <Reveal delay={120}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1.6rem',
              alignItems: 'center',
            }}
          >
            <img
              src={STATS_IMG}
              alt="GitHub stats"
              loading="lazy"
              style={{ height: 160, border: '2px solid var(--ink)', maxWidth: '100%' }}
            />
            <img
              src={LANGS_IMG}
              alt="Top languages"
              loading="lazy"
              style={{ height: 160, border: '2px solid var(--ink)', maxWidth: '100%' }}
            />
          </div>
        </Reveal>
      )}

      <Reveal as="a" className="gh-cta" href={`https://github.com/${U}`} target="_blank" rel="noreferrer" delay={120}>
        Lihat semua di GitHub ↗
      </Reveal>
    </section>
  )
}
