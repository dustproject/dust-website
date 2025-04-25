import React from 'react';
import "/styles/MinecrafterDeclaration.css";
import Link from "next/link";

const parseMarkdownLinks = (text) => {
    if (!text || text === "—") return "—";
    
    // Regular expression to match markdown links [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    
    // Split the text into parts: text before link, link itself, text after link
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = markdownLinkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      // Add the link as a React element
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <a key={match.index} href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add any remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts;
  };
  


const MinecrafterDeclaration = () => {
  const initialSigners = [
    { rank: 1, name: "[Permutation City](http://permutationcity.org/)", minecraftLegacy: "The creators of [OP Craft](https://opcraft.mud.dev/), maintainer of [Minecraft List](https://minecraftlist.com), and staff moderator of [Conspiracy Craft](https://www.facebook.com/ConspiracyCraft/).", foundingAct: "A city that offers structure, shelter, and a shared mission: to explore the future of human coordination, governance, and economy.", lineage: "" },
  ];

  return (
    <div className="declaration-container">
      <div className="book-container">
        
        <div className="book-content">
          <h2 className="book-title">THE MINECRAFTER DECLARATION OF INDEPENDENCE</h2>
          
          <div className="intro-text">
          We, the Minecrafters, culminate the past 15 years of Minecraft by building its Endgame - a world with independence.
          A world where our greatest works, stories, and societies outlive us. A world where our actions hold weight and have real consequences.
          A world that nobody can take away and everybody can benefit from. 
          </div>

          <div className="intro-text">
          To commence our independence, we have made three foundational contributions. The highest-production, arbitrarily-scalable voxel client ever built, free in anyone's browser. The most powerful modding tools ever created, capable of permissionlessly integrating with anything that exists. The first implementation of the Public Physics Protocol, with robust interaction and verification systems.
          </div>

          <div className="intro-text">

          Together, we establish our commitment to building the mathematically-unbreakable
          {" "}<Link href="/coalition">Public Physics Protocol</Link>{" "}
           that will liberate our world from admins, owners, studios, and servers.
           Those who sign this declaration become the founding Bedrock of Minecrafters that definitively {" "}
           Slay Herobrine.

          </div>


          
          <div style={{overflowX: "scroll"}}>
            <table className="signers-table">
              <thead>
                <tr>
                <th style={{ width: '9%' }}>Sign #</th>
                <th style={{ width: '18%' }}>Name</th>
                <th style={{ width: '36.5%' }}>Minecraft Legacy</th>
                <th style={{ width: '36.5%' }}>Founding Act</th>
                </tr>
              </thead>
              <tbody>
                {initialSigners.map((signer, index) => (
                  <tr key={index}>
                    <td className="rank-cell">{signer.rank}</td>
                    <td>{parseMarkdownLinks(signer.name)}</td>
                    <td>{parseMarkdownLinks(signer.minecraftLegacy)}</td>
                    <td>{parseMarkdownLinks(signer.foundingAct)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="button-container">
        <button className="minecraft-button"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeToPi77SS3Z4_dBVnAIZOXJvcuA6MfGGK89U7nQRJOaoZMrg/viewform?usp=sharing", "_blank")}>            
          Sign Founding Declaration
        </button>
        



      </div>
      
        </div>
      </div>

    </div>
  );
};

export default MinecrafterDeclaration;