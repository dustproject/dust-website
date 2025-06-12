"use client";

import { useEffect, useState } from "react";

export function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[168px] uppercase gap-2 flex-shrink-0 hidden xl:flex px-[20px] py-[16px] link-button-border"
    >
      <div className="text-[16px] opacity-50 leading-none">Dust time</div>
      <div className="text-[16px] leading-none">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </a>
  );
}
