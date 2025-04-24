'use client';

import React, { useEffect, useRef, useState } from 'react';
import "/styles/globals.css";
import Link from "next/link";
import MinecrafterDeclaration from './MinecrafterDeclaration';

const AlphaOverlay = () => {
    const containerStyle = {
      position: 'relative',
      width: '100%'
    };
    const imgStyle = {
      width: '100%',
      height: 'auto',
      display: 'block'
    };
    const overlayStyle = {
      position: 'absolute',
      top: '5px',
      right: '5px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '24px',
      padding: '4px 8px',
      backgroundColor: 'black',
    };
    return (
      <div style={containerStyle}>
        <img 
          src="/BiomesTrailer.gif"
          alt="Game scene"
          style={imgStyle}
        />
        <div style={overlayStyle}>
          ALPHA
        </div>
      </div>
    );
  };


const MinecraftEndgamePage = () => {
  return (
    <div>
      <div className="dust-container">
        <div className="background-map">
          <iframe 
            src="https://alpha.dustproject.org/map" 
            className="map-iframe"
            title="DUST Project Map"
            loading="lazy"
          />
        </div>
        <div className="content-wrapper" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "0px", justifyContent: "center"}}>
          <div className="container">
            <div className="endgame-body">
              Solving the biggest problem in Minecraft history.
            </div>
            <div className="endgame-body">
             Billions of builds, millions of players, and thousands of mods have all led to this… {" "}
             <span style={{fontFamily: "Rubik Pixels"}}>GRASSROOTS FAN MOVEMENT TO BUILD THE ENDGAME</span>.
            </div>
            <div className="endgame-body">
              One shared forever map with unlimited players that nobody can own, control, or shutdown. Unbreakable physics with serious consequences where players build real societies that outlive them.
            </div>
            {/* <div className="endgame-body">
            Collaborate as a Founding Creator for First Access & Support on Launch.
            </div> */}
            <Link href="https://discord.gg/J75hkmtmM4" className="join-button">
              SIGN FOUNDING DECLARATION
            </Link>
            <div className="endgame-subbody footer" style={{paddingTop: "16px"}}>
                This is impossible for any studio or server to do. So we're building {" "}
                <Link href="https://dustproject.org/coalition" style={{color: "cyan"}}>
                    Dust, a public protocol like the Internet, but for the world’s physics
                </Link>. Everything that happens inside the world is mathematically guaranteed to follow its physics and permanently recorded for anyone to verify.	
            </div>
            <div className='endgame-subbody'>
                Browser client tools developed by {" "}
                <Link href="https://ill.inc/" style={{color: "cyan"}}>
                    senior Facebook, Google engineers
                </Link>. Public protocol technology adopted by {" "}
                <Link href="https://lattice.xyz/" style={{color: "cyan"}}>CCP Games (EVE Online)</Link>.
                Mathematical guarantee advancements by {" "}
                <Link href="https://0xparc.org/blog/programmable-cryptography-1" style={{color: "cyan"}}>MIT researchers</Link>.
                Not affiliated with or endorsed by Mojang/Microsoft.
            </div>

          </div>
        </div>
      </div>
      <div className="wrapper">
      <div className="container">
        <div className="sectionHeading">Free Browser Client for Everyone</div>
        <div className="content-section">
          <div className="image-column">
          <iframe 
            src="https://alpha.dustproject.org/map" 
            className="map-iframe"
            title="DUST Project Map"
            loading="lazy"
          />
          </div>
          <div className="text-column">
            <AlphaOverlay/>
          </div>
        </div>
        <div className="sectionHeading">Public Physics Protocol</div>
        <div className="content-section">
        <div className="image-column" style={{flexDirection: "column", gap: "0.5rem"}}>
            <div>The matter and energy of the world flow cyclically according to a mathematically-unbreakable Public Physics Protocol.</div>
            <div>Everything that happens inside is permanently recorded for anyone to verify, as shown in the Protocol Explorer.</div>
            <div>Grow and eat crops for energy, and your usage returns energy to the land. Mine ores to craft items, and ores regenerate as items deplete.</div>
            <div>Claim territory using force fields, for as long as you keep them energized. Territories can be attacked and must be protected.</div>
            <div>Whatever you build inside your territory can outlive you as a permanent store of your effort.</div>          
          </div>
          <div className="text-column">
            <iframe 
            src="https://explorer.mud.dev/pyrope/worlds/0xaa544E5e0D1C45cC43Ac8D5512a5081aA6Ca9EFE/explore?tableId=0x74620000000000000000000000000000506f736974696f6e0000000000000000&query=SELECT%2520%2522entityId%2522%252C%2520%2522x%2522%252C%2520%2522y%2522%252C%2520%2522z%2522%2520FROM%2520%2522Position%2522%2520LIMIT%252010%2520OFFSET%25200%253B&page=0&pageSize=10" 
            className="map-iframe"
            title="DUST Project Map"
            loading="lazy"
          />
          </div>
        </div>
        <div className="sectionHeading">Redstone on Steroids</div>
        <div className="content-section">
            <div className="text-column">
                <div>Program any machine in this world, hook it up to a custom UI that can be used directly in-client by anyone, and integrate anything - reddit, discord, custom currencies, or even real dollars.</div>
                <div>As shown below, {" "} <Link href="https://permutationcity.org/">Permutation City</Link> {" "} 
                is demonstrating its power. Their passport holders spawn directly inside their territory via their website. Inside, they programmed force fields and chests to rent land plots and enable trade in their currency, all accessed through custom in-client UIs for trading, real estate, and governance.
                </div>

                <img src="/permcity.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
            <div className="small-image-column">
                <img src="/connectlife.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
        </div>
        <div className='wrapper' style={{ height: "70px" }}></div>
        <MinecrafterDeclaration />
      </div>
    </div>
    </div>
  );
}

export default MinecraftEndgamePage;