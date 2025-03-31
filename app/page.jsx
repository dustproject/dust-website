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

  // Define styles as objects
  const styles = {
    trackHeader: {
      backgroundColor: '#000828',
      color: 'white',
      padding: "1rem",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid black',
      borderLeft: '1px solid black',
      borderRight: '1px solid black'
    },
    tableContainer: {
      border: '1px solid #ddd'
    },
    tableHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 2fr',
      borderBottom: '1px solid #ddd'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 2fr',
      borderBottom: '1px solid #ddd'
    },
    keyWorksRow: {
      backgroundColor: '#f9f9f6',
      borderBottom: '1px solid #ddd',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
    },
    keyWorksLabel: {
      padding: '0.75rem',
      fontWeight: 'bold',
      fontSize: '12px',
      color: 'rgba(0, 0, 0, 0.5)',
      letterSpacing: '0.05em',
      borderRight: '1px solid #ddd',
    },
    keyWorksList: {
      padding: '0.75rem',
      maxHeight: '128px',
      overflowY: 'auto',
      backgroundColor: 'white',
    },
    keyWorkItem: {
      display: 'flex',
    }
  };

  return (
    <div>
      <div style={styles.trackHeader}>
        <div className='columnHeading'>{title}</div>
        <Link href="/premise" style={{color: "#ddd", textDecoration: "none", letterSpacing: "0.1rem"}}>
          CONTRIBUTE →
        </Link>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <div className='tableHeaderCell'>CATEGORY</div>
          <div className='tableHeaderCell'>CONTRIBUTIONS NEEDED</div>
          <div  className='tableHeaderCell' style={{borderRight: 'none' }}>BENEFITS PROVIDED</div>
        </div>

        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div style={{
              ...styles.row
            }}>
              <div className='tableCellTitle'>{category.title}</div>
              <div className='tableCell'>{category.ourBenefit}</div>
              <div className='tableCell'>{category.theirBenefit}</div>
            </div>
            
            <div style={styles.keyWorksRow}>
              <div style={styles.keyWorksLabel}>ALIGNED INITIATIVES</div>
              <div style={styles.keyWorksList}>
                {category.keyWorks.map((work, workIndex) => (
                  <div key={workIndex} style={styles.keyWorkItem}>
                    <li className='abstractText'>{work}</li>
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