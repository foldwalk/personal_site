import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export async function getPost(slug: string) {
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
      meta: data,
      content
    }
  } catch {
    return null;
  }
}