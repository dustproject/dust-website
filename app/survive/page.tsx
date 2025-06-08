'use client';

import Link from "next/link";
import React from 'react';
import "/styles/features.css";

const SurvivePage = () => {
  return (
    <div className="survive-layout">
      <div className="learn-grid-border"></div>
        <header className="survive-header">
          <div className="learn-logo">How To Survive</div>
        </header>
      <div className="learn-grid-border"></div>

      <div className="learn-grid-border"></div>
      <div className="survive-main">
        <img src="/survival.svg" />
        <div className="learn-body">
          You spawn with a partially full energy bar. It drains constantly. Eat food to gain more energy. Build a safe base and sleep to stop the drain—your force field drains instead. Run out of energy, and you die—your inventory drops and you must respawn.
        </div>
      </div>
      <div className="learn-grid-border"></div>
      <div className="learn-grid-border"></div>
        <button className="learn-footer-left" onClick={() => window.location.href = '/learn'}>How It Works</button>
      <div className="learn-grid-border"></div>
      </div>
);
};

export default SurvivePage;