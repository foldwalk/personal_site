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
export async function getPosts(rootPath: string = "/content/posts") {
  const filePath = path.join(
    process.cwd(),
    rootPath
  );

  return _findPost(filePath);
}

async function _findPost(rootPath: string, returnPath: string = ""): Promise<string[]> {
  const files = await fs.readdir(rootPath, { withFileTypes: true });
  let result: string[] = [];

  for (const file of files) {
    console.log(file)

    if (file.isDirectory()) {
      result = result.concat(await _findPost(path.join(rootPath, file.name), path.join(returnPath, file.name)));
    } else {
      result.push(path.join(returnPath, file.name));
    }
  }

  return result;
}

export async function getPost(slug: string | string[]): Promise<Post> {
  if (Array.isArray(slug)) {
    slug = path.join(...slug);
  }

  // Add extension
  let file = slug;
  if (!file.endsWith('.mdx')) {
    file += '.mdx';
  }

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    file
  )

  console.log(filePath)

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