'use client';

import React, { useEffect, useRef, useState } from 'react';
import "/styles/globals.css";
import Image from 'next/image';
import Link from "next/link";
import ProjectsPage from './projects/page';
import TopographicMapBackground from '/components/TopoBackground';

const LandingGridTwo = () => {   
  return (    
    <div className="home-container">
      <TopographicMapBackground />
      <div style={{ position: 'relative', zIndex: 1, paddingTop: "8rem", paddingBottom: "8rem", lineHeight: '0' }}>
        <div className='homeHeading'>GET A HEAD START</div>
        <div className="action-card-grid" >
          <div className="action-card">
            <img src="https://staticg.sportskeeda.com/editor/2022/03/422aa-16480454294357-1920.jpg" className="card-image"/>
            <div className='columnSubheading'>SURVIVE HARDCORE ANARCHY</div>
            <div className='columnParagraph'>
              The world drains your energy. Eat or sleep—or die.
              Activity App
              Survival Guide
              Research
            </div>
          </div>
          <div className="action-card">
            <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/08/minecraft-diamond-119.jpg" className="card-image"/>
            <div className='columnSubheading'>MINE & FARM MATTER</div>
            <div className='columnParagraph'>Extract, craft, harvest. Every block counts. Matter is scarce.
              Supply App
              Economics
            </div>
          </div>
          <div className="action-card">
            <img src="https://preview.redd.it/x7uyp19l3ni51.jpg?width=1080&crop=smart&auto=webp&s=7c01112cccb8c1c7a0791f81cd055b06a0ea9bbd" className="card-image"/>
            <div className='columnSubheading'>EXPAND & PROGRAM TERRITORY</div>
            <div className='columnParagraph'>Claim land, set its rules, and make it run code. Your domain, your laws.
              Map App
              Programming Guide
              Join Discord
            </div>
          </div>
        </div>
      </div>        
    </div>
  ); 
};

const applyShimmerEffect = (element) => {
  if (!element || !element.textContent) return;

  const text = element.textContent;
  element.textContent = ''; // Clear existing text

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
    span.style.animationDelay = `${Math.random() * 2}s`; // Random delay up to 2s
    element.appendChild(span);
  });
};

export default function Page() {
  const joinCoalitionRef = useRef(null); // Create ref for the first link
  const enterAlphaRef = useRef(null);   // Create ref for the second link
  const dustTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowCustomCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCustomCursor(false);
  };

  useEffect(() => {
    applyShimmerEffect(joinCoalitionRef.current);
    applyShimmerEffect(enterAlphaRef.current);
    applyShimmerEffect(dustTextRef.current);
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50 && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY <= 50 && !isVisible) {
        setIsVisible(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div> 
      <Link href="https://alpha.dustproject.org/" style={{textDecoration: "none"}}>
        <div className="dust-container">
          <div className="background-map">
            <iframe 
              src="https://alpha.dustproject.org/map" 
              className="map-iframe"
              title="DUST Project Map"
              loading="lazy"
            />
          </div>
          <div className="content-wrapper">
            <div className="top-section">
              <div className='coalition-text' ref={enterAlphaRef}>ENTER</div>
              <div style={{fontWeight: "bold", fontSize: "0.8rem", opacity: "0.5"}}>CLICK ANYWHERE</div>
            </div>
            <div className="middle-section">
              <h1 className="dust-text" ref={dustTextRef}>DUST</h1>
            </div>
            <div className={`bottom-section ${!isVisible ? 'hidden' : ''}`}>
                <div style={{fontWeight: "bold"}} className='scroll-hop'>SCROLL TO EXPLORE ↓</div>
            </div>
          </div>
        </div>
      </Link>
      <LandingGridTwo/>
      <div style={{background: "#212121", borderTop: "1px dashed hsla(60, 68%, 94%, 0.1)", borderBottom: "1px dashed hsla(60, 68%, 94%, 0.1)"}}>
        <Link href="/coalition" style={{textDecoration: "none"}}>
          <div style={{position: 'relative', lineHeight: '0', padding: "2rem"}}>
            <img src="/dusttexture.svg" className="full-image" />
            <div className="coalition-text" style={{position: 'absolute', top: '25%', left: '10%', transform: 'translate(-10%, -25%)', color: "white"}} ref={joinCoalitionRef}>
              FROM COSMIC TO CYBER DUST
            </div>
          </div>
        </Link>
      </div>
      <div className="dust-protocol">
        <section className="dust-row">
          <div className='columnSubheading dust-headline'>
          We’ve Been Trying To Live in Virtual Worlds for Decades. But All We Can Build Are Theme Parks.
          </div>
        </section>
        <section className="dust-grid theme-vs-world">
          <div className="grid-label"></div>
          <div className="grid-label" style={{color: "#ff6060"}}>We Have Theme Parks</div>
          <div className="grid-label" style={{color: "#66b966"}}>We Need Worlds</div>
          <div className="grid-image">
            <img src="/illegal.svg" className="grid-image" />
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#ff6060"}}>Restricted Agency</div>
            <div className="grid-body">
              Big studios build trusted first-party features & can negotiate integrations. Players build untrusted third-party workarounds.
            </div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>COMPLETE FREEDOM</div>
            <div className="grid-body">
              Player creations are trusted, first-party, and freely integrate with the entire internet & economy. Redstone on steroids.
            </div>
          </div>
          <div className="grid-image">
            <img src="/malleable.svg" className="grid-image" />
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#ff6060"}}>ADMIN ABUSE & SPAWNING</div>
            <div className="grid-body">Owner can reset the world, override its rules, and infinitely spawn, wipe, or nerf resources at will.</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>IMMUTABLE LAWS & RESOURCES</div>
            <div className="grid-body">
              Nobody can reset the world, override its rules, or change the supply and behavior of resources.
              </div>
          </div>
          <div className="grid-image">
            <img src="/lastonline.svg" className='grid-image'/>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#ff6060"}}>Capped Temporary Admission</div>
            <div className="grid-body">Server eventually shuts down, and all creations & achievements are lost. Player cap only increases if owner can afford to scale.</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>Infinite Permanent Existence</div>
            <div className="grid-body">One continuous space that infinitely grows as players do. Nobody can shut it down. Creations & achievements outlive players.</div>
          </div>
        </section>
        <div style={{borderBottom: "1px dashed hsla(60, 68%, 94%, 0.1)"}}>
          <div className='grid-cell-sub'>
            <div className="grid-title" style={{color: "#ff6060"}}>ROOT CAUSE:</div>
            <div>
                <div className="grid-title-sub">Theme parks are the most we can build with what we have - servers.</div>
                <div className="grid-title-sub">A server is a black box - only its owner knows what’s happening inside - everyone else just has to believe it.</div>
                <div className="grid-title-sub">The owner can change anything at anytime, then unplug it when they eventually leave or run out of money.</div>
              </div>
          </div>
        </div>
        <section className="dust-row">
          <div className='columnSubheading dust-headline'>
            Misunderstood Breakthroughs Are Making Virtual Objects Real.
            Applied Differently, They Can Grow Virtual Worlds.
          </div>
        </section>
        <div className='grid-cell-sub'>
          <div className="grid-title" style={{color: "#66b966"}}>KEY INSIGHT:</div>
          <div>
              <div className="grid-title-sub">Bitcoin is fully virtual money - not backed by physical commodities or militaries - yet treated as real (worth $2T).</div>
              <div className="grid-title-sub">Its enabling breakthrough, peer-to-peer state machines, is use-case agnostic.</div>
              <div className="grid-title-sub">If applied differently, it creates far more than money - it defines physics, spawns matter, and grows worlds.</div>
            </div>
        </div>
        <section className="dust-grid-sub virtual-money-vs-world">
          <div className="grid-label" style={{color: "#B8A898"}}>Virtual Money</div>
          <div className="grid-label" style={{opacity: "0.8"}}>
            <span style={{color: "#B8A898", fontSize: "1.5rem"}}>→ {"  "}</span>
              Applied Differently
            <span style={{color: "#66b966", fontSize: "1.5rem"}}>{"  "} →</span>
          </div>
          <div className="grid-label" style={{color: "#66b966"}}>Virtual World</div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div>
              <div className="grid-title" style={{color: "#B8A898"}}>Smart Contracts & Finance</div>
              <div className="grid-body">Program Ether and integrate with the internet & economy.</div>
            </div>
            <img src="/smartcontracts.svg" className="grid-image" style={{background: "#ffffffb0", alignSelf: "center", width: "50%", height: "auto"}}/>
          </div>
          <div className="grid-cell"  style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div className="grid-title" style={{opacity: "0.8", alignSelf: "center"}}>MUD (2022)</div>
            <img src="/mud.svg" className="grid-image" style={{objectFit: "contain", border: "none", alignSelf: "center", width: "30%", height: "auto"}}/>
          </div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div>
              <div className="grid-title" style={{color: "#66b966"}}>Smart Machines & Societies</div>
              <div className="grid-body">Program machines and integrate with the internet & economy.</div>
            </div>
            <img src="/machinesocieties.svg" className="grid-image" style={{background: "#ffffffb0", alignSelf: "center", width: "50%", height: "auto"}}/>
          </div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div>
            <div className="grid-title" style={{color: "#B8A898"}}>Own Scarce Tokens</div>
            <div className="grid-body">Mine by validating, burn by computing; they can't be stolen and transfer anywhere instantly.</div>
            </div>
            <img src="/tokens.svg" className="grid-image" style={{background: "#ffffffb0", alignSelf: "center", objectFit: "fill", width: "auto"}}/>
          </div>
          <div className="grid-cell"  style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div className="grid-title" style={{opacity: "0.8", alignSelf: "center"}}>Dark Forest (2020) & Biomes (2024)</div>
            <img src="/dfbiomes.svg" className="grid-image" style={{objectFit: "contain", border: "none", alignSelf: "center", width: "30%", height: "auto"}}/>
          </div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "space-between"}}>
            <div>
            <div className="grid-title" style={{color: "#66b966"}}>PvP & PvE For Scarce Matter</div>
            <div className="grid-body">Mine from nature, burn by crafting and using; can be taken in combat, reclaimed by nature, and must be physically moved.</div>
            </div>
            <img src="/matter.svg" className="grid-image" style={{background: "#ffffffb0", alignSelf: "center", objectFit: "fill", width: "auto"}} />
          </div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div>
              <div className="grid-title" style={{color: "#B8A898"}}>Superchain of Chains</div>
              <div className="grid-body">Anyone can provably run new chains to expand the ledger.</div>
            </div>
            <img src="/superchain.svg" className="grid-image" style={{alignSelf: "center", objectFit: "fill", width: "auto"}}/>
          </div>
          <div className="grid-cell"  style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div className="grid-title" style={{opacity: "0.8", alignSelf: "center"}}>Quarry (2025)</div>
            <img src="/quarryy.svg" className="grid-image" style={{objectFit: "contain", border: "none", alignSelf: "center", justifySelf: "center", width: "30%", height: "auto"}}/>
          </div>
          <div className="grid-cell" style={{display: "flex", flexDirection: "row", gap: "0.5rem", justifyContent: "space-between"}}>
            <div>
              <div className="grid-title" style={{color: "#66b966"}}>Supergrid of Chunks</div>
              <div className="grid-body">Anyone can provably run new chunks to expand the map.</div>
            </div>
            <img src="/supergrid.svg" className="grid-image" style={{alignSelf: "center", objectFit: "fill", width: "auto"}}/>
          </div>
        </section>
        <section className="dust-row">
          <div className='columnSubheading dust-headline'>
            Virtual Worlds Will Matter More With Every Passing Year.
            As Players Program Territories, Their Societies Break Into the Internet and Economy, Organizations Contribute Compute and Clients, Resources Accrue Value and Spark Rushes and Wars... How Far Will Dust Go?
          </div>
        </section>

        <div className="home-container">
        <TopographicMapBackground />
          <div style={{textAlign: "center", position: 'relative', zIndex: 1, lineHeight: '0'}}>
            <img src="/fullstack.svg" style={{width: "60%", backdropFilter: "blur(4px)", padding: "2rem"}}/>
          </div>
        </div>






    </div>
  </div>
);
}