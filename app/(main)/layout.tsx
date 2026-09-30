import { Metadata } from "next";
import Link from "next/link";

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
        { label: "Home",     href: '/', },
        { label: "About",    href: '/about', },
        { label: "Projects", href: '/projects', },
        { label: "Gallery",  href: '/gallery', },
        { label: "Articles", href: '/posts', },
    ]

    return (
        <>
            <header
                className="
                    flex items-center
					h-10
                    border-solid border-grey-50 border-b-2
                "
            >
                <span className="text-xl pl-2">Jacob Vanluven</span>

                <nav className="flex pl-8 h-full">
                    {navItems.map((item) => (
                        <Link 
							href={item.href}
							key={item.href}
							className="
								flex items-center
								pl-4 pr-4
								h-full
								even:bg-gray-100
							"
						>
                            <span className="">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            
            </header>
            
            {children}
        </>
  );
}