"use client";

import React, { useState, useEffect } from "react";
import "/styles/globals.css";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-12T17:00:00Z");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours: totalHours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const numberBoxStyle = {
    display: "inline-block",
    minWidth: "4ch",
    textAlign: "center",
    fontVariantNumeric: "tabular-nums",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12vw",
        lineHeight: "1.2",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          width: "80vw",
          justifyContent: "center",
        }}
      >
        <span style={numberBoxStyle}>{timeLeft.hours}h</span>
        <span style={numberBoxStyle}>{timeLeft.minutes}m</span>
        <span style={numberBoxStyle}>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}
