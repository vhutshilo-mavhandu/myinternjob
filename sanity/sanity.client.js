import { createClient } from "next-sanity";

const client = createClient({
  projectId: "pbmry4yo",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false
});


export default client;
