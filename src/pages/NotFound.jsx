import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-6 py-24">
      <p className="font-mono text-sm uppercase tracking-widest text-plum">404</p>
      <h1 className="mt-4 font-display text-5xl font-light md:text-6xl">
        This page wandered off.
      </h1>
      <p className="mt-4 text-plum">
        The page you're looking for doesn't exist, or it's moved somewhere else.
      </p>
      <Button to="/" variant="accent" className="mt-8">
        Back to home
      </Button>
    </section>
  )
}
