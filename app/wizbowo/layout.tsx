import "./globals.css";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import NavButton from "@main/nav_button";

export const metadata: Metadata = {
  metadataBase: new URL('https://wizbowo.foldwalker.com'),
  icons: "wizbowo/favicon.ico",
  title: {
    default: "Wizbowo's Conquest",
    template: "%s | Wizbowo's Conquest",
  },
  description: "Wizbowo's Conquest is a 2D Multiplayer Sandbox game developed over 15 weeks.",
}

export default function MainLayout({ children }: LayoutProps<"/">) {
  const navItems = [
    { label: "Home", href: '/', },
    { label: "About", href: '/about', },
    { label: "Articles", href: '/posts', },
  ]

  return (
    <>
      <div className="flex flex-col justify-center min-h-[100dvh]">
        <header
          className="
            h-12
            bg-background
            sticky top-0 z-100
          "
        >
          <nav className="h-12 flex items-center justify-center">
            <Link href="/about" className="w-16 text-center">About</Link>
            <Link href="/">
              <div className="
                  flex items-center justify-center
                  h-16 top-2 relative
                  ml-2 mr-2
                  w-20 min-w-20
                  bg-background
                  [clip-path:polygon(0_0,100%_0,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem))]
                "
              >
                <Image
                  className="w-12 h-12 pixelated"
                  unoptimized
                  src="/wizbowo/favicon.ico"
                  width={512} height={512}
                  alt="Foldwalker Character"
                />
              </div>
            </Link>
            <Link href="/posts" className="w-16 text-center">Posts</Link>
          </nav>
        </header>
        <div className="grow flex justify-center">{children}</div>
        <footer className="h-12 bg-gray-100">
        </footer>
      </div>
    </>
  );
}