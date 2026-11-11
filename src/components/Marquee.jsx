export default function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-line-dark bg-ink py-4">
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-paper/70"
          >
            {item}
            <span className="text-lime">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
