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
        The world runs on fixed rules of physics. Everyone must obey them.
        </div>
        <div className='learn-body'>
        These rules are verifiable programs. If you try to break them, the world stops you.
        </div>
        <div className='learn-body'>
        Resource supplies are fixed by these same rules. You mine, farm, craft, trade, and build—using only what the world allows.
        </div>
        <div className='learn-body'>
        Players and machines need energy to act and survive. Plants provide energy. Time, actions, and damage drain it.
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
        On top of the world's fixed rules of physics, you code civilization—reputation, currency, governments, markets, and more. 
        </div>
        <div className='learn-body'>
        Your code runs live, shapes everyone's gameplay, and persists even after you leave. It's equal to Dust’s rules of physics, a native part of the world itself—not an isolated mod.
        </div>
        <div className='learn-body'>
        Command machines—turn chests into shops and doors into toll gates. Build atop other players’ live code, and they build atop yours. Connect to anything online—Reddit, Discord, Dollars.
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
        Everything—the world's fixed rules of physics and players' uploaded code—runs together on one permanent network.
        </div>
        <div className="learn-body">
        No central server controls the world. It lives as long as even one person keeps running it on their computer.
        </div>
        <div className='learn-body'>
        Every action is recorded publicly, letting anyone verify they followed the rules.
        </div>
        <div className='learn-body'>
        Build your greatest work in a world with a truly shared history.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://explorer.mud.dev/garnet/worlds/0x4C619a1AA1b7C30137b2e8f4A78327C68D33A8ac/explore?tableId=0x74627063746f6b656e0000000000000042616c616e6365730000000000000000&query=SELECT%2520%2522account%2522%252C%2520%2522value%2522%2520FROM%2520%2522pctoken__Balances%2522%2520LIMIT%252010%2520OFFSET%25200%253B&page=0&pageSize=10&readonly=true" className="learn-card">
            <img src="/explorer.svg" className="learn-card-image" />
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