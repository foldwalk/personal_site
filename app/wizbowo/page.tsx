import Image from "next/image";

export default function WizbowoHome() {
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

      <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-8 bg-background md:w-8/12 md:p-8 clipped-panel">
        <h2 className="text-3xl text-center mb-4">Welcome!</h2>
        <p>
          My name is Jacob Vanluven and I make games and pixel art. Check out some of my recent updates below, or some of the other pages for more info about me and what I do!
        </p>

        <h3 className="text-xl mt-6">Recent Projects:</h3>
        <p>Check out some of my recent projects:</p>

        <h3 className="text-xl mt-6">Recent Posts:</h3>
        <p>Check out some of my recent articles and blog posts:</p>
      </main>
    </div>
  );
}