import './EpisodeCard.css'

export interface EpisodeCardProps {
  title: string
  thumbnailUrl: string
  youtubeUrl: string
  episodeNumber?: number
  duration?: string
}

export function EpisodeCard({
  title,
  thumbnailUrl,
  youtubeUrl,
  episodeNumber,
  duration,
}: EpisodeCardProps) {
  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="vf-episode-card"
      aria-label={`Watch episode${episodeNumber ? ` ${episodeNumber}` : ''}: ${title} on YouTube`}
    >
      <div className="vf-episode-card__thumbnail-wrapper">
        <img
          src={thumbnailUrl}
          alt=""
          className="vf-episode-card__thumbnail"
          loading="lazy"
          decoding="async"
        />

        <div className="vf-episode-card__overlay">
          <div className="vf-episode-card__play-btn" aria-hidden="true">
            <PlayIcon />
          </div>
        </div>

        {duration && (
          <span className="vf-episode-card__duration">{duration}</span>
        )}
      </div>

      <div className="vf-episode-card__body">
        {episodeNumber !== undefined && (
          <span className="vf-episode-card__episode-label">
            Episode {episodeNumber}
          </span>
        )}
        <h3 className="vf-episode-card__title">{title}</h3>
        <span className="vf-episode-card__cta" aria-hidden="true">
          Watch on YouTube
          <ExternalIcon />
        </span>
      </div>
    </a>
  )
}

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 5.5L15 10L7 14.5V5.5Z" fill="currentColor" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 10L10 2M10 2H5.5M10 2V6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
