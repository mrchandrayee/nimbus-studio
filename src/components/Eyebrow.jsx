export default function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-plum">
      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
      {children}
    </p>
  )
}
