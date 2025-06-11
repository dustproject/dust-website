'use client';

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import "/styles/features.css";


const ExplorePage = () => {
  return (
    <div className="manifesto-layout">
        <div className="learn-grid-border"></div>
        <div style={{padding: "2rem"}}>
            <div className="learn-title ">We have been trying to live in virtual worlds for decades. But all we can build are theme parks.</div>
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
                <div className="learn-body-grid">Admins often wipe the world, override its rules, and infinitely spawn, wipe, or nerf resources at will.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>IMMUTABLE LAWS</div>
                <div className="learn-body-grid">
                    Nobody can wipe the world, override its rules, or change the supply and behavior of resources.
                </div>
                </div>
                <div className="grid-image">
                <img src="/illegal.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Isolated Mods</div>
                <div className="learn-body-grid">
                    Studios build first-party features.
                    Players either build third-party workarounds or separate mods that run in isolation.
                </div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Connected Mechanics</div>
                <div className="learn-body-grid">
                    Players build trusted, first-party mechanics on top of each other.
                    No workarounds. No isolation.
                </div>
                </div>
                <div className="grid-image">
                <img src="/lastonline.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#ff6060"}}>Capped & Temporary</div>
                <div className="learn-body-grid">Server eventually shuts down. All creations & achievements are lost. Player cap only increases if owner can afford to scale.</div>
                </div>
                <div className="grid-cell">
                <div className="learn-title-grid" style={{color: "#66b966"}}>Infinite & Permanent</div>
                <div className="learn-body-grid">One continuous space that infinitely grows as players do. Creations & achievements outlive players. Can't be shutdown.</div>
                </div>
            </section>
            <div className="root-cause-learn">
                <div>
                    <div className="grid-title">ROOT&nbsp;CAUSE</div>
                    <div>
                        <div className="learn-body-grid" >Theme parks are the most we can build with what we have—servers.</div>
                        <div className="learn-body-grid" >A server is a black box. Only its owner knows what’s happening inside. Everyone else just has to believe what it says.</div>
                        <div className="learn-body-grid" >The owner can change anything at anytime, then unplug it when they eventually leave or run out of money.</div>
                    </div>
                </div>
                <div style={{ pointerEvents: 'none', opacity: 0.3 }}>
                    <Link href="https://www.slayherobrine.com/" style={{ textDecoration: 'none' }}>
                        <div className="grid-title grid-button last-button" style={{ color: "rgba(255, 255, 255, .5)" }}>[ READ MORE ]</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{padding: "2rem"}}>
            <div className="learn-title ">Recent breakthroughs are making virtual objects real. Fully realized, they will grow virtual worlds.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div style={{border: "1px solid rgba(255, 255, 255, .08)"}}>
            <div className="root-cause-learn" style={{background: "#66b96617", marginTop: "0"}}>
                <div>
                    <div className="grid-title" style={{color: "#66b966"}}>KEY&nbsp;INSIGHT</div>
                    <div>
                        <div className="learn-body-grid" style={{color: "#66b966"}}>Bitcoin is fully virtual money. Not backed by physical commodities or militaries—yet treated as real (worth $2T).</div>
                        <div className="learn-body-grid" style={{color: "#66b966"}}>Its enabling breakthrough, peer-to-peer computation, is use-case agnostic.</div>
                        <div className="learn-body-grid" style={{color: "#66b966"}}>Applied differently, it creates far more than money. It defines physics, spawns matter, and grows worlds.</div>
                    </div>
                </div>
                <Link href="/blog/rising-dust" style={{textDecoration: 'none'}}>
                    <div className="grid-title grid-button" style={{color: "#66b966"}}>[ READ MORE ]</div>
                </Link>
            </div>
            <section className="dust-grid-sub theme-vs-world responsive-grid">
                <div className="grid-label"></div>
                <div className="grid-label" style={{color: "#ffffffd4"}}>Virtual Money</div>
                <div className="grid-label" style={{color: "#66b966"}}>Virtual World</div>
                <div className="grid-image">
                    <img src="/tokenstwo.svg" className='grid-image-kid'/>
                </div>
                <div className="grid-cell">
                    <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                        <div className="learn-body-grid">
                            Token supply and transfer rules can’t be tampered.
                        </div>
                        <div className="learn-body-grid">
                        Program rules around transfers. Runs on a permanent ledger.
                        </div>
                        <div className="learn-body-grid">
                            Mine by validating. Burn by computing.
                        </div>
                        <div className="learn-body-grid">
                            Can’t be stolen. Transfers instantly.
                        </div>
                    </div>
                </div>
                <div className="grid-cell">
                    <div style={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                        <div className="learn-body-grid">
                         Resource supply and physics rules can’t be tampered.
                        </div>
                        <div className="learn-body-grid">
                        Program rules inside territory. Runs on a permanent map.
                        </div>
                        <div className="learn-body-grid">
                        Mine from nature. Burn through use. 
                        </div>
                        <div className="learn-body-grid">
                        Can be taken by PvP or PvE. Must be physically moved.
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div className="root-cause-learn final-learn">
            <div>
                <div className="learn-title">Virtual worlds will matter more with every passing year. Dust is the first virtual world that takes itself seriously.</div>
            </div>
            <div className="final-buttons">
                <Link href="/premise" style={{textDecoration: 'none'}}>
                    <div className="grid-title grid-button last-button" style={{color: "white"}}>[ PREMISE ]</div>
                </Link>
                <div style={{ pointerEvents: 'none', opacity: 0.3 }}>
                    <Link href="/economics" style={{ textDecoration: 'none' }}>
                        <div className="grid-title grid-button last-button" style={{ color: "rgba(255, 255, 255, .5)" }}>[ ECONOMICS ]</div>
                    </Link>
                </div>
                <div style={{ pointerEvents: 'none', opacity: 0.3 }}>
                    <Link href="/research" style={{ textDecoration: 'none' }}>
                        <div className="grid-title grid-button last-button" style={{ color: "rgba(255, 255, 255, .5)" }}>[ RESEARCH ]</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>
    </div>
  );
};

export default ExplorePage;