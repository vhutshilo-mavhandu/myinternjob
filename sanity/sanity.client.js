import { createClient } from "next-sanity";

const client = createClient({
  projectId: "pbmry4yo",
  dataset: "production",
  apiVersion: "2023-08-25",
  useCdn: false
});


export default client;
