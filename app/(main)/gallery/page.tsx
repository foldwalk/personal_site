import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery",
	description: "I've been making pixel art since 2019. Time to show off what that has built to.",
}

export default function Gallery() {
  return (
    <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <h1 className="text-4xl text-center mb-8">Gallery</h1>
    </main>
  );
}