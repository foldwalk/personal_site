import { notFound } from "next/navigation"
import Link from "next/link"

import { PostInfo, getPostPreview } from "@/lib/posts/posts"
import PostContent from "./post_content"

type Props = { post: PostInfo | null, className?: string }

export default async function PostPreview({ post, className = "" }: Props) {
  if (post) {
    // Process Preview
    post.content = getPostPreview(post.content);

    return (
      <div className={className}>
        <PostContent post={post} />
        <Link className='view-more-link' href={`/posts/${post.meta.slug}`}>[Read More...]</Link>
      </div>
    )
  } else {
    return notFound();
  }
}