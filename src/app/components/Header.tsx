"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-lg text-white">
      <nav className="relative flex items-center justify-between w-full px-6 py-4">
        {/* Left side: Location */}
        <div className="flex items-center gap-1 text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors">
          <MapPin size={14} />
          <span>BC, CANADA</span>
        </div>

        {/* Center: Name - positioned absolutely to ensure true centering */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap"
        >
          FARAZ TEHRANI
        </Link>

        {/* Right side: Links */}
        <div className="flex items-center gap-6 ml-auto">
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
