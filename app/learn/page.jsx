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
        The world only runs on its set rules—written as provable code. If you break them, the proof fails, and the world doesn't run. Impossible to override.
        </div>
        <div className='learn-body'>
          Resource supply is fixed by the world's rules. Mine, craft, trade, and build with them.
        </div>
        <div className='learn-body'>
          Energy fuels players and machines. Farm plants to gain it. Energy drains with time, action, and damage.
        </div>
        <div className='learn-body'>
          Machines—like force fields, doors, and chests—use energy to control territory.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/world" className="learn-card">
            <img src="/provablerules.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">[ The Provable Rules ]</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Code civilization.</div>
        <div className='learn-body'>
          The world sets physics. You code civilization—reputation, currency, governments, markets, and more. 
        </div>
        <div className='learn-body'>
          Your code reads world state and controls its machines—turn chests into shops, doors into toll gates.
          It can build on other players’ code and anything online.
        </div>
        <div className='learn-body'>
          Upload your code once. It runs live in-game, affects everyone, and persists even if you leave.
        </div>
        <div className='learn-body'>
          It becomes a native part of the world for other players. They use it and build on it with trust.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="/possible" className="learn-card">
            <img src="/possiblehero.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
              <div className="learn-card-label">[ What’s Possible ]</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Can’t be wiped.</div>
        <div className='learn-body'>
          Everything runs on a peer-to-peer network. No central server.
          The world lives as long as one person keeps running it.
        </div>
        <div className="learn-body">
        Every action is publicly recorded. Anyone can inspect the proofs that they ran correctly.
        </div>
        <div className='learn-body'>
        Start your greatest work. It can't be wiped.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://explorer.mud.dev/garnet/worlds/0x4C619a1AA1b7C30137b2e8f4A78327C68D33A8ac/explore?tableId=0x74627063746f6b656e0000000000000042616c616e6365730000000000000000&query=SELECT%2520%2522account%2522%252C%2520%2522value%2522%2520FROM%2520%2522pctoken__Balances%2522%2520LIMIT%252010%2520OFFSET%25200%253B&page=0&pageSize=10&readonly=true" className="learn-card">
            <img src="/explorer.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">[ Network Explorer ]</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

    </div>
);
};

export default LearnPage;