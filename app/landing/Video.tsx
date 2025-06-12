"use client";

import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";
import { useRef } from "react";

const VIDEO_ID = "e9db0ea6b81b9c30e1984750363d99fa";

export function Video() {
  const videoRef = useRef<StreamPlayerApi>(null);

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
    <div className="aspect-video relative group">
      <div
        className="absolute inset-0 bg-black/70 z-10 transition-colors cursor-pointer"
        onClick={handlePlayClick}
      />
      <button
        type="button"
        onClick={handlePlayClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white transition-colors cursor-pointer text-[16px]"
      >
        {/* [ play with sound ] */}
      </button>

      <Stream
        src={VIDEO_ID}
        streamRef={videoRef}
        autoplay
        controls
        muted
        loop
      />

      {/* <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
        }}
      >
        <iframe
          src="https://customer-goievxu4mr4ewqoz.cloudflarestream.com/07b2e147a732cb52ffff39165f35a498/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-goievxu4mr4ewqoz.cloudflarestream.com%2F07b2e147a732cb52ffff39165f35a498%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D0%26height%3D600&startTime=0"
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div> */}
    </div>
  );
}
