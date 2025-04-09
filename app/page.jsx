import React from 'react';
import "/styles/globals.css";
import Link from "next/link";
import Image from "next/image";


export default function Page() {
  return (

    <div className="dust-container">
      <div className="background-image"></div>
      
      <div className="content-wrapper">
        <div className="top-section">
          <h2 className="coalition-text">JOIN COALITION</h2>
        </div>
        
        <div className="middle-section">
          <h1 className="dust-text">DUST</h1>
        </div>
        
        <div className="bottom-section">
          <h2 className="coalition-text">ENTER ALPHA</h2>
        </div>
      </div>
    </div>

  );
}