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
    id: 'chronicles-003',
    title: '003',
    tweetIds: [
      '1939381707037430162',
      '1939381710535426246',
      '1939381714205417892',
      '1939381717565153319',
      '1939381721511952405',
    ]
  },
  {
    id: 'chronicles-004',
    title: '004',
    tweetIds: [
      '1943734981211066388',
      '1943734985439277321',
      '1943734990426321242',
      '1943734994913882403'
    ]
  },
  {
    id: 'campfires',
    title: 'Campfires',
    tweetIds: [
      '1942992400890151116',
      '1940455953272647983',
      '1937919910581309607',
      '1935044118826336664',
      '1933191753726873867',
    ]
  }
];

export default function ThreeColumnLayout() {
  useEffect(() => {
    const win = window as any;

    const ensureSDK = () =>
      new Promise<void>(res => {
        if (win.twttr?.widgets) return res();
        const s = document.createElement("script");
        s.src = "https://platform.twitter.com/widgets.js";
        s.async = true;
        s.onload = () => res();
        document.body.appendChild(s);
      });

    const loadSequentially = async () => {
      await ensureSDK();
      const opts = {
        theme: "dark",
        conversation: "none",
        chrome: "noheader nofooter noborders noscrollbar",
      };

      for (const sec of sections) {
        for (const id of sec.tweetIds) {
          const el = document.querySelector<HTMLDivElement>(
            `[data-tweet="${id}"]`
          );
          if (!el) continue;

          const skeleton = el.querySelector(".skeleton");
          await win.twttr.widgets.createTweet(id, el, opts);
          skeleton?.remove(); // drop placeholder after embed loads
        }
      }
    };

    loadSequentially();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_10fr_1fr] h-[91vh] overflow-hidden bg-[#101010]">
      <aside className="hidden md:block md:sticky top-0 h-full p-4 border-r border-[rgba(255,255,255,0.08)]">
        <nav>
          <ul className="space-y-2">
            {sections.map(sec => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-white opacity-50 underline block hover:opacity-100"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="overflow-y-auto h-full p-4 border-r border-[rgba(255,255,255,0.08)] space-y-8">
        {sections.map(sec => (
          <section id={sec.id} key={sec.id}>
            <div className="learn-title mb-2">
              {sec.id.startsWith("chronicles-")
                ? `Chronicles ${sec.title}`
                : sec.title}
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
              {sec.tweetIds.map(id => (
                <div
                  key={id}
                  data-tweet={id}
                  className="min-w-[400px] snap-start"
                >
                  <div className="skeleton h-[400px] bg-[#1e1e1e] animate-pulse rounded-lg" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <section className="hidden md:block h-full p-4" />
    </div>
  );
}
