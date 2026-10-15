import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { RichText } from '@/components/RichText'
import { getPayloadClient } from '@/lib/payload'

type Args = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
    },
    limit: 1,
  })
  return docs[0] || null
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    if (!post) return { title: 'Post' }
    return {
      title: post.title,
      description: post.excerpt || undefined,
    }
  } catch {
    return { title: 'Post' }
  }
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params
  let post

  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  if (!post) notFound()

  return (
    <article className="page-hero">
      <p className="section__eyebrow">Blog</p>
      <h1 className="page-hero__title">{post.title}</h1>
      {post.publishedAt ? (
        <p className="meta" style={{ marginTop: '0.75rem' }}>
          {new Date(post.publishedAt).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      ) : null}
      {post.excerpt ? <p className="page-hero__lead">{post.excerpt}</p> : null}

      <div style={{ marginTop: '2rem' }}>
        {post.content ? <RichText data={post.content} /> : null}
      </div>

      <div className="btn-row" style={{ margin: '2.5rem 0 3rem' }}>
        <Link href="/blog" className="btn btn--primary">
          All posts
        </Link>
      </div>
    </article>
  )
}
