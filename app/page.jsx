import React from 'react';
import "/styles/globals.css";
import Link from "next/link";

const projectsTrack = {
  title: "Projects",
  categories: [
    {
      title: "MMO Player Groups",
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
      title: "Programmable Coordination",
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
      title: "Embodied dApps",
      theirBenefit: "lorem ipsum.",
      ourBenefit: "lorem ipsum.",
      keyWorks: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ]
    },
  ]
};

const researchTrack = {
  title: "Research",
  categories: [
    {
      title: "Applied Cryptography",
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
      title: "World Models",
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
      title: "Numerical Simulation",
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
      title: "Sandbox Design",
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

const economicsTrack = {
  title: "Economics",
  categories: [
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
    },
    {
      title: "Cryptoeconomic Commons",
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
      title: "Digital Value Advocacy",
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
      title: "Anthropology",
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
      title: "Metaphysics",
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

  return (
    <div>
      <div className="track-header">
        <div className="columnHeading">{title}</div>
        <Link href={`/${title.toLowerCase()}`}  className="contribute-link">
          CONTRIBUTE →
        </Link>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="tableHeaderCell">CATEGORY</div>
          <div className="tableHeaderCell">CONTRIBUTIONS REQUIRED</div>
          <div className="tableHeaderCell table-header-cell-last">BENEFITS OFFERED</div>
        </div>

        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div className="table-row">
              <div className="tableCellTitle">{category.title}</div>
              <div className="tableCell">{category.ourBenefit}</div>
              <div className="tableCell">{category.theirBenefit}</div>
            </div>
            
            <div className="key-works-row">
              <div className="key-works-label">ALIGNED INITIATIVES</div>
              <div className="key-works-list">
                {category.keyWorks.map((work, workIndex) => (
                  <div key={workIndex} className="key-work-item">
                    <li className="abstractText">{work}</li>
                  </div>
                ))}
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
          The Dust Project is a proposed coalition for <strong>manifesting objectively real universes that expand human life rather than provide escape from it</strong>.
          This requires diverse contributions beyond what any single entity can provide, and offers substantial benefits to contributors in return.
          The coalition consists of five key efforts, each suited for different kinds of contributors:
        </div>
        <ul className='subtitle' style={{marginTop: "12px", marginBottom: "0", lineHeight: "150%"}}>
          <li>
            <strong>Premise:</strong>
            {" "}
            Conduct public discourse, debate, and analyses on the rise of human escapism and the potential of idealized mathematical objects to offer a return to realism. 
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Research:</strong>
            {" "}
            Develop the idealized mathematical object - autonomously operating laws with objective independent existence - defining the universe's physics.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Economics:</strong> Establish the universe's matter as a new system of value, which grows in demand with the universe's population. 
            Use this value-accruing matter to design open incentives for the advancement of the mathematical object.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Products:</strong> 
            {" "}
            Build commercial products that consumers can use to inhabit the universe and grow societies inside.
          </li>
          <li style={{marginTop: "8px"}}>
            <strong>Projects:</strong> Grow societies within the universe that outlive their creators and freely connect to our broader lives.
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