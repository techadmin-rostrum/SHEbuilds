const icons = [
  {
    label: 'Ideas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6c-6.2 0-11 4.6-11 10.4 0 4.2 2.3 7.6 5.6 9.5V31h10.8v-5.1c3.3-1.9 5.6-5.3 5.6-9.5C35 10.6 30.2 6 24 6Z" />
        <path d="M19 34.5h10M20.2 38h7.6" />
      </svg>
    ),
  },
  {
    label: 'Growth',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="9" y="9" width="30" height="30" rx="2.5" />
        <path d="M16 29v-4M24 29V18M32 29v-8" />
        <path d="M14 21l8-7 7 5 6-7" />
      </svg>
    ),
  },
  {
    label: 'Finance',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="14" />
        <path d="M20.5 17.5h6c2.3 0 4.1 1.7 4.1 3.8S28.8 25 26.5 25h-6v7.5M20.5 21h5.5" />
      </svg>
    ),
  },
  {
    label: 'Digital',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="19" rx="2.5" />
        <path d="M15 37h18M24 31v6" />
      </svg>
    ),
  },
]

export function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <svg className="hero__paint" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a86b5d" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path
          className="hero__paint-path hero__paint-path--a"
          d="M-40 180 C120 40, 280 60, 420 160 S680 280, 860 120"
          fill="none"
          stroke="url(#strokeGrad)"
          strokeWidth="130"
          strokeLinecap="round"
        />
        <path
          className="hero__paint-path hero__paint-path--b"
          d="M-60 760 C160 620, 340 680, 500 600 S760 480, 900 560"
          fill="none"
          stroke="url(#strokeGrad)"
          strokeWidth="150"
          strokeLinecap="round"
        />
      </svg>

      <p className="hero__visual-line">Start · Build · Sustain</p>

      <ul className="hero__icons">
        {icons.map((item) => (
          <li key={item.label}>
            <span className="hero__icon-wrap">{item.svg}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
