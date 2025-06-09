'use client';

import React, { useEffect, useRef, useState } from 'react';
import "/styles/globals.css";
import Image from 'next/image';
import Link from "next/link";
import ProjectsPage from './projects/page';
import TopographicMapBackground from '/components/TopoBackground';
import SmartButton from '../components/smartbutton';

const LandingGridTwo = () => {   
  return (    
    <div className="home-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/topo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'relative', zIndex: 1, paddingTop: "8rem", paddingBottom: "8rem", lineHeight: '0' }}>
          <div className="header-row">
            <div className="columnHeading" style={{color: "white"}}>GET A HEAD START</div>
            <SmartButton href='https://discord.gg/J75hkmtmM4'>Join Discord</SmartButton>
          </div>
        <div className="action-card-grid" >
          <div className="action-card">
            <img src="https://media.forgecdn.net/attachments/332/97/4.png" className="card-image"/>
            <div className='columnSubheading'>SURVIVE</div>
            <div className='columnParagraph' style={{marginTop: "1rem"}}>
              No owners or admins - only physics is law.
            </div>
            <div className='columnParagraph'>
            Your energy constantly drains. Resources are heavily contested.
            </div>
            <div className='columnParagraph' style={{marginBottom: "1.5rem"}}>
            Find food and build a safe base to sleep... or die and lose everything. Go at it alone or coordinate with others.
            </div>
            <div className="button-container">
              <SmartButton disabled>
                Activity
              </SmartButton>
              <SmartButton href='projects'>
                Survival Guide
              </SmartButton>
            </div>
          </div>
          <div className="action-card">
            <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/08/minecraft-diamond-119.jpg" className="card-image"/>
            <div className='columnSubheading'>MINE</div>
            <div className='columnParagraph' style={{marginTop: "1rem"}}>
            No spawns, wipes, or nerfs - matter is scarce.
            </div>
            <div className='columnParagraph'>
            What you mine and farm is truly yours... as long as you can protect it.
            </div>
            <div className='columnParagraph' style={{marginBottom: "1.5rem"}}>
            Use to build, craft, or trade at local shops.
            </div>
            <div className="button-container">
              <SmartButton disabled>
                Supply
              </SmartButton>
            </div>
          </div>
          <div className="action-card">
            <img src="https://img2.9minecraft.net/minecraft/img/Modular-Force-Field-System-Mod-3.jpg" className="card-image"/>
            <div className='columnSubheading'>BUILD CIVILIZATION</div>
            <div className='columnParagraph' style={{marginTop: "1rem"}}>
            Secure and expand territory. No shutdowns or resets - what you build inside lasts.
            </div>
            <div className='columnParagraph'>
            Program it completely: turn chests into shops, doors into toll gates, and more.         
            </div>
            <div className='columnParagraph' style={{marginBottom: "1.5rem"}}>
            Integrate with anything online or even real dollars - truly unrestricted.
            </div>

            <div className="button-container">
              <SmartButton disabled>
                Map
              </SmartButton>
              <SmartButton href='projects'>
                Programming Guide
              </SmartButton>
            </div>
          </div>
        </div>
      </div>        
    </div>
  ); 
};

const LandingGridThree = () => {
  return (
<>
      {/* <div style={{background: "#212121", borderTop: "1px dashed hsla(60, 68%, 94%, 0.1)", borderBottom: "1px dashed hsla(60, 68%, 94%, 0.1)"}}>
        <Link href="/coalition" className="coalition-banner">
          <img src="/dusttexture.svg" alt="" className="coalition-img" />
          <span className="coalition-text coalition-title" ref={joinCoalitionRef}>JOIN&nbsp;COALITION</span>
        </Link>
      </div> */}
      <div className="dust-protocol">
        <section className="dust-row">
          <div className="header-row dust-headline">
            <div className="columnSubheading " style={{color: "white"}}>We’ve Been Trying To Live in Virtual Worlds for Decades. But All We Can Build Are Theme Parks.</div>
            <SmartButton href='https://slayherobrine.com/' variant="second">Slay Herobrine</SmartButton>
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
          <div className="header-row dust-headline">
            <div className="columnSubheading " style={{color: "white"}}>Misunderstood Breakthroughs Are Making Virtual Objects Real. Applied Differently, They Can Grow Virtual Worlds.</div>
            <SmartButton href='/blog/rising-dust' variant="second">Our History</SmartButton>
          </div>
        </section>
        <div className="root-cause" style={{border: "1px dashed #66b966"}}>
          <div className="grid-title" style={{color: "#66b966"}}>KEY&nbsp;INSIGHT:</div>
          <div>
            <div className="grid-title-sub">Bitcoin is fully virtual money - not backed by physical commodities or militaries - yet treated as real (worth $2T).</div>
            <div className="grid-title-sub">Its enabling breakthrough, secret-bearing peer-to-peer state machines, is use-case agnostic.</div>
            <div className="grid-title-sub">If applied differently, it creates far more than money - it defines physics, spawns matter, and grows worlds.</div>
          </div>
        </div>

        <section className="dust-grid-sub virtual-money-vs-world responsive-grid">
          <div className="grid-label" style={{color: "#B8A898"}}>Virtual Money</div>
          <div className="grid-label" style={{opacity: "0.8"}}>→ Applied Differently →</div>
          <div className="grid-label" style={{color: "#66b966"}}>Virtual World</div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#B8A898"}}>Smart Contracts & Finance</div>
            <div className="grid-body">
              Program Ether and integrate with the internet & economy.
            </div>
          </div>
          <div className="grid-image">
            <img src="/contracts.svg" className='grid-image-kid'/>
            <div className="grid-image-label">MUD (2022)</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>Smart Machines & Societies</div>
            <div className="grid-body">
            Program machines (force fields, chests, doors, etc) and integrate with the internet & economy.
            </div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#B8A898"}}>Own Scarce Tokens</div>
            <div className="grid-body">Mine by validating, burn by computing; they can't be stolen and transfer anywhere instantly.</div>
          </div>
          <div className="grid-image">
            <img src="/tokens.svg" className='grid-image-kid'/>
            <div className="grid-image-label">Dark Forest (2020) & Biomes (2024)</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>PvP/PvE For Scarce Matter</div>
            <div className="grid-body">Mine from nature, burn by crafting and using; can be stolen by PvP or reclaimed by PvE, must be moved - can't teleport.</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#B8A898"}}>Superchain of Chains</div>
            <div className="grid-body">Anyone can provably run new chains to expand the ledger.</div>
          </div>
          <div className="grid-image">
            <img src="/quarry.svg" className='grid-image-kid'/>
            <div className="grid-image-label">Quarry (2025)</div>
          </div>
          <div className="grid-cell">
            <div className="grid-title" style={{color: "#66b966"}}>Supergrid of Chunks</div>
            <div className="grid-body">Anyone can provably run new chunks to expand the map.</div>
          </div>
        </section>
        <section className="dust-row">
          <div className="header-row dust-headline" style={{justifyContent: "normal"}}>
            <div className="columnSubheading " style={{color: "white"}}>Virtual Worlds Will Matter More With Every Passing Year. As Players Program Territories, Their Societies Break Into the Internet and Economy, Organizations Contribute Compute and Clients, Resources Accrue Value and Spark Rushes and Wars... How Far Will Dust Go?</div>
            <SmartButton href='/premise' variant="second">Premise</SmartButton>
            <SmartButton href='/premise' disabled variant="second">Research</SmartButton>
            <SmartButton href='/premise' disabled variant="second">Economics</SmartButton>
          </div>
        </section>
        <div className="home-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src="/topo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{textAlign: "center", position: 'relative', zIndex: 1, lineHeight: '0'}}>
            <img src="fullstack.svg" className='full-stack'/>
          </div>
        </div>
      </div>
  </>
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
  return (
    <div> 
      <div className="dust-container">
        <div className="background-map">
          <video
            className="map-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <img
            className="map-image"
            src="/hero-bg.png"
            alt="Map background"
          />
        </div>
        <div className="content-wrapper">
          <div className="hero">
            <div className="hero-left">
              <div className="section">
                <div className='hero-header'>No admins. Just physics.</div>
                <div className='hero-body'>Resources are scarce. Energy drains. Survival takes effort.</div>
              </div>
              <div className="section">
                <div className='hero-header'>Code the world.</div>
                <div className='hero-body'>You code its mechanics. They run live in-game, shape everyone's world, and persist even if you leave.</div>
              </div>
              <div className="section">
                <div className='hero-header'>Can’t wipe. Built by all.</div>
                <div className='hero-body'>All mechanics run together on one permanent network. One shared world to outlast us all.</div>
              </div>
            </div>
            <div className="hero-right">
              <div className="logo">DUST</div>
              <div className="text-buttons">
                <div className="text-button-block">
                  <Link href="https://discord.gg/J75hkmtmM4" style={{textDecoration: "none"}}>
                    <div className='text-button'>[{" "}ACCESS{" "}]</div>
                  </Link>
                  <div className="text-subtext">Join Discord for early access to Dust’s free browser client.</div>
                </div>
                <div className="text-button-block">
                  <Link href="/learn" style={{textDecoration: "none"}}>
                    <div className='text-button'>[{" "}LEARN{" "}]</div>
                  </Link>
                  <div className="text-subtext">Learn how it works. Explore Dust's past and future.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}