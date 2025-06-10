'use client';

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import "/styles/features.css";

const ProgramPage = () => {
  return (
    <div className="survive-layout">
      <div className="learn-grid-border"></div>
      <div className="survive-main">
        <img src="/civlegos.svg" className="mobile-image"/>
        <div className="learn-body">
          Dust sets the rules of physics. Players build the rest.
        </div>
        <div className="learn-body">
          Your code reads the world’s state and controls machines—force fields, chests, doors, spawn tiles, and more.
        </div>
        <div className="learn-body">
         Players build on each other. If you program a reputation system that judges every action. Others may program doors that only open for the well judged.
        </div>
        <div className="learn-body">
          Integrate with anything online—Reddit, Discord, real dollars—using web proofs and payment protocols. Your code blends worlds.
        </div>
        <hr className="line"></hr>
        <div className="learn-body">
          Systems once reserved for big studios—now in your hands. Imagine your own version of:
          <ul>
            <li>World of Warcraft Auction House</li>
            <li>Runescape Grand Exchange</li>
            <li>Final Fantasy XIV Gold Saucer</li>
            <li>Black Desert Online Transport Network</li>
          </ul>
        </div>
        <div className="learn-body">
          Real financial and social infrastructure—inside the game:
          <ul>
            <li>Doors that open for pass holders</li>
            <li>Chests that run auctions, trade, and lending</li>
            <li>Force fields that reward those who secure it</li>
            <li>Ore reserves that back custom currencies</li>
            <li>Futarchy governing territory</li>
            <li>Insurance paying out after mob attacks</li>
          </ul>
        </div>
        <div className="learn-body">
          Experiment with glimpses of the future:
          <ul>
            <li>Algorithmic social contracts for exploring coordination beyond physical limitations</li>
            <li>Bots that independently act and create value to earn the compute needed to sustain themselves.</li>
          </ul>
        </div>
        <hr className="line"></hr>
        <div className='learn-body'>
          What others are building:
          {" "}
          <a href="https://permutationcity.org/">Permutation City</a>{" "}
          gives "Permutation Passport" holders the ability to spawn inside their territory, rent land, trade in shops, and participate in governance with "Permutation Pesos". They are programming in-game machines—spawn tiles, force fields, and chests—to control their city.
        </div>
      </div>
      <div className="learn-grid-border"></div>
    </div>
);
};

export default ProgramPage;