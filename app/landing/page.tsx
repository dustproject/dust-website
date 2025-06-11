"use client";

import Image from "next/image";
import { cn } from "../../utils/cn";
import { useEffect, useRef } from "react";

export function LinkButton({
  href,
  children,
  description,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  description: string;
  variant?: "default" | "secondary";
}) {
  return (
    <a
      href={href}
      className={cn("text-left md:text-right", {
        "opacity-60 text-left": variant === "secondary",
      })}
    >
      <span className="bg-transparent text-white rounded-md text-[36px] md:text-[40px] font-bold">
        {children}
      </span>

      <p className="text-[16px] leading-snug mt-2 md:mt-2 w-[210px]">
        {description}
      </p>
    </a>
  );
}

export function Video() {
  const handlePlayClick = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      // @ts-ignore
      // iframe.contentWindow.postMessage(
      //   JSON.stringify({
      //     event: "command",
      //     func: "setMuted",
      //     args: [false],
      //   }),
      //   "*"
      // );
      // // @ts-ignore
      // iframe.contentWindow.postMessage(
      //   JSON.stringify({
      //     event: "command",
      //     func: "setVolume",
      //     args: [100],
      //   }),
      //   "*"
      // );
      // iframe.contentWindow.postMessage(
      //   JSON.stringify({
      //     event: "command",
      //     func: "volumechange",
      //     args: [100],
      //   }),
      //   "*"
      // );
      iframe.requestFullscreen();
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white transition-colors cursor-pointer text-[16px] font-"
      >
        [ play with sound ]
      </button>

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://customer-goievxu4mr4ewqoz.cloudflarestream.com/6285396862fdb0892420e54768eecefb/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-goievxu4mr4ewqoz.cloudflarestream.com%2F6285396862fdb0892420e54768eecefb%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          loading="lazy"
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
      </div>
    </div>
  );
}

export function Announcement() {
  return (
    <a
      href="#"
      className="w-full inline-block border border-dashed border-[#929292] md:w-[400px] px-4 pt-3 pb-4"
    >
      <p className="uppercase text-[16px] opacity-30 leading-snug">
        JULY 12 2025
      </p>
      <p className="text-[16px] leading-snug">
        DUST IS LIVE AND DEPLOYED TO THE NETWORK. READ THE ANNOUNCEMENT.
      </p>
    </a>
  );
}

export default function Landing() {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // @ts-ignore
    window.addEventListener("message", (event) => {
      if (event.data.event === "stream-player-ready") {
        playerRef.current = event.data.player;
      }
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:h-screen">
        <div className="text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[48px]">
            <div>
              <div className="flex flex-col gap-[36px] md:w-[500px] md:text-right">
                <p className="text-[22px] italic font-light">
                  <span className="text-[28px] font-bold not-italic">DUST</span>{" "}
                  is an autonomous world with fixed physics, scarce resources,
                  and player-programmable civilization.
                </p>

                <div>
                  <h3 className="text-[28px] font-bold">
                    No admins. Just physics.
                  </h3>
                  <p className="text-[22px] mt-2">
                    Resources are scarce. Energy drains. Survival takes effort.
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] font-bold">Code civilization.</h3>
                  <p className="text-[22px] mt-2">
                    You code the world itself—not mods. Your mechanics run live,
                    shape everyone's play, and persist without you.
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] font-bold">Can't be wiped.</h3>
                  <p className="text-[22px] mt-2">
                    All mechanics run together on one permanent network. One
                    shared world to outlast us all.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[991px] hidden">
              <Video />
            </div>
          </div>

          <div className="mt-[70px] md:pl-[290px]">
            <div className="flex flex-col md:items-center md:justify-between gap-[80px]">
              <div className="flex flex-col md:flex-row gap-[36px] md:gap-[50px]">
                <LinkButton
                  href="#"
                  description="Join Discord for early access to Dust's free browser client."
                >
                  [ACCESS]
                </LinkButton>
                <LinkButton
                  href="#"
                  description="Learn what Dust is, what it enables, and why it exists."
                  variant="secondary"
                >
                  [LEARN]
                </LinkButton>
              </div>

              <div>
                <Announcement />
              </div>
            </div>
          </div>

          <div className="mt-[90px] md:hidden -mx-4">
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}
