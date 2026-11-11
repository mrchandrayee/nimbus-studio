import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'

const team = [
  { name: 'Ananya Rao', role: 'Founder, Product Design' },
  { name: 'Devesh Iyer', role: 'Front-end Engineering' },
  { name: 'Miriam Cho', role: 'Brand & Visual Design' },
  { name: 'Tobias Reyes', role: 'Research & Strategy' },
]

const values = [
  {
    title: 'Working software over slides',
    body: 'We show you real interactions in the browser from week one, not static mockups that hide how something actually behaves.',
  },
  {
    title: 'One client at a time',
    body: 'We take on a single engagement per quarter so the same four people are in every review, every week, start to finish.',
  },
  {
    title: 'Leave a system, not a screen',
    body: "Every engagement ends with a component library and documentation your own team can extend without calling us back.",
  },
]

export default function Studio() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Eyebrow>Studio</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-light leading-tight md:text-6xl">
          Four people who'd rather work on one thing well than five things adequately.
        </h1>
        <p className="mt-6 max-w-xl text-plum">
          Nimbus started in 2021 as two freelancers sharing a desk in Mumbai. We're still small on
          purpose — small enough that the people who pitch your project are the same people who
          build it.
        </p>
      </section>

      <section className="border-y border-line bg-paper-dim/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-display text-xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-plum">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Eyebrow>The team</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">Who you'll work with.</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((person) => (
            <div key={person.name} className="rounded-2xl border border-line p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-lime">
                {person.name.charAt(0)}
              </div>
              <p className="mt-5 font-medium">{person.name}</p>
              <p className="mt-1 text-sm text-plum">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="font-display text-3xl font-light md:text-4xl">
              Curious if we're a fit?
            </h2>
            <p className="mt-2 text-plum">Tell us about the problem — we'll tell you honestly if we're right for it.</p>
          </div>
          <Button to="/contact" variant="accent">
            Start a conversation →
          </Button>
        </div>
      </section>
    </>
  )
}
