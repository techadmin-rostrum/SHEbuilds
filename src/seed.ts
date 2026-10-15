import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

import config from './payload.config'
import { resourceMeta } from './lib/resources'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function seed() {
  const payload = await getPayload({ config })

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@shebuilds.local',
        password: 'shebuilds-admin',
      },
    })
    payload.logger.info('Created admin user: admin@shebuilds.local / shebuilds-admin')
  }

  for (const resource of resourceMeta) {
    const contentPath = path.resolve(dirname, 'content/resources', resource.file)
    const content = fs.readFileSync(contentPath, 'utf8')

    const existing = await payload.find({
      collection: 'resources',
      where: {
        slug: {
          equals: resource.slug,
        },
      },
      limit: 1,
    })

    const data = {
      title: resource.title,
      slug: resource.slug,
      category: resource.category,
      summary: resource.summary,
      headerImage: resource.headerImage,
      content,
      order: resource.order,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'resources',
        id: existing.docs[0].id,
        data,
      })
      payload.logger.info(`Updated resource: ${resource.slug}`)
    } else {
      await payload.create({
        collection: 'resources',
        data,
      })
      payload.logger.info(`Created resource: ${resource.slug}`)
    }
  }

  payload.logger.info('Seed complete')
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
