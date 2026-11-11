import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            to="/work"
            className="font-mono text-xs uppercase tracking-widest text-plum hover:text-ink"
          >
            ← All work
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                project.color === 'lime' ? 'bg-lime' : 'bg-coral'
              }`}
            />
            <Eyebrow>{project.category}</Eyebrow>
          </div>

          <h1 className="mt-4 text-balance font-display text-5xl font-light md:text-7xl">
            {project.name}
          </h1>

          <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-plum">Client</p>
              <p className="mt-1 font-medium">{project.client}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-plum">Year</p>
              <p className="mt-1 font-medium">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-plum">Discipline</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-paper-dim px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-balance font-display text-2xl leading-relaxed text-ink md:text-3xl">
          {project.summary}
        </p>
        <p className="mt-6 leading-relaxed text-plum">{project.description}</p>
      </section>

      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Next project</p>
            <p className="mt-2 font-display text-3xl">{next.name}</p>
          </div>
          <Button to={`/work/${next.slug}`} variant="accent">
            View project →
          </Button>
        </div>
      </section>
    </article>
  )
}
