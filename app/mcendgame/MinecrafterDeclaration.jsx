import React from 'react';
import "/styles/MinecrafterDeclaration.css";
import Link from "next/link";


const MinecrafterDeclaration = () => {
  const initialSigners = [
    { rank: 1, name: "", minecraftLegacy: "", foundingAct: "", lineage: "" },
    { rank: 2, name: "", minecraftLegacy: "", foundingAct: "", lineage: "" },
    { rank: 3, name: "", minecraftLegacy: "", foundingAct: "", lineage: "" }
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
           that will liberate our world from admins, owners, and servers.
           Those who sign this declaration become the founding Bedrock of Minecrafters that definitively slay Herobrine.

          </div>


          
          <div>
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
                    <td>{signer.name || "—"}</td>
                    <td>{signer.minecraftLegacy || "—"}</td>
                    <td>{signer.foundingAct || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="button-container">
        <button className="minecraft-button">            
          Sign Founding Declaration
        </button>
        



      </div>
      
        </div>
      </div>

    </div>
  );
};

export default MinecrafterDeclaration;