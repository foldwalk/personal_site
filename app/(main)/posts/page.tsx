import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Posts",
	description: "Tutorials, write-ups, devlogs; pretty much everything you could think of.",
}

export default function Posts() {
  return (
    <div className="w-full grid place-items-center">
      <main className="w-10/12 md:w-8/12 min-h-[calc(100dvh-48*var(--spacing))] mt-10 mb-10 pb-4 bg-background">
        
      </main>
    </div>
  );
}