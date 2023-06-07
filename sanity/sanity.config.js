import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'foodie',

  projectId: 'epwyl6el',
  dataset: 'pizza',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
