import type { CollectionConfig } from 'payload'

export const BasicInfo: CollectionConfig = {
  slug: 'basic-info',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
        name: 'description',
        type: 'richText'
    },
    {
        name: 'logo',
        type: 'upload',
        relationTo: 'media',
        required: true
    },
    {
      name: 'officialSite',
      type: 'text'
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    }
  ]
}