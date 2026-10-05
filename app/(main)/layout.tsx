import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import NavButton from "@main/nav_button";

export const metadata: Metadata = {
  metadataBase: new URL('https://foldwalker.com'),
  title: {
    default: "Jacob Vanluven",
    template: "%s | Jacob Vanluven",
  },
  description: "Personal site for Jacob Vanluven: a game developer, pixel artist, and researcher.",
}

export default function MainLayout({ children }: LayoutProps<"/">) {
  const navItems = [
    { label: "Home", href: '/', },
    { label: "About", href: '/about', },
    { label: "Projects", href: '/projects', },
    { label: "Gallery", href: '/gallery', },
    { label: "Articles", href: '/posts', },
  ]

  return (
    <>
      <div className="flex flex-col justify-center min-h-[100dvh]">
        <header
          className="
            flex items-center
            h-12
            bg-background
            sticky top-0 z-100
          "
        >
          <Link href="/">
            <div className="
                flex items-center
                h-16 top-2 relative pr-6 -mr-1
                w-49 min-w-49
                bg-background
                [clip-path:polygon(0_0,100%_0,100%_calc(100%-1rem),calc(100%-1rem)_100%,0_100%)]
              "
            >
              <Image
                className="mb-1 w-12 h-12 ml-4 mr-2 pixelated"
                unoptimized
                src="/character_no_bg.png"
                width={512} height={512}
                alt="Foldwalker Character"
              />
              <span className="text-xl pl-2 font-(family-name:--font-arvo)">Jacob<br />Vanluven</span>
            </div>
          </Link>
          <nav className="flex h-full">
            {navItems.map((item) => (
              <NavButton key={item.href} link={item.href} label={item.label} />
            ))}
          </nav>
        </header>
        <div className="grow flex justify-center">{children}</div>
        <footer className="h-12 bg-gray-100">
        </footer>
      </div>
    </>
  );
}