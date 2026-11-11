import { useState } from 'react'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'

const initialForm = { name: '', email: '', budget: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please tell us your name.'
  if (!form.email.trim()) {
    errors.email = 'Please add an email so we can reply.'
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "That email doesn't look right."
  }
  if (!form.message.trim()) errors.message = 'Give us a sentence or two about the project.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="mx-auto flex max-w-2xl flex-col items-start px-6 py-24 md:py-32">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime font-display text-xl">
          ✓
        </span>
        <h1 className="mt-6 font-display text-4xl font-light md:text-5xl">
          Thanks, {form.name.split(' ')[0]}.
        </h1>
        <p className="mt-4 text-plum">
          We read every message ourselves — expect a reply at{' '}
          <span className="text-ink">{form.email}</span> within two working days.
        </p>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setForm(initialForm)
            setSubmitted(false)
          }}
        >
          Send another message
        </Button>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="mt-3 text-balance font-display text-4xl font-light leading-tight md:text-6xl">
        Tell us what you're building.
      </h1>
      <p className="mt-5 max-w-lg text-plum">
        A few sentences is enough to start. We'll follow up with questions if we need more.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Jordan Patel"
              className={`mt-2 w-full rounded-lg border bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-ink ${
                errors.name ? 'border-coral' : 'border-line'
              }`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-coral">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jordan@company.com"
              className={`mt-2 w-full rounded-lg border bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-ink ${
                errors.email ? 'border-coral' : 'border-line'
              }`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-coral">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-medium">
            Rough budget <span className="font-normal text-plum">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
          >
            <option value="">Select a range</option>
            <option value="10-25k">$10k – $25k</option>
            <option value="25-60k">$25k – $60k</option>
            <option value="60k+">$60k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium">
            What are you building?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="A few sentences about the problem, the team, and rough timing."
            className={`mt-2 w-full rounded-lg border bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-ink ${
              errors.message ? 'border-coral' : 'border-line'
            }`}
          />
          {errors.message && <p className="mt-1.5 text-xs text-coral">{errors.message}</p>}
        </div>

        <Button type="submit" variant="accent" className="w-full sm:w-auto">
          Send message →
        </Button>
      </form>
    </section>
  )
}
