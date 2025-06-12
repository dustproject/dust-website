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
        The world runs on fixed rules of physics—verifiable programs everyone must obey.
        </div>
        <div className='learn-body'>
        If you try to break them, your action fails the check, and the world stops you.
        </div>
        <div className='learn-body'>
        These same rules fix resource supply and scarcity. You mine, farm, craft, trade, and build within their limits.
        </div>
        <div className='learn-body'>
        Players and machines need energy. Plants provide it. Time, actions, and damage drain it.
        </div>
        <div className='learn-body'>
        Machines—like force fields, doors, and chests—spend energy to control territory.
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
        <div className='learn-title'>Code civilization.</div>
        <div className='learn-body'>
        On top of the world's fixed rules of physics, you code civilization—reputation, currency, governments, and more.
        </div>
        <div className='learn-body'>
        Your code runs live, shapes everyone's gameplay, and persists even after you leave.
        It becomes a native part of the world itself, equal to the fixed rules of physics—not an isolated mod.
        </div>
        <div className='learn-body'>
        Your code commands machines—turn chests into shops, doors into toll gates. It builds on other players’ live code, and connects to anything online: Reddit, Discord, Dollars. Everything is your codebase.        
        </div>
        <div className='learn-body'>
        A world programmed by its players.
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
        Every action is recorded publicly, letting anyone verify that rules are being followed.
        </div>
        <div className='learn-body'>
        Build your greatest work in a world with truly shared history.
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