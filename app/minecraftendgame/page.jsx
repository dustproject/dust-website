'use client';

import React, { useEffect, useRef } from 'react';
import "/styles/globals.css";
import Link from "next/link";

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


        <div className="content-wrapper" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "0px"}}>
          <div className="container">
            <div className="endgame-body">
             Billions of Builds, Millions of Players, Thousands of Mods Have All Led to This… {" "}
             <span style={{fontFamily: "Rubik Pixels"}}>MINECRAFT ENDGAME</span>. Where the Training Wheels Come Off.
            </div>
            <div className="endgame-body">
            Unlimited Players Will Live on One Shared Forever Map That Nobody Owns, Controls, or Can Shut Down. The Physics Will Be Impossible To Break and Players Will Build Real Societies and Economies Inside That Outlive Them.
            </div>
            <div className="endgame-body">
            Looking To Closely Collaborate With a Few Select Creators During Development that Get First Access & Support on Launch.
            </div>
            <Link href="https://discord.gg/J75hkmtmM4" className="join-button">
              JOIN CREATOR DISCORD
            </Link>


            <div className="endgame-subbody footer">
                This Is Impossible for Any Studio or Server To Do. So We’re Building {" "}
                <Link href="https://dustproject.org/" style={{color: "cyan"}}>
                    Dust, a Public Protocol Like the Internet, but for the World’s Physics
                </Link>. Everything That Happens Inside the World Is Mathematically Guaranteed To Follow Its Physics and Permanently Recorded for Anyone To Verify.	
            </div>
            <div className='endgame-subbody'>
                Browser Client Developed By {" "}
                <Link href="https://ill.inc/" style={{color: "cyan"}}>
                    Senior Facebook, Google Engineers
                </Link>. Public Protocol Technology Used By {" "}
                <Link href="https://lattice.xyz/" style={{color: "cyan"}}>CCP Games (EVE Online)</Link>.
                Mathematical Guarantee Advancements By {" "}
                <Link href="https://0xparc.org/blog/programmable-cryptography-1" style={{color: "cyan"}}>MIT Researchers</Link>.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MinecraftEndgamePage;