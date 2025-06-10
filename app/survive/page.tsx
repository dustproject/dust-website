'use client';

import Link from "next/link";
import React from 'react';
import "/styles/features.css";

const SurvivePage = () => {
  return (
    <div className="survive-layout">
      <div className="learn-grid-border"></div>
      <div className="survive-main">
        <div style={{textAlign: "center"}}>
          <img src="/survival.svg" style={{width: "60%"}}/>
        </div>
        <div className="learn-body">
          You spawn with a partially full energy bar. It drains constantly.
        </div>
        <div className="learn-body">
          Eat food to gain more energy. Build a safe base and sleep to stop the drain—your force field drains instead.
        </div>
        <div className="learn-body">
         Run out of energy, and you die—your inventory drops and you must respawn.
        </div>
      </div>
      <div className="learn-grid-border"></div>
    </div>
);
};

export default SurvivePage;