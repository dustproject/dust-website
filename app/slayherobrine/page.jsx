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
  const declarationRef = useRef(null);
  
  const scrollToDeclaration = () => {
    declarationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
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
          <div className="container" style={{maxWidth: "90%"}}>
            <div className="endgame-body">
              Billions of builds, millions of players, and thousands of mods... all at the whims of server owners.
            </div>
            <div className="endgame-body">
              It's time to end the tyranny.
               It's time to {" "}
              <span style={{fontFamily: "Rubik Pixels"}}>SLAY HEROBRINE</span>.
             </div>
            <div className="endgame-body">
              One World nobody can take away. No owners, no servers, no shutdowns, ever.
            </div>

            <div className="endgame-body">
              One World everybody can join. Unlimited players on one canonical map, forever.
            </div>

            <div className="endgame-body">
            One World that matters. Consequences are real and what we do outlives us.
            </div>


            {/* <div className="endgame-body">
            Collaborate as a Founding Creator for First Access & Support on Launch.
            </div> */}
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              scrollToDeclaration();
            }} className="join-button">
              SIGN FOUNDING DECLARATION
            </Link>
            <div className="endgame-subbody footer" style={{paddingTop: "16px"}}>
                This is impossible for any studio or server to do. So together we're building {" "}
                <Link href="https://dustproject.org/coalition" style={{color: "cyan"}}>
                  Dust, a public protocol like the Internet, but for the world's physics
                </Link>. Everything that happens inside the world is mathematically enforced to follow its physics, and permanently recorded for anyone to verify.	
            </div>
            <div className='endgame-subbody'>
                Browser client tools developed by {" "}
                <Link href="https://ill.inc/" style={{color: "cyan"}}>
                    senior Facebook, Google engineers
                </Link>. Protocol technology adopted by {" "}
                <Link href="https://lattice.xyz/blog/working-with-ccp" style={{color: "cyan"}}>CCP Games (EVE Online)</Link>.
                Mathematical enforcement techniques advanced by {" "}
                <Link href="https://0xparc.org/blog/programmable-cryptography-1" style={{color: "cyan"}}>MIT researchers</Link>.
                Not affiliated with or endorsed by Mojang/Microsoft.
            </div>

          </div>
        </div>
      </div>
      <div className="wrapper">
      <div className="container">
        <div className="sectionHeading">Free browser client for everyone</div>
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
            <div>The matter and energy of the world flow cyclically according to a mathematically enforced Public Physics Protocol.</div>
            <div>Everything that happens inside is permanently recorded for anyone to verify, as shown in the Protocol Explorer.</div>
            <div>Grow and eat plants for energy, and your usage returns energy to the land. Mine ores to craft tools, and ores regenerate as tools deplete.</div>
            <div>Claim territory using force fields, for as long as you keep them energized. Territories can be attacked and must be protected.</div>
            <div>What you build inside your territory can outlive you as a permanent store of your effort.</div>          
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
                <div>Program any machine in this world, render it with custom UIs that anyone can use directly in-client, and permissionlessly integrate with anything - from Reddit and Discord to your own custom currencies or even real dollars.</div>
                <div><Link href="https://permutationcity.org/">Permutation City</Link> {" "} 
                is demonstrating what's possible with the most powerful modding tools ever created. 
                They're programming machines - like spawn tiles, force fields, and chests - to let Permutation Passport holders spawn directly inside their protected territory, and use Permutation Pesos to rent land and trade in shops. 
                Permutation citizens use their custom in-client UIs for trading, real estate, and governance within their city.  
                </div>

                <img src="/permcity.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
            <div className="small-image-column">
                <img src="/connectlife.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
        </div>
        <div className='wrapper' style={{ height: "70px" }}></div>
        <div ref={declarationRef}>
          <MinecrafterDeclaration />
        </div>
      </div>
    </div>
    </div>
  );
}

export default MinecraftEndgamePage;