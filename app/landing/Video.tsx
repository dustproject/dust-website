"use client";

import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";
import { useEffect, useRef } from "react";

const VIDEO_ID = "da4a72e9380f416c68c195daeec0e08c";

export function Video() {
  const videoRef = useRef<StreamPlayerApi>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.muted = true;
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handlePlayClick = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.requestFullscreen();
    }

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.volume = 1;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative group overflow-hidden aspect-[16/9]">
      <div
        className="absolute inset-0 bg-black/30 z-10 transition-colors transition-bg cursor-pointer hover:bg-transparent"
        onClick={handlePlayClick}
      />
      <button
        type="button"
        onClick={handlePlayClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white transition-colors cursor-pointer text-[16px]"
      >
        {/* [ play with sound ] */}
      </button>

      <div className="absolute -top-0 left-0 h-full w-full scale-140">
        <Stream
          src={VIDEO_ID}
          streamRef={videoRef}
          autoplay
          controls
          muted
          loop
          startTime={74}
        />
      </div>
    </div>
  );
}
