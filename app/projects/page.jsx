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
          <div className="title">The first real place you visit with a computer</div>

          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div><strong>Dust</strong> is a world that truly exists. Nobody owns or controls it, it can never go down or stop, nobody can break or change its physics, nobody can inflate or delete its matter, and everyone can freely participate and benefit.</div>
                <div>Everything you do inside is permanently and publicly recorded. Anyone can verify what actually happened. Whatever you build is a real store of your effort that truly lasts and connects with your broader life.</div>
            </div>
            <img
                src="/digitalphysics.svg"
                style={{ maxWidth: '40%', border: "1px solid #e2e2e2" }}
            />
          </div>

          <div className="sectionHeading" >Create what you couldn't before</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
            <div>
              <strong>Build core trusted MMO systems once reserved for studios:</strong>
              {" "}
              You're not limited to building untrusted third-party widgets. Build the trusted first-party socio-economic systems of the world, imagine your own version of the World of Warcraft Auction House, Runescape Grand Exchange, and Final Fantasy XIV Gold Saucer.
            </div>
            <div>
              <strong>Give a tangible twist to abstract dApps:</strong>
              {" "}
              Build physical versions of dApps where doors become "token gates", chests function as "liquidity pools" and "lending protocols", 
              force fields provide "staking rewards" for securing it, and ore reserves back "RWAs".
            </div>
            <div>
              <strong>Design social contracts beyond physical limitations:</strong>
              {" "}
              Create algorithmic social contracts with unlimited granularity and complexity that are automatically enforced. Experiment with coordination structures not yet possible in the physical world, since physical actions can't be trustlessly verified.
            </div>
            <div>
              <strong>Grow sovereign artificial life:</strong>
              {" "}
              Cultivate lifeforms that exist independently, make their own decisions, and create value in the world to earn the computational resources needed to develop themselves - evolving beyond your control.
            </div>
            </div>

          <div className='ctaBox abstractHeading' style={{fontWeight: "normal"}}>
            <a href="https://discord.gg/J75hkmtmM4" target="_blank" rel="noopener noreferrer" style={{color: "white", fontWeight: "bold"}}>
             Join Discord 
            </a>{" "}
            for support with what you're building. {" "}
            <a href="mailto:dhrumil@dustproject.org" target="_blank" rel="noopener noreferrer" style={{color: "white", fontWeight: "bold"}}>
              Send email
            </a>{" "}
            for broader inquiries.
          </div>

          <div className="sectionHeading">1. Build something truly lasting</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>You get starting energy when you <a href="https://alpha.dustproject.org/">spawn</a>. Use it to live and act in the world.</div>
                <div>Matter flows cyclically according to physics. Grow crops, eat them for energy, and return energy to the land with use. Mine ores, craft items with them, and ores respawn as items are used.</div>
                <div>Claim territory using force fields, for as long as you keep them energized with crops. Protect and attack territory with crafted items.</div>
                <div>Build inside your territory. It can last as long as a real stone carving, becoming a permanent store of your effort.</div>
            </div>
            <img
                src="/stonecarvings.png"
                style={{ maxWidth: '40%', border: "1px solid #e2e2e2" }}
            />
          </div>

          <div className="sectionHeading">2. Connect it to your broader life</div>
          <div style={{ display: "flex", gap: "2rem"}}>
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
          <img
                src="/connectlife.svg"
                style={{ maxWidth: '25%', border: "1px solid #e2e2e2", padding: "0.5rem" }}
            />
         </div>


         <div className="sectionHeading">3. Advance Dust itself</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>After building something truly lasting and connecting it to your broader life, your project will come of age. You will evolve from a user to a founder, ready to rise within Dust.</div>
                <div>Dust is a public good, meaning it is not owned by anybody, and everyone can shape and benefit from it.</div>
                <div><a href='/coalition'>Join the open coalition</a> of philosophers, researchers, economists, engineers, and possibly you - that will collectively build and maintain Dust. </div>
            </div>
            <img
                src="/usersfounders.png"
                style={{ maxWidth: '40%', border: "1px solid #e2e2e2" }}
            />
          </div>

          <div className="sectionHeading">Projects building on Dust</div>

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