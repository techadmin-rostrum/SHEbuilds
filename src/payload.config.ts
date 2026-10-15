import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Resources } from './collections/Resources'
import { Posts } from './collections/Posts'
import { Gallery } from './collections/Gallery'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — SHEbuilds',
    },
  },
  collections: [Users, Media, Resources, Posts, Gallery],
  editor: lexicalEditor(),
  secret:
    process.env.PAYLOAD_SECRET ||
    // Lets `next build` finish when the host has not injected env yet.
    // Set a real PAYLOAD_SECRET in production before going live.
    'shebuilds-build-placeholder-set-PAYLOAD_SECRET',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
