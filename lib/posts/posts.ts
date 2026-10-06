import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type PostMetadata = {
  slug: string,
  title: string,
  description: string,
  publishedAt: string,
  modifiedAt?: string,
  thumbnail?: string,
}

export type PostReturn = {meta: PostMetadata, content: string} | null

export async function getPost(slug: string): Promise<PostReturn> {
  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  )

  // Try to read target file
  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(source);

    return {
      meta: data as PostMetadata,
      content
    }
  } catch {
    return null;
  }
}