import path from "node:path";

import { getPost } from "@/lib/posts/posts";
import { notFound } from "next/navigation";

import PostContent from "@/components/posts/post_content";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug);

  // Return 404 if post doesn't exist
  if (!post) {
    notFound();
  }

  return (
    <article className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <PostContent post={post} />
    </article>
  );
}