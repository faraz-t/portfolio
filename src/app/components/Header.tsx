"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [elapsedTime, setElapsedTime] = useState("00:00:000");
  const [startTime] = useState(Date.now());
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    setCurrentDate(`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      const totalSeconds = Math.floor(elapsed / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const milliseconds = elapsed % 1000;
      
      const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;
      setElapsedTime(formatted);
    }, 10);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-lg text-white">
      <nav className="relative flex items-center justify-between w-full px-6 py-4">
        
        <div className="invisible md:visible flex items-center gap-8 text-xs font-medium tracking-wide text-white/80">
          <span>{currentDate}</span>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap"
        >
          FARAZ TEHRANI
        </Link>

        <div className="invisible md:visible flex items-center gap-8 ml-auto">
          <a
            href="https://github.com/faraz-t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/farazht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            EMAIL
          </a>
        </div>
      </nav>
    </header>
  );
}