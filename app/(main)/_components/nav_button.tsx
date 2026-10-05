"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

interface NavButtonProps {
  link: string,
  label: string,
}

export default function NavButton({ link, label }: NavButtonProps) {
  const pathname = usePathname();

  // base colors
  let mainColorOdd = "--color-slate-100";
  let mainColorEven = "--color-slate-200";
  let hoverColor = "--color-slate-300"

  // switch to solid color if already selected
  if (pathname === link) {
    mainColorOdd = mainColorEven = hoverColor = "--color-sky-300";
  }
  
  return <Link
    href={link}
    style={{
      "--btn-odd": `var(${mainColorOdd})`,
      "--btn-even": `var(${mainColorEven})`,
      "--btn-hover": `var(${hoverColor})`,
    } as React.CSSProperties}
    className={`
        flex items-center
        pl-6 pr-6 -ml-1 -mr-1
        pl-4 pr-4
        h-full
        font-(family-name:--font-arvo)
        hover:bg-[var(--btn-hover)]
        focus-visible:bg-sky-200
        odd:[clip-path:polygon(0_0,100%_0,calc(100%-0.5rem)_100%,0.5rem_100%)]
        odd:bg-[var(--btn-odd)]
        even:[clip-path:polygon(0.5rem_0,calc(100%-0.5rem)_0,100%_100%,0_100%)]
        even:bg-[var(--btn-even)]
    `}
  >
    <span className="">{label}</span>
  </Link>
}