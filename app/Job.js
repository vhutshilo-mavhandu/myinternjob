import React from "react";
import { getPost } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
//import { createClient } from "next-sanity";

//... 

/*
const client = createClient({
  projectId: "pbmry4yo",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false
});

export async function getPost() {
  const post = await client.fetch(`*[_type == "post"]`,{
    next: { revalidate: 10 },});
  return post;
}
*/

async function Job() {
  const post = await getPost()
  
  return (
    <div className="lg:max-w-4xl mx-auto max-w-3xl md:px-8 px-4">
    {post.map((data) => (
        <div key={data._id} className="border p-4 mb-4 rounded-lg">
          <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
          <div className="mb-4">
            <PortableText value={data.body} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-blue-100 p-2 rounded-lg">
              <h2 className="text-xs">Close date: {data.applicationClose}</h2>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <h2 className="text-xs "> Salary: {data.salary}</h2>
            </div>
            <div className="flex items-end justify-end">
              <button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                Apply to company site
              </button>
            </div>
          </div>
        </div>
      ))}
  </div>

  );
}

export default Job;
