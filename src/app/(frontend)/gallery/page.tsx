import type { Metadata } from 'next'
import React from 'react'

import { GalleryEmpty } from '@/components/EmptyStates'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos and videos from SHEbuilds workshops and events.',
}

type MediaDoc = {
  url?: string | null
  alt?: string | null
  mimeType?: string | null
}

export default async function GalleryPage() {
  let items: Array<{
    id: number | string
    title: string
    caption?: string | null
    mediaType: 'image' | 'video'
    eventDate?: string | null
    media: number | string | MediaDoc
  }> = []

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'gallery',
      sort: '-eventDate',
      limit: 100,
      depth: 1,
    })
    items = result.docs as typeof items
  } catch {
    items = []
  }

  return (
    <div className="page-hero">
      <p className="section__eyebrow">Workshops & events</p>
      <h1 className="page-hero__title">Gallery</h1>
      <p className="page-hero__lead">
        Photos and videos from workshops and community events.
      </p>

      {items.length === 0 ? <GalleryEmpty /> : (
        <div className="gallery-grid">
          {items.map((item) => {
            const media = typeof item.media === 'object' ? item.media : null
            const url = media?.url
            const isVideo =
              item.mediaType === 'video' || Boolean(media?.mimeType?.startsWith('video/'))

            return (
              <figure key={String(item.id)} className="gallery-item">
                <div className="gallery-item__media">
                  {url ? (
                    isVideo ? (
                      <video src={url} controls playsInline preload="metadata" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={url} alt={media?.alt || item.title} />
                    )
                  ) : null}
                </div>
                <figcaption className="gallery-item__body">
                  <h3>{item.title}</h3>
                  {item.eventDate ? (
                    <p className="meta">
                      {new Date(item.eventDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  ) : null}
                  {item.caption ? <p>{item.caption}</p> : null}
                </figcaption>
              </figure>
            )
          })}
        </div>
      )}
    </div>
  )
}
