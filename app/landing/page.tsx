"use client";

import Image from "next/image";
import { cn } from "../../utils/cn";

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
    <div
      className={cn("text-right", {
        "opacity-60 text-left": variant === "secondary",
      })}
    >
      <a
        href={href}
        className="bg-transparent text-white rounded-md text-[36px] font-bold"
      >
        {children}
      </a>

      <p className="text-[16px] leading-snug mt-4 w-[210px]">{description}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/DUST.png"
        alt="DUST"
        width={1000}
        height={1000}
        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3"
      />
      <Image
        src="/DUST.png"
        alt="DUST"
        width={1000}
        height={1000}
        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3"
      />

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-white">
          <div className="flex items-center justify-center gap-[48px]">
            <div>
              <div className="flex flex-col gap-[36px] w-[500px] text-right">
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

            <div className="w-[991px]">
              <div className="aspect-video relative group">
                <div className="absolute inset-0 bg-black/70 z-10 transition-colors" />
                <button
                  type="button"
                  onClick={() => {
                    const iframe = document.querySelector("iframe");
                    if (iframe) {
                      iframe.requestFullscreen();
                    }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  text-white transition-colors cursor-pointer text-[16px]"
                >
                  [ play with sound ]
                </button>
                <iframe
                  src="https://www.youtube.com/embed/Fgw44m1AdKc?controls=0"
                  title="DUST Gameplay"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-[70px] pl-[290px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[50px]">
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
                <div className="border border-dashed border-white/40 w-[400px] px-4 py-3">
                  <p className="uppercase text-[16px] opacity-30 leading-snug">
                    JULY 12 2025
                  </p>
                  <p className="text-[16px] leading-snug">
                    DUST IS LIVE AND DEPLOYED TO THE NETWORK. READ THE
                    ANNOUNCEMENT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
