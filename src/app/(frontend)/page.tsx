import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { categoryLabels, resourceMeta } from '@/lib/resources'

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="SHEbuilds introduction">
        <div className="hero__copy">
          <p className="hero__eyebrow">Digital business starter kit</p>
          <h1 className="hero__headline">
            <span>Empower.</span>
            <span>Educate.</span>
            <span>Elevate.</span>
          </h1>
        </div>
        <div className="hero__aside">
          <p className="hero__support">
            Practical guidance on planning, finance, branding and marketing — made for women in
            underprivileged and rural communities across India ready to turn ideas into sustainable
            businesses.
          </p>
          <div className="btn-row">
            <Link href="/resources" className="btn btn--primary">
              Explore resources
            </Link>
            <Link href="/blog" className="btn btn--ghost btn--ghost-dark">
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section mission">
        <p className="section__eyebrow">Our mission</p>
        <h2 className="section__title">Knowledge, resources and inspiration in your hands</h2>
        <p>
          From practical guidance on business planning, finance, branding and marketing to resources
          that make entrepreneurship more accessible, SHEbuilds provides women with the knowledge
          and tools to turn their ideas into sustainable businesses.
        </p>
        <p>
          The platform also creates a space to learn, connect and stay informed about women shaping
          the world of business and finance. Explore the SHEbuilds podcast, follow our latest
          Instagram content, and discover recent news and stories featuring women entrepreneurs,
          women in business and women in finance.
        </p>
        <p>
          SHEbuilds aims to make entrepreneurship more accessible by putting knowledge, resources
          and inspiration in the hands of women ready to build.
        </p>
      </section>

      <section className="section">
        <p className="section__eyebrow">What you&apos;ll find</p>
        <h2 className="section__title">Your own business starter kit</h2>
        <p className="section__lead">
          Designed for women turning simple ideas into sustainable income — whether tailoring, a
          boutique, fresh produce, or a cosmetics shop. Everything is set up to read, learn and act
          from your phone. No email, editing access, or technical skills required.
        </p>

        <div className="resource-grid">
          {resourceMeta.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="resource-card">
              <div className="resource-card__media">
                <Image
                  src={resource.headerImage}
                  alt=""
                  fill
                  sizes="(max-width: 860px) 100vw, 520px"
                />
              </div>
              <div className="resource-card__body">
                <p className="resource-card__category">{categoryLabels[resource.category]}</p>
                <h3 className="resource-card__title">{resource.title}</h3>
                <p className="resource-card__summary">{resource.summary}</p>
                <span className="resource-card__cta">Open</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="partner">
          <p className="section__eyebrow">Start together</p>
          <h2 className="section__title">Partner with another woman</h2>
          <p className="section__lead">
            Sometimes you might not have everything you need to start on your own — and that&apos;s
            okay. One woman may have a skill; another may have tools, space or money.
          </p>
          <ul>
            <li>One brings the talent</li>
            <li>The other brings the resources</li>
          </ul>
          <p>
            You don&apos;t need to do it alone. Start small, support each other, and grow together.
          </p>
        </div>
      </section>

      <section id="idea-exploration" className="section section--last">
        <div className="questions">
          <div className="questions__intro">
            <p className="section__eyebrow">Business idea exploration</p>
            <h2 className="section__title">Five questions to begin</h2>
            <p className="section__lead">
              Before you dive into the guides, reflect with a notebook. Clear answers here make every
              later step easier.
            </p>
            <Link href="/resources/starter-guide" className="btn btn--primary">
              Open the starter guide
            </Link>
          </div>
          <ol className="questions__list">
            {[
              ['What is your business idea?', 'What do you want to make or sell? What are you already good at?'],
              ['Can this business work in your area?', 'Does it solve a real need? Can you offer a better price or quality?'],
              ['Who else is already doing this?', 'Competition means customers exist — how can you be different?'],
              ['What do you need to start?', 'List tools, materials, space and first-month costs.'],
              ['Can you make a simple plan to grow?', 'Set a 6-month and 1-year goal with a few small steps.'],
            ].map(([question, prompt], index) => (
              <li key={question}>
                <span className="questions__num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{question}</h3>
                  <p>{prompt}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
