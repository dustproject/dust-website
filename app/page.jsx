import * as React from "react";
export const dynamic = "force-static";
import '/styles/globals.css';

const SectionHeading = ({ title, href }) => {
  return (
      <div className="sectionHeading">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {title}
        </div>
      </div>
    );
};

const AlignmentCategory = ({ 
  category, 
  contributionsNeeded, 
  benefitsProvided, 
  keyWorks 
}) => {
  return (
    <div className="alignmentCategory">
      <div className="categoryTitle">{category}</div>
      
      <div className="contributionsSection">
        <strong>Contributions Needed:</strong> 
        <p>{contributionsNeeded}</p>
      </div>
      
      <div className="benefitsSection">
        <strong>Benefits Provided:</strong> 
        <p>{benefitsProvided}</p>
      </div>
      
      <div className="divider"></div>
      
      <div className="keyWorksSection">
        <strong>Key Works:</strong>
        <ul>
          {keyWorks.map((work, index) => (
            <li key={index}>
              "{work.title}" by {work.authors} ({work.year})
            </li>
          ))}
        </ul>
      </div>
      
      <div className="suggestAddition">
        <a href="#suggest-form" className="addSuggestionLink">
          + Suggest Additions
        </a>
      </div>
    </div>
  );
};

const TrackComponent = ({ 
  trackName,
  description,
  infoPageLink,
  contributors,
  alignmentCategories
}) => {
  return (
    <div className="trackComponent">
      <SectionHeading title={trackName}/>

      <div className="paragraph">{description}</div>

      <div className="subheading">Current Contributions</div>

      {contributors && contributors.length > 0 ? (
          <div className="contributorsList">
            {contributors.map((contributor, index) => (
              <div key={index} className="contributor">
                <strong>{contributor.name}</strong> - {contributor.contribution}
              </div>
            ))}
          </div>
        ) : (
          <p><em>Founding contributors sought for this track.</em></p>
        )}

      <div className="subheading">Alignments</div>

            
      <div className="alignmentsSection">
        <h3>Alignments</h3>
        <div className="alignmentsList">
          {alignmentCategories.map((category, index) => (
            <AlignmentCategory
              key={index}
              category={category.name}
              contributionsNeeded={category.contributionsNeeded}
              benefitsProvided={category.benefitsProvided}
              keyWorks={category.keyWorks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  // Updated tracks data structure to match the new template
  const tracks = [
    {
      trackName: "Premise",
      description: "The foundational philosophy and conceptual framework explaining why mathematical universes matter.",
      infoPageLink: "/premise/info",
      contributors: [
        { name: "Alice Johnson", contribution: "Philosophy of mathematical objects and their implications for reality" },
        { name: "Bob Smith", contribution: "Formalization of digital physics principles" }
      ],
      alignmentCategories: [
        {
          name: "Mathematical Philosophy",
          contributionsNeeded: "Theoretical framework for validating the objective existence of mathematical structures",
          benefitsProvided: "Practical testing ground for theoretical mathematical universe models",
          keyWorks: [
            { title: "Our Mathematical Universe", authors: "Max Tegmark", year: 2014 },
            { title: "The Unreasonable Effectiveness of Mathematics in the Natural Sciences", authors: "Eugene Wigner", year: 1960 }
          ]
        },
        {
          name: "Escapism Critique",
          contributionsNeeded: "Analysis of current digital environments as escapist vs. reality-enriching",
          benefitsProvided: "Technology that addresses core critiques of digital alienation",
          keyWorks: [
            { title: "Society of the Spectacle", authors: "Guy Debord", year: 1967 },
            { title: "Simulacra and Simulation", authors: "Jean Baudrillard", year: 1981 }
          ]
        }
      ]
    },
    {
      trackName: "Research",
      description: "The technical foundation developing cryptographic primitives and protocols that create digital physics.",
      infoPageLink: "/research/info",
      contributors: [], // Empty array to trigger "Founding contributors sought" message
      alignmentCategories: [
        {
          name: "Programmable Cryptography",
          contributionsNeeded: "Implementation of advanced cryptographic primitives for digital physics creation",
          benefitsProvided: "Real-world application context for theoretical cryptographic mechanisms",
          keyWorks: [
            { title: "Programmable Cryptography", authors: "Gubsheep", year: 2024 },
            { title: "The Cypherpunk Manifesto", authors: "Timothy May", year: 1993 }
          ]
        }
      ]
    },
    {
      trackName: "Economics",
      description: "The value model ensuring that digital matter accrues genuine value, creating sustainability.",
      infoPageLink: "/economics/info",
      contributors: [
        { name: "Carol Davis", contribution: "Incentive mechanism design for digital matter value accrual" }
      ],
      alignmentCategories: [
        {
          name: "Digital Economics",
          contributionsNeeded: "Models for value accrual in digital physics systems",
          benefitsProvided: "Novel environment for testing economic theories without physical constraints",
          keyWorks: [
            { title: "The Age of Cryptocurrency", authors: "Paul Vigna & Michael J. Casey", year: 2015 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="abstractBox">
          <div className="subtitle">
            The Dust Project is a proposed coalition to manifest a universe with idealized mathematical objects.
          </div>
        </div>

        {tracks.map((track, index) => (
          <TrackComponent 
            key={index}
            trackName={track.trackName}
            description={track.description}
            infoPageLink={track.infoPageLink}
            contributors={track.contributors}
            alignmentCategories={track.alignmentCategories}
          />
        ))}
      </div>
    </div>
  );
}
