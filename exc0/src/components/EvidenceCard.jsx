import { memo } from 'react'

function EvidenceCard({ clip }) {
  return (
    <article className="card">
      <img
        className="card-thumb"
        src={clip.thumbnail}
        alt={`Ảnh thu nhỏ của ${clip.title}`}
        width="320"
        height="180"
        loading="lazy"
      />
      <h2 className="card-title">{clip.title}</h2>
    </article>
  )
}

export default memo(EvidenceCard)
