import { notFound } from "next/navigation"

import { Post } from "@/lib/posts/posts"

export default async function PostCard({ post }: { post: Post }) {
  if (post) {
    return (
      <>
        <h2>{post.meta.title}</h2>
        <p>
          {post.meta.description}
        </p>
      </>
    )
  } else {
    return notFound();
  }
}