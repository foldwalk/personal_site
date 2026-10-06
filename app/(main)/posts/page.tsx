import { Metadata } from "next";

import { getFilteredPosts } from "@/lib/posts/filtered";
import PostCard from "@/components/posts/post_card";

export const metadata: Metadata = {
	title: "Posts",
	description: "Tutorials, write-ups, devlogs - pretty much everything you could think of.",
}

export default async function Posts() {
  const posts = await getFilteredPosts();

  return (
    <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <h1 className="text-4xl text-center mb-8">Articles</h1>

      <div className="flex flex-col">
        {posts.filter(post => post?.meta.visible).map((post) => (
          <PostCard 
            key={post?.meta.slug} post={post}
            className="
              p-4
              bg-slate-200
              [&_h2]:text-2xl
              even:squeeze-l
              odd:squeeze-r
            "
          />
        ))}
      </div>
    </main>
  );
}