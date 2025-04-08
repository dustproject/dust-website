import React from 'react';
import "/styles/globals.css";

const ProjectsPage = () => {
    return (
        <div className="wrapper">
          <div className="container">
          <div className="sectionHeading" style={{marginTop: "0"}}>WHAT IS DUST?</div>
          <div style={{ display: "flex", gap: "2rem"}}>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
                <div>A universe governed by decentralized physics, and made up of provably scarce matter.</div>
                <div>Every action inside is permanently and verifiably recorded, so it's a real store of your effort that can freely connect with your broader life.</div>
                <div>Users will soon be able to collectively run, upgrade, and scale the universe themselves.</div>
            </div>
            <img
                src="/images/cyberspace.svg"
                style={{ maxWidth: '40%', border: "1px solid black" }}
            />
          </div>
          <div className="sectionHeading">1. GET DIGITAL MATTER</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
            <div>Resources follow natural cycles. Grow crops on fertile land, consume them for energy, and return energy to the land with action. Mine ores, craft tools that wear with use, and eventually respawn new ores.</div>
            <div>Your avatar receives initial energy upon spawning but must consume crops to sustain itself. Use this energy to collect resources, craft items, and build.</div>
          </div>
          <div className="sectionHeading">2. BUILD SOMETHING TRULY LASTING</div>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column"}}>
            <div>Use crops to energize force fields, claiming territory for as long as you maintain its energy.</div>
            <div>Build structures within your territory that can last as long as stone carvings, serving as a permanent store of real effort.</div>
          </div>
          <div className="sectionHeading">3. CONNECT IT TO YOUR BROADER LIFE</div>
          <div className="sectionHeading">4. ADVANCE DUST ITSELF TO SUIT YOUR GOALS</div>
          <div className="sectionHeading">PROJECTS USING DUST</div>
          <div className="sectionHeading">REQUESTS FOR PROJECTS</div>
          </div>
        </div>
    );
};

export default ProjectsPage;