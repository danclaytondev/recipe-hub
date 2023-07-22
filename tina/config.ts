import { defineConfig } from "tinacms";
import { complexities, categories } from "../src/schema";


// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "recipe",
        label: "Recipes",
        path: "src/content/recipes",
        defaultItem: () => {
          return {
            isMealIdeaOnly: false,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "isMealIdeaOnly",
            label: "Meal Idea Only? (no recipe content)",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            ui: {
              validate: (value, data) => {
                if (data.isMealIdeaOnly && value.children.length > 1) {
                  return "A meal idea shouldn't have any content."
                }
              }
            },
          },
          {
            type: "string",
            name: "complexity",
            label: "Complexity",
            required: false,
            options: complexities
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: categories,
          }
        ],
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-').replace(/\+/g, "")}`
            },
          },
        },
      },
    ],
  },
});
