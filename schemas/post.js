import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "applicationClose",
      title: "application close date",
      type: "date",
    }),
    defineField({
      name: "body",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "salary",
      title: "salary",
      type: "string",
    }),
  ],
});
