import * as React from "react";
export const dynamic = "force-static";
import '/styles/globals.css';


// Main page with minimal content
export default function Page() {

  return (
    <div className="page-style">
      <a href="/about" className="eye-link">
        <img 
          src="/eyelogo.svg" 
        />
      </a>
      <div className="hover-text">
        all that remains is what never needs belief
      </div>
      <div className="title-style">
        DUST
      </div>
      <a href="https://biome1.everlon.xyz/" style={{textDecoration: "none"}}>
        <div className='buttonContainerStyle'>
          <div className='buttonInnerStyle'>
            ENTER
          </div>
        </div>
      </a>
    </div>
  );
}
