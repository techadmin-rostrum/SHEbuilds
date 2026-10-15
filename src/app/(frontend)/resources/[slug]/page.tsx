import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { fileURLToPath } from 'url'

import { BrandingResources } from '@/components/BrandingResources'
import { FinanceTemplates } from '@/components/FinanceTemplates'
import { LoanSchemes } from '@/components/LoanSchemes'
import { StarterGuide } from '@/components/StarterGuide'
import { MarkdownContent } from '@/components/MarkdownContent'
import { getPayloadClient } from '@/lib/payload'
import { categoryLabels, resourceMeta } from '@/lib/resources'

type Args = {
  params: Promise<{ slug: string }>
}

const contentDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../../content/resources',
)

async function getResource(slug: string) {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'resources',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (docs[0]) return docs[0]
  } catch {
    // fall through to static content
  }

  const meta = resourceMeta.find((item) => item.slug === slug)
  if (!meta) return null

  const filePath = path.join(contentDir, meta.file)
  const content = fs.readFileSync(filePath, 'utf8')

  return {
    title: meta.title,
    slug: meta.slug,
    category: meta.category,
    summary: meta.summary,
    headerImage: meta.headerImage,
    content,
  }
}

export async function generateStaticParams() {
  return resourceMeta.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResource(slug)
  if (!resource) return { title: 'Resource' }
  return {
    title: resource.title,
    description: resource.summary,
  }
}

export default async function ResourceDetailPage({ params }: Args) {
  const { slug } = await params
  const resource = await getResource(slug)
  if (!resource) notFound()

  const category =
    categoryLabels[resource.category as keyof typeof categoryLabels] || resource.category

  return (
    <article className="page-hero">
      <p className="section__eyebrow">{category}</p>
      <h1 className="page-hero__title">{resource.title}</h1>
      <p className="page-hero__lead">{resource.summary}</p>

      {resource.headerImage ? (
        <div className="detail-header">
          <Image
            src={resource.headerImage}
            alt=""
            width={1500}
            height={500}
            priority
          />
        </div>
      ) : null}

      {slug === 'finance-templates' ? (
        <FinanceTemplates />
      ) : slug === 'branding-resources' ? (
        <BrandingResources />
      ) : slug === 'loan-schemes' ? (
        <LoanSchemes />
      ) : slug === 'starter-guide' ? (
        <StarterGuide />
      ) : (
        <MarkdownContent content={resource.content} />
      )}

      <div className="btn-row" style={{ margin: '2.5rem 0 3rem' }}>
        <Link href="/resources" className="btn btn--primary">
          All resources
        </Link>
      </div>
    </article>
  )
}
