import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery",
	description: "I've been making pixel art since 2019. Time to show off what that has built to.",
}

export default function Gallery() {
  return (
    <div className="w-full grid place-items-center">
      <main className="w-10/12 md:w-8/12 min-h-[calc(100dvh-48*var(--spacing))] mt-10 pb-4 bg-background">
        
      </main>
    </div>
  );
}