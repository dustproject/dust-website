'use client';

import React, { useEffect, useRef, useState } from 'react';
import "/styles/globals.css";
import Image from 'next/image';
import Link from "next/link";
import ProjectsPage from './projects/page';
import TopographicMapBackground from '/components/TopoBackground';

const LandingGrid = () => {
  return (
    <div className="landing-page">
      <div className="grid-container">
        <div className="row row-3">
          <div className="col col-3-1">
            <div className='homeHeading' style={{marginBottom: "1rem"}}>Virtual Worlds Have Been Lived In For Decades.</div>
            <div className='homeHeading'>But They’ve Remained Unserious Theme Parks.</div>
            <button 
              className="read-dust-button" 
              onClick={() => window.location.href = 'https://slayherobrine.com/'}
            >
             READ: SLAY HEROBRINE
            </button>
          </div>
          <div className="col col-3-2">
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
        <div className="row row-3">
          <div className="col col-3-1">
            <div className='homeHeading'>Secretly... Virtual Objects That Can Be Taken As Seriously As Real Ones Have Been Forming.</div>
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
        <div className="row row-2">
          <div className="col col-2-1">
            <div className='homeHeading' style={{marginBottom: "1rem"}}>Virtual Worlds Will Matter More With Each Passing Year.</div>
            <div className='homeHeading' style={{marginBottom: "1rem"}}>What Happens When One Takes Itself Maximally Seriously?</div>
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
          padding: 2rem;
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


const LandingGridTwo = () => {   
  return (    
    <div className="home-container">
      <TopographicMapBackground />
      <div style={{ position: 'relative', zIndex: 1, paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className='homeHeading'>GET A HEAD START</div>
        <div className="action-card-grid" >
          <div className="action-card">
            <img src="https://files.facepunch.com/Alistair/128/04/2025/7j63/jungleUpdate_biome_16%20%281%29.jpg" className="card-image"/>
            <div className='columnSubheading'>TRY TO SURVIVE</div>
            <div className='columnParagraph'>The world drains your energy. Eat or sleep—or die.</div>
          </div>
          <div className="action-card">
            <img src="https://ccdn.g-portal.com/Gallery_MC_lushcave_0009_0d34f8ce09.png" className="card-image"/>
            <div className='columnSubheading'>MINE & FARM RESOURCES</div>
            <div className='columnParagraph'>Extract, craft, harvest. Every block counts. Matter is scarce.</div>
          </div>
          <div className="action-card">
            <img src="https://www.minecraft.net/content/dam/minecraftnet/archive/5b57dff89d5450b6cfcedb65ca2992be-VideoHeader.jpg" className="card-image"/>
            <div className='columnSubheading'>PROTECT & PROGRAM TERRITORY</div>
            <div className='columnParagraph'>Claim land, set its rules, and make it run code. Your domain, your laws.</div>
          </div>
        </div>
      </div>        
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    applyShimmerEffect(joinCoalitionRef.current);
    applyShimmerEffect(enterAlphaRef.current);
    applyShimmerEffect(dustTextRef.current);
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50 && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY <= 50 && !isVisible) {
        setIsVisible(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

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
          <Link href="https://alpha.dustproject.org/" className="coalition-text" ref={enterAlphaRef}>
            ENTER
          </Link>
        </div>
        <div className="middle-section">
          <h1 className="dust-text" ref={dustTextRef}>DUST</h1>
        </div>
        <div 
          className={`bottom-section ${!isVisible ? 'hidden' : ''}`}
        >
            <div style={{fontWeight: "bold"}}>EXPLORE ↓</div>
        </div>
      </div>
    </div>
    <LandingGridTwo/>
    <div style={{padding: "2rem", background: "#0a0a0a", borderTop: "1px dashed hsla(60, 68%, 94%, 0.1)", borderBottom: "1px dashed hsla(60, 68%, 94%, 0.1)"}}>
      <div style={{position: 'relative'}}>
        <img src="/dusttexture.svg" className="full-image" />
        <Link href="/coalition" className="coalition-text" style={{position: 'absolute', top: '25%', left: '10%', transform: 'translate(-10%, -25%)', color: "white"}} ref={joinCoalitionRef}>
          FROM COSMIC TO CYBER DUST
          </Link>
      </div>
    </div>
    <div className="dust-protocol">
      <section className="dust-row">
        <div className='columnSubheading dust-headline'>
          Virtual Worlds Will Matter More With Each Passing Year. We’ve Been Trying to Live in Them for Decades - But They Could Not Grow Beyond Theme Parks.
        </div>
      </section>

      <section className="dust-row">
        <div className='columnSubheading dust-headline'>
          We've Secretly Been Forming Virtual Objects That Grow As Real As Physical Ones.
        </div>
      </section>

      <section className="dust-row">
        <div className='columnSubheading dust-headline'>
          As Players Program Territories, Societies Emerge and Break Into the Internet and Economy, Organizations Contribute Compute and Clients, Resources Accrue Value and Spark Rushes and Wars... How Far Does Dust Go?
        </div>
      </section>






      {/* <section className="dust-grid theme-vs-world">
        <div className="grid-label">Image</div>
        <div className="grid-label">Theme Park</div>
        <div className="grid-label">World</div>

        <div className="grid-image">[Image1]</div>
        <div className="grid-text">Admins can change anything</div>
        <div className="grid-text">Laws are immutable</div>

        <div className="grid-image">[Image2]</div>
        <div className="grid-text">Resources are spawned</div>
        <div className="grid-text">Resources are scarce and fixed</div>

        <div className="grid-image">[Image3]</div>
        <div className="grid-text">Servers shut down</div>
        <div className="grid-text">World runs peer-to-peer, forever</div>
      </section>
      <section className="dust-grid timeline">
        <div className="timeline-block">Bitcoin<br/><span>Scarcity via Proof of Work</span></div>
        <div className="timeline-block">Ethereum<br/><span>Smart Contracts</span></div>
        <div className="timeline-block">Autonomous Worlds<br/><span>Trustless Execution</span></div>
        <div className="timeline-block">Dust<br/><span>Programmable Matter</span></div>
      </section>
      <section className="dust-vision">
        <h4>One Map. One History. No Resets.</h4>
        <p>[Insert: Dome diagram, territory logic, PvP laws, peer-to-peer infra, etc.]</p>
      </section> */}

    </div>
  </div>
);
}