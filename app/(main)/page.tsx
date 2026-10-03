export default function Home() {
  return (
    <div className="w-full grid place-items-center">
      <header className="
          grid place-items-center
          bg-space-background
          w-full h-[calc(100dvh-10*var(--spacing))]
          text-center
        "
      >
        <div className="text-[#ffffff]">
          <h1 className="text-4xl">Jacob Vanluven</h1>
          <p className="text-xl">Creating and exploring digital worlds through art, research, and games</p>
        </div>
      </header>

      <main className="w-11/12 mt-10 mb-10">
        <section className="w-full">
          <h2 className="text-xl">About</h2>
          <p>This section is a bit more about me</p>
        </section>

        <section className="w-full">
          <h2 className="text-xl">Projects</h2>
          <p>Here's a brief introduction to my projects</p>
        </section>
      </main>
    </div>
  );
}
