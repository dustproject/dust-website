'use client';

import React from 'react';
import "/styles/globals.css";
import Link from "next/link";
import ProjectsPage from './projects/page';

export default function Page() {

  return (
    <div>
      <div className="dust-container">
      <div className="background-map">
        <iframe 
          src="https://alpha.dustproject.org/map" 
          className="map-iframe"
          title="DUST Project Map"
          loading="lazy"
        />
      </div>
      
      <div className="content-wrapper">
        <div className="top-section">
          <Link href="/coalition" className="coalition-text">
            JOIN COALITION
          </Link>
        </div>
        
        <div className="middle-section">
          <h1 className="dust-text">DUST</h1>
        </div>
        
        <div className="bottom-section">
          <Link href="https://alpha.dustproject.org/" className="coalition-text">
            ENTER ALPHA
          </Link>
        </div>
      </div>
      </div>
      <ProjectsPage fontFamily="Helvetica" />

    </div>
  );
}