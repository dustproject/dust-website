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
      <div style={{ 
        width: isMobileWidth ? '100%' : maxWidth,
        margin: '0 auto',
        textAlign: 'center',
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
              Learning From Dark Forest, MUD, and Biomes to Realize Virtual Worlds
            </div>
            <SectionHeading 
              title="How We Got Here" 
            />
            <div style={{textAlign: "center"}}>
              <Image 
                src="/evolution.svg" 
                width={0}
                height={0}
                sizes="100vw"
                className="responsive-image-two"
                style={{margin: "0px"}}
                alt="how we got here"
              />
            </div>

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
              Countless <strong>Player-Built Extensions</strong> created social mechanisms on top of Dark Forest's physics.
              With <a href="https://astralcolossus.xyz/">The Astral Colossus</a>, 50 strangers pooled their resources within 24 hours to a shared spaceship, governed by a player-created smart contract, to gain strategic advantages.
            </div>
            <SingleMedia imageSrc="/darkforest.svg" />
            <div className='subheading'>MUD</div>
            <div className="paragraph">
              <a href="https://mud.dev/">MUD</a> (2022) and its services progressed Digital Physics from demonstration to production. It became faster to ship complex Digital Physics, build clients for players to interact with it, and interface with Player-Built Extensions.
            </div>
            <div className="paragraph">
              Lattice, the developers of MUD, demonstrated these claims by building <a href="https://opcraft.mud.dev/">OPCraft</a> within weeks, and extensions like the <a href="https://x.com/SupremeLeaderOP">Supreme Leader</a> emerged within days of launch. Many took notice, and a vibrant community of developers and designers exploring Digital Physics was <a href="https://aw.network/">formed</a>.
            </div>
            <div className="paragraph">
              Beyond taking Dark Forest's discoveries into production, MUD has begun enabling new properties like <strong>Open Scalability</strong>. Instead of depending on a single server owner to run and scale a world, individual players and organizations can contribute compute and do so themselves, limitlessly.
            </div>
            <SingleMedia 
              videoSrc="/quarry.mp4"
            />
            <div className='subheading'>Biomes</div>
            <div className="paragraph">
              <a href="https://biome1.biomes.aw/map">Biomes</a> (2024) was developed with MUD and advanced the notions of Digital Physics and Player-Built Extensions introduced by Dark Forest.
            </div>
            <div className="paragraph">
              When there is Digital Physics, there is also <strong>Digital Matter</strong>. The provably scarce supply of ores, crops, fluids, energy, and other resources that circulate according to the Digital Physics simulation rules.
            </div>
            <div className="paragraph">
              Bitcoin was an anon-created currency that used cryptography to enforce supply and transfer rules, which allowed it to accrue {">"}$2T in value. This wouldn't have happened if Bitcoin was managed by the anon's server. Similarly, Biomes hinted that Digital Matter may accrue far more value far faster than "monopoly resources" managed by a studio's server.
            </div>
            <div className="paragraph">
              While large MMOs foster economic activity, Biomes saw thousands of dollars spent by players in computation fees to mine resources with {"<"}100 daily active users. This was driven by the credible commitment on tamper-proof supply made by Digital Matter, rather than players desiring status in a large social graph.
            </div>
            <div className="paragraph">
              Countless <strong>Player-Built Integrations</strong> defined the behavior of objects like chests, force fields, and doors to integrate social mechanisms directly into the world. <a href="https://x.com/0xwasdcorp/status/1849907628031324405">WasdSwap</a> programmed chests into shops to generate real money revenue for their guild.
            </div>
            <SingleMedia imageSrc="/biomes.svg" />
            <div className="paragraph">
            </div>
            <div className="paragraph">
              Observing Dark Forest, MUD, and Biomes reveals many non-obvious consequences. 
              Open Scalability surpasses server architecture limitations to create shared worlds which can accommodate everyone. 
              Digital Physics & Digital Matter make credible commitments to support emergence & value accrual which is disproportionally larger than the size of the player base.
              Player-Built Extensions & Player-Built Integrations enable the emergent creations to interface with the broader internet and economy instead of remaining confined to the virtual world. 
            </div>

            <SectionHeading 
              title="Our Big Question" 
            />
            <div className="paragraph">
            Primitive virtual worlds have been around for a while. It's pretty clear that they will grow in sophistication and play an increasingly larger role heading into the future, and at some point may consume almost the entirety of where humans spend their time.            </div>
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

            <div className="paragraph" style={{marginTop: "1rem"}}>To answer our big question, Dust Project is building an infinite autonomous world with a tamper-proof resource supply, immutable PvP & PvE rules, diverse clients, and real player-driven societies.</div>

            <ul>
              <li className="paragraph">The size of today's virtual worlds are bottlenecked by <a href="https://2b2t.miraheze.org/wiki/Queue">dependence on their server owner</a> to run and scale them. For example, Minecraft and Fortnite exist as fragmented server owner-hosted "islands" with &lt;100s of players each. With Open Scalability, Dust may eventually exist as a single continuous space with unlimited player capacity.</li>
              <li className="paragraph">Today's <a href="https://www.planetminecraft.com/servers/tag/anarchy/">anarchy virtual worlds</a>, in particular, foster <a href="https://2b2t.miraheze.org/wiki/Front_Page">massive social emergence</a> by aspiring to run indefinitely without resets or moderation. However, their server owner eventually stops hosting or forces updates and undermines the anarchy - causing player <a href="https://www.2b2t.org/2023-08-24/">outrage</a>. With Digital Physics, Dust will be ownerless and autonomous - impossible to shutdown, reset, or force update - and may foster much more emergence much faster as a result.</li>
              <li className="paragraph"> Similarly, the resulting Digital Matter - Dust's resources with provably scarce supply and circulation - may accrue much more value much faster than they would otherwise. This creates natural incentives for early adoption, as late adopters have to compete instead of simply mining & farming for &lt;$0.0001 in computation fees. But resources can't be absolutely owned and require effort to keep against <a href="https://rust.facepunch.com/">Rust</a>-like PvP and PvE rules, so Dust remains fair for late adopters.</li>
              <li className="paragraph">Dust's initial design uses voxel physics (most performant) and interfaces with Minecraft-like clients (most familiar UX). We're contributing a high production browser client ourselves, and encouraging others to make more - especially for different platforms like mobile, console, and VR.</li>
              <li className="paragraph">Inside Dust, players will establish territories and program them with Extensions & Integrations. This will let their creations freely interface with the entire internet and economy, instead of remaining isolated as they are today due to regulation and gatekeeping. Envision it feeling like Earth - countless places each with their own social rules but sharing the same spacetime, matter, and physics - which billions inhabit together.</li>
            </ul>

            <div className="paragraph">
              <strong>
                As players establish and program territories, societies emerge and break out, organizations contribute compute and clients, resources accrue value and start rushes and wars... Dust becomes increasingly consequential. At what point is Dust no longer a virtual world but rather an expansion of the real world? Does it still remain a game? Or does it become something akin to a fully fledged parallel universe with a civilization of its own?
              </strong>
            </div>

            <div className="paragraph">The answer to Bitcoin's question of true digital scarcity evolved over 15 years from e-cash for idealists to payments for unregulated activity to digital gold for government reserves. Similarly, the answer that emerges to Dust's question promises to surprise.</div>


            <SectionHeading 
              title="Stages of Deployment" 
            />
            
            <div className='subheading'>1. Transmigration Tools</div>
            <div className="paragraph">
              The first stage of Dust begins today, May 26 2025. During this stage, we will iteratively deploy a client and creator tools for territory programming.
            </div>

            <div className="paragraph">
              The project is in heavy development. The world is harsh and unsettled.
              This presents an opportunity for the motivated to get a head start.
            </div>

            <div className="paragraph">
            Onboard by bridging funds for computation fees and try to survive. 
            Use the survival guide, watch the walkthrough video, and <a href="https://discord.gg/J75hkmtmM4">join the Discord community</a> for help.
            </div>

            {/* <div className="video-container" style={{justifySelf: "center", width: "80%", marginBottom: "2rem"}}>
              <iframe 
                src="https://www.youtube.com/embed/5mhTp3RWUts?si=Tzfv1WmpsViZM2ai"
              ></iframe>
            </div> */}

            <div style={{textAlign: "center"}}>
              <Image 
                src="/survival.svg" 
                width={0}
                height={0}
                sizes="100vw"
                style={{width: "80%"}}
                className="responsive-image-three"
                alt="survival"
              />
            </div>



            <div className="paragraph" style={{marginTop: "1rem"}}>
              Those who survive, get a head start.
              Establish and program your territory into something uniquely yours.
              This requires using command-line interfaces and there's few existing examples to learn from, but the <a href="https://discord.gg/J75hkmtmM4">Discord community</a> will help.
            </div>

            <div className="paragraph">
              Over the coming months, Dust will become inviting for all:
              <ul>
                <li>One-click onboarding with abstracted computation fees.</li>
                <li>Player-built apps and territories that create fun things to do in this open world.</li>
                <li>UIs for basic territory configuration and documentation for custom territory programming.</li>
                <li>Increasingly fewer bugs, better UX, and deeper mechanics.</li>
              </ul>
            </div>

            <div className='subheading'>2. Eden Configuration</div>
            <div className="paragraph">During the second stage, the protocol upgrade process will become formalized and hardened. Digital Physics & Matter will make a highly credible commitment to support emergence & value accrual.</div>
            <div className="paragraph">The upgrade process will allow evolution towards increasingly <a href="https://maxhodak.com/downloads/gamephysics.pdf">natural rules</a>, fostering increasingly sophisticated societies and lifeforms as a result, while maintaining all existing player investments along the way.</div>

            <div className='subheading'>3. TVC Automaton</div>
            <div className="paragraph">
              During the third stage of Dust, Open Scalability challenges will be solved so Dust can expand infinitely and accommodate everyone that wants to join.
              For those aware of <a href="https://docs.optimism.io/superchain/superchain-explainer">Optimism's Superchain</a>, imagine something like a Supergrid with chunks run by various organizations.
            </div>
            <div className="paragraph">
              At this point, Dust will have a great client, great creator tools, a protocol upgrade process everyone can believe in, and open infrastructure that can limitlessly scale.
            </div>


          </div>
        </div>
      );
};

export default RaisingDust;