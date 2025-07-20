'use client';

import Link from "next/link";
import React from 'react';
import "/styles/features.css";

const LearnPage = () => {
  return (
    <div className="learn-layout">
      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>No admins. Just physics.</div>
        <div className='learn-body'>
        The world runs on fixed rules of physics.
        These are verifiable programs that check every action and stop anyone who tries to break them.
        No admins—the world's rules enforce themselves.
        </div>
        <div className='learn-body'>
        These same rules fix the supply and scarcity of matter. You mine, farm, craft, trade, and build within their limits.
        </div>
        <div className='learn-body'>
        Players and machines—like chests, doors, and force fields—need energy. Plants provide it. Time, actions, and damage drain it.
        </div>
        <div className='learn-body'>
        Scarcities, constraints, and consequences drive coordination and conflict.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/world" className="learn-card">
            <img src="/provablerules.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">Rules & Resources</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Code the world.</div>
        <div className='learn-body'>
        On top of the world's fixed rules of physics, you code civilization—reputation, currency, governments, and more.
        </div>
        <div className='learn-body'>
        The world is your codebase. 
        Command machines in your territory—turn chests into shops, doors into toll gates. Build on top of others' live code. Connect to anything online: Reddit, Discord, Dollars.
        </div>
        <div className='learn-body'>
        Your code becomes a core rule of the world itself—not an isolated mod.        
        It lives inside the world, shapes everyone's gameplay, and persists even after you leave.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/programs" className="learn-card">
            <img src="/possiblehero.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
              <div className="learn-card-label">What’s Possible</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Can’t be wiped.</div>
        <div className='learn-body'>
        Everything—the world's fixed rules of physics and player uploaded code—runs together on one permanent network. No central server controls it. The world lives as long as one person keeps running it.
        </div>
        <div className='learn-body'>
        Every action is recorded publicly, letting anyone check that rules are being followed. This creates a truly shared history—a world worthy of our greatest work.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://explorer.mud.dev/redstone/worlds/0x253eb85B3C953bFE3827CC14a151262482E7189C" className="learn-card">
            <img src="/explorertwo.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">Network Explorer</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

    </div>
);
};

export default LearnPage;