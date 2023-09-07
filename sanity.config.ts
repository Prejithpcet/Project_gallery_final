import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "k1b0mjep",
  dataset: "production",
  title: "sanity-backend",
  apiVersion: "2023-05-03",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
