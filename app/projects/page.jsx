import React from 'react';
import "/styles/globals.css";

const ProjectsPage = ({ fontFamily }) => {
  const fontStyle = fontFamily ? { fontFamily } : {};

  const projects = [
    { name: "Permutation City", link: "https://permutationcity.org/" },
    { name: "Orden Corporation", link: "https://orden.gg/" },
    { name: "WASD Guild", link: "https://bento.me/wasd" },
    { name: "Sakura Religion", link: "https://x.com/Megashi333" },
    { name: "Protonaut Characters", link: "https://www.protonauts.io/" },
    { name: "Yeomen Automation Tools", link: "https://yeomen.ai/" },
    { name: "Sprank Builders", link: "https://x.com/AnotherSprankle" },
    { name: "FunBlocks Guild", link: "https://linktr.ee/funblocks" },
  ];

  return (
        <div className="wrapper">
          <div className="container" style={fontStyle}>
          <div className="sectionHeading" style={{marginTop: "0"}}>WHAT IS DUST?</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
            <div style={{ display: "flex", gap: "2rem"}}>
              <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                  <strong>This is the first real place that you visit with a computer.</strong>
                  <div>It's a world that truly exists. Nobody owns or controls it, it can never go down or stop, nobody can break or change its physics, nobody can create or delete its matter, and everyone can freely participate and benefit.</div>
                  <div>Everything you do inside is permanently and publicly recorded. Anyone can verify what actually happened. Whatever you build is a real store of your effort that truly lasts and connects with your broader life.</div>
              </div>
              <img
                  src="/digitalphysics.svg"
                  style={{ maxWidth: '40%', border: "1px solid black", height: 'fit-content' }}
              />
            </div>
            <strong> Build what you always wanted to but didn't know you could.</strong>
            <div>
              <strong>Real MMO Systems:</strong>
              {" "}
              World of Warcraft Auction House, EVE Investment Bank and Corporations, Runescape Grand Exchange, Star Wars Galaxies Player Cities, Final Fantasy XIV Gold Saucer, and the Black Desert Online Ticketed Transport. 
              Build all of them inside - not just as games, but as real socio-economic systems that break the 4th wall.
            </div>
            <div>
              <strong>Tangible dApps:</strong>
              {" "}
              "token gating" using doors, "liquidity pools" and "yield-bearing lending" using chests, "staking rewards" for securing force fields, and "RWAs" backed by ore reserves.
            </div>
            <div>
              <strong>Unbounded Social Contracts:</strong>
              {" "}
              Algorithmic social contracts that are arbitrarily granular, complex, and automatically enforced. Experiment with coordination structures not yet possible in the physical world.
            </div>
            <div>
              <strong>Artificial Life:</strong>
              {" "}
              Lifeforms that exist by themselves, make their own decisions, and create value in the world to acquire memory and compute.
            </div>
          </div>

          <div className='ctaBox abstractHeading' style={{fontWeight: "normal"}}>
            <a href="https://discord.gg/J75hkmtmM4" target="_blank" rel="noopener noreferrer" style={{color: "white", fontWeight: "bold"}}>
              JOIN DISCORD
            </a>{" "}
            for support with what you're building. {" "}
            <a href="mailto:dhrumil@dustproject.org" target="_blank" rel="noopener noreferrer" style={{color: "white", fontWeight: "bold"}}>
              SEND EMAIL
            </a>{" "}
            for broader inquiries.
          </div>

          <div className="sectionHeading">1. Build Something Truly Lasting</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>You get starting energy when you <a href="https://alpha.dustproject.org/">spawn</a>. Use it to live and act in the world.</div>
                <div>Matter flows cyclically according to physics. Grow crops, eat them for energy, and return energy to the land with use. Mine ores, craft items with them, and ores respawn as items are used.</div>
                <div>Claim territory using force fields, for as long as you keep them energized with crops. Protect and attack territory with crafted items.</div>
                <div>Build inside your territory. It can last as long as a real stone carving, becoming a permanent store of your effort.</div>
            </div>
            <img
                src="/stonecarvings.png"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>

          <div className="sectionHeading">2. Connect It to Your Broader Life</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>1. Create <a href='https://github.com/dustproject/dust/tree/main/packages/dustkit'>verifiable programs</a> that read and build upon the world's publicly record state:</div>
                <div className='exampleitalic'>Write a kill tracker that ranks players based on their kills.</div>
                <div>2. Control your machines in the world - like force fields, chests, doors, and beds - through your programs:</div>
                <div className='exampleitalic'>Build an arena with a door gating access to top killers from the kill tracker, and chests that give them each a weapon. Write an arena tracker that lists wins.</div>
                <div>3. Write frontends for your programs so others can use them:</div>
                <div className='exampleitalic'>Players check the arena winners list, get directions to reach it, and interact with its doors and chests.</div>
                <div>4. Use assets and proofs in your programs to connect what you build with your broader life:</div>
                <div className='exampleitalic'>Issue "ColCoins" to arena winners. These can instantly be traded for other assets, including US Dollars. Create a governance program where proof-holders of posting on r/ancientrome propose arena improvements, and ColCoin-holders vote on implementation.</div>
         </div>


         <div className="sectionHeading">3. Advance Dust Itself</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>After building something truly lasting and connecting it to your broader life, your project will come of age. You will evolve from a user to a founder, ready to rise within Dust.</div>
                <div>Dust is a public good, meaning it is not owned by anybody, that everyone can shape and benefit from.</div>
                <div><a href='/coalition'>Join the open coalition</a> of philosophers, researchers, economists, engineers, and possibly you - that will collectively build and maintain Dust. </div>
            </div>
            <img
                src="/usersfounders.png"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>

          <div className="sectionHeading">Projects Using Dust</div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "1rem",
            marginBottom: "2rem"
          }}>
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  display: "block"
                }}
              >
                {project.name}
              </a>
            ))}
          </div>
          </div>
        </div>
    );
};

export default ProjectsPage;