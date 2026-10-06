import Image from "next/image";
import Link from "next/link";

export default function WizbowoHome() {
  const links = [
    {
      href: "https://foldwalk.itch.io/wizbowos-conquest",
      text: "Download from Itch.io",
    },
    {
      href: "https://github.com/foldwalk/cmsc-473-game",
      text: "View Code on GitHub",
    },
  ]

  const screenshots = [
    {
      src: "/wizbowo/wizbowo_forest.png",
      label: "Forest Biome",
      width: 1918, height: 1081,
    },
    {
      src: "/wizbowo/wizbowo_snow.png",
      label: "Snow Biome",
      width: 1917, height: 1090,
    },
    {
      src: "/wizbowo/wizbowo_ocean.png",
      label: "Ocean Biome",
      width: 1918, height: 1085,
    },
  ]

  return (
    <div className="w-full grid place-items-center">
      <header className="
          grid place-items-center
          bg-[url('/wizbowo/game_screenshot.png')]
          bg-cover bg-center
          w-full h-[calc(100vh-16*var(--spacing))]
          text-center
        "
      >
        <Image
          className="hidden md:block w-8/10 h-auto pixelated mb-64"
          src="/wizbowo/title_long.png"
          width={304} height={42}
          alt="Wizbowo's Conquest"
        />
        <Image
          className="block md:hidden w-8/10 h-auto pixelated mb-64"
          src="/wizbowo/title_stacked.png"
          width={105} height={68}
          alt="Wizbowo's Conquest"
        />
      </header>

      <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-8 bg-background md:w-8/12 md:p-8 rounded">
        <section className="bg-background-border/30 p-4 mb-8 rounded">
          <h2 className="text-4xl text-center mb-4">Download Links:</h2>
          
          <div className="flex flex-wrap justify-center">
            {links.map((link) => (
              <Link href={link.href} key={link.href}
                className="
                  p-4 mb-4 md:mb-0 md:ml-4 md:mr-4
                  bg-background rounded
                  text-3xl [font-family:var(--font-jersy-25)]
                  hover:scale-110
                  hover:!border-background-hover
                  duration-100
                "
              >
                {link.text}
              </Link>
            ))}
          </div>
        </section>
        <section className="bg-background-border/30 p-4 rounded">
          <h2 className="text-4xl text-center">Screenshots</h2>
          <div className="flex flex-wrap justify-center">
            {screenshots.map((screenshot) => (
              <div key={screenshot.src} className="group flex flex-col w-5/12 m-4 mb-10 *:duration-200">
                <Image
                  className="group-has-hover:scale-105 pb-2"
                  src={screenshot.src}
                  width={screenshot.width} height={screenshot.height}
                  alt={`Screenshot of the ${screenshot.label} in Wizbowo's Conquest`}
                />
                <span className="opacity-0 group-has-hover:opacity-100 text-center">{screenshot.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}