import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "k1b0mjep",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
  });
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string) {
  const client = createClient({
    projectId: "k1b0mjep",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
  });
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const client = createClient({
    projectId: "k1b0mjep",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
  });
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient({
    projectId: "k1b0mjep",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
  });
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      content,
    }`,
    { slug }
  );
}
