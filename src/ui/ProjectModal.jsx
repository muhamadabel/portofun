import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const hasLink = project.href && project.href !== '#'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          ✕
        </button>

        <div className="modal-meta">
          {project.year && <span>{project.year}</span>}
          {project.role && <span>{project.role}</span>}
        </div>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-detail">{project.detail || project.blurb}</p>

        {project.highlights?.length > 0 && (
          <ul className="modal-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="modal-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {hasLink && (
          <a className="modal-cta" href={project.href} target="_blank" rel="noreferrer">
            Kunjungi situs ↗
          </a>
        )}
      </div>
    </div>
  )
}
