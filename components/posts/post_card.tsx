import { PostInfo, getPost } from "@/lib/posts/posts"
import Link from "next/link";

type Props = { post: PostInfo | null, className?: string }

export default async function PostCard({ post, className = "" }: Props) {
  if (post && post.meta.visible) {
    return (
      <Link className={className} href={`/posts/${post.meta.slug}`}>
        <div>
          <h2>{post.meta.title}</h2>
          <p>
            {post.meta.description}
          </p>
        </div>
      </Link>
    )
  }
}