import React from 'react';
import "/styles/globals.css";
import Link from "next/link";

const exampleTrack = {
  title: "Projects",
  categories: [
    {
      title: "World Builders",
      theirBenefit: "Opportunity to create novel autonomous worlds with unique properties; access to cutting-edge tools and frameworks; collaboration with interdisciplinary teams spanning theory and implementation in a pioneering field.",
      ourBenefit: "Design and implementation of specific autonomous worlds; development of use cases that demonstrate key theoretical properties; creation of accessible examples showcasing our vision and its practical applications.",
      keyWorks: [
        "Autonomous Digital Ecosystems",
        "Self-Evolving Game Worlds",
        "Cryptographic Art Systems",
        "Decentralized Narrative Frameworks"
      ]
    },
    {
      title: "Domain Specialists",
      theirBenefit: "Opportunity to apply domain expertise to novel computational contexts; collaborate with technical teams to translate domain knowledge into autonomous worlds; pioneer new approaches in your field with mathematical guarantees.",
      ourBenefit: "Domain-specific knowledge and requirements; validation of autonomous world applications in specific contexts; expertise ensuring projects address meaningful problems and create valuable experiences and interactions.",
      keyWorks: [
        "Scientific Simulation Environments",
        "Creative Arts Platforms",
        "Financial Systems",
        "Governance Experiments"
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
        <Link href="/premise" className="contribute-link">
          CONTRIBUTE →
        </Link>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="tableHeaderCell">CATEGORY</div>
          <div className="tableHeaderCell">CONTRIBUTIONS NEEDED</div>
          <div className="tableHeaderCell table-header-cell-last">BENEFITS PROVIDED</div>
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
        <div className='subtitle' style={{paddingBottom: "40px"}}>
          Dust is a coalition.
        </div>
        <div>
          <TrackSection track={exampleTrack} />
        </div>
      </div>
    </div>
  );
}