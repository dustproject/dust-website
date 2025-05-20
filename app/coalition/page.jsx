import React from 'react';
import "/styles/globals.css";
import Link from "next/link";

const projectsTrack = {
  title: "Projects",
  subTitle: "Grow societies and lifeforms within the world that outlive their creators and connect to our broader lives.",
  categories: [
    {
      title: "MMO Systems",
      ourBenefit: "In traditional MMOs, users cannot surpass the studio - regardless of how much effort they invest - to create its primary trusted social and economic systems. They can only create untrusted, secondary systems. Their actions remain ephemeral logs within the studio's server, disconnected from their broader life. No such ceilings exist here: users become founders and their actions become permanent records, connected to their broader lives.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Mechanism Design",
      ourBenefit: "Mechanisms defined by smart contracts foster economic emergence by issuing financial assets and composing with each other, but they lack tangibility. Building them on a verifiable virtual environment makes them tangible and intuitive - \"token gating\" becomes a \"digital door opened by a pass holder,\" and an \"RWA\" becomes an \"asset backed by a protected digital ores reserve.\"",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Coordination Experiments",
      ourBenefit: "Social contracts governing coordination are limited in their granularity and complexity because they require manual enforcement by trusted authorities and cannot  verify physical actions. Algorithmic social contracts, enforced by smart contracts, can achieve unbounded granularity and complexity when operating within a verifiable virtual environment.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Artificial Life",
      ourBenefit: "Artificial life experiments aim to create virtual lifeforms that self-organize, adapt, and evolve. By birthing such lifeforms inside an independently existing universe, they gain sovereign existence, trading the products of their labor for memory space and computing cycles, growing or shrinking accordingly.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    }
  ]
};

const researchTrack = {
  title: "Research",
  subTitle: " Develop the idealized mathematical object - autonomously operating laws with an objective independent existence - defining the world's physics.",
  categories: [
    {
      title: "Applied Cryptography",
      ourBenefit: "Retrofitting new cryptography into existing social systems requires stakeholder permission. On the other hand, an objective and independently existing universe cannot exist without cryptography and critically depends on applying advancements in autonomous encrypted compute.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Numerical Simulation",
      ourBenefit: `Numerical simulation is traditionally a research tool. When applied to a universe, it becomes a lasting space inhabited by real societies with broad cultural consequences. Natural mathematical rules that process efficiently across networked computers, with relativistic effects between nodes, are critical for expressive, multiplayer, distributed simulations.`,
      // ourBenefit: `"The markets for climate simulation or molecular dynamics are so small, they can't afford very large investments. That's why you don't see large companies founded to do them. The video games market is extremely rare because it is simultaneously large and technologically demanding" - {{JENSEN_HUANG_LINK}}. Numerical simulation is traditionally a research tool. When applied to a universe, it becomes a lasting space inhabited by real societies with broad cultural consequences. Natural mathematical rules that process efficiently across networked computers, with relativistic effects between nodes, are critical for expressive, multiplayer, distributed simulations.`,
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "World Models",
      ourBenefit: "World foundation models are currently limited to creating ephemeral content. When used to generate new and expansive phenomena inside an independently existing universe, they ensure the universe is continuously engaging throughout its infinite lifespan.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    }
  ]
};

const economicsTrack = {
  title: "Economics",
  subTitle: "Establish the world's matter as a system of value, which grows in demand with the world's population. Design open incentives using this for the world's advancement.",
  categories: [
    {
      title: "Cryptoeconomic Commons",
      ourBenefit: "Cryptoeconomic commons have previously incentivized a collectively secured, open financial system based on tamper-proof IOUs and value-accruing assets. To go beyond finance, they can incentivize the collective operation and improvement of an entire universe based on tamper-proof physics and value-accruing matter.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Digital Value Advocacy",
      ourBenefit: "Digital value in the form of scarce and nonfungible tokens, enforced by consensus and cryptography, has been broadly understood. Digital matter, the final form of digital value - with scarcity, nonfungibility, embodiment, and behavior - needs public advocacy to be understood.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Thermoeconomics",
      ourBenefit: "Thermoeconomics, traditionally a heterodox school of economics with limited acceptance and practice, becomes fundamental to the design of digital matter as a system of value. A sound economic model based on matter and energy transformation rather than monetary exchange is critical for sustainable digital matter value accrual.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Sandbox Design",
      ourBenefit: "Sound sandbox design is critical for ensuring the universe remains sustainable to inhabit and robust to extreme activity. Unlike traditional virtual worlds operating on corporate servers - constrained by administrative controls and financial limitations - independently existing universes can outlive their designers.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ] 
    }
  ]
};

const productsTrack = {
  title: "Clients",
  subTitle: "Build commercial clients that people enjoy using to inhabit the world.",
  categories: [
    {
      title: "Web Apps",
      ourBenefit: "Traditionally, new web apps cannot be permissionlessly created for existing platforms because their logic, data, and users are controlled by gatekeepers. In contrast, an independently existing universe has no gatekeepers. Hence, high-production web apps can be permissionlessly created and safely monetized.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ] 
    },
    {
      title: "VR Apps",
      ourBenefit: "VR apps currently create immersive but ephemeral experiences. When used to permissionlessly interface with an independently existing universe, user activities become permanent, verifiable records with broad cultural consequences. Sensory immersion is complemented with consequential immersion.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    }
  ]
};

const premiseTrack = {
  title: "Premise",
  subTitle: "Conduct public discourse on the rise of human escapism and the potential of idealized mathematical objects to offer a return to realism.",
  categories: [
    {
      title: "Metaphysics",
      ourBenefit: "Metaphysical reasoning on the ontological status of platonic mathematical objects and their potential to expand objective reality can be further developed when cryptographic techniques realize mathematics' idealized form.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Anthropology",
      ourBenefit: "Anthropological studies of human escapism driven by information technology can be supplemented with the social implications of a potential return to realism driven by idealized mathematics.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    }
  ]
};

const TrackSection = ({ track, linkType = "join" }) => {
  const { title, subTitle, categories } = track;

  const renderLink = () => {
    switch (linkType) {
      case "join":
        return (
          <Link href={`/${title.toLowerCase()}`} className="contribute-link">
            JOIN →
          </Link>
        );
      case "alpha":
        return (
          <Link href="https://alpha.dustproject.org/" className="contribute-link">
            ENTER →
          </Link>
        );
      case "development":
        return (
          <span className="contribute-link disabled-link">
            
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="track-header" style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="columnHeading">{title}</div>
          {renderLink()}
        </div>
        <div style={{ width: '100%', marginTop: "0.5rem" }}>{subTitle}</div>
      </div>
      <div className="table-container">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div className="tableHeaderCell">
              {category.title}
              {category.isNew && <span className="badge">CURRENTLY SEEKING</span>}
            </div>
            <div className="tableCell">
                {category.ourBenefit}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div>
          {/* <div className='subtitle'>
            The Dust Project is assembling a {" "}
            <a href='https://drive.google.com/file/d/1KafnnzZYxU9o4sf3e8q6uk-2ekjESlAZ/view?usp=sharing'>credibly neutral</a>
            {" "}
            coalition for <strong>manifesting a universe that expands objective reality, and the scope of human life, rather than perpetuating escape from it</strong>.
            This requires diverse contributions beyond what any single entity can provide, and offers substantial benefits to contributors in return.
            The coalition consists of five key efforts, each suited for different kinds of contributors:
          </div> */}
          {/* <hr style={{border: "0.5px solid #e2e2e2", marginTop: "24px"}}/> */}
          <div style={{paddingTop: "24px", display: "flex", flexDirection: "column", gap: "2em"}}>
            <TrackSection track={premiseTrack} />
            <TrackSection track={researchTrack} linkType='development'/>
            <TrackSection track={economicsTrack} linkType='development'/>
            <TrackSection track={projectsTrack} />
            <TrackSection track={productsTrack} linkType='alpha'/>
          </div>
        </div>
      </div>
    </div>
  );
}