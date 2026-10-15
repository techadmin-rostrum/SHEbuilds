import Link from 'next/link'
import type { Metadata } from 'next'
import React from 'react'

import { BlogEmpty } from '@/components/EmptyStates'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stories, notes and articles from SHEbuilds.',
}

export default async function BlogPage() {
  let posts: Array<{
    id: number | string
    title: string
    slug: string
    excerpt?: string | null
    publishedAt?: string | null
  }> = []

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 50,
    })
    posts = result.docs
  } catch {
    posts = []
  }

  return (
    <div className="page-hero">
      <p className="section__eyebrow">Stories & notes</p>
      <h1 className="page-hero__title">Blog</h1>
      <p className="page-hero__lead">
        Articles and reflections for women building businesses.
      </p>

      {posts.length === 0 ? <BlogEmpty /> : (
        <div className="post-list">
          {posts.map((post) => (
            <Link key={String(post.id)} href={`/blog/${post.slug}`} className="post-item">
              {post.publishedAt ? (
                <p className="meta">
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              ) : null}
              <h2>{post.title}</h2>
              {post.excerpt ? <p>{post.excerpt}</p> : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
