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
              Blockchains combined with cryptography, which can be interpreted as secret peer-to-peer state machines, create digital systems with extremely radical properties.
            </div>
            <div className="paragraph">
              When introduced to the world through <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin</a> as digital money and later expanded through <a href="https://ethereum.org/en/whitepaper/#applications">Ethereum</a> as programmable money, it planted itself in the minds of most as something with primarily financial consequences. The initial purpose-assignment of the technology effectively obscured its deeper properties, of which the financial consequences are one of many.
            </div>
            <div className="paragraph">
              <a href="https://blog.zkga.me/announcing-darkforest">Dark Forest</a>, announced in 2020, departed from common understandings to instead explore the consequences of using a semi-secret peer-to-peer state machine to create <strong>Digital Physics</strong>, MMO-like rules that are as immutable and "<a href="https://stark.mirror.xyz/A9csRsDaAJHJCCWa2Vv16bmxl0BgDqiLdupASxBT2r4">hard</a>" as physical laws.
            </div>
            <div className="paragraph">
              Movement, crafting, combat, and all the rules of an MMO were enforced using smart contracts. This hinted at a digital world that would be impossible to shutdown, reset, tamper, or forcefully update. And consequentially, a world that would be maximally robust for people to settle and invest in.
            </div>
            <div className="paragraph">
              While it's common for large MMOs to see a lot of player-driven emergence, Dark Forest saw it with a miniscule community of only hundreds of members. The emergence was driven by the credible commitment made by Digital Physics, rather than by the presence of a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player Extensions</strong> created social mechanisms on top of Dark Forest's physics.
              Such as, <a href="https://astralcolossus.xyz/">The Astral Colossus</a>: 50 strangers pooled their resources within 24 hours to a shared spaceship, governed by a player-created smart contract, to gain unfair advantages.
            </div>
            <SingleMedia imageSrc="/darkforest.svg" />
            <div className='subheading'>MUD</div>
            <SingleMedia 
              videoSrc="/quarry.mp4"
            />

            <div className='subheading'>Biomes</div>
            <div className="paragraph">
              <a href="https://biome1.biomes.aw/map">Biomes</a>, developed in 2024 using MUD, built on the notions of Digital Physics and Player Extensions introduced by Dark Forest.
            </div>
            <div className="paragraph">
              When there is Digital Physics, there is also <strong>Digital Matter</strong>. The supply of ores, crops, fluids, energy, and other resources that circulate according to immutable simulation rules.
            </div>
            <div className="paragraph">
              Bitcoin was an anon-created currency that used cryptography to enforce supply and transfer rules, which allowed it to accrue {">"}$2T in value. This wouldn't have happened if Bitcoin was managed by Satoshi's server. Similarly, Biomes hinted that Digital Matter may accrue far more value far faster than "monopoly resources" managed on a studio's server.
            </div>
            <div className="paragraph">
              While large MMOs foster economic activity, Biomes saw thousands of dollars spent in gas fees mining resources with {"<"}100 DAUs. This was driven by the credible commitment on tamper-proof supply made by Digital Matter, rather than players desiring status in a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player Integrations</strong> built social mechanisms directly into the world by programming the behavior of objects like chests, force fields, and doors. <a href="https://x.com/0xwasdcorp/status/1849907628031324405">WasdSwap</a> programmed chests into shops to generate real money revenue for their guild.
            </div>

            <SingleMedia imageSrc="/biomes.svg" />








            

      
            <div className="paragraph">
            Unlike immutable physical laws, shared fictions are customizable to our choosing. As shown in Figures 1 and 2, as information technologies have expanded our capacity to construct shared fictions, we have increasingly escaped the "state of nature" to inhabit them
            <sup><a href="https://drive.google.com/drive/folders/1Qron4DBr7xfq3iM3YpaLEmdSwhDNPvJf?usp=drive_link" target="_blank" rel="noopener noreferrer">1</a></sup>.
            </div>
      
            <div>
              Defiance through persistence o7,
            </div>
            <div>
              Zuse
            </div>

          </div>
        </div>
      );
};

export default RaisingDust;