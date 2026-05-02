"use client";

import React, { useEffect, useRef, useState } from "react";

type Tile = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tilesRef = useRef<Tile[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [dividerY, setDividerY] = useState(300);

  const [repulsion, setRepulsion] = useState(0.3);
  const [attraction, setAttraction] = useState(0.002);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [musicOn]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    let animationFrame: number;
    let dpr = window.devicePixelRatio || 1;
    let tileSize = 4;

    const RADIUS = 110;
    const SWIRL = 0.14;

    const getTileSize = () => {
      return Math.max(2, Math.min(6, Math.floor(window.innerWidth / 350)));
    };

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      tileSize = getTileSize();

      canvas.width = window.innerWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildTextTiles();
    };

    const buildTextTiles = () => {
      tilesRef.current = [];

      const width = window.innerWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      const targetWidth = width * 0.94;

      let fontSize = 320;
      ctx.font = `400 ${fontSize}px Anton`;

      const measuredWidth = ctx.measureText("FARAZ").width;
      fontSize = (targetWidth / measuredWidth) * fontSize;

      ctx.font = `400 ${fontSize}px Anton`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillStyle = "white";

      const textX = 16;
      const textY = 64;

      ctx.fillText("FARAZ", textX, textY);

      const metrics = ctx.measureText("FARAZ");

      const bottomOfText =
        textY +
        metrics.actualBoundingBoxAscent +
        metrics.actualBoundingBoxDescent;

      setDividerY(bottomOfText - 24);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width: imgWidth, height: imgHeight } = imageData;

      for (let y = 0; y < imgHeight; y += tileSize * dpr) {
        for (let x = 0; x < imgWidth; x += tileSize * dpr) {
          const index = (y * imgWidth + x) * 4;

          if (data[index + 3] > 128) {
            const cssX = x / dpr;
            const cssY = y / dpr;

            tilesRef.current.push({
              x: cssX,
              y: cssY,
              homeX: cssX,
              homeY: cssY,
              vx: 0,
              vy: 0,
              size: tileSize,
            });
          }
        }
      }
    };

    const animate = (now: number) => {
      const width = window.innerWidth;
      const height = canvas.offsetHeight;
      const time = now * 0.001;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      ctx.fillStyle = "white";

      for (const tile of tilesRef.current) {
        const toHomeX = tile.homeX - tile.x;
        const toHomeY = tile.homeY - tile.y;

        tile.vx += toHomeX * attraction;
        tile.vy += toHomeY * attraction;

        const dx = tile.x - mouseX;
        const dy = tile.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          const falloff = 1 - dist / RADIUS;
          const force = falloff * falloff;
          const angle = Math.atan2(dy, dx);

          const radial = repulsion * 5.5 * force;
          const tangential = SWIRL * force;

          tile.vx += Math.cos(angle) * radial - Math.sin(angle) * tangential;
          tile.vy += Math.sin(angle) * radial + Math.cos(angle) * tangential;

          const ripple = Math.sin(falloff * Math.PI * 6 - time * 8) * force;
          tile.vx += (dx / (dist || 1)) * ripple * 0.08;
          tile.vy += (dy / (dist || 1)) * ripple * 0.08;
        }

        tile.vx *= 0.88;
        tile.vy *= 0.88;

        tile.x += tile.vx;
        tile.y += tile.vy;

        const speed = Math.sqrt(tile.vx * tile.vx + tile.vy * tile.vy);
        const energy = Math.min(1, speed * 3.5);
        const scale = 1 + energy * 0.3;

        ctx.globalAlpha = 1;
        ctx.fillRect(
          tile.x,
          tile.y,
          tile.size * scale,
          tile.size * scale
        );
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    animationFrame = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [repulsion, attraction]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        className="absolute left-0 right-0 z-20 px-8"
        style={{ top: `${dividerY}px` }}
      >
        <div className="h-px w-full bg-white" />

        <div className="mt-4 flex items-center justify-between text-white text-[10px] uppercase tracking-[0.08em]">
          <div className="flex items-center gap-3">
            <span>Repulsion</span>
            <input
              type="range"
              min="0"
              max="0.6"
              step="0.01"
              value={repulsion}
              onChange={(e) => setRepulsion(Number(e.target.value))}
              className="custom-slider"
            />
          </div>

          <div className="flex items-center gap-3">
            <span>Play Music?</span>

            <button
              onClick={() => setMusicOn(true)}
              className={`px-2 py-[2px] ${
                musicOn ? "border border-white" : ""
              }`}
            >
              YES
            </button>

            <button
              onClick={() => setMusicOn(false)}
              className={`px-2 py-[2px] ${
                !musicOn ? "border border-white" : ""
              }`}
            >
              NO
            </button>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0.0005"
              max="0.0035"
              step="0.00005"
              value={attraction}
              onChange={(e) => setAttraction(Number(e.target.value))}
              className="custom-slider"
            />
            <span>Attraction</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 text-white/60 hover:text-white transition"
      >
        <div className="h-4 w-4 rotate-45 border-b border-r border-white" />
      </button>
    </section>
  );
}