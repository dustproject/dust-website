'use client';

import React, { useEffect, useRef, useState } from 'react';
import "/styles/globals.css";
import Link from "next/link";

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
             Billions of Builds, Millions of Players, and Thousands of Mods Have All Led to This… {" "}
             <span style={{fontFamily: "Rubik Pixels"}}>A GRASSROOTS MINECRAFT FAN MOVEMENT TO BUILD THE ENDGAME</span>.
            </div>
            <div className="endgame-body">
            One Shared Forever Map With Unlimited Players That Nobody Can Own, Control, or Shutdown. Unbreakable Physics Present Serious Consequences and Players Build Real Societies That Outlive Them.
            </div>
            <div className="endgame-body">
            Collaborate as a Founding Creator for First Access & Support on Launch.
            </div>
            <Link href="https://discord.gg/J75hkmtmM4" className="join-button">
              JOIN CREATOR DISCORD
            </Link>
            <div className="endgame-subbody footer" style={{paddingTop: "16px"}}>
                This Is Impossible for Any Studio or Server To Do. So We’re Building {" "}
                <Link href="https://dustproject.org/coalition" style={{color: "cyan"}}>
                    Dust, a Public Protocol Like the Internet, but for the World’s Physics
                </Link>. Everything That Happens Inside the World Is Mathematically Guaranteed To Follow Its Physics and Permanently Recorded for Anyone To Verify.	
            </div>
            <div className='endgame-subbody'>
                Browser Client Tools Developed By {" "}
                <Link href="https://ill.inc/" style={{color: "cyan"}}>
                    Senior Facebook, Google Engineers
                </Link>. Public Protocol Technology Adopted By {" "}
                <Link href="https://lattice.xyz/" style={{color: "cyan"}}>CCP Games (EVE Online)</Link>.
                Mathematical Guarantee Advancements By {" "}
                <Link href="https://0xparc.org/blog/programmable-cryptography-1" style={{color: "cyan"}}>MIT Researchers</Link>.
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
            <div>The matter and energy of the world flow cyclically according to an unbreakable Public Physics Protocol.</div>
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
                <div>Program any machine in this world, hook it up to a custom UI that can be used directly in-client, and integrate anything - reddit, discord, your own custom currency, or even real dollars.</div>
                <div>As shown below, {" "} <Link href="https://permutationcity.org/">Permutation City</Link> {" "} programmed chests in their territory as shops using their own custom currency, and built a UI to guide players where to trade.</div>

                <iframe 
                    src="https://trading-app-client-psi.vercel.app/news" 
                    className="map-iframe"
                    title="DUST Project Map"
                    loading="lazy"
                />
            </div>
            <div className="small-image-column">
                <img src="/connectlife.svg" className="section-image" style={{border: "none"}} alt="Command Blocks"/>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MinecraftEndgamePage;