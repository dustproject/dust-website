'use client';

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import "/styles/features.css";

const ExplorePage = () => {
  return (
    <div className="manifesto-layout">
        <div className="learn-grid-border"></div>
        <header className="survive-header">
            <div className="learn-logo">The Past and Future of Dust</div>
        </header>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{padding: "1rem"}}>
            <div className="learn-title ">We’ve Been Trying To Live in Virtual Worlds for Decades. But All We Can Build Are Theme Parks.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)"}}>
            <section className="dust-grid theme-vs-world responsive-grid">
                <div className="grid-label"></div>
                <div className="grid-label" style={{color: "#ff6060"}}>We Have Theme Parks</div>
                <div className="grid-label" style={{color: "#66b966"}}>We Need Worlds</div>
                <div className="grid-image">
                <img src="/illegal.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Isolated Mods</div>
                <div className="learn-body-grid">
                    Studios build first-party features.
                    Players build third-party widgets or completely separate mods that run in isolation.
                </div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Composable Mechanics</div>
                <div className="learn-body-grid">
                    Players build trusted, first-party mechanics that interoperate as one.
                    Redstone on steroids.
                </div>
                </div>
                <div className="grid-image">
                <img src="/malleable.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>ADMIN ABUSE & SPAWNING</div>
                <div className="learn-body-grid">Owner can reset the world, override its rules, and infinitely spawn, wipe, or nerf resources at will.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>IMMUTABLE LAWS & RESOURCES</div>
                <div className="learn-body-grid">
                    Nobody can reset the world, override its rules, or change the supply and behavior of resources.
                    </div>
                </div>
                <div className="grid-image">
                <img src="/lastonline.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Capped Temporary Admission</div>
                <div className="learn-body-grid">Server eventually shuts down, and all creations & achievements are lost. Player cap only increases if owner can afford to scale.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Infinite Permanent Existence</div>
                <div className="learn-body-grid">One continuous space that infinitely grows as players do. Nobody can shut it down. Creations & achievements outlive players.</div>
                </div>
            </section>
            <div className="root-cause-learn">
                <div className="grid-title">ROOT&nbsp;CAUSE</div>
                <div>
                    <div className="learn-body-grid">Theme parks are the most we can build with what we have — servers.</div>
                    <div className="learn-body-grid">A server is a black box — only its owner knows what’s happening inside — everyone else just has to believe it.</div>
                    <div className="learn-body-grid">The owner can change anything at anytime, then unplug it when they eventually leave or run out of money.</div>
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{padding: "1rem"}}>
            <div className="learn-title ">Misunderstood Breakthroughs Are Making Virtual Objects Real. Applied Differently, They Can Grow Virtual Worlds.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)"}}>
            <section className="dust-grid virtual-money-vs-world responsive-grid">
            <div className="grid-label" style={{color: "#B8A898"}}>Virtual Money</div>
            <div className="grid-label" style={{opacity: "0.8"}}>Applied Differently</div>
            <div className="grid-label" style={{color: "#66b966"}}>Virtual World</div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#B8A898"}}>Smart Contracts & Finance</div>
                <div className=" learn-body-grid">
                Program Ether and integrate with the internet & economy.
                </div>
            </div>
            <div className="grid-image">
                <img src="/contracts.svg" className='grid-image-kid'/>
                <div className="grid-image-label">MUD (2022)</div>
            </div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Smart Machines & Civilization</div>
                <div className="learn-body-grid">
                Program machines (force fields, chests, doors, etc) and integrate with the internet & economy.
                </div>
            </div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#B8A898"}}>Own Scarce Tokens</div>
                <div className="learn-body-grid">Mine by validating, burn by computing; they can't be stolen and transfer anywhere instantly.</div>
            </div>
            <div className="grid-image">
                <img src="/tokens.svg" className='grid-image-kid'/>
                <div className="grid-image-label">Dark Forest (2020) & Biomes (2024)</div>
            </div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>PvP/PvE For Scarce Matter</div>
                <div className="learn-body-grid">Mine from nature, burn by crafting and using. Can be stolen by PvP or reclaimed by PvE. Must be moved - can't teleport.</div>
            </div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#B8A898"}}>Superchain of Chains</div>
                <div className="learn-body-grid">Anyone can provably run new chains to extend the ledger.</div>
            </div>
            <div className="grid-image">
                <img src="/quarry.svg" className='grid-image-kid'/>
                <div className="grid-image-label">Quarry (2025)</div>
            </div>
            <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Supergrid of Chunks</div>
                <div className="learn-body-grid">Anyone can provably run new chunks to expand the map.</div>
            </div>
            </section>
            <div className="root-cause-learn" style={{background: "#66b96617"}}>
                <div className="grid-title" style={{color: "#66b966"}}>KEY&nbsp;INSIGHT</div>
                <div>
                    <div className="learn-body-grid" style={{color: "#66b966"}}>Bitcoin is fully virtual money - not backed by physical commodities or militaries - yet treated as real (worth $2T).</div>
                    <div className="learn-body-grid" style={{color: "#66b966"}}>Its enabling breakthrough, peer-to-peer computation, is use-case agnostic.</div>
                    <div className="learn-body-grid" style={{color: "#66b966"}}>If applied differently, it creates far more than money - it defines physics, spawns matter, and grows worlds.</div>
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{padding: "1rem"}}>
            <div className="learn-title ">
                Virtual Worlds Will Matter More With Every Passing Year. As Players Code Civilization, They Break Into the Internet and Economy, Organizations Contribute Compute and Clients, Resources Accrue Value and Spark Rushes and Wars... How Far Will Dust Go?
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)", paddingTop: "1rem"}}>
          <div style={{textAlign: "center", position: 'relative', zIndex: 1, lineHeight: '0'}}>
            <img src="fullstack.svg" className='full-stack'/>
          </div>
        </div>
        <div className="learn-grid-border"></div>
        <div className="learn-grid-border"></div>
            <button className="learn-footer-right" onClick={() => window.location.href = '/learn'}>Access Client</button>
        <div className="learn-grid-border"></div>
    </div>







  );
};

export default ExplorePage;