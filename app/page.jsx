'use client';

import React, { useEffect, useRef } from 'react';
import "/styles/globals.css";
import Image from 'next/image';
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

      <div className='wrapper'>

        <div style={{display: "flex", flexDirection: "column", width: "80%", justifySelf: "center"}}>

        <div className="homeHeading">
          Virtual worlds will play an increasingly larger role heading into the future and may consume where we spend our time.
          Dust is asking what happens if a virtual world takes itself maximally seriously?
        </div>

        <Image 
          src="/homepageone.svg" 
          width={0}
          height={0}
          sizes="100vw"
          className="responsive-image-three"
          alt="dust project"
        />

        <div className="homeHeading" style={{marginTop: "0px"}}>
          Dust is born from years of experiments advancing our understanding of digital systems that people take seriously.
        </div>

        <Image 
          src="/homepagetwo.svg" 
          width={0}
          height={0}
          sizes="100vw"
          className="responsive-image-two"
          alt="dust project"
        />

        <div className="homeHeading" style={{marginTop: "0px", marginBottom: "16px"}}>
         Get a Head Start
        </div>

        <div className="paragraph" style={{fontSize: "18px"}}>
          First, onboard by bridging funds for computation fees and try to survive. Use the survival guide & watch the walkthrough video below.
        </div>

        <video
          controls
          autoPlay
          loop={true}
          style={{ 
            maxWidth: '80%', 
            maxHeight: '100%',
            objectFit: 'contain',
            alignSelf: 'center',
            marginBottom: "16px"
          }}
        >
          <source src="https://www.youtube.com/embed/VOJpXo8Yr6I?si=nJizs2g4DcKcQgDA" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="paragraph" style={{fontSize: "18px"}}>
          Build something uniquely yours in your territory and program it however you want.{" "} 
          <a href="https://discord.gg/J75hkmtmM4">Join the Discord</a> for inspiration and help.
        </div>
        <div className="paragraph" style={{fontSize: "18px", marginBottom: "70px"}}>
          Over the coming months, Dust will become inviting for all. But those with motivation can get a head start today.
        </div>

        </div>
      </div>
    </div>
  );
}