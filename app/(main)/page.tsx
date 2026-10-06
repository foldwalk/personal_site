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

      <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-10 bg-background md:w-8/12 md:p-8 md:pb-10 clipped-panel">
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
