import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Media } from './app/collections/media'
import { BasicInfo } from './app/collections/basic-info'
import { Tags } from './app/collections/categories'
import { Pages } from './app/collections/pages'

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Media, BasicInfo, Tags, Pages],
    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
})