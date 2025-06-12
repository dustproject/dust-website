"use client";

import { useEffect, useState } from "react";
import { Video } from "./Video";
import { Announcement } from "./Announcement";
import { Features } from "./Features";
import { CTA } from "./CTA";

const calculateTimeLeft = (targetTime: number) => {
  const now = Date.now();
  const remaining = targetTime - now;

  if (remaining <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
  }

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((remaining % 1000) / 10);

  return { hours, minutes, seconds, milliseconds };
};

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = new Date();
    target.setUTCHours(14, 40, 45, 0);
    return calculateTimeLeft(target.getTime());
  });

  useEffect(() => {
    const target = new Date();
    target.setUTCHours(16, 0, 0, 0);
    const targetTime = target.getTime();

    const interval = setInterval(() => {
      const calculatedTimeLeft = calculateTimeLeft(targetTime);
      setTimeLeft(calculatedTimeLeft);

      if (
        calculatedTimeLeft.hours === 0 &&
        calculatedTimeLeft.minutes === 0 &&
        calculatedTimeLeft.seconds === 0 &&
        calculatedTimeLeft.milliseconds === 0
      ) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  if (
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0 &&
    timeLeft.milliseconds === 0
  ) {
    return (
      <div className="w-full md:max-w-[824px] xl:max-w-[1400px] md:px-6 sm:px-10 xl:px-6 mx-auto text-white">
        <div className="px-8 sm:px-12 mx-auto md:max-w-none">
          <Announcement />

          <div className="flex lg:gap-[85px] xl:gap-[100px] mt-[45px] md:mt-[60px]">
            <Features />

            <div className="flex-1 flex-col justify-between hidden xl:flex mt-4">
              <Video />
              <CTA />
            </div>
          </div>

          <div className="xl:hidden">
            <CTA />
          </div>
        </div>

        <div className="mt-[55px] md:mt-[65px] xl:hidden">
          <Video />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#101010] z-100">
      <p className="text-white text-[60px] md:text-[140px] lg:text-[160px] xl:text-[240px] font-ibm-plex-sans-condensed">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}:
        {String(timeLeft.milliseconds).padStart(2, "0")}
      </p>
    </div>
  );
}
