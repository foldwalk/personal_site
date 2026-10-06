import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// ========== Types & Constants ========== //
type PostMetadata = {
  slug: string,
  title: string,
  description: string,
  publishedAt: string,
  modifiedAt?: string,
  thumbnail?: string,
}

export type Post = {meta: PostMetadata, content: string} | null

const MORE_TAG = '{/* <-- more --> */}';

// ========== Functions ========== //
export async function getPosts() {

}

export async function getPost(slug: string | string[]): Promise<Post> {
  if (Array.isArray(slug)) {
    slug = path.join(...slug);
  }

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  )

  // Try to read target file
  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(source);

    data.slug = slug;

    return {
      meta: data as PostMetadata,
      content
    }
  } catch {
    return null;
  }
}

export function getPostPreview(content: string): string {
  // Find tag
  const [ preview ] = content.split(MORE_TAG);

  return preview;
}