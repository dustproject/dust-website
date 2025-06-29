"use client";

import { useEffect, useState } from "react";

export function Read() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="/chronicles"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[168px] uppercase gap-2 flex-shrink-0 hidden xl:flex px-[20px] py-[16px] custom-dashed-border"
    >
      <div className="text-[16px] opacity-50 leading-none">Chronicles</div>
      <div className="text-[16px] leading-none">
        003
      </div>
    </a>
  );
}
