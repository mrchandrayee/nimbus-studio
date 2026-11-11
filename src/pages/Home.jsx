import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Marquee from '../components/Marquee.jsx'
import { projects } from '../data/projects.js'

const capabilities = [
  'Product Design',
  'Design Systems',
  'Front-end Engineering',
  'Brand Identity',
  'Prototyping',
  'Data Visualization',
]

const process = [
  {
    title: 'Frame',
    body: 'Two weeks with your team to define the one problem worth solving first, and what "done" actually looks like.',
  },
  {
    title: 'Design',
    body: 'Working screens over slide decks. You review real interactions, not mockups pretending to be final.',
  },
  {
    title: 'Build',
    body: 'We ship production front-end code alongside design — usually into your own repo, with your own conventions.',
  },
  {
    title: 'Hand off',
    body: 'Documentation and a component library your team can extend without calling us for every new screen.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, #1F1626 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.4fr_1fr] md:pb-24 md:pt-24">
          <div>
            <Eyebrow>Product design studio · Est. 2021</Eyebrow>
            <h1 className="mt-5 text-balance font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              We design software people don't have to be{' '}
              <span className="italic text-coral">trained</span> to use.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-plum">
              Nimbus is a four-person studio that designs and builds interfaces for teams shipping
              something that actually matters to their users — not just their roadmap.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/work" variant="accent">
                See the work →
              </Button>
              <Button to="/contact" variant="outline">
                Start a project
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-paper-dim/60 p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-plum">Currently</p>
              <p className="mt-2 font-display text-2xl">
                Booking one new client for <span className="text-coral">Q1 2027</span>
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-plum">Founded</dt>
                <dd className="font-medium">2021, Mumbai</dd>
              </div>
              <div>
                <dt className="text-plum">Studio size</dt>
                <dd className="font-medium">4 people</dd>
              </div>
              <div>
                <dt className="text-plum">Shipped</dt>
                <dd className="font-medium">23 products</dd>
              </div>
              <div>
                <dt className="text-plum">Avg. engagement</dt>
                <dd className="font-medium">10 weeks</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Marquee items={capabilities} />

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">
              A few things we've shipped recently.
            </h2>
          </div>
          <Link
            to="/work"
            className="font-mono text-sm uppercase tracking-widest text-ink underline decoration-lime decoration-2 underline-offset-4 hover:text-coral"
          >
            View all work
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line p-7 transition-colors hover:border-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-plum">0{i + 1}</span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    project.color === 'lime' ? 'bg-lime' : 'bg-coral'
                  }`}
                />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum">{project.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-paper-dim px-3 py-1 text-xs text-ink/70 group-hover:bg-lime/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Eyebrow>
            <span className="text-paper/60">How we work</span>
          </Eyebrow>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-light md:text-4xl">
            Four stages. No surprise invoices, no mystery deliverables.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line-dark md:grid-cols-4">
            {process.map((step) => (
              <div key={step.title} className="bg-ink p-7">
                <p className="font-display text-3xl text-lime">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-light md:text-5xl">
          Have a problem worth designing around?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-plum">
          Tell us what you're building. We reply to every message within two working days.
        </p>
        <div className="mt-8">
          <Button to="/contact" variant="accent">
            Get in touch →
          </Button>
        </div>
      </section>
    </>
  )
}
