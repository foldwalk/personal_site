import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Originally just games, but as I've grown up I've started doing more things, so I put everything in one place.",
}

export default function Projects() {
  return (
    <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
      <h1 className="text-4xl text-center mb-8">Projects</h1>
    </main>
  );
}