'use client';

import React, { useEffect, useRef } from 'react';
import "/styles/globals.css";
import Image from 'next/image';
import Link from "next/link";
import ProjectsPage from './projects/page';

const LandingGrid = () => {
  return (
    <div className="landing-page">
      <div className="grid-container">
        <div className="row row-1">
          <div className="col col-1-1">
            <div className='homeHeading'>Get a head start.</div>
            <div className="feature-text" style={{marginTop: "1rem"}}>
              The project is in heavy development.
            </div>
            <div className="feature-text">
              The world is harsh and unsettled.
            </div>
            <div className="feature-text">
              This presents an opportunity for the motivated to get a head start.
            </div>
            <div className="feature-text">Onboard by bridging funds for computation fees and try to survive.</div>
            <div className="feature-text">
              Establish and program your territory into something uniquely yours.
            </div>
            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = 'https://discord.gg/J75hkmtmM4'}
            >
              JOIN DISCORD
            </button>

            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = 'https://alpha.dustproject.org/'}
            >
              ENTER ALPHA
            </button>

          </div>
          <div className="col col-1-2" style={{textAlign: "center"}}>
            {/* <div className="video-container" style={{ marginBottom: "2rem"}}>
              <iframe 
                src="https://www.youtube.com/embed/5mhTp3RWUts?si=Tzfv1WmpsViZM2ai"
              ></iframe>
            </div> */}
            <div>
              <Image 
                src="/survival.svg" 
                width={0}
                height={0}
                sizes="100vw"
                style={{width: "100%"}}
                className="responsive-image-three"
                alt="survival"
              />
            </div>
          </div>
        </div>

        <div className="row row-3">
          <div className="col col-3-1">
            <div className='homeHeading' style={{marginBottom: "1rem"}}>Virtual Worlds Have Been Lived In for Decades.</div>
            <div className='homeHeading'>But They've Remained Theme Parks.</div>
            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = 'https://slayherobrine.com/'}
            >
             READ: SLAY HEROBRINE
            </button>
          </div>
          <div className="col col-3-2" style={{padding: "2rem"}}>
            <Image 
              src="/themeparks.svg" 
              width={0}
              height={0}
              sizes="100vw"
              className="responsive-image-three"
              alt="dust project systems diagram"
            />
          </div>
        </div>

        <div className="row row-2">
          <div className="col col-2-1">
            <div className='homeHeading' style={{marginBottom: "1rem"}}>Virtual Worlds Will Matter More With Each Passing Year.</div>
            <div className='homeHeading' style={{marginBottom: "1rem"}}>Dust Asks: What Happens When One Takes Itself Maximally Seriously?</div>
            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = '/coalition'}
            >
              JOIN COALITION
            </button>
          </div>
          <div className="col col-2-2" style={{textAlign: "center"}}>
            <Image 
              src="/homepageone.svg" 
              width={0}
              height={0}
              sizes="100vw"
              className="responsive-image-three"
              style={{width: "70%"}}
              alt="dust project world visualization"
            />
          </div>
        </div>

        <div className="row row-3">
          <div className="col col-3-1">
            <div className='homeHeading'>Dust Emerges From Years of Advancing Digital Objects That Are Taken As Seriously As Physical Ones.</div>
            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = '/blog/rising-dust'}
            >
              READ: RISING DUST
            </button>
          </div>
          <div className="col col-3-2">
            <Image 
              src="/evolution.svg" 
              width={0}
              height={0}
              sizes="100vw"
              className="responsive-image-three"
              alt="dust project systems diagram"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Global styles */

  
        /* Grid layout */
        .grid-container {
          display: flex;
          flex-direction: column;
        }

        .row {
          display: flex;
          width: 100%;
          border-bottom: 2px dotted #ddd;
        }

        .col-1-1, .col-2-1 {
          width: 37.5%;
        }
        .col-1-2, .col-2-2 {
          width: 62.5%;
        }
        
        .col-1-2, .col-2-2, .col-3-2 {
          background: #f9f9f9;
        }

        /* Row 3: 25:75 */
        .col-3-1 {
          width: 25%;
        }
        .col-3-2 {
          width: 75%;
        }

        .col {
          border-right: 2px dotted #ddd;
          padding: 3rem;
        }

        .col:last-child {
          border-right: none;
        }

        /* Section styles */
        .cell {
          padding: 20px;
        }

        .section-title {
          margin-bottom: 15px;
          font-weight: normal;
          font-size: 1.4em;
        }

        .info-list p {
          margin-bottom: 5px;
        }

        /* Production items */
        .production-list {
          margin-top: 15px;
        }

        .production-item {
          margin: 20px 0;
        }

        .year {
          font-size: 0.9em;
          color: #666;
          margin-right: 10px;
          display: inline-block;
          width: 40px;
        }

        .title {
          font-size: 1.3em;
          font-weight: normal;
        }

        .status {
          font-size: 0.8em;
          color: #666;
          font-style: italic;
          margin-right: 10px;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
            border-bottom: none;
          }

          .col {
            width: auto;
            border-right: none;
            border-bottom: 2px dotted #ddd;
          }

          .cell {
            padding: 15px;
          }

          .production-item {
            margin: 15px 0;
          }
          
          .header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

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
        <Link href="/blog/rising-dust" className="coalition-text" ref={joinCoalitionRef}>
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
  <LandingGrid/>
</div>
);
}