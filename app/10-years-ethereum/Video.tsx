"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/nJGc3ScC2fU?enablejsapi=1";

export function Video() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handlePlayClick = () => {
    const iframe = iframeRef.current;

    if (iframe) {
      iframe.requestFullscreen?.();
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*"
      );
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="relative group overflow-hidden aspect-[16/9]">
      <div className={isMobile ? "hidden" : "block"}>
        <div
          className="absolute inset-0 z-10 transition-all duration-300 cursor-pointer group-hover:bg-black/50"
          onClick={handlePlayClick}
        />
        <button
          type="button"
          onClick={handlePlayClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white transition-opacity opacity-0 group-hover:opacity-100 duration-300 text-center flex flex-col gap-0 cursor-pointer"
        >
          {/* Intentionally left empty for overlay click interaction */}
        </button>
      </div>

      <div className="absolute top-0 left-0 h-full w-full">
        <iframe
          ref={iframeRef}
          className="w-full h-full object-contain"
          src={YOUTUBE_EMBED_URL}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
