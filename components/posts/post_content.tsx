import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import remarkGfm from "remark-gfm"

import { Post } from "@/lib/posts/posts"

export default async function PostContent({ post }: { post: Post }) {
  if (post) {
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