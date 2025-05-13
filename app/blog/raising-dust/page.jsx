import React from 'react';
import "/styles/globals.css";

const SingleMedia = ({ 
  title = " ", 
  imageSrc = "/placeholder.jpg", 
  imageAlt = "Image", 
  videoSrc = null,
  poster = null, // Optional poster image for video
  caption = " ",
  captionTwo = null,
  href = null,
  linkText = "Read more",
  maxWidth = "50%"
}) => {
  const isMobileWidth = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
  
  return (
    <>
      <div 
        className="figuretitle"
        style={{ 
          width: '95%',
          display: 'block',
          textAlign: 'left',
        }}>
          {title}
      </div>
  
      <div style={{ 
        width: isMobileWidth ? '100%' : maxWidth,
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {videoSrc ? (
          <video
            controls
            autoPlay
            loop={true}
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            aria-label={imageAlt}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        )}
      </div>
      
      <div 
        className="captionText"
        style={{ 
          width: '95%',
          display: 'block',
          textAlign: 'left',
          marginTop: '10px',
          justifySelf: 'center'
        }}>
          {caption}
          {captionTwo && (
            <>
              <br />
              <br />
              {captionTwo}
            </>
          )}
          {href && (
            <>
              {' '}
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0066cc', textDecoration: 'underline' }}
              >
                {linkText}
              </a>
            </>
          )}
      </div>
    </>
  );
};

const SectionHeading = ({ title, href }) => {
    return (
        <div className="sectionHeading">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {title}
          </div>
        </div>
      );
};

const RaisingDust = () => {
    return (
        <div className="wrapper">
          <div className="container">
            <div className="title">Rising Dust:
              Learning From Dark Forest, MUD, Biomes, and Beyond
            </div>
            <SectionHeading 
              title="How We Got Here" 
            />
            <div className='subheading'>Dark Forest</div>
            <div className="paragraph">
              Blockchains and cryptography create secret-bearing peer-to-peer state machines, which result in digital systems with extremely radical properties.
            </div>
            <div className="paragraph">
              When <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin</a> introduced these technologies for the purpose of digital money,
               they got planted in the minds of most as something with primarily financial consequences.
               Their initial purpose effectively obscured their deeper properties, of which the financial consequences are important, but one of many.
            </div>
            <div className="paragraph">
              <a href="https://blog.zkga.me/announcing-darkforest">Dark Forest</a> (2020) broke new ground by exploring how these technologies create <strong>Digital Physics</strong>, MMO-like rules that are as immutable and "<a href="https://stark.mirror.xyz/A9csRsDaAJHJCCWa2Vv16bmxl0BgDqiLdupASxBT2r4">hard</a>" as physical laws.
              Movement, mining, crafting, and combat were all enforced using smart contracts. This hinted at a digital world that could be impossible to shutdown, reset, tamper, or forcefully update. One that is uniquely and maximally robust for people to settle and invest in.
            </div>
            <div className="paragraph">
              While large MMOs tend to see player-driven emergence, Dark Forest saw it with a miniscule community of a couple hundred members. This emergence was driven by the credible commitment made by Digital Physics, rather than by the presence of a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player Extensions</strong> created social mechanisms on top of Dark Forest's physics.
              With <a href="https://astralcolossus.xyz/">The Astral Colossus</a>, 50 strangers pooled their resources within 24 hours to a shared spaceship, governed by a player-created smart contract, to gain strategic advantages.
            </div>
            <SingleMedia imageSrc="/darkforest.svg" />
            <div className='subheading'>MUD</div>
            <div className="paragraph">
              <a href="https://mud.dev/">MUD</a> (2022) and its services progressed Digital Physics from demonstration to production. It became faster to ship complex Digital Physics, build clients for players to interact with it, and interface with Player Extensions.
            </div>
            <div className="paragraph">
              Lattice, the developers of MUD, demonstrated these claims by building <a href="https://opcraft.mud.dev/">OPCraft</a> within weeks, and social extensions like the <a href="https://x.com/SupremeLeaderOP">Supreme Leader</a> emerging within days of launch. Many took notice, and a vibrant community of developers and designers exploring Digital Physics was <a href="https://aw.network/">formed</a>.
            </div>
            <div className="paragraph">
              Beyond taking Dark Forest's discoveries into production, MUD has begun enabling new properties like <strong>Open Scalability</strong>. Instead of requiring a single server owner to run and scale a world, players can contribute compute and do so themselves, limitlessly.
            </div>
            <SingleMedia 
              videoSrc="/quarry.mp4"
            />
            <div className='subheading'>Biomes</div>
            <div className="paragraph">
              <a href="https://biome1.biomes.aw/map">Biomes</a> (2024) was developed with MUD and advanced the notions of Digital Physics and Player Extensions introduced by Dark Forest.
            </div>
            <div className="paragraph">
              When there is Digital Physics, there is also <strong>Digital Matter</strong>. The supply of ores, crops, fluids, energy, and other resources that circulate according to immutable simulation rules.
            </div>
            <div className="paragraph">
              Bitcoin was an anon-created currency that used cryptography to enforce supply and transfer rules, which allowed it to accrue {">"}$2T in value. This wouldn't have happened if Bitcoin was managed by the anon's server. Similarly, Biomes hinted that Digital Matter may accrue far more value far faster than "monopoly resources" managed by a studio's server.
            </div>
            <div className="paragraph">
              While large MMOs foster economic activity, Biomes saw thousands of dollars spent in gas fees mining resources with {"<"}100 daily active users. This was driven by the credible commitment on tamper-proof supply made by Digital Matter, rather than players desiring status in a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player Integrations</strong> built social mechanisms directly into the world by programming the behavior of objects like chests, force fields, and doors. <a href="https://x.com/0xwasdcorp/status/1849907628031324405">WasdSwap</a> programmed chests into shops to generate real money revenue for their guild.
            </div>
            <SingleMedia imageSrc="/biomes.svg" />
            <div className="paragraph">
            </div>
            <div className="paragraph">
              Observing Dark Forest, MUD, and Biomes reveals many non-obvious consequences. Digital Physics & Digital Matter make credible commitments to support investment & effort which is disproportionally larger than the size of the player base. Player Extensions & Player Integrations create high levels of emergence that aren't confined to the virtual world, but rather interface with the broader internet and economy. Open Scalability enables surpassing server architecture limitations and may create shared worlds which accommodate everyone who wants to join. 
            </div>


            <SectionHeading 
              title="Our Big Question" 
            />

            <SectionHeading 
              title="Stages of Deployment" 
            />


          </div>
        </div>
      );
};

export default RaisingDust;