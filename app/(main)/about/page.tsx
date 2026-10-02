import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
	title: "About",
	description: "I'm Jacob Vanluven a game developer, pixel artist, and researcher exploring and creating digital worlds",
}

export default function About() {
  const contactInfo = [
    {
      name: 'Professional',
      links: [
        {
          href: "https://www.linkedin.com/in/jacob-vanluven",
          name: "LinkedIn",
        },
        {
          href: "https://github.com/foldwalk",
          name: "GitHub",
        },
        {
          href: "/assets/resume.pdf",
          name: "Resume",
        },
      ],
    },
    {
      name: 'Game Development',
      links: [
        {
          href: "https://foldwalk.itch.io",
          name: "Itch.io",
        },
        {
          href: "https://x.com/foldwalk_",
          name: "Twitter",
        },
        {
          href: "https://www.reddit.com/user/foldwalk/",
          name: "Reddit",
        },
      ],
    },
    {
      name: 'Other',
      links: [
        {
          href: "mailto:jacob@foldwalker.com",
          name: "Email",
        },
      ],
    },
  ]

  return (
    <div className="w-full grid place-items-center">
      <main className="w-8/12 min-h-[calc(100dvh-20*var(--spacing))]">
        <h1 className="text-4xl text-center mt-10 mb-8">About Me</h1>
      
        <div className="flex">
          <aside className="w-4/10 ml-4 mr-4">
            <Image
              className="mb-1"
              src="/character.png"
              width={512} height={512}
              alt="Foldwalker Character"
            />

            <h2 className="text-center text-xl">Contact Info</h2>
            
            {contactInfo.map((item) => (
              <Fragment key={item.name}>
                <h3 className="text-lg border-b-2 border-gray-300 mt-4">{item.name}</h3>
                <address className="not-italic w-full flex justify-around">
                  {item.links.map((link) => (
                    <Link href={link.href} key={link.name} className="
                        grow text-center
                        pt-1 pb-1
                        bg-gray-100
                        hover:bg-gray-200
                        duration-100
                      "
                    >
                      {link.name}
                    </Link>
                  ))}
                </address>
              </Fragment>
            ))}
          </aside>

          <section className="w-6/10 ml-4 mr-4">
            <h2 className="text-2xl border-solid">Who Am I?</h2>
            <p className="mb-6">
              Hello! I'm Jacob Vanluven, a game developer, pixel artist, and researcher interested in creating and exploring digital worlds. I've been making games and pixel art since I started programming back in 2019. I'm still working my way through my bachelor's degree in Computer Science and Mathematics, with master's in Data Science and Applied Mathematics following soon after.
            </p>
            
            <h2 className="text-2xl border-solid">What Do I Do?</h2>
            <p className="mb-2">
              I like to say I make small digital worlds on the internet! I like this phrasing since it encompasses my interest for art, game development, and research into a single concept.
            </p>
            <p className="mb-6">
              I originally started developing games in Unity, but switched to Godot after getting fed up with long compile times and Unity's poor decision making. I've used a few different pixel art programs, but I'm currently using Aseprite, and plan to continue using it for the foreseeable future! In terms of research, I mostly use Python with PyTorch's neural network modules.
            </p>
            
            <h2 className="text-2xl border-solid">Current Interests</h2>
            <p className="mb-2">
              My primary interest is creating personalized, human experiences through games and art. I don't use any generative AI in my creative hobbies, and don't plan to in the future.
            </p>
            <p className="mb-2">
              Right now I'm working on recreating a few assets from other games in order to build up my visual vocabulary a bit more and get out of a bit of artist block. I've been planning out a large-scale RPG for the past few years, slowly whittling away at it over time. I'm still actively working on this project, and plan to continue more serious development after my art studies!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}