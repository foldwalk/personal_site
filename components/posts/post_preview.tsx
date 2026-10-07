import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import remarkGfm from "remark-gfm"

import { PostInfo, getPostPreview } from "@/lib/posts/posts"

type Props = { post: PostInfo | null, className?: string }

export default async function PostPreview({ post, className = "" }: Props) {
  if (post) {
    // Process Preview
    post.content = getPostPreview(post.content);

    return (
      <div className={className}>
        <h1>{post.meta.title}</h1>

        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }}
        />
      </div>
    )
  } else {
    return notFound();
  }
}