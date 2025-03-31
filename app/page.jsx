import React from 'react';
import "/styles/globals.css";

const baseStyles = {
  layout: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: 'clamp(1rem, 5vw, 2.5rem) clamp(0.75rem, 2vw, 1.25rem)',
    },
    trackContainer: {
      marginBottom: 'clamp(2rem, 5vw, 3.75rem)',
      borderBottom: '1px solid #eee',
      paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
    },
    trackGrid: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr)',
      gap: 'clamp(1rem, 3vw, 1.875rem)',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)',
      },
      // Fallback for browsers that don't support @media in objects
      // Will be applied with JavaScript
      mediaQueries: {
        '(min-width: 768px)': {
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
        },
        '(min-width: 1024px)': {
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)',
        }
      }
    },
  },
};
const KeyWorks = ({ works }) => (
  <div>
    <strong>Key Works:</strong>
    <div style={{ marginTop: '10px' }}>
      {works.map((work, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>{work}</div>
      ))}
    </div>
  </div>
);

const Category = ({ title, theirBenefit, ourBenefit, keyWorks }) => (
  <div className='abstractBox'>
    <div className='abstractHeading'>{title}</div>
    <div className='columnParagraph'>
      <strong>Contributions Needed: </strong>
      {theirBenefit}
    </div>
    <div className='columnParagraph'>
      <strong>Benefits Provided: </strong>
      {ourBenefit}
    </div>
    <KeyWorks works={keyWorks} />    
  </div>
);

const Track = ({ title, description, progressMade, categories }) => (
  <div className='track-container'>
    <div className='track-grid'>
      <div>
        <div className='columnHeading'>{title}</div>
        <div className='columnParagraph'>
          {description}
        </div>
        <div className='columnParagraph'>
          {progressMade}
        </div>
      </div>
      
      <div>
        {categories.map((category, index) => (
          <Category 
            key={index}
            title={category.title}
            theirBenefit={category.theirBenefit}
            ourBenefit={category.ourBenefit}
            keyWorks={category.keyWorks}
          />
        ))}
      </div>
    </div>
  </div>
);

const pageData = {
  introduction: "The Dust Project is a proposed coalition.",
  
  tracks: [
    {
      title: "Premise",
      description: "The Premise track explores the philosophical foundations bridging escapist fictions and objective reality. We investigate how mathematical objects, achieved through cryptographic techniques, can offer existence independent of human belief systems.",
      progressMade: "Our foundational paper \"From Escapism to Realism\" synthesizes insights from generative anthropology, mathematical philosophy, and cryptoeconomic theory. We've established a formal framework for how idealized mathematical objects can transcend mere fictions to achieve independent existence.",
      categories: [
        {
          title: "Theoretical Philosophers",
          theirBenefit: "Access to a novel philosophical framework merging continental and analytical traditions; opportunities to publish pioneering work in an emerging field; collaboration with leading thinkers across disciplines solving fundamental questions of reality.",
          ourBenefit: "Critical analysis of escapist fictions versus objective reality; philosophical inquiries into the nature of mathematical existence; examinations of epistemological frameworks for autonomous mathematical objects and worlds.",
          keyWorks: [
            "Generative Anthropology (Eric Gans)",
            "Escapism Critique (Guy Debord, Jean Baudrillard)",
            "Mathematical Philosophy (Max Tegmark)",
            "Simulation Theory (David Chalmers)"
          ]
        },
        {
          title: "Mathematical Logicians",
          theirBenefit: "Opportunity to apply formal logical systems to novel domains; collaboration with cryptographers and philosophers; potential to establish new foundational logics for autonomous worlds beyond traditional mathematical structures.",
          ourBenefit: "Formal logical frameworks for understanding autonomous mathematical objects; consistency proofs for self-sustaining systems; logical analysis of objective independence and verification mechanisms.",
          keyWorks: [
            "Mathematical Platonism (Roger Penrose)",
            "Category Theory (John Baez)",
            "Modal Logic (Saul Kripke)",
            "Formal Verification (Leslie Lamport)"
          ]
        },
        {
          title: "Metaphysics Scholars",
          theirBenefit: "Fertile ground for exploring questions of existence beyond physical reality; opportunity to develop frameworks for understanding autonomous mathematical entities; collaboration with technical scholars implementing metaphysical concepts.",
          ourBenefit: "Rigorous analysis of existence conditions for mathematical objects; frameworks for understanding autonomy and independence; metaphysical grounding for technical implementation work.",
          keyWorks: [
            "Object-Oriented Ontology (Graham Harman)",
            "Digital Metaphysics (David Lewis)",
            "Mathematical Existence (Alain Badiou)",
            "Metaphysics of Information (Luciano Floridi)"
          ]
        }
      ]
    },
    {
      title: "Research",
      description: "The Research track translates philosophical premises into concrete mathematical models and cryptographic protocols. We develop the theoretical machinery necessary for mathematical objects to achieve independence, maintain their own secrets, and evolve autonomously.",
      progressMade: "We've established initial formal models for substrate independence and developed preliminary cryptographic protocols that enable mathematical objects to maintain private state. Our research into zero-knowledge proof systems enables these objects to interact meaningfully while preserving autonomy.",
      categories: [
        {
          title: "Cryptographers",
          theirBenefit: "Access to novel cryptographic challenges beyond traditional security models; opportunities to pioneer new cryptographic primitives; collaboration with interdisciplinary teams applying cryptography to fundamental questions of reality and existence.",
          ourBenefit: "Cryptographic protocols enabling objects to maintain secrets; zero-knowledge systems for verifiable but private computation; formal security models for autonomous object properties and guarantees of independence.",
          keyWorks: [
            "Programmable Cryptography (Gubsheep, Nick Szabo)",
            "Zero-Knowledge Proofs (Shafi Goldwasser)",
            "Secure Multi-party Computation (Yao's Protocol)",
            "Homomorphic Encryption (Craig Gentry)"
          ]
        },
        {
          title: "Theoretical Computer Scientists",
          theirBenefit: "Opportunities to solve novel computational problems at the intersection of mathematics and reality; access to cutting-edge research in autonomous systems; potential to define new computational models for object independence.",
          ourBenefit: "Formal computational models for autonomous objects; complexity analysis of self-sustaining systems; algorithmic frameworks for objects that maintain their own evolution and private state across time.",
          keyWorks: [
            "Algorithmic Information Theory (Gregory Chaitin)",
            "Computational Complexity (Scott Aaronson)",
            "Cellular Automata (Stephen Wolfram)",
            "Formal Verification (Cormac Flanagan)"
          ]
        }
      ]
    },
    {
      title: "Economics",
      description: "The Economics track investigates the incentive structures and governance mechanisms required for autonomous mathematical objects to interact, evolve, and maintain independence. We design economic systems that enable sustainable growth without reliance on central authorities.",
      progressMade: "We've developed preliminary economic models for cryptoeconomic commons that enable independent objects to coordinate without centralized control. Our work on substrate independence futurism offers pathways for these economic systems to achieve self-sustaining growth.",
      categories: [
        {
          title: "Cryptoeconomists",
          theirBenefit: "Opportunity to design novel economic mechanisms beyond traditional blockchain applications; collaboration with theorists and philosophers; potential to shape foundational economic paradigms for autonomous mathematical worlds.",
          ourBenefit: "Incentive mechanisms for autonomous object interaction; economic models enabling sustainable growth; formal analysis of economic independence properties and coordination mechanisms for self-sustaining systems.",
          keyWorks: [
            "Cryptoeconomic Commons (Ludens, Vitalik Buterin)",
            "Mechanism Design (E. Glen Weyl)",
            "Token Engineering (Trent McConaghy)",
            "Distributed Systems Economics (Aviv Zohar)"
          ]
        },
        {
          title: "Complex Systems Theorists",
          theirBenefit: "Access to novel complex systems with unique properties; opportunities to study emergence in designed mathematical ecosystems; collaboration with interdisciplinary teams bridging theory and implementation.",
          ourBenefit: "Models of complex system emergence in autonomous worlds; analysis of stability and growth conditions; frameworks for understanding complexity bounds in autonomous systems and their scaling properties.",
          keyWorks: [
            "Complexity Economics (W. Brian Arthur)",
            "Network Theory (Albert-László Barabási)",
            "Agent-Based Modeling (Joshua Epstein)",
            "Emergence (Stuart Kauffman)"
          ]
        }
      ]
    },
    {
      title: "Products",
      description: "The Products track implements our theoretical work into usable tools, protocols, and platforms. We build the technical infrastructure that enables the creation, interaction, and evolution of autonomous mathematical objects, making them accessible to developers and users.",
      progressMade: "We've developed prototype frameworks for creating autonomous mathematical objects with cryptographic guarantees of independence. Our initial toolkit includes libraries for verifiable computation, private state management, and economic primitives for sustainable ecosystems.",
      categories: [
        {
          title: "Protocol Engineers",
          theirBenefit: "Opportunity to build cutting-edge cryptographic protocols with novel properties; work at the intersection of theoretical computer science and applied engineering; collaborate with interdisciplinary teams on foundational infrastructure.",
          ourBenefit: "Implementation of cryptographic protocols enabling object autonomy; development of verifiable computation systems; creation of technical standards for autonomous object interaction and composition.",
          keyWorks: [
            "Zero-Knowledge Protocol Engineering",
            "Distributed Systems Architecture",
            "Cryptographic Protocol Design",
            "Formal Verification Systems"
          ]
        },
        {
          title: "Ecosystem Architects",
          theirBenefit: "Opportunity to design novel computational ecosystems; create governance and interaction patterns for autonomous worlds; shape the foundational infrastructure for future mathematical universe creation and evolution.",
          ourBenefit: "Design of interaction frameworks for autonomous objects; creation of governance primitives; development of ecosystem growth mechanisms and monitoring tools for sustainable mathematical worlds.",
          keyWorks: [
            "Distributed Governance Systems",
            "Ecosystem Simulation Models",
            "Protocol Economics",
            "Growth Metrics and Monitoring"
          ]
        }
      ]
    },
    {
      title: "Projects",
      description: "The Projects track applies our theoretical frameworks and technical infrastructure to create specific instances of autonomous mathematical worlds. We collaborate with domain experts to develop proof-of-concept universes that demonstrate the capabilities of our approach.",
      progressMade: "We've launched initial experimental worlds that demonstrate key properties of autonomy, private state, and self-evolution. These proof-of-concept projects serve as laboratories for testing theoretical ideas and technical implementations while providing concrete examples.",
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
    }
  ]
};

export default function Page() {
  return (
    <div className='homepage-container'>
      <div>
        <div className='subtitle' style={{paddingBottom: "40px"}}>
          {pageData.introduction}
        </div>
        
        {pageData.tracks.map((track, index) => (
          <Track
            key={index}
            title={track.title}
            description={track.description}
            progressMade={track.progressMade}
            categories={track.categories}
          />
        ))}
      </div>
    </div>
  );
}