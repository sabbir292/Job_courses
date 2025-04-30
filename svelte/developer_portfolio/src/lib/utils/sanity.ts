import {createClient} from '@sanity/client'


export const sanityClient = createClient({
  projectId: 'oq0c8ivu',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2025-04-29',
})