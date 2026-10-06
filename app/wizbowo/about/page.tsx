import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Wizbowo's Conquest is a 2D Multiplayer Sandbox game developed over 15 weeks.",
}

export default function About() {
  return (
    <main className="w-11/12 mt-10 mb-10 p-5 pt-8 pb-8 bg-background md:w-8/12 md:p-8 rounded">
      <section className="bg-background-border/30 p-4 mb-4 rounded">
        <h1 className="text-4xl mb-2">About the Game</h1>
        <p>
          Wizbowo's Conquest is an expansive 2D multiplayer sandbox game inspirited by Terraria, Minecraft, and Starbound. It was developed over 15 weeks for a Software Engineering Practice course. It includes a server application, client application, and database connection. The current build allows multiplayer connection through direct IP connection, either on a local network or through a port-forwarded network.
        </p>
      </section>
      <section className="bg-background-border/30 p-4 mb-4 rounded">
        <h2 className="text-3xl mb-2">Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Explore a diverse world:</strong> Travel through 8 unique environments and 5 different world layers</li>
          <li><strong>Build your dream house:</strong> Mine, craft, and build your own world with over 100 items</li>
          <li><strong>A dynamic world:</strong> Experience the unique world generation, tile destruction, and liquid simulation</li>
          <li><strong>Play with your friends:</strong> Supports an authoritative design with a client and server application available through LAN or Port-Forwarded networking</li>
          <li><strong>Fight the evils of the world:</strong> Fight off enemies and face off against the final boss - the powerful Wizbowo</li>
        </ul>
      </section>
      <section className="bg-background-border/30 p-4 rounded">
        <h2 className="text-3xl mb-2">Meet the Team</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-background p-4 m-4 rounded">
            <h3 className="text-2xl">Jacob Vanluven</h3>
            <h4 className="text-lg text-background-hover">Scrum Master</h4>
            <ul className="list-disc pl-6">
              <li>Tile Management</li>
              <li>Multiplayer Architecture</li>
              <li>Art and Animations</li>
            </ul>
          </div>
          <div className="bg-background p-4 m-4 rounded">
            <h3 className="text-2xl">Ryan Kuhns</h3>
            <h4 className="text-lg text-background-hover">Inventory & Crafting</h4>
            <ul className="list-disc pl-6">
              <li>Inventory Management</li>
              <li>Crafting Stations</li>
              <li>Health & Respawn System</li>
            </ul>
          </div>
          <div className="bg-background p-4 m-4 rounded">
            <h3 className="text-2xl">Brendan Stone</h3>
            <h4 className="text-lg text-background-hover">Entities & Synchronization</h4>
            <ul className="list-disc pl-6">
              <li>Zombie Enemy</li>
              <li>Synchronized Block Damage</li>
              <li>Multiple Tool Tiers</li>
            </ul>
          </div>
          <div className="bg-background p-4 m-4 rounded">
            <h3 className="text-2xl">Abigail Gonsman</h3>
            <h4 className="text-lg text-background-hover">Database Management</h4>
            <ul className="list-disc pl-6">
              <li>Database Creation</li>
              <li>Database Architecture</li>
              <li>Login System</li>
            </ul>
          </div>
          <div className="bg-background p-4 m-4 rounded">
            <h3 className="text-2xl">Joshua Myers</h3>
            <h4 className="text-lg text-background-hover">Music & Sound Effects</h4>
            <ul className="list-disc pl-6">
              <li>Unique Music for each Biome</li>
              <li>Immersive Sound Effects</li>
              <li>Jungle and Winter Biomes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}