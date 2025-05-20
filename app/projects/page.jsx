import React from 'react';
import "/styles/globals.css";
import Link from "next/link";


const ProjectsPage = () => {

  const projects = [
    { name: "Permutation City", link: "https://permutationcity.org/" },
    { name: "Orden Corporation", link: "https://orden.gg/" },
    { name: "WASD Guild", link: "https://bento.me/wasd" },
    { name: "Sakura Religion", link: "https://x.com/Megashi333" },
    { name: "Protonaut Characters", link: "https://www.protonauts.io/" },
    { name: "Yeomen Automation Tools", link: "https://yeomen.ai/" },
    { name: "Sprank Builders", link: "https://x.com/AnotherSprankle" },
    { name: "FunBlocks Guild", link: "https://linktr.ee/funblocks" },
    { name: "Slay Herobrine", link: "https://www.dustproject.org/slayherobrine" },
    { name: "DAG City", link: "https://dagcity.polysensus.io/" }
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">Create what you couldn't before</div>

        <div className="abstractBox" style={{margin: "0"}}>
          <div className='abstractHeading'>Start Real Governments, Religions, Companies, Lifeforms, and More</div>
          <img src="/projects.svg" className="section-image" style={{border: "none", width: "100%", alignSelf: "center"}} alt="projects"/>
          Program your controlled territory, design custom UIs that run in-client, and integrate with anything on the web, or even real dollars. What you create may truly live beyond you.
        </div>

        <div className="content-section">
          {/* <div className="text-column">
            <div><strong>Dust</strong> {" "}
            is a world that truly exists. Everybody can agree that it's real and nobody's making it up. Nobody can own, control, or stop it. Nobody can break its physics or delete its matter, and everybody can fit. What you build inside can outlive you and benefit your broader life.
            </div>
          </div> */}
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
            <div className='cardSubheading'>MECHANISM DESIGNERS</div>
            <div className='cardHeading'>Design Real Financial & Social Mechanisms</div>
            <div className='cardContent'>
            Build real financial & social mechanisms into the world. Imagine doors opening for pass holders; chests enabling trade, auctions, and lending; force fields providing rewards for protecting it; ore reserves backing custom currencies; futarchy governing territory; and, insurance compensating for mobs.
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


          <Link href="/slayherobrine" target="_blank" rel="noopener noreferrer" style={{color: "white", fontWeight: "bold", textDecoration: "none"}}>
              <div className='ctaBox abstractHeading mcBox' style={{display: "flex", justifyContent: "space-between", fontFamily: "Rubik Pixels"}}>
                <div>
                  JOIN THE GRASSROOTS MINECRAFT FAN MOVEMENT
                </div>
                <div>
                  ›
                </div>
              </div>
          </Link>
      




        <div className='ctaBox abstractHeading' style={{fontWeight: "normal"}}>
          <a href="https://discord.gg/J75hkmtmM4" target="_blank" rel="noopener noreferrer" className='hovercta' style={{color: "white", fontWeight: "bold"}}>
            Join Discord 
          </a>{" "}
          for support with what you're building. {" "}
          <a href="mailto:dhrumil@dustproject.org" target="_blank" rel="noopener noreferrer" className='hovercta' style={{color: "white", fontWeight: "bold"}}>
            Send email
          </a>{" "}
          for broader inquiries.
        </div>


        <div className="sectionHeading">Build Something Truly Lasting</div>
        <div className="content-section">
          <div className="image-column" style={{flexDirection: "column", gap: "0.5rem"}}>
          <div>The matter and energy of the world flow cyclically by the mathematically-enforced Public Physics Protocol.</div>
          <div>Every action is permanently recorded for anyone to verify, visible in the Protocol Explorer.</div>
            <div>Grow and eat crops for energy, and return energy to the land as you act. Mine ores to craft tools, and ores regenerate as tools deplete.</div>
            <div>Claim territory by energizing force fields. Territories can be attacked and defended.</div>
            <div>What you build inside your territory becomes a permanent store of your effort.</div>          
          </div>
          <div className="text-column">
            {/* <div style={{height: "100%", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center"}}> */}
              {/* <strong>A Public Protocol, Like The Internet, But For The World's Physics</strong> */}
              <iframe 
                src="https://explorer.mud.dev/pyrope/worlds/0xaa544E5e0D1C45cC43Ac8D5512a5081aA6Ca9EFE/explore?tableId=0x74620000000000000000000000000000506f736974696f6e0000000000000000&query=SELECT%2520%2522entityId%2522%252C%2520%2522x%2522%252C%2520%2522y%2522%252C%2520%2522z%2522%2520FROM%2520%2522Position%2522%2520LIMIT%252010%2520OFFSET%25200%253B&page=0&pageSize=10" 
                className="map-iframe"
                title="DUST Project Map"
                loading="lazy"
              />
          {/* </div> */}
          </div>
        </div>

        <div className="sectionHeading">Enrich Both Dust and Your Broader Life</div>


        <div className="content-section">
            <div className="text-column">
            <div>
              The most powerful modding tools ever created. Program any machine in your territory. Design custom UIs that run directly in-client. And for the first time ever, integrate with absolutely anything on the internet or economy - from Reddit and Discord to your own custom currencies or even real dollars - without needing their approval.
            </div>
            <div>See what's possible: {" "} <Link href="https://permutationcity.org/">Permutation City</Link> {" "}
            is programming spawn tiles, force fields, and chests to let custom "Permutation Passport" holders spawn directly in their territory, rent their land, trade in their shops, and govern their city using custom UIs and "Permutation Pesos".
              </div>

              <img src="/permcity.svg" className="section-image" style={{border: "none", width: "80%", alignSelf: "center"}} alt="Command Blocks"/>
              </div>
            <div className="small-image-column">
                <img src="/connectlife.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
        </div>




      <div className='wrapper' style={{ height: "70px" }}></div>

        <div className="content-section">
          <div className="text-column">

          <div>After your project comes of age, you will evolve from a user to a founder, ready to rise within Dust - a public good that everyone can shape and benefit from. <a href='/coalition'>Join the open coalition</a> of philosophers, researchers, economists, engineers, and creators that will collectively build and maintain Dust. </div>

          </div>
        </div>
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
  
      </div>
    </div>
  );
};

export default ProjectsPage;