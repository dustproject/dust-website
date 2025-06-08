'use client';

import React from 'react';
import "/styles/features.css";

const LearnPage = () => {
  return (
    <div className="noetic-layout">
      <div className="noetic-grid-border"></div>
      <header className="noetic-header">
        <div className="noetic-logo">How It Works</div>
      </header>
      <div className="noetic-grid-border"></div>

      <div className="noetic-grid-border"></div>
      <div className="noetic-description-left">
        <div className='noetic-title'>No admins. Just physics.</div>
        <div className='noetic-body'>
          The world only runs on its set rules. They're provable programs. So anyone can check they're being followed. Any attempt to interfere simply fails.
        </div>
        <div className='noetic-body'>
          The world is made up of resources. Their supply is fixed by the rules. Mine and use resources to build, craft, and trade.
        </div>
        <div className='noetic-body'>
          Players and machines need energy. Farm and consume plants to gain it. It drains with time, action, and damage.
        </div>
        <div className='noetic-body'>
          Energize machines—like force fields, doors, and chests—to claim and control territory.
        </div>
      </div>
      <div className="noetic-description-right">
        - smart contracts repo with readme
        - survival guide (include my picture, and a tutorial/walkthrough video)
      </div>
      <div className="noetic-grid-border"></div>

      <div className="noetic-grid-border"></div>
      <div className="noetic-description-left">
        <div className='noetic-title'>Code the world.</div>
        <div className='noetic-body'>
        Code new mechanics that read the world's state and control its machines—turn chests into shops, doors into toll gates.
        Your code can integrate with other players' systems and anything online, even real dollars.
        </div>
        <div className='noetic-body'>
        Upload your code into the world. It runs live in-game, affects everyone, and persists without you.
        </div>
        <div className='noetic-body'>
        Other players treat it as a first-party mechanic and build on it with confidence.
        </div>
      </div>
      <div className="noetic-description-right">
       - programming guide (dustkit)
       - perm city case study, examples, ideas
      </div>
      <div className="noetic-grid-border"></div>

      <div className="noetic-grid-border"></div>
      <div className="noetic-description-left">
        <div className='noetic-title'>Can’t wipe. Built by all.</div>
        <div className='noetic-body'>
          The world's rules and player-uploaded mechanics run together on a peer-to-peer network. No central server. The world survives as long as one person runs it.
        </div>
        <div className='noetic-body'>
          Every action is publicly recorded. Anyone can verify the proofs that it ran correctly.
        </div>
      </div>
      <div className="noetic-description-right">
       - protocol explorer
      </div>
      <div className="noetic-grid-border"></div>

      {/* <div className="noetic-grid-border"></div>
      <div className="noetic-highlight-left">
        <h2>Experiential Learning</h2>
        <p>Learning from Unstructured Actions, Observations, and Feedback</p>
      </div>
      <div className="noetic-highlight-right">
        <button className="noetic-read-button">Read</button>
      </div>
      <div className="noetic-grid-border"></div> */}

      <div className="noetic-grid-border"></div>
        <button className="noetic-footer-left">Access Client</button>
        <button className="noetic-footer-right">Explore Further</button>
      <div className="noetic-grid-border"></div>
      </div>
);
};

export default LearnPage;