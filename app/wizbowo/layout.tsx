import "./globals.css";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ========== Font ========== //
import { Cause, Inter, Geist_Pixel, Pixelify_Sans, Jersey_25 } from "next/font/google";

const cause = Cause({
  variable: "--font-cause",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist_pixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const jersy25 = Jersey_25({
  weight: '400',
  variable: "--font-jersy-25",
  subsets: ["latin"],
});

// ========== Metadata ========== //
export const metadata: Metadata = {
  metadataBase: new URL('https://wizbowo.foldwalker.com'),
  icons: "wizbowo/favicon.ico",
  title: {
    default: "Wizbowo's Conquest",
    template: "%s | Wizbowo's Conquest",
  },
  description: "Wizbowo's Conquest is a 2D Multiplayer Sandbox game developed over 15 weeks.",
}

// ========== Layout ========== //
export default function MainLayout({ children }: LayoutProps<"/">) {
  const navItems = [
    { label: "Home", href: '/', },
    { label: "About", href: '/about', },
    { label: "Articles", href: '/posts', },
  ]

  return (
    <div className={`flex flex-col justify-center min-h-[100dvh] ${cause.variable} ${inter.variable} ${geist_pixel.variable} ${pixelify.variable} ${jersy25.variable}`}>
      <header
        className="
          h-16
          bg-header
          sticky top-0 z-100
        "
      >
        <nav className="h-16 flex items-center justify-center">
          <Link href="/about" className="
              flex justify-center items-center
              w-24 h-full pl-4 pr-4
              text-center text-xl text-ink
              [font-family:var(--font-cause)]
              hover:bg-header-light
            "
          >
            <span>About</span>
          </Link>
          <Link href="/">
            <div className="
                flex items-center justify-center
                h-20 top-2 relative
                w-24 min-w-24
                bg-header
                hover:bg-header-light
                [clip-path:polygon(0_0,100%_0,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem))]
              "
            >
              <Image
                className="w-16 h-16 pixelated"
                unoptimized
                src="/wizbowo/favicon.ico"
                width={512} height={512}
                alt="Foldwalker Character"
              />
            </div>
          </Link>
          <Link href="/posts" className="
              flex justify-center items-center
              w-24 h-full pl-4 pr-4
              text-center text-xl text-ink
              [font-family:var(--font-cause)]
              hover:bg-header-light
            "
          >
            <span>Posts</span>
          </Link>
        </nav>
      </header>
      <div className="grow flex justify-center">{children}</div>
      <footer className="h-16 bg-header">
      </footer>
    </div>
  );
}