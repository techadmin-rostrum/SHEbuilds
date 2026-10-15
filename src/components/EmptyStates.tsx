export function BlogEmpty() {
  return (
    <div className="empty-panel">
      <svg
        className="empty-panel__art"
        viewBox="0 0 640 280"
        role="img"
        aria-label="Illustration of a notebook and pen"
      >
        <rect width="640" height="280" fill="#F6D8BD" />
        <rect x="48" y="42" width="280" height="196" rx="8" fill="#FBF3EA" stroke="#5D3140" strokeWidth="3" />
        <path d="M88 42v196" stroke="#CF4173" strokeWidth="3" />
        <path d="M108 88h180M108 118h160M108 148h190M108 178h140" stroke="#5D3140" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
        <circle cx="470" cy="108" r="58" fill="#F39399" />
        <path
          d="M448 92c18-22 42-18 52 4 8 18-2 38-22 48l-8 4-6-14c16-8 22-22 16-34-6-12-20-14-32 0l-12 14-18-14 10-12z"
          fill="#5D3140"
        />
        <rect x="430" y="150" width="18" height="78" rx="4" fill="#5D3140" transform="rotate(-28 439 189)" />
        <path d="M410 230h120" stroke="#CF4173" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="empty-panel__copy">
        <h2>No stories yet</h2>
        <p>Writing from women building their businesses will be published here.</p>
      </div>
    </div>
  )
}

export function GalleryEmpty() {
  return (
    <div className="empty-panel">
      <svg
        className="empty-panel__art"
        viewBox="0 0 640 280"
        role="img"
        aria-label="Illustration of photo frames"
      >
        <rect width="640" height="280" fill="#F6D8BD" />
        <rect x="56" y="48" width="180" height="140" rx="10" fill="#FBF3EA" stroke="#5D3140" strokeWidth="3" />
        <circle cx="108" cy="88" r="14" fill="#F39399" />
        <path d="M72 160l38-42 34 28 28-36 48 50H72z" fill="#CF4173" />
        <rect x="250" y="70" width="160" height="124" rx="10" fill="#FBF3EA" stroke="#5D3140" strokeWidth="3" />
        <circle cx="298" cy="108" r="12" fill="#F39399" />
        <path d="M266 170l30-34 28 22 22-28 40 40H266z" fill="#5D3140" />
        <rect x="430" y="56" width="150" height="150" rx="10" fill="#FBF3EA" stroke="#5D3140" strokeWidth="3" />
        <circle cx="478" cy="96" r="12" fill="#F39399" />
        <path d="M448 178l28-38 26 24 20-26 38 40H448z" fill="#CF4173" />
        <rect x="468" y="210" width="72" height="36" rx="8" fill="#5D3140" />
        <circle cx="504" cy="228" r="10" fill="#F6D8BD" />
      </svg>
      <div className="empty-panel__copy">
        <h2>No images yet</h2>
        <p>Photos and videos from workshops and first sales will be added here.</p>
      </div>
    </div>
  )
}
