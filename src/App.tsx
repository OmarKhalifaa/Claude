import './App.css'
import { EpisodeCard } from './components/EpisodeCard'

const EPISODES = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    episodeNumber: 1,
    duration: '42:18',
  },
  {
    id: 2,
    title: 'Building Scalable Systems from the Ground Up',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    episodeNumber: 2,
    duration: '38:55',
  },
  {
    id: 3,
    title: 'Design Systems and the Power of Consistency',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    episodeNumber: 3,
    duration: '51:04',
  },
  {
    id: 4,
    title: 'Open Source Software: Community, Contribution, and Culture',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    episodeNumber: 4,
    duration: '44:30',
  },
]

export default function App() {
  return (
    <main className="vf-page">
      <header className="vf-page__header">
        <p className="vf-page__eyebrow">Series</p>
        <h1 className="vf-page__title">Latest Episodes</h1>
      </header>

      <section className="vf-episode-grid">
        {EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} {...episode} />
        ))}
      </section>
    </main>
  )
}
