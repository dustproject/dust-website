"use client";

import React, { useEffect } from 'react';
import "/styles/features.css";

const sections = [
  {
    id: 'chronicles-001',
    title: '001',
    tweetIds: [
      '1936081172645511652',
      '1936081176109961577',
      '1936081179310239841',
      '1936081182690770986',
      '1936081187480781002',
      '1936081191310065890',
      '1936081195152048548'
    ]
  },
  {
    id: 'chronicles-002',
    title: '002',
    tweetIds: [
      '1937946629841293693',
      '1937946632282366007',
      '1937946634023014915',
      '1937946636489265198',
      '1937946639198785744',
    ]
  },
  {
    id: 'campfires',
    title: 'Campfires',
    tweetIds: [
      '1937919910581309607',
      '1935044118826336664',
      '1933191753726873867',
    ]
  }
];

export default function ThreeColumnLayout() {
  useEffect(() => {
    const win = window as any;
    const renderTweets = () => win.twttr?.widgets?.load();
    if (win.twttr?.widgets) {
      renderTweets();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = renderTweets;
      document.body.appendChild(script);
    }
  }, []);

  return (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_10fr_1fr] h-[91vh] overflow-hidden bg-[#101010]">
    {/* Left column: sticky TOC */}
    <aside className="md:sticky top-0 h-full p-4 border-r border-[rgba(255,255,255,0.08)]" >
        {/* <div className='text-white opacity-50 leading-none uppercase mb-2'>Chronicles:</div> */}
        <nav>
          <ul className="space-y-2">
            {sections.map(sec => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-white opacity-50  underline block hover:opacity-100"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Middle column: vertical scroll of sections */}
      <main className="overflow-y-auto h-full p-4 border-r border-[rgba(255,255,255,0.08)] space-y-8" >
        {sections.map(sec => (
          <section id={sec.id} key={sec.id}>
            <div className="learn-title mb-2">
              {sec.id.startsWith('chronicles-')
                ? `Chronicles ${sec.title}`
                : sec.title}
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
              {sec.tweetIds.map(id => (
                <div key={id} className="min-w-[400px] snap-start">
                  <blockquote
                    className="twitter-tweet"
                    data-chrome="noheader nofooter noborders noscrollbar transparent"
                    data-theme="dark"
                    data-conversation="none"
                  >
                    <a href={`https://twitter.com/twitter/status/${id}`} />
                  </blockquote>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Right column: empty */}
      <section className="h-full p-4">
        {/* empty space */}
      </section>
    </div>
  );
}
