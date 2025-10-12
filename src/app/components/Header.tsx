"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      root.style.setProperty("--background", "#000000");
      root.style.setProperty("--foreground", "#ffffff");
      root.style.setProperty("--background-rgb", "0, 0, 0");
      root.style.setProperty("--foreground-rgb", "255, 255, 255");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#000000");
      root.style.setProperty("--background-rgb", "255, 255, 255");
      root.style.setProperty("--foreground-rgb", "0, 0, 0");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--foreground)]/20 bg-[var(--background)]/25 backdrop-blur-lg text-[var(--foreground)]">
      <nav className="flex items-center justify-between w-full px-6 py-4">
        {/* Left side: Name */}
        <Link href="/" className="text-lg font-semibold hover:opacity-70">
          Faraz Tehrani
        </Link>

        {/* Right side: Icons + Divider + Theme toggle */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/farazht" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/farazht" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <Linkedin size={20} />
          </a>
          <a href="mailto:youremail@example.com" className="hover:opacity-70">
            <Mail size={20} />
          </a>

          {/* Divider */}
          <div className="h-5 w-px bg-[var(--foreground)]/30" />

          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-1 hover:opacity-70">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
