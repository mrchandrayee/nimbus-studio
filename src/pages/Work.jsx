import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import { projects } from '../data/projects.js'

export default function Work() {
  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['All', ...Array.from(tags)]
  }, [])

  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Eyebrow>Work</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-light leading-tight md:text-6xl">
        Twenty-three products, four people, one studio.
      </h1>
      <p className="mt-5 max-w-lg text-plum">
        A selection of the engagements we can talk about publicly. Filter by discipline to see
        where we've spent the most time.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-plum hover:border-ink hover:text-ink'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-6 font-mono text-xs uppercase tracking-widest text-plum">
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
      </div>

      <div className="mt-6 divide-y divide-line border-t border-line">
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-paper-dim/50 md:grid-cols-[auto_1fr_1fr_auto]"
          >
            <span className="font-mono text-sm text-plum">0{i + 1}</span>
            <div>
              <h2 className="font-display text-2xl group-hover:text-coral">{project.name}</h2>
              <p className="mt-1 text-sm text-plum">{project.client}</p>
            </div>
            <p className="hidden text-sm text-plum md:block">{project.category}</p>
            <span className="justify-self-end font-mono text-sm text-plum">{project.year}</span>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="py-10 text-center text-plum">No projects match that filter yet.</p>
        )}
      </div>
    </section>
  )
}
