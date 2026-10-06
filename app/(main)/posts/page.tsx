import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Posts",
	description: "Tutorials, write-ups, devlogs - pretty much everything you could think of.",
}

export default function Posts() {
  return (
    <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <h1 className="text-4xl text-center mb-8">Articles</h1>
    </main>
  );
}