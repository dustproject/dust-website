"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setUTCHours(16, 0, 0, 0);

      if (now > target) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        return;
      }

      const remaining = target.getTime() - now.getTime();
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      const milliseconds = Math.floor((remaining % 1000) / 10);

      setTimeLeft({ hours, minutes, seconds, milliseconds });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every 10ms
    const interval = setInterval(calculateTimeLeft, 10);

    return () => clearInterval(interval);
  }, []);

  if (
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0 &&
    timeLeft.milliseconds === 0
  ) {
    return null;
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
