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
    <div className="w-[168px] uppercase gap-2 flex-shrink-0 hidden xl:flex border border-[#929292] border-dashed px-[20px] py-[16px]">
      <div className="text-[16px] opacity-50 leading-none">Dust time</div>
      <div className="text-[16px] leading-none">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
}
