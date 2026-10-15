import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import React from 'react'

import { getPayloadClient } from '@/lib/payload'
import { categoryLabels, resourceMeta } from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Starter kits, finance templates, branding resources and government loan schemes for women entrepreneurs.',
}

export default async function ResourcesPage() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'resources',
    sort: 'order',
    limit: 20,
  })

  const resources = docs.length
    ? docs
    : resourceMeta.map((item) => ({
        id: item.slug,
        title: item.title,
        slug: item.slug,
        category: item.category,
        summary: item.summary,
        headerImage: item.headerImage,
      }))

  return (
    <div className="page-hero">
      <p className="section__eyebrow">Starter kits & templates</p>
      <h1 className="page-hero__title">Resources</h1>
      <p className="page-hero__lead">
        Guides, finance tools, branding help and loan schemes — organised so you can read, learn and
        act from your phone.
      </p>

      <div className="resource-grid">
        {resources.map((resource) => (
          <Link
            key={String(resource.id)}
            href={`/resources/${resource.slug}`}
            className="resource-card"
          >
            <div className="resource-card__media">
              <Image
                src={resource.headerImage || '/brand/SHEbuilds_Starter_Kit.webp'}
                alt=""
                fill
                sizes="(max-width: 860px) 100vw, 520px"
              />
            </div>
            <div className="resource-card__body">
              <p className="resource-card__category">
                {categoryLabels[resource.category as keyof typeof categoryLabels] ||
                  resource.category}
              </p>
              <h2 className="resource-card__title">{resource.title}</h2>
              <p className="resource-card__summary">{resource.summary}</p>
              <span className="resource-card__cta">Open</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
