"use client";

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
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-left xl:text-right group inline-block", {
        "opacity-60 text-left xl:text-left": variant === "secondary",
      })}
    >
      <span className="bg-transparent text-white rounded-md text-[36px] xl:text-[40px] font-bold transition-all group-hover:underline">
        {children}
      </span>

      <p className="text-[16px] leading-snug mt-2 xl:mt-2 w-[210px]">
        {description}
      </p>
    </a>
  );
}

export function Video() {
  const handlePlayClick = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white transition-colors cursor-pointer text-[16px]"
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
      className="w-full inline-block xl:w-[400px] px-4 pt-3 pb-4"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='dimgray' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      }}
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

export function Features() {
  return (
    <div className="flex flex-col gap-[36px] w-full xl:w-[500px] xl:text-right">
      <p className="text-[22px] italic font-light">
        <span className="text-[28px] font-bold not-italic">DUST</span> is an
        autonomous world with fixed physics, scarce resources, and
        player-programmable civilization.
      </p>

      <div>
        <h3 className="text-[28px] font-bold">No admins. Just physics.</h3>
        <p className="text-[22px] mt-2">
          Resources are scarce. Energy drains. Survival takes effort.
        </p>
      </div>

      <div>
        <h3 className="text-[28px] font-bold">Code civilization.</h3>
        <p className="text-[22px] mt-2">
          You code the world itself—not mods. Your mechanics run live, shape
          everyone's play, and persist without you.
        </p>
      </div>

      <div>
        <h3 className="text-[28px] font-bold">Can't be wiped.</h3>
        <p className="text-[22px] mt-2">
          All mechanics run together on one permanent network. One shared world
          to outlast us all.
        </p>
      </div>
    </div>
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
    <div className="xl:max-w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row xl:flex-col text-white w-full md:gap-[58px] xl:gap-[60px] md:px-[100px] xl:px-0">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-[48px]">
            <div>
              <Features />
            </div>

            <div className="w-full xl:w-[991px] hidden xl:block">
              <Video />
            </div>
          </div>

          <div className="mt-[70px] xl:pl-[290px] md:mt-0">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-[80px] md:gap-[48px]">
              <div className="flex flex-col xl:flex-row gap-[36px] xl:gap-[50px]">
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
        </div>

        <div className="-mx-4 mt-[90px] xl:hidden w-full">
          <Video />
        </div>
      </div>
    </div>
  );
}
