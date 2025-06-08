'use client';

import Link from "next/link";
import React from 'react';
import "/styles/features.css";

const LearnPage = () => {
  return (
    <div className="learn-layout">
      <div className="learn-grid-border"></div>
      <header className="learn-header">
        <div className="learn-logo">How It Works</div>
      </header>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>No admins. Just physics.</div>
        <div className='learn-body'>
          The world only runs on its set rules. They're provable programs. So anyone can check they're being followed. Any attempt to interfere or override them simply fails.
        </div>
        <div className='learn-body'>
          The world is made up of resources. Their supply is fixed by the rules. Mine and use resources to build, craft, and trade.
        </div>
        <div className='learn-body'>
          Players and machines need energy. Farm and consume plants to gain it. It drains with time, action, and damage.
        </div>
        <div className='learn-body'>
          Energize machines—like force fields, doors, and chests—to claim and control territory.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/world" className="learn-card">
            <img src="/provablerules.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">The Rules</div>
            <div className="learn-card-desc">The provable programs for Dust's set rules.</div>
            </div>
          </Link>
          <Link href="/survive" className="learn-card">
            <img src="/survive.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">How to Survive</div>
            <div className="learn-card-desc">Walk through finding food and building a safe base.</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Code the world.</div>
        <div className='learn-body'>
          The world sets physics and resources. You code civilization—reputation, currency, governments, markets, and more. 
        </div>
        <div className='learn-body'>
          Your code reads the world’s state and controls its machines—turning chests into shops, doors into toll gates.
          It integrates freely with other players’ mechanics and anything on the internet—including the real economy.
        </div>
        <div className='learn-body'>
          Upload your code once. It runs live in-game, affects everyone, and persists without you.
        </div>
        <div className='learn-body'>
        Other players treat it as a first-party mechanic and build on it with confidence.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://github.com/dustproject/dust/tree/main/packages/dustkit" className="learn-card">
            <img src="/howbuild.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
              <div className="learn-card-label">How to Build</div>
              <div className="learn-card-desc">A guide for programming and uploading new mechanics.</div>
            </div>
          </Link>
          <Link href="/projects" className="learn-card">
            <img src="/permcityhero.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
              <div className="learn-card-label">What’s Possible</div>
              <div className="learn-card-desc">Examples of what others built and ideas for what you can.</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="learn-description-left">
        <div className='learn-title'>Can’t wipe. Built by all.</div>
        <div className='learn-body'>
          The world's rules and player-coded mechanics run together on a peer-to-peer network. No central server. The world lives as long as one person runs it.
        </div>
        <div className='learn-body'>
          Every action is publicly recorded. Anyone can verify the proofs that it ran correctly.
        </div>
      </div>
      <div className="learn-description-right">
        <div className="learn-right-grid">
          <Link href="https://explorer.mud.dev/garnet/worlds/0x4C619a1AA1b7C30137b2e8f4A78327C68D33A8ac/explore?tableId=0x74627063746f6b656e0000000000000042616c616e6365730000000000000000&query=SELECT%2520%2522account%2522%252C%2520%2522value%2522%2520FROM%2520%2522pctoken__Balances%2522%2520LIMIT%252010%2520OFFSET%25200%253B&page=0&pageSize=10&readonly=true" className="learn-card">
            <img src="/explorer.svg" className="learn-card-image" />
            <div className="learn-card-overlay">
            <div className="learn-card-label">Network Explorer</div>
            <div className="learn-card-desc">Interact with the world state and observe incoming actions.</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
        <button className="learn-footer-left">Explore Further</button>
        <button className="learn-footer-right" onClick={() => window.location.href = 'https://discord.gg/J75hkmtmM4'}>Access Client</button>
      <div className="learn-grid-border"></div>
      </div>
);
};

export default LearnPage;