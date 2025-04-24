import React from 'react';
import "/styles/MinecrafterDeclaration.css";

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
          <h2 className="book-title">MINECRAFTER DECLARATION OF INDEPENDENCE</h2>
          
          <div className="intro-text">
            We, the builders of worlds, declare our independence from temporary servers, resets, and lost creations. Together, we establish this permanent record of our commitment to build the Endgame - a world without end.
          </div>
          
          <div>
            <table className="signers-table">
              <thead>
                <tr>
                  <th>Sign Rank</th>
                  <th>Name</th>
                  <th>Minecraft Legacy</th>
                  <th>Founding Act</th>
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
          SIGN
        </button>
      </div>
      
        </div>
      </div>

    </div>
  );
};

export default MinecrafterDeclaration;