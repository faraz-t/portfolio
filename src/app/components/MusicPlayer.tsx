"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const playMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
  };

  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <section className="w-full flex justify-center py-12 bg-black">
      <div className="max-w-5xl w-full px-6 flex justify-center relative">

        {/* Image container */}
        <div className="relative w-1/3">
          <img
            src="/musicplayer.png"
            alt="music player"
            className="w-full h-auto object-contain drop-shadow-lg"
          />

          {/* Text overlay - positioned on image */}
          
          {/* Question text - centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p
              className="font-serif italic text-black text-5xl tracking-wide whitespace-nowrap"
              style={{
                WebkitTextStroke: "1px white",
              }}
            >
              play?
            </p>
          </div>

          {/* Yes button - left side */}
          <button
            onClick={playMusic}
            onMouseEnter={() => setHoveredButton("yes")}
            onMouseLeave={() => setHoveredButton(null)}
            className="absolute top-3/4 -translate-y-1/2 -left-4 font-serif italic text-3xl transition-colors duration-300 whitespace-nowrap"
            style={{
              color: hoveredButton === "yes" ? "white" : "black",
              WebkitTextStroke: hoveredButton === "yes" ? "0px" : "1px white",
            }}
          >
            yes
          </button>

          {/* No button - right side */}
          <button
            onClick={stopMusic}
            onMouseEnter={() => setHoveredButton("no")}
            onMouseLeave={() => setHoveredButton(null)}
            className="absolute top-3/4 -translate-y-1/2 -right-4 font-serif italic text-3xl transition-colors duration-300 whitespace-nowrap"
            style={{
              color: hoveredButton === "no" ? "white" : "black",
              WebkitTextStroke: hoveredButton === "no" ? "0px" : "1px white",
            }}
          >
            no
          </button>
        </div>

        <audio ref={audioRef} src="/music.mp3" loop />
      </div>
    </section>
  );
}