import React from 'react';
import "/styles/globals.css";

const ProjectsPage = () => {
    return (
        <div className="wrapper">
          <div className="container">
          <div className="sectionHeading" style={{marginTop: "0"}}>WHAT IS DUST?</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <strong>This is the first real place that you visit with a computer.</strong>
                <div>It is a world made up of provably scarce matter governed by decentralized physics. Nobody owns or controls the world, nobody can spawn or delete matter, nobody can break or change the physics, and everyone can freely participate and benefit.</div>
                <strong> Build what you always wanted to but didn't know you could.</strong>
                <div>Every action is permanently, publicly, and verifiably recorded, so what you do and build inside is a real store of your effort that truly lasts. You can use tools to freely connect this with your broader life.</div>
            </div>
            <img
                src="/images/cyberspace.svg"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>

          <div className="sectionHeading">1. BUILD SOMETHING TRULY LASTING</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>You get starting energy when you spawn. Use it to live and act in the world.</div>
                <div>Matter flows cyclically according to physics. Grow crops, eat them for energy, and return energy to the land with use. Mine ores, craft items with them, and ores respawn as items are used.</div>
                <div>Claim territory using force fields, for as long as you keep them energized with crops. Protect and attack territory with crafted items.</div>
                <div>Build inside your territory. It can last as long as a real stone carving, becoming a permanent store of your effort.</div>
            </div>
            <img
                src="/stonecarvings.png"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>

          <div className="sectionHeading">2. CONNECT IT TO OUR BROADER LIVES</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>The world's state, and every action inside, is publicly verifiable. Anyone can check what actually happened.</div>
                <div>1. Create <a href='https://github.com/dustproject/dust/tree/main/packages/dustkit'>verifiable programs</a> that read and build upon the world's state:</div>
                <div className='exampleitalic'>A combat tracker that ranks players based on their kills.</div>
                <div>2. Control your machines in the world - like force fields, chests, doors, beds, and spawn tiles - through your programs:</div>
                <div className='exampleitalic'>Build a colosseum with a door gating access to top killers from the combat tracker. Configure chests to give each killer one weapon. Rank wins in a colosseum fight tracker.</div>
                <div>3. Write frontends for your programs so others can discover and use them.</div>
                <div className='exampleitalic'>Users notice the colosseum fight tracker, get waypoint directions to the colosseum, and interact with its doors and chests.</div>
                <div>4. Integrate assets and proofs into your programs to bridge what happens in the world with our broader lives.</div>
                <div className='exampleitalic'>Issue "ColCoins" to top fighters from the colosseum fight tracker, and those who provide construction materials to a configured chest. ColCoins can be instantly traded with any asset, including US Dollars.</div>
                <div className='exampleitalic'>Create a colosseum governance program. Proof-holders of posting in the r/ancientrome subreddit propose colosseum expansion ideas, and ColCoin-holders vote on which to implement.</div>
         </div>


         <div className="sectionHeading">3. ADVANCE DUST ITSELF TO SUIT YOUR GOALS</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>After building something truly lasting and connecting it to our broader lives, your project will gain a life of its own. You will evolve from a user to a founder.</div>
                <div>There is no ceiling on how far you can rise within Dust. Dust is a public good, meaning it is not owned by anybody, that everyone can shape and benefit from.</div>
                <div><a href='/coalition'>Join the open coalition</a> of philosophers, researchers, economists, engineers, and possibly you - that will soon collectively build and maintain Dust. </div>
            </div>
            <img
                src="/usersfounders.png"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>


          <div className="sectionHeading">PROJECTS USING DUST</div>
          <div className="sectionHeading">REQUESTS FOR PROJECTS</div>
          </div>
        </div>
    );
};

export default ProjectsPage;