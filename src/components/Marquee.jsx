const stickers = [
  { text: 'full-stack', tone: 'blue' },
  { text: '✦', tone: 'yellow' },
  { text: 'django', tone: 'pink' },
  { text: '✧', tone: 'blue' },
  { text: 'react', tone: 'yellow' },
  { text: '★', tone: 'pink' },
  { text: 'sql', tone: 'blue' },
  { text: '✦', tone: 'yellow' },
  { text: 'python', tone: 'pink' },
  { text: '✧', tone: 'blue' },
  { text: 'fastapi', tone: 'yellow' },
  { text: '★', tone: 'pink' },
  { text: 'pandas', tone: 'blue' },
  { text: '✦', tone: 'yellow' },
  { text: 'open to work', tone: 'pink' },
  { text: '✧', tone: 'blue' },
]

const toneClasses = {
  blue: 'bg-accent-blue text-white border-base-border',
  yellow: 'bg-accent-yellow text-zinc-950 border-base-border',
  pink: 'bg-accent-pink text-zinc-950 border-base-border',
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y-2 border-base-border bg-base-surface/80 py-5 my-8">
      <div className="flex animate-marquee whitespace-nowrap gap-4">
        {[...stickers, ...stickers].map((s, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center font-display font-extrabold text-base px-5 py-2 rounded-full border-2 shadow-pop ${
              toneClasses[s.tone]
            } ${s.text.length === 1 ? 'text-2xl' : 'uppercase tracking-wide'}`}
          >
            {s.text}
          </span>
        ))}
      </div>
    </div>
  )
}
