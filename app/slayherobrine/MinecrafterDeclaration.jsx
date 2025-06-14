import React from 'react';
import "/styles/MinecrafterDeclaration.css";
import Link from "next/link";
import initialSigners from './initialSigners';
import playersList from './playersList';

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
  return (
    <div className="declaration-container">
      <div className="book-container">
        
        <div className="book-content">
          <h2 className="book-title">The Minecrafter Declaration of Independence</h2>
          
          <div className="intro-text">
          We, the Minecrafters, mark the culmination of 15 years of Minecraft by building The One World with independence. One world where our greatest works, stories, and societies live beyond us. One world where our actions hold weight and have real consequences. One world that nobody can take away and everybody benefits from.
          </div>

          <div className="intro-text">
          To commence our independence, we have made three foundational contributions. The most advanced voxel client ever built, free in anyone's browser. The most powerful modding tools ever created, capable of integrating with anything, permissionlessly. The first implementation of the Public Physics Protocol, ending the tyranny of servers and their owners. 
          </div>

          <div className="intro-text">
          Together, we establish our commitment to advancing the{" "}<Link href="/coalition">Public Physics Protocol</Link>{" "}that will liberate our world from owners, admins, servers, and shutdowns. Those who sign this declaration become the founding Bedrock of a new era - the ones who finally, once and for all, Slay Herobrine.
          </div>

          <div>
            <table className="signers-table">
              <thead>
                <tr>
                <th style={{ width: '9%' }}>Sign #</th>
                <th style={{ width: '18%' }}>Name</th>
                <th style={{ width: '36.5%' }}>Legacy</th>
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
                  <tr key="players">
                    <td colSpan={4}>
                      <div className="player-grid">
                        {playersList.map((player, index) => (
                          <div key={index} className="player-card">
                            <div className="player-name">{parseMarkdownLinks(player.name)}</div>
                            <div className="player-statement">{parseMarkdownLinks(player.statement)}</div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
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