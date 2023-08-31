import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'myJobPortal',
  basePath: "/studio",
  projectId: 'pbmry4yo',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
