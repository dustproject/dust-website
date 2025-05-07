'use client';

import React, { useEffect, useRef } from 'react';
import "/styles/globals.css";
import Link from "next/link";
import ProjectsPage from './projects/page';

// Helper function to create shimmering text effect
const applyShimmerEffect = (element) => {
  if (!element || !element.textContent) return;

  const text = element.textContent;
  element.textContent = ''; // Clear existing text

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
    span.style.animationDelay = `${Math.random() * 2}s`; // Random delay up to 2s
    element.appendChild(span);
  });
};

export default function Page() {
  const joinCoalitionRef = useRef(null); // Create ref for the first link
  const enterAlphaRef = useRef(null);   // Create ref for the second link
  const dustTextRef = useRef(null);

  useEffect(() => {
    applyShimmerEffect(joinCoalitionRef.current);
    applyShimmerEffect(enterAlphaRef.current);
    applyShimmerEffect(dustTextRef.current);
  }, []); // Empty dependency array ensures this runs only once on mount

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
            <Link href="/coalition" className="coalition-text" ref={joinCoalitionRef}>
              JOIN COALITION
            </Link>
          </div>
          
          <div className="middle-section">
            <h1 className="dust-text" ref={dustTextRef}>DUST</h1>
          </div>
          
          <div className="bottom-section">
            <Link href="https://alpha.dustproject.org/" className="coalition-text" ref={enterAlphaRef}>
              ENTER ALPHA
            </Link>
          </div>
        </div>
      </div>

      {/* <div className='wrapper' style={{ height: "70px" }}></div>

      <ProjectsPage /> */}

    </div>
  );
}