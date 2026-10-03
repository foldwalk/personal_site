export default function Home() {
  return (
    <div className="w-full grid place-items-center">
      <header className="
          grid place-items-center
          bg-space-background
          w-full h-[calc(100vh-12*var(--spacing))]
          text-center
        "
      >
        <div className="text-[#ffffff]">
          <h1 className="text-4xl">Jacob Vanluven</h1>
          <p className="text-xl">Creating and exploring digital worlds through art, research, and games</p>
        </div>
      </header>

      <main className="w-10/12 md:w-8/12 mt-10 mb-10 pb-4 bg-background p-10">
        <h2 className="text-2xl">Welcome!</h2>
        <p>
          My name is Jacob Vanluven and I make games and pixel art. Check out some of my recent updates below, or some of the other pages for more info about me and what I do!
        </p>
      </main>
    </div>
  );
}
