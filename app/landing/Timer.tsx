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
    <div
      className="w-[168px] uppercase gap-2 flex-shrink-0 hidden xl:flex px-[20px] py-[16px]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23929292FF' stroke-width='1' stroke-dasharray='6%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      }}
    >
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
