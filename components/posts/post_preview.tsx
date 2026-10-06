import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import remarkGfm from "remark-gfm"

import { Post, getPostPreview } from "@/lib/posts/posts"

export default async function PostPreview({ post }: { post: Post }) {
  if (post) {
    // Process Preview
    post.content = getPostPreview(post.content);

    return (
      <>
        <h1>{post.meta.title}</h1>

        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }}
        />
      </>
    )
  } else {
    return notFound();
  }
}