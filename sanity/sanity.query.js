import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPost() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      body,
      salary,
      applicationClose
      }`
  );
}
