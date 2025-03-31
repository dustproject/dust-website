import React from 'react';
import "/styles/globals.css";

const ImageGallery = ({ imageSet = 'images' }) => {
    const images = [
    {
        src: "/images/fig1/speech.svg",
        alt: "Speech",
        caption: "(A) Speech enables initial information sharing"
    },
    {
        src: "/images/fig1/writing.svg",
        alt: "Writing & Printing Press",
        caption: "(B) Writing and printing press allow cheap and accurate information dissemination"
    },
    {
        src: "/images/fig1/engines.svg",
        alt: "Engines & Electricity",
        caption: "(C) Engines and electricity facilitate instant information transmission across distances"
    },
    {
        src: "/images/fig1/computers.svg",
        alt: "Transistors & Computers",
        caption: "(D) Transistors and computers enable multimedia information processing"
    },
    {
        src: "/images/fig1/internet.svg",
        alt: "Internet & Servers",
        caption: "(E) Internet and servers facilitate many-to-many information exchange"
    },
    {
        src: "/images/fig1/future.svg",
        alt: "Future Tools",
        caption: "(F) Emerging tools will bring cheap immersive information processing"
    }
    ];
    
    const images2 = [
    {
        src: "/images/fig2/tribes.svg",
        caption: "(A) Oral myths bind tribes. Thousands build Göbekli Tepe together. A center for myth and ritual, not shelter or food."
    },
    {
        src: "/images/fig2/states.svg",
        caption: "(B) Tribes give way to states. The Qin Dynasty used script to organize millions around ideas of law and currency."
    },
    {
        src: "/images/fig2/industry.svg",
        caption: "(C) States develop industry and billions organize for mass production around ideas of property and profit."
    },
    {
        src: "/images/fig2/cyberspaces.svg",
        caption: "(D) Billions inhabit cyberspaces with their own rules (social graphs & physical spaces), personas (curated selves & fantasy roles), and value systems (likes & rare weapons)."        
    }
    ];
    
    const images3 = [
    {
        src: "/images/fig3/druids.png",
        caption: "(A) Myths die with shamans, when Druid elders were eliminated by the Romans, sacred groves animated with spirits became mere forests."
    },
    {
        src: "/images/fig3/revolution.png",
        caption: "(B) Laws and property die with states, the 1917 Russian Revolution invalidated centuries of aristocratic land claims overnight."
    },
    {
        src: "/images/fig3/secondlife.jpg",
        caption: "(C) Cyberspaces die with corporate platforms, when Linden Lab changed Second Life's banking policies in 2007, a virtual bank run destroyed millions in virtual property value."
    }
    ];
    
    const images4 = [
    {
        src: "/images/fig4/egyptian.svg",
        caption: "(A) Ancient civilization explained the sun's movement through myths of Egyptian gods traveling across the sky."
    },
    {
        src: "/images/fig4/kepler.svg",
        caption: "(B) Kepler's mathematical statements didn't require belief in myth, and correctly predicted planetary motion every single time."
    },
    {
        src: "/images/fig4/fiction.svg",
        caption: "(C) Fiction-motivated ideas - rainmaking rituals to alter weather, imitative wings to achieve flight, and trepanation to release evil spirits - all failed to produce results."
    },
    {
        src: "/images/fig4/engineering.svg",
        caption: "(D) Engineers in war applied finite field algebra, hydrodynamics, and orbital mechanics to successfully create enigma codes, atomic submarines, and missiles."
    }
    ];

    const defaultCaptions = {
      images: "Figure 1. The progressive development of information technology.",
      images2: "Figure 2. The corresponding increase in scale and sophistication of shared fictions.",
      images3: "Figure 3. The dissolution of shared fictions when belief in the attesting authority collapses.",
      images4: "Figure 4. The transition from fictional to mathematical representation of physical reality."
    };
  
    // Select which image set to use based on the prop
    let selectedImages;
    switch (imageSet) {
      case 'images2':
        selectedImages = images2;
        break;
      case 'images3':
        selectedImages = images3;
        break;
      case 'images4':
        selectedImages = images4;
        break;
      default:
        selectedImages = images;
    }
  
    return (
        <div>
          <div className="figuretitle">
            {defaultCaptions[imageSet]}
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            overflowX: 'auto', 
            justifyContent: 'space-between', 
            width: '100%',
          }}>
            {selectedImages.map((image, index) => (
              <div key={index} style={{ 
                flex: '1 1 0px',
                padding: '0 2%'
              }}>
                <div style={{ 
                  marginBottom: '8px',
                  height: '120px',  // Fixed height for all image containers
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start' // Align images to top of container
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div 
                className="captionText"
                style={{ 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textAlign: 'left',
                }}>
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

const SingleImage = ({ 
  title = "Default Title", 
  imageSrc = "/placeholder.jpg", 
  imageAlt = "Image", 
  caption = "Default caption",
  captionTwo = null,
  href = null,
  linkText = "Read more"
}) => {
  const isMobileWidth = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
  
  return (
    <>
      <div 
        className="figuretitle"
        style={{ 
          width: '90%',
          display: 'block',
          textAlign: 'left',
        }}>
          {title}
      </div>
  
      <div style={{ 
        width: isMobileWidth ? '100%' : '50%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      <div 
        className="captionText"
        style={{ 
          width: '90%',
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
            {/* {href && (
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="readMore"
              >
                More ›
              </a>
            )} */}
          </div>
        </div>
      );
};

const AcademicManifesto = () => {
    return (
        <div className="wrapper">
          <div className="container">
            
            {/* <div className="title">Foundations for DUST</div> */}
            <div className="title">From Escapism to Realism: Manifesting Universes with Idealized Mathematical Objects</div>


            <div className='authorInfo'>
              Written by Zuse. Foundational ideas from
              {" "}
              <a href="https://drive.google.com/drive/folders/1Qron4DBr7xfq3iM3YpaLEmdSwhDNPvJf?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Generative Anthropology<sup>1</sup>
              </a> (Eric Gans, Peter Thiel, Venkatesh Rao),
              {" "}
              <a href="https://drive.google.com/drive/folders/1Vn5i9m3VbVKlO8BuRO10OUf_sSzWVqzB?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Escapism Critique<sup>2</sup>
              </a> (Guy Debord, Jean Baudrillard, Neil Postman, Byung Chul Han),
              {" "}
              <a href="https://drive.google.com/drive/folders/1xXQ_krIM8D1Py06xC9PWZ7fvg6fqTEEm?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Mathematical Philosophy<sup>3</sup>
              </a> (Max Tegmark, Eugene Wigner, David Lewis),
              {" "}
              <a href="https://drive.google.com/drive/folders/165mHJ39s-WWyIhC0DA8FI97z68KpS0wb?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Simulation Theory<sup>4</sup>
              </a> (David Chalmers, Nick Bostrom),
              {" "}
              <a href="https://drive.google.com/drive/folders/1bbDhb7SWNwlgPtgnnghKgZc-YKx6w4oH?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Programmable Cryptography<sup>5</sup>
              </a> (Gubsheep, Nick Szabo, Timothy May),
              {" "}
              <a href="https://drive.google.com/drive/folders/1DFpu3VzWIWiInuhke3_UcTIIAI_RtUN6?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Cryptoeconomic Commons<sup>6</sup>
              </a> (Ludens, Vitalik Buterin, Josh Stark), and
              {" "}
              <a href="https://drive.google.com/drive/folders/1-7u_O8Z9jhaGhRBuAf0jG23s4NI7iRI6?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Substrate Independence Futurism<sup>7</sup>
              </a> (Robin Hanson, Hans Moravec, Greg Egan).
            </div>

            <div className="abstractBox">
              <div className="abstractHeading">Abstract</div>
              <div className="abstractText">
                With progressing information technology, humans increasingly escape into shared fictions that, unlike physical reality, depend on belief to exist. Idealized mathematical objects, if achieved through cryptographic techniques, offer an alternative due to their objective independent existence. These objects would autonomously-operate, maintain their own secrets, and grow unbounded in complexity. They may transform shared fictions into objectively real universes that are enriching for humans to inhabit rather than escapist.
              </div>
            </div>
      
            <SectionHeading 
              title="I. Escapist Fictions" 
              href="https://drive.google.com/drive/folders/13CbR5pur5xuAbMAJM3wiu58uhZ_eQ10K?usp=sharing" 
            />
            
            <div className="paragraph">
            Objective physical reality, governed by immutable natural laws, exists independently of human belief - gravity works whether we acknowledge it or not. This provides a robust foundation to exist on, but at the cost of customization. We cannot edit physical laws to spawn a metallic element with an ideal supply curve and fair distribution across Earth.
            </div>
      
            <div className="paragraph">
            Unlike immutable physical laws, shared fictions are customizable to our choosing. As shown in Figures 1 and 2, as information technologies have expanded our capacity to construct shared fictions, we have increasingly escaped the "state of nature" to inhabit them
            <sup><a href="https://drive.google.com/drive/folders/1Qron4DBr7xfq3iM3YpaLEmdSwhDNPvJf?usp=drive_link" target="_blank" rel="noopener noreferrer">1</a></sup>.
            </div>
      
            <div className="paragraph">
            Unlike objective physical reality, shared fictions depend on belief in an attesting authority. When this authority falters, as shown in Figure 3, the shared fiction dissolves - often with devastating consequences. Shared fictions offer customization at the cost of robustness.
            </div>
      
            <div className="imagePlaceholder">
                <ImageGallery imageSet={`images`}/>
            </div>
      
            <div className="imagePlaceholder">
                <ImageGallery imageSet={`images2`}/>
            </div>
      
            <div className="imagePlaceholder">
                <ImageGallery imageSet={`images3`}/>
            </div>
      
            <div className="paragraph">
            Shared fictions will become increasingly sophisticated - generative simulations connected to our sensorium with AI and BCI technologies. However, they will always require escapism to inhabit because they depend on belief to exist and are never unanimously accepted like physical reality. As a result of the escapism, fictions remain dissolvable, risky to invest in, and fundamentally separate from reality
            <sup><a href="https://drive.google.com/drive/folders/1Vn5i9m3VbVKlO8BuRO10OUf_sSzWVqzB?usp=drive_link" target="_blank" rel="noopener noreferrer">2</a></sup>.
            </div>
      
            <SectionHeading 
              title="II. Mathematical Platonism" 
              href="https://drive.google.com/drive/folders/1sMYIAQFJc15ayAu_6SXPItwFvuKXP3i6?usp=sharing" 
            />
      
            <div className="paragraph">
            Mathematical platonism offers a solution. It asserts that mathematical objects exist objectively and independently of belief; this allows them to achieve unanimous acceptance on par with physical reality
            <sup><a href="https://drive.google.com/drive/folders/1xXQ_krIM8D1Py06xC9PWZ7fvg6fqTEEm?usp=drive_link" target="_blank" rel="noopener noreferrer">3</a></sup>
            . As shown in Figure 4, these objects have long been used to represent physical reality and successfully act within it, often when shared fictions failed.
            </div>
    
            <div className="imagePlaceholder">
              <ImageGallery imageSet={`images4`}/>
            </div>
            
            <div className="paragraph">
            Beyond mere representation, mathematical objects have even begun manifesting new aspects of reality. Hash functions assign IDs to each unique piece of  information - like fingerprints everyone sees, with no shared fictions necessary. Digital signatures prove information authorship with more unforgeability than physical signatures. Bitcoin, using these techniques, created a scarcity that objectively exists outside of physical spacetime and independently of belief in any attesting authority.
            </div>
      
            <div className="paragraph">
            Mathematics has shown 'unreasonable effectiveness' in both representing and manifesting new aspects of reality. Taking this to its logical conclusion reveals a profound implication: all mathematically-consistent universes may objectively exist, with our physical spacetime merely being the particular structure we currently observe. We may eventually manifest the rest, and safely inhabit the ones of our choosing without requiring escapism
            <sup><a href="https://drive.google.com/drive/folders/165mHJ39s-WWyIhC0DA8FI97z68KpS0wb?usp=drive_link" target="_blank" rel="noopener noreferrer">4</a></sup>
            . However, the mathematical objects we can currently represent are too primitive for such complexity and scale.
            </div>
      
            <SectionHeading 
              title="III. Idealized Mathematical Objects" 
              href="https://drive.google.com/drive/folders/1ikr4Rylvk-nMFxJxdFb89lUwUlllMffY?usp=sharing" 
            />
      
            <div className="paragraph">
            Mathematical objects exist abstractly, so we represent them symbolically. Written language enabled static symbolic representation, and electrical encoding advanced it into dynamic symbolic representation.
            </div>
      
            <div className="paragraph">
            Through this advancement, communication reached its idealized endstate. Networked computing evolved communication from static text letters to the dynamic multimedia web of today, growing shared fictions into the size of entire cyberspaces.
            </div>
      
            <div className="paragraph">
            Cryptographic techniques, as shown in Figure 5, applied to networked computing are now similarly evolving mathematical objects from their static forms to their dynamic, idealized endstate. These idealized mathematical objects, if achieved, would autonomously self-operate, maintain their own secrets, serve everyone neutrally, and grow to arbitrary complexity and scale
            <sup><a href="https://drive.google.com/drive/folders/1bbDhb7SWNwlgPtgnnghKgZc-YKx6w4oH?usp=drive_link" target="_blank" rel="noopener noreferrer">5</a></sup>.
            </div>
      
            <div style={{
              width: "fit-content",
              height: "fit-content",
              marginTop: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f6"
            }}>
              <SingleImage 
                title="Figure 5. The cryptography development tree."
                imageSrc="/images/cryptography.png"
                caption="Fully-homomorphic encryption allows computation over a single source of private data without leaking the data or the output of the computation. Multi-party computation allows computation over multiple sources of private data without leaking the data but revealing the output of the computation. zkSNARKs prove correct execution of a computation on inputs kept private by the computer's owner. Witness encryption encrypts a message that can only be decrypted with a proof of a specific computation. Obfuscation allows a party to execute encrypted computation and produce correct outputs without seeing inputs or even the program. From gubsheep's 2024 essay, "
                href="https://0xparc.org/blog/programmable-cryptography-1"
                linkText="Programmable Cryptography"
              />
            </div>
      
            <SectionHeading 
              title="IV. Manifesting Realism" 
              href="https://drive.google.com/drive/folders/1xPzLZy9cpWaeg7vZju8PJpOciYPStpfw?usp=sharing" 
            />
      
            <div className="paragraph">
            Today, billions have escaped to cyberspaces - shared fictions dependent on corporate authorities. This dependence restricts cyberspaces to malleable business logic that only the corporation can upgrade or scale, where user actions remain temporary event logs that cannot connect to their broader lives without corporate permission. Removal of this dependence, and thus requirement for escapism, would make cyberspaces enriching to reality rather than separate from it.
            </div>
      
            <div className="paragraph">
            As shown in Figure 6, idealized mathematical objects operate as immutable laws existing independently of authority. Users would collectively run, upgrade, and scale the resulting cyberspace themselves, with every action becoming a permanent, objectively verifiable record that permissionlessly connects with their broader lives
            <sup><a href="https://drive.google.com/drive/folders/1DFpu3VzWIWiInuhke3_UcTIIAI_RtUN6?usp=drive_link" target="_blank" rel="noopener noreferrer">6</a></sup>
            . Cyberspaces would transition from escapist diversions to enriching expansions of reality.
            </div>
      
            <div style={{
              width: "fit-content",
              height: "fit-content",
              marginTop: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f6"
            }}>
                <SingleImage 
                  title="Figure 6. A mathematical cyberspace for a realist experience."
                  imageSrc="/images/cyberspace.svg"
                  caption="Servers need administrative control, corporations have financial and legal constraints, and computation requires data visibility. Truly public or truly private computation is not possible. As a result, corporate servers can only implement malleable business logic. This malleability means digital symbols cannot objectively achieve the properties of physical matter: non-fungibility, scarcity, embodiment, and intrinsic value. Furthermore, only corporations can validate state and actions within a cyberspace - Twitter can assert your follower count, Bob cannot. As a result, only the corporation can implement upgrades or operate servers, and users cannot freely exchange data or assets beyond the system's boundaries without the corporation's permission."
                  captionTwo="(B) An idealized mathematical object operates as Digital Physics, man-made laws which are immutable, unbreakable, and contain unleakable secrets. They perform both truly public and truly private computation. This grants physical properties to digital symbols, and may culminate in creating Digital Matter itself: nonfungible, scarce, embodied, and intrinsically valuable within Digital Physics. 
                  (C) (D) Digital Physics and Matter create credibly neutral rules and systems of value inside of which user actions become permanent, objectively verifiable records that permissionlessly connect to their broader lives.
                  For example, users within the cyberspace can: configure a building door to only open for proof-holders of posting on a subreddit, or secure a real loan using an emerald ore chest as collateral.
                  (A) Beyond participation, users can even contribute resources and propose upgrades to the cyberspace itself."
                />
            </div>
      
            <div className="paragraph">
            As societies emerge in a mathematical cyberspace and enrich users' broader lives, Digital Matter - required for all user actions - accrues value. This value incentivizes stakeholders to contribute computational resources and implement upgrades. Through these collective improvements, the mathematical cyberspace evolves towards its idealized endstate of manifesting an entire universe. One that is objectively real, sensorially equivalent, infinitely imaginable, and enriching for humans to inhabit
            <sup><a href="https://drive.google.com/drive/folders/1-7u_O8Z9jhaGhRBuAf0jG23s4NI7iRI6?usp=drive_link" target="_blank" rel="noopener noreferrer">7</a></sup>.
            </div>
      
      
            {/* <div className="footer">
              Join 
              {' '}
              <a 
                href={"https://discord.gg/J75hkmtmM4"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              {' '}
               for further discussion.
            </div> */}
          </div>
        </div>
      );
};

export default AcademicManifesto;