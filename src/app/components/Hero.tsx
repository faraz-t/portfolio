"use client";

import React, { useEffect, useRef } from "react";
import MusicPlayer from "./MusicPlayer";

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    let animationFrame: number;
    let dpr = window.devicePixelRatio || 1;

    const TILE_SIZE = 5;
    const RADIUS = 50;
    const TEXT = "FARAZ";

    const resize = () => {
      dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildTextTiles();
    };

    const buildTextTiles = () => {
      tilesRef.current = [];

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const targetWidth = window.innerWidth * 0.95;
      const textY = -20;

      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      // Calculate font size to fit 90% of width
      let fontSize = 200; // initial estimate
      ctx.font = `900 ${fontSize}px Archivo Black, sans-serif`;
      let metrics = ctx.measureText(TEXT);
      let measuredWidth = metrics.width;

      // Adjust fontSize to match target width
      fontSize = (targetWidth / measuredWidth) * fontSize;
      ctx.font = `900 ${fontSize}px Archivo Black, sans-serif`;

      const textX = window.innerWidth / 2;

      ctx.fillText(TEXT, textX, textY);

      // IMPORTANT: get backing-buffer pixels
      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const { data, width, height } = imageData;

      for (let y = 0; y < height; y += TILE_SIZE * dpr) {
        for (let x = 0; x < width; x += TILE_SIZE * dpr) {
          const index = (y * width + x) * 4;

          if (data[index + 3] > 128) {
            // convert device pixels -> css pixels
            const cssX = x / dpr;
            const cssY = y / dpr;

            tilesRef.current.push({
              x: cssX,
              y: cssY,
              homeX: cssX,
              homeY: cssY,
              vx: 0,
              vy: 0,
              size: TILE_SIZE,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = "white";

      for (const tile of tilesRef.current) {
        const dx = tile.homeX - mouseRef.current.x;
        const dy = tile.homeY - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          // Gentle disturbance, not full repulsion
          const normalizedDist = dist / RADIUS;
          const force = Math.exp(-normalizedDist * normalizedDist * 2);
          const angle = Math.atan2(dy, dx);

          tile.vx += Math.cos(angle) * force * 0.2;
          tile.vy += Math.sin(angle) * force * 0.2;
        }

        tile.vx += (tile.homeX - tile.x) * 0.003;
        tile.vy += (tile.homeY - tile.y) * 0.003;

        tile.vx *= 0.9;
        tile.vy *= 0.9;

        tile.x += tile.vx;
        tile.y += tile.vy;

        ctx.fillRect(tile.x, tile.y, tile.size, tile.size);
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
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[40vh] w-full">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>

      {/* Music Player */}
      <div className="relative bg-black">
        <MusicPlayer />
      </div>
    </section>
  );
}