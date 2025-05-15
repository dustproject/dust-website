import React from 'react';
import "/styles/globals.css";
import Image from 'next/image';
import Link from 'next/link';

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
              Blockchains and cryptography create secret-bearing peer-to-peer state machines, which result in digital systems with radical properties.
            </div>
            <div className="paragraph">
              When <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin</a> introduced these technologies for the purpose of digital money,
               they got planted in the minds of most as something with primarily financial consequences.
               Their initial purpose effectively obscured their deeper properties, of which the financial consequences are important, but only one of many.
            </div>
            <div className="paragraph">
              <a href="https://blog.zkga.me/announcing-darkforest">Dark Forest</a> (2020) broke new ground by exploring how these technologies create <strong>Digital Physics</strong>, MMO-like rules that are as immutable and "<a href="https://stark.mirror.xyz/A9csRsDaAJHJCCWa2Vv16bmxl0BgDqiLdupASxBT2r4">hard</a>" as physical laws.
              Movement, mining, crafting, and combat were all enforced using smart contracts. This hinted at a digital world that would be impossible to shutdown, reset, tamper, or forcefully update. One that is uniquely and maximally robust for people to settle and invest in.
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
              Beyond taking Dark Forest's discoveries into production, MUD has begun enabling new properties like <strong>Open Scalability</strong>. Instead of depending on a single server owner to run and scale a world, individual players and organizations can contribute compute and do so themselves, limitlessly.
            </div>
            <SingleMedia 
              videoSrc="/quarry.mp4"
            />
            <div className='subheading'>Biomes</div>
            <div className="paragraph">
              <a href="https://biome1.biomes.aw/map">Biomes</a> (2024) was developed with MUD and advanced the notions of Digital Physics and Player Extensions introduced by Dark Forest.
            </div>
            <div className="paragraph">
              When there is Digital Physics, there is also <strong>Digital Matter</strong>. The provably scarce supply of ores, crops, fluids, energy, and other resources that circulate according to the Digital Physics simulation rules.
            </div>
            <div className="paragraph">
              Bitcoin was an anon-created currency that used cryptography to enforce supply and transfer rules, which allowed it to accrue {">"}$2T in value. This wouldn't have happened if Bitcoin was managed by the anon's server. Similarly, Biomes hinted that Digital Matter may accrue far more value far faster than "monopoly resources" managed by a studio's server.
            </div>
            <div className="paragraph">
              While large MMOs foster economic activity, Biomes saw thousands of dollars spent by players in transaction fees mining resources with {"<"}100 daily active users. This was driven by the credible commitment on tamper-proof supply made by Digital Matter, rather than players desiring status in a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player Integrations</strong> built social mechanisms directly into the world by programming the behavior of objects like chests, force fields, and doors. <a href="https://x.com/0xwasdcorp/status/1849907628031324405">WasdSwap</a> programmed chests into shops to generate real money revenue for their guild.
            </div>
            <SingleMedia imageSrc="/biomes.svg" />
            <div className="paragraph">
            </div>
            <div className="paragraph">
              Observing Dark Forest, MUD, and Biomes reveals many non-obvious consequences. 
              Open Scalability surpasses server architecture limitations to create shared worlds which can accommodate everyone. 
              Digital Physics & Digital Matter make credible commitments to support emergence & value accrual which is disproportionally larger than the size of the player base.
              Player Extensions & Player Integrations enable the emergent creations to interface with the broader internet and economy instead of remaining confined to the virtual world. 
            </div>

            <SectionHeading 
              title="Our Big Question" 
            />
            <div className="paragraph">
              Virtual worlds have been around for a while, it's pretty clear that they will play an increasingly larger role heading into the future, and at some point may consume almost the entirety of where humans spend their time.
            </div>
            <div className="paragraph">
              Our observations from Dark Forest, MUD, and Biomes have led us to formulate a question worth asking: <strong>what happens if a virtual world takes itself maximally seriously?</strong>
              {" "}
              The Dust Project is an <Link href="/coalition">open coalition</Link> for collectively asking this question and tangibly filling out its answer to the greatest capacity possible.
            </div>
            <div style={{textAlign: "center"}}>
              <Image 
                src="/onepager.svg" 
                width={0}
                height={0}
                sizes="100vw"
                className="responsive-image"
                style={{margin: "0px"}}
                alt="dust project"
              />
            </div>

            <div className="paragraph">The Dust Project is building an infinite autonomous world with provably scarce resources, immutable PvP & PvE rules, diverse clients, and real player-driven societies.</div>

            <ul>
              <li className="paragraph">The size of today's virtual worlds are bottlenecked by <a href="https://2b2t.miraheze.org/wiki/Queue">dependence on their server owner</a> to run and scale them. For example, Minecraft and Fortnite exist as fragmented server owner-hosted "islands" with &lt;100s of players each. With Open Scalability, Dust may eventually exist as a single continuous space with unlimited player capacity.</li>
              <li className="paragraph">Today's <a href="https://www.planetminecraft.com/servers/tag/anarchy/">anarchy virtual worlds</a>, in particular, foster <a href="https://2b2t.miraheze.org/wiki/Front_Page">massive social emergence</a> by aspiring to run indefinitely without resets or moderation. However, their server owner eventually stops hosting or forces updates and undermines the anarchy - causing player <a href="https://www.2b2t.org/2023-08-24/">outrage</a>. With Digital Physics, Dust will be ownerless - impossible to shutdown, reset, or force update - and may foster much more emergence much faster as a result.</li>
              <li className="paragraph"> Similarly, the resulting Digital Matter - Dust's resources with provably scarce supply and circulation - may accrue much more value much faster than they would otherwise. This creates natural incentives for early adoption, as late adopters have to compete instead of simply mining & farming for &lt;$0.01 in transaction fees. But resources can't be absolutely owned and require effort to keep against <a href="https://rust.facepunch.com/">Rust</a>-like PvP and PvE rules, so Dust remains fair for late adopters.</li>
              <li className="paragraph">Dust's initial design uses voxel physics (most performant) and interfaces with Minecraft-like clients (most familiar UX). We're contributing a high production browser client ourselves, and encouraging others to make more - especially for different platforms like mobile, console, and VR.</li>
              <li className="paragraph">Inside Dust, players will establish territories and program them with Extensions & Integrations. This will let their creations freely interface with the entire internet and economy, instead of remaining isolated as they are today due to regulation and gatekeeping. Envision it feeling like Earth - countless places each with their own social rules but sharing the same spacetime, matter, and physics - which billions inhabit together.</li>
            </ul>

            <div className="paragraph">The answer to Bitcoin's question of true digital scarcity evolved over 15 years from e-cash for idealists to payments for unregulated activity to digital gold for government reserves. Similarly, the answer that emerges to Dust's question promises to surprise.</div>

            <strong className="paragraph">As players establish and program territories, societies emerge and break out, organizations contribute compute and clients, resources accrue value and start rushes and wars... Dust becomes increasingly consequential. At what point is Dust no longer a virtual world but rather an expansion of the real world? Does it still remain a game? Or does it become a fully fledged parallel universe with a civilization of its own?
            </strong>

            <SectionHeading 
              title="Stages of Deployment" 
            />
            
            <div className='subheading'>1. Transmigration Tools</div>
            <div className="paragraph">
              The first stage of Dust begins today, May 19 2025. During this stage, we will iteratively deploy a client and creator tools for territory programming.
              Initially, it requires motivation to thrive in Dust. Onboard by bridging funds and figure out survival.
            </div>
            <div className="paragraph">
              The world is early and unsettled, so survive by: mining and crafting tools, farming crops, energizing a force field to establish territory, and placing a bed inside. Watch the video below and join the Discord community for help.
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/VOJpXo8Yr6I?si=nJizs2g4DcKcQgDA"></iframe>

            <div className="paragraph">
              Those who survive, get a head start. Build something uniquely yours in your territory and program it however you want. This requires using command-line interfaces and there's few examples to learn from, but the Discord community will help.
            </div>

            <div className="paragraph">
              Over the coming months, Dust will become inviting for all:
              <ul>
                <li>One-click onboarding with abstracted gas.</li>
                <li>Native apps for maps, digital matter supply circulation, and player guidance.</li>
                <li>Player-built apps and territories that create fun things to do in this open world.</li>
                <li>UIs for basic territory configuration and documentation for custom territory programming.</li>
                <li>Increasingly fewer bugs, better UX, and deeper mechanics.</li>
              </ul>
            </div>

            <div className='subheading'>2. Eden Configuration</div>
            <div className="paragraph">During the second stage, the protocol upgrade process will become formalized and hardened. Digital Physics & Matter will make a highly credible commitment to support emergence & value accrual.</div>
            <div className="paragraph">The upgrade process will allow evolution towards increasingly <a href="https://maxhodak.com/downloads/gamephysics.pdf">natural rules</a>, fostering increasingly sophisticated societies and lifeforms as a result, while maintaining all existing player investments.</div>

            <div className='subheading'>3. TVC Automaton</div>
            <div className="paragraph">
              During the third stage of Dust, Open Scalability challenges will be solved so Dust expands infinitely to accommodate everyone that wants to join. 
              At this point, Dust will have a great client, great creator tools, a protocol upgrade process everyone can believe in, and open infrastructure that can limitlessly scale.
            </div>


          </div>
        </div>
      );
};

export default RaisingDust;