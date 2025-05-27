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
        <Link href="/coalition" className="coalition-banner">
          <img src="/dusttexture.svg" alt="" className="coalition-img" />
          <span className="coalition-text coalition-title" ref={joinCoalitionRef}>JOIN&nbsp;DUST</span>
        </Link>
      </div>
      <div className="dust-protocol">
        <section className="dust-row">
          <div className='columnSubheading dust-headline'>
          We’ve Been Trying To Live in Virtual Worlds for Decades. But All We Can Build Are Theme Parks.
          </div>
        </section>
        <section className="dust-grid theme-vs-world responsive-grid">
          <div className="grid-label"></div>
          <div className="grid-label" style={{color: "#ff6060"}}>We Have Theme Parks</div>
          <div className="grid-label" style={{color: "#66b966"}}>We Need Worlds</div>
          <div className="grid-image">
            <img src="/illegal.svg" className='grid-image-kid'/>
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
            <img src="/malleable.svg" className='grid-image-kid'/>
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
            <img src="/lastonline.svg" className='grid-image-kid'/>
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
          <div className="root-cause">
            <div className="grid-title">ROOT&nbsp;CAUSE:</div>
            <div>
              <div className="grid-title-sub">Theme parks are the most we can build with what we have — servers.</div>
              <div className="grid-title-sub">A server is a black box — only its owner knows what’s happening inside — everyone else just has to believe it.</div>
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
        <div className="root-cause">
          <div className="grid-title" style={{color: "#66b966"}}>KEY&nbsp;INSIGHT:</div>
          <div>
            <div className="grid-title-sub">Bitcoin is fully virtual money - not backed by physical commodities or militaries - yet treated as real (worth $2T).</div>
            <div className="grid-title-sub">Its enabling breakthrough, peer-to-peer state machines, is use-case agnostic.</div>
            <div className="grid-title-sub">If applied differently, it creates far more than money - it defines physics, spawns matter, and grows worlds.</div>
          </div>
        </div>

        <section className="vmw-grid">
          <div className="grid-label vmw-money">Virtual Money</div>
          <div className="grid-label vmw-mid">→ Applied Differently →</div>
          <div className="grid-label vmw-world">Virtual World</div>
          {[
            {
              t:"Smart Contracts & Finance",
              b:"Program Ether and integrate with the internet & economy.",
              c:"#B8A898",
              img:"/smartcontracts.svg"
            },
            { t:"MUD (2022)", solo:true, img:"/mud.svg" },
            {
              t:"Smart Machines & Societies",
              b:"Program machines and integrate with the internet & economy.",
              c:"#66b966",
              img:"/machinesocieties.svg"
            },
            {
              t:"Own Scarce Tokens",
              b:"Mine by validating, burn by computing; they can't be stolen and transfer anywhere instantly.",
              c:"#B8A898",
              img:"/tokens.svg"
            },
            { t:"Dark Forest (2020) & Biomes (2024)", solo:true, img:"/dfbiomes.svg" },
            {
              t:"PvP/PvE For Scarce Matter",
              b:"Mine from nature, burn by crafting and using; can be stolen or reclaimed, must be moved.",
              c:"#66b966",
              img:"/matter.svg"
            },
            {
              t:"Superchain of Chains",
              b:"Anyone can provably run new chains to expand the ledger.",
              c:"#B8A898",
              img:"/superchain.svg"
            },
            { t:"Quarry (2025)", solo:true, img:"/quarryy.svg" },
            {
              t:"Supergrid of Chunks",
              b:"Anyone can provably run new chunks to expand the map.",
              c:"#66b966",
              img:"/supergrid.svg"
            }
          ].map(({t,b,c,img,solo},i)=>(
            <div className={`vmw-cell${solo ? ' vmw-solo' : ''}`} key={i}>
            <div className="vmw-title" style={{ color: c || "inherit" }}>{t}</div>
            <div className="vmw-content">
              <div className="vmw-body">{b}</div>
              <img src={img} alt="" className="vmw-img" />
            </div>
            </div>
          ))}
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
            <img src="/fullstack.svg" className='full-stack'/>
          </div>
        </div>
    </div>
  </div>
);
}