import "./style.css";

import { notFound } from "next/navigation";
import { Metadata } from "next";

import { getPost, getPosts } from "@/lib/posts/posts";
import PostContent from "@/components/posts/post_content";

type PostProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => {
    const slugStr = post?.meta.slug;
    
    return {
      slug: slugStr ? slugStr.split('/').filter(Boolean) : []
    }
  })
}

export default async function Page({ params }: PostProps) {
  const { slug } = await params
  const post = await getPost(slug);

  // Return 404 if post doesn't exist
  if (!post) {
    notFound();
  }

  return (
    <article className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <PostContent post={post} className="
          post-content mt-4
        "
      />
    </article>
  );
}