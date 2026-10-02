import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
			<header
				className="
					flex items-center
					h-12
					bg-background
					border-solid border-gray-300 border-b-2
					sticky top-0 z-100
				"
			>
				<div className="
						flex items-center
						h-16 top-2 relative pr-6
						bg-background
						[clip-path:polygon(0_0,90%_0,100%_100%,0_100%)]
					"
				>
					<Image
						className="mb-1 w-12 h-12 ml-4 mr-2"
						src="/character_no_bg.png"
						width={512} height={512}
						alt="Foldwalker Character"
					/>

					<span className="text-xl pl-2">Jacob<br/>Vanluven</span>
				</div>

				<nav className="flex h-full">
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

			<footer className="h-10 mt-10 bg-gray-100">

			</footer>
		</>
	);
}