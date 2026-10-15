import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownComponents: Components = {
  h3: ({ children }) => <h3 className="guide-subhead">{children}</h3>,
  ul: ({ children }) => <ul className="guide-points">{children}</ul>,
  ol: ({ children }) => <ol className="guide-steps">{children}</ol>,
  blockquote: ({ children }) => <aside className="guide-callout">{children}</aside>,
  table: ({ children }) => (
    <div className="guide-table-wrap">
      <table>{children}</table>
    </div>
  ),
}

function splitGuide(content: string) {
  const chunks = content.trim().split(/\n(?=## )/)
  const intro = chunks[0]?.startsWith('## ') ? '' : (chunks.shift() ?? '')
  const sections = chunks.map((chunk, index) => {
    const heading = chunk.match(/^##\s+(.+)/)?.[1]?.trim() ?? `Section ${index + 1}`
    const body = chunk.replace(/^##\s+.+\n?/, '').trim()
    const step = heading.match(/^Step\s+(\d+)\s*:\s*(.*)$/i)
    return {
      id: `section-${index + 1}`,
      kicker: step ? `Step ${step[1]}` : String(index + 1).padStart(2, '0'),
      title: step?.[2] || heading,
      body,
    }
  })
  return { intro: intro.trim(), sections }
}

export function MarkdownContent({ content }: { content: string }) {
  const { intro, sections } = splitGuide(content)

  if (sections.length === 0) {
    return (
      <div className="guide-card">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {content}
        </ReactMarkdown>
      </div>
    )
  }

  return (
    <div className="guide">
      {sections.length > 1 ? (
        <nav className="guide-nav" aria-label="On this page">
          <p className="guide-nav__label">On this page</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{section.kicker}</span>
              {section.title}
            </a>
          ))}
        </nav>
      ) : null}

      <div className="guide-body">
        {intro ? (
          <div className="guide-intro">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {intro}
            </ReactMarkdown>
          </div>
        ) : null}

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="guide-card">
            <p className="guide-card__kicker">{section.kicker}</p>
            <h2>{section.title}</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {section.body}
            </ReactMarkdown>
          </section>
        ))}
      </div>
    </div>
  )
}
