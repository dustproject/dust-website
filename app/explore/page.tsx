'use client';

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import "/styles/features.css";


const ExplorePage = () => {
  return (
    <div className="manifesto-layout">
        <div className="learn-grid-border"></div>
        <div style={{padding: "3rem 2rem", borderLeft: "1px solid rgba(255, 255, 255, .08)", borderRight: "1px solid rgba(255, 255, 255, .08)"}}>
            <div className="explore-title ">We tried to live in virtual worlds for decades. But the best we could build were theme parks.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)"}}>
            <section className="dust-grid theme-vs-world responsive-grid">
                <div className="grid-label"></div>
                <div className="grid-label" style={{color: "#ff6060"}}>We Have Theme Parks</div>
                <div className="grid-label" style={{color: "#66b966"}}>We Need Worlds</div>
                <div className="grid-image">
                <img src="/malleable.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>ADMIN ABUSE</div>
                <div className="learn-body-grid">Admins wipe worlds, override rules, and spawn or nerf resources at will.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>IMMUTABLE RULES</div>
                <div className="learn-body-grid">
                No one can wipe the world, override its rules, or alter the supply and behavior of resources.
                </div>
                </div>
                <div className="grid-image">
                <img src="/illegal.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Isolated Mods</div>
                <div className="learn-body-grid">
                Studios build first-party features. Players can only build third-party workarounds or mods that run isolated from the world.
                </div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Connected Mechanics</div>
                <div className="learn-body-grid">
                Players build first-party mechanics on top of each other. Nothing is isolated from the world.
                </div>
                </div>
                <div className="grid-image">
                <img src="/lastonline.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Capped & Temporary</div>
                <div className="learn-body-grid">Servers eventually shutdown. Player progress is lost. The player limit only increases if the owner can afford to scale.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Infinite & Permanent</div>
                <div className="learn-body-grid">The world grows as its players do—endlessly. It can’t be shut down, so your progress outlives you.</div>
                </div>
            </section>
            <div className="root-cause">
                <div className="grid-title">A SERVER IS A BLACK BOX</div>
                <div>
                        <div className="learn-body-grid" >Only the server owner knows what’s happening inside. Everyone else just has to believe what it says.</div>
                        <div className="learn-body-grid" >They can change anything on a whim—then unplug it when they eventually leave or run out of money.</div>
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{padding: "3rem 2rem", borderLeft: "1px solid rgba(255, 255, 255, .08)", borderRight: "1px solid rgba(255, 255, 255, .08)"}}>
            <div className="explore-title ">Breakthroughs in peer-to-peer computation made virtual objects real—Bitcoin is fully virtual money, yet it's worth $2T. The same breakthrough goes far beyond money: it defines physics, spawns matter, and grows worlds.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)"}}>
            <section className="dust-grid-sub virtual-money-vs-world responsive-grid">
                <div className="grid-label"></div>
                <div className="grid-label" style={{color: "#ffffffd4"}}>Bitcoin (Virtual Money)</div>
                <div className="grid-label" style={{color: "#66b966"}}>Dust (Virtual World)</div>
                <div className="grid-image">
                    <img src="/moneyworld.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                    <ol style={{ display: "flex", flexDirection: "column", paddingLeft: "1.25rem", gap: "0.5rem", margin: "0" }}>
                        <li className="learn-body-grid">
                        Token supply and transfer rules can’t be tampered with.
                        </li>
                        <li className="learn-body-grid">
                        Your tokens can’t be stolen. You can transfer them instantly to anywhere.
                        </li>
                        <li className="learn-body-grid">
                        Anyone can program new rules around transfers.
                        </li>
                        <li className="learn-body-grid">
                        It runs on one shared, permanent ledger.
                        </li>
                    </ol>
                </div>
                <div className="grid-cell">
                    <ol style={{ display: "flex", flexDirection: "column", paddingLeft: "1.25rem", gap: "0.5rem", margin: "0" }}>
                        <li className="learn-body-grid">
                        Resource supply and physics rules can’t be tampered with.
                        </li>
                        <li className="learn-body-grid">
                        Your resources can be taken through PvP or PvE. You must physically move them.
                        </li>
                        <li className="learn-body-grid">
                        Anyone can program new rules inside territory.
                        </li>
                        <li className="learn-body-grid">
                        It runs on one shared, permanent map.
                        </li>
                    </ol>
                </div>
            </section>
        </div>
        <div className="learn-grid-border"></div>
    </div>
  );
};

export default ExplorePage;