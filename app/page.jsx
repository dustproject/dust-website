import React from 'react';
import "/styles/globals.css";
import Link from "next/link";

const projectsTrack = {
  title: "Projects",
  categories: [
    {
      title: "Virtual World Power Use",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Composable dApps",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Future of Coordination",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Artificial Life",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
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
  categories: [
    {
      title: "Applied Cryptography",
      ourBenefit: "Retrofitting new cryptography into existing social systems requires stakeholder permission. On the other hand, an objective and independently existing universe cannot exist without cryptography and critically depends on advancements in autonomous encrypted compute.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Sandbox Design",
      ourBenefit: "Sandbox design applied to traditional virtual worlds, operating on corporate servers, is limited in its impact. The world's independence and longevity are limited by the server's administrative controls and the corporation's financial constraints. Sandbox design applied to an independently existing universe is limitless in its impact as the universe outlives the designer. It's critical for ensuring the universe remains a sustainable place for users to inhabit, and robust to extreme activity.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
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
  categories: [
    {
      title: "Cryptoeconomic Commons",
      ourBenefit: "Cryptoeconomic commons have previously incentivized a collectively secured, open financial system based on tamper-proof IOUs and value-accruing assets. To go beyond finance, they can incentivize the collective operation, improvement, and scaling of an entire universe based on tamper-proof physics and value-accruing matter.",
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
      ourBenefit: "Digital value in the form of scarce and nonfungible tokens, enforced by consensus and cryptography, have been broadly understood. Digital matter, the final form of digital value - with scarcity, nonfungibility, embodiment, and behavior - needs public advocacy to be understood.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
      isNew: true
    },
    {
      title: "Thermoeconomics",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
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
  title: "Products",
  categories: [
    {
      title: "Web Apps",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "VR Apps",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
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
  categories: [
    {
      title: "Metaphysics",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
    {
      title: "Anthropology",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    }
  ]
};

const TrackSection = ({ track }) => {
  const { title, categories } = track;

  const renderText = (text) => {
    if (!text) return null;
    
    // If the text includes our special marker
    if (text.includes("{{JENSEN_HUANG_LINK}}")) {
      const parts = text.split("{{JENSEN_HUANG_LINK}}");
      return (
        <>
          {parts[0]}
          <a 
            href="https://drive.google.com/file/d/1yhnHCOl4nvKLGf8UkpZvNpw1qi5m5BLP/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Jensen Huang
          </a>
          {parts[1]}
        </>
      );
    }
    
    return text;
  };

  return (
    <div>
      <div className="track-header">
        <div className="columnHeading">{title}</div>
        <Link href={`/${title.toLowerCase()}`}  className="contribute-link">
          JOIN →
        </Link>
      </div>

      <div className="table-container">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div className="tableHeaderCell">
              {category.title}
              {category.isNew && <span className="badge">Urgent Need</span>}
            </div>
            <div className="tableCell">
            {renderText(category.ourBenefit)}
              <div className='listBox'>
                <div className='key-works-label'>
                  ECOSYSTEM MAPPING
                </div>
                <div className="key-works-list">
                  {category.keyWorks.map((work, workIndex) => (
                    <div key={workIndex} className="key-work-item">
                      <li className="abstractText">{work}</li>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className='homepage-container'>
      <div>
        <div className='subtitle'>
          The Dust Project is assembling a {" "}
          <a href='https://drive.google.com/file/d/1KafnnzZYxU9o4sf3e8q6uk-2ekjESlAZ/view?usp=sharing'>credibly neutral</a>
          {" "}
          coalition for <strong>manifesting universes that expand objective reality, and the scope of human life, rather than perpetuating escape from it</strong>.
          This requires diverse contributions beyond what any single entity can provide, and offers substantial benefits to contributors in return.
          The coalition consists of five key efforts, each suited for different kinds of contributors:
        </div>
        <ul className='subtitle' style={{marginTop: "12px", marginBottom: "0", lineHeight: "150%"}}>
          <li>
            <strong>Premise:</strong>
            {" "}
            Conduct public discourse on the rise of human escapism and the potential of idealized mathematical objects to offer a return to realism. 
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Research:</strong>
            {" "}
            Develop the idealized mathematical object - autonomously operating laws with an objective independent existence - defining the universe's physics.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Economics:</strong> Establish the universe's matter as a system of value, which grows in demand with the universe's population. 
            Design open incentives using this value-accruing matter for the advancement of the universe.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Products:</strong> 
            {" "}
            Build commercial products that consumers enjoy using to immersively inhabit the universe.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Projects:</strong> Grow societies and lifeforms within the universe that outlive their creators and freely connect to our broader lives.
          </li>
        </ul>
        <div style={{paddingTop: "24px", display: "flex", flexDirection: "column", gap: "2em"}}>
          <TrackSection track={premiseTrack} />
          <TrackSection track={researchTrack} />
          <TrackSection track={economicsTrack} />
          <TrackSection track={productsTrack} />
          <TrackSection track={projectsTrack} />
        </div>
      </div>
    </div>
  );
}