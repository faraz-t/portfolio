"use client";
import { useState, useEffect } from "react";

function ClientOnlyYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}

// Simple power icon as SVG
function PowerIcon({ isOn }: { isOn: boolean }) {
  return (
    <svg
      className={`w-6 h-6 transition-colors duration-200`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={isOn ? "green" : "red"}
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v10M5.636 5.636a9 9 0 0112.728 12.728 9 9 0 01-12.728-12.728z"
      />
    </svg>
  );
}

export default function Footer() {
  const [isOn, setIsOn] = useState(false);

  const togglePower = () => setIsOn(!isOn);

  return (
    <footer className="border-t border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] py-4">
      <div className="flex flex-col items-center justify-center w-full px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center w-full sm:w-auto sm:text-left">
          © <ClientOnlyYear />. Made with ♥ by Faraz Tehrani.
        </p>

        {/* hidden on mobile */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="hover:opacity-70">
              Email
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-[var(--foreground)]/30" />

          {/* Power Switch */}
          <button
            onClick={togglePower}
            className="flex items-center gap-2"
          >
            <PowerIcon isOn={isOn} />
            <span className="text-[var(--foreground)]/80">{isOn ? "SUBSPACE IS OPEN" : "SUBSPACE IS CLOSED"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
