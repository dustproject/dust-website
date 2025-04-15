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
        <div className="title">Create what you couldn't before</div>

        <div className="content-section">
          <div className="text-column">
            <div><strong>Dust</strong> is a world that truly exists. Everyone can agree that it's real and nobody's making it up. Nobody owns or controls it, nobody can break its physics or delete its matter, and nobody can stop it. What you build inside can outlive you and benefit your broader life.</div>
          </div>
        </div>
        <div className='cardsContainer'>
          <div className='createCard'>
            <div className='cardSubheading'>MMO PLAYERS</div>
            <div className='cardHeading'>Build Core Features Only Big Studios Could</div>
            <div className='cardContent'>
              You're not limited to building untrusted third-party widgets. Build the trusted first-party socio-economic systems of the world, imagine your own version of the World of Warcraft Auction House, Runescape Grand Exchange, Final Fantasy XIV Gold Saucer, and Black Desert Online Transport Network.
            </div>
          </div>
          <div className='createCard'>
            <div className='cardSubheading'>DAPP BUILDERS</div>
            <div className='cardHeading'>Design Real Financial & Social Mechanisms</div>
            <div className='cardContent'>
            Build real financial & social mechanisms into the world, imagine doors become "token gates", chests function as "liquidity pools" and "lending protocols", force fields provide "staking rewards" for securing it, ore reserves back "RWAs", and "DAOs" govern pooled resources.
            </div>
          </div>
          <div className='createCard'>
            <div className='cardSubheading'>TECH FUTURISTS</div>
            <div className='cardHeading'>Grow The Societies & Lifeforms of Tomorrow</div>
            <div className='cardContent'>
            Explore coordination beyond physical limitations by writing algorithmic social contracts with unbounded complexity and autonomous enforcement. Grow lifeforms that independently exist, act, and create value to earn the computational resources needed to sustain themselves.
            </div>
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


        <div className="sectionHeading">1. Get digital matter</div>
        <div className="content-section">
          <div className="text-column">
            <div>The world is made of digital matter and energy. Nobody can change their supply or the physics they follow.</div>
            <div>You get starting energy when you <a href="https://alpha.dustproject.org/">spawn</a>. Use it to live and act in the world.</div>
            <div>Everything flows cyclically according to unbreakable physics. Grow and eat crops for energy, and your usage returns energy to the land. Mine ores to craft items, and ores regenerate as items deplete.</div>
          </div>
          <div className="image-column">
            <img src="/digitalphysics.svg" className="section-image" alt="Stone Carvings" />
          </div>
        </div>

        <div className="sectionHeading">2. Build something truly lasting</div>
        <div className="content-section">
          <div className="text-column">
            <div>Everything you do inside is permanently and publicly recorded. Anyone can verify what actually happened.</div>
            <div>Claim territory using force fields, for as long as you keep them energized with crops. Protect and attack territory with crafted items.</div>
            <div>Build inside your territory. It can last as long as a real stone carving, outliving you, and becoming a permanent store of your effort.</div>
          </div>
          <div className="image-column">
            <img src="/stonecarvings.png" className="section-image" alt="Stone Carvings" />
          </div>
        </div>

        <div className="sectionHeading">3. Enrich Dust and Your Life Beyond</div>
        <div className="content-section">
          <div className="text-column">
            <div>1. Create <a href='https://github.com/dustproject/dust/tree/main/packages/dustkit'>verifiable programs</a> that read and build upon the world's publicly record state:</div>
            <div className='exampleitalic'>Write a kill tracker that ranks players based on their kills.</div>
            <div>2. Control your machines in the world - like force fields, chests, doors, and beds - through your programs:</div>
            <div className='exampleitalic'>Build an arena with a door gating access to top killers from the kill tracker, and chests that give them each a weapon. Write an arena tracker that lists wins.</div>
            <div>3. Write frontends for your programs so others can use them:</div>
            <div className='exampleitalic'>Players check the arena winners list, get directions to reach it, and interact with its doors and chests.</div>
            <div>4. Use standards and proofs in your programs to integrate with any asset or data online:</div>
            <div className='exampleitalic'>Issue "ColCoins" to arena winners. These can instantly be traded for other assets, including US Dollars. Create a governance program where proof-holders of posting on r/ancientrome propose arena improvements, and ColCoin-holders vote on implementation.</div>
          </div>
          <div className="small-image-column">
            <img src="/connectlife.svg" className="section-image" alt="Connect Life"/>
          </div>
        </div>

        <div className="sectionHeading">4. Advance Dust itself</div>
        <div className="content-section">
          <div className="text-column">
            <div>After your project comes of age, you will evolve from a user to a founder, ready to rise within Dust - a public good that everyone can shape and benefit from.</div>
            <div><a href='/coalition'>Join the open coalition</a> of philosophers, researchers, economists, engineers, and possibly you - that will collectively build and maintain Dust. </div>
          </div>
          <div className="image-column">
            <img src="/usersfounders.png" className="section-image" alt="Users Founders" />
          </div>
        </div>

        {fontFamily !== "IBM Plex Sans" && (
          <>
          <div className="sectionHeading">Projects building on Dust</div>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
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
        </>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;