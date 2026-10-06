import { notFound } from "next/navigation"

import { Post, getPost } from "@/lib/posts/posts"

export default async function PostCard({ post = null, postSlug = "" }: { post?: Post | null, postSlug?: string }) {
  if (!post && postSlug !== "") {
    post = await getPost(postSlug!);
  }

  console.log(postSlug);

  if (post) {
    return (
      <>
        <h2>{post.meta.title}</h2>
        <p>
          {post.meta.description}
        </p>
      </>
    )
  }
}