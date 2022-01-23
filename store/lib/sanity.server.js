import {createClient} from 'next-sanity'
import {config} from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:"skzXSRNpQfIHkWYqgULiKUqWqHH6zgZ6Vs2UIGi8Do6VUgFHCjAyAVBooExuNeoqjQG6V0T3kw91fepkNFOe9l5UTyGwfRVj2Jjcvs635vm5p6QIBJxtBO2IGwIDTbIK1jgaBjldEZlp4jyMb20QMFfdZx1DaGebyTkPCet8MzjckskXcnYk",
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)