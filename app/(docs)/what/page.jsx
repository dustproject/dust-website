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
        The world runs on fixed rules of physics that everyone must obey.
        </div>
        <div className='learn-body'>
        The rules are verifiable programs that check every action.
        If you try to break the rules, the world stops you.
        </div>
        <div className='learn-body'>
        These same rules fix the supply and scarcity of resources. You mine, farm, craft, trade, and build within their limits.
        </div>
        <div className='learn-body'>
        Players and machines need energy. Plants provide it. Time, actions, and damage drain it.
        </div>
        <div className='learn-body'>
        Machines—like chests, doors, and force fields—consume energy to control territory.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/world" className="learn-card">
            <img src="/provablerules.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">The Provable Rules</div>
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
        Your code becomes a native part of the world itself—not an isolated mod. It runs live, shapes everyone's gameplay, and persists even after you leave.
        </div>
        <div className='learn-body'>
        Everything is your codebase. 
        Command machines—turn chests into shops, doors into toll gates. Build on others' live code. Connect to anything online: Reddit, Discord, Dollars.
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
        Everything—the world's fixed rules of physics and player uploaded code—runs together on one permanent network.
        </div>
        <div className="learn-body">
        No central server controls it. The world lives as long as one person keeps running it.
        </div>
        <div className='learn-body'>
        Every action is recorded publicly, letting anyone check that rules are being followed.
        </div>
        <div className='learn-body'>
        This creates a truly shared history—a world worthy of your greatest work.
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