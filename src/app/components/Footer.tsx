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

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tilesRef = useRef<Tile[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const repulsionRef = useRef(0.3);
  const attractionRef = useRef(0.002);
  const tileSizeRef = useRef(6);
  const colorRef = useRef(0);
  const hueRef = useRef(0);

  const repulsionInputRef = useRef<HTMLInputElement>(null);
  const attractionInputRef = useRef<HTMLInputElement>(null);
  const tileSizeInputRef = useRef<HTMLInputElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMobile === null || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrame: number;
    let dpr = window.devicePixelRatio || 1;

    const RADIUS = 110;
    const SWIRL = 0.14;
    const currentYear = new Date().getFullYear();
    const TEXT = `faraz.me ©${currentYear}`;

    const getTileColor = (): string => {
      const t = colorRef.current;
      if (t <= 0.02) return "#ffffff";
      const hue = hueRef.current;
      const saturation = 100;
      const lightness = 98 - t * 20;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const buildTextTiles = () => {
      tilesRef.current = [];
      const tileSize = tileSizeRef.current;
      const width = window.innerWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      const targetWidth = width * 0.96;
      let fontSize = 320;
      ctx.font = `400 ${fontSize}px Anton`;
      fontSize = (targetWidth / ctx.measureText(TEXT).width) * fontSize;
      ctx.font = `400 ${fontSize}px Anton`;

      const metrics = ctx.measureText(TEXT);
      const textHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      const BOTTOM_PAD = 60;
      const textY = height - textHeight - BOTTOM_PAD;

      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "white";
      ctx.fillText(TEXT, width / 2, textY);

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

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      buildTextTiles();
    };

    const animate = (now: number) => {
      const repulsion = repulsionRef.current;
      const attraction = attractionRef.current;
      const width = window.innerWidth;
      const time = now * 0.001;

      ctx.clearRect(0, 0, width, canvas.offsetHeight);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, canvas.offsetHeight);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      ctx.fillStyle = getTileColor();

      for (const tile of tilesRef.current) {
        tile.vx += (tile.homeX - tile.x) * attraction;
        tile.vy += (tile.homeY - tile.y) * attraction;

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
        const scale = 1 + Math.min(1, speed * 3.5) * 0.3;

        ctx.fillRect(tile.x, tile.y, tile.size * scale, tile.size * scale);
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

    const repInput = repulsionInputRef.current;
    const attInput = attractionInputRef.current;
    const tsInput = tileSizeInputRef.current;
    const colInput = colorInputRef.current;

    const onRepulsion = (e: Event) => {
      repulsionRef.current = Number((e.target as HTMLInputElement).value);
    };
    const onAttraction = (e: Event) => {
      attractionRef.current = Number((e.target as HTMLInputElement).value);
    };
    const onTileSize = (e: Event) => {
      tileSizeRef.current = Number((e.target as HTMLInputElement).value);
      buildTextTiles();
    };
    const onColor = (e: Event) => {
      const t = Number((e.target as HTMLInputElement).value);
      colorRef.current = t;
      hueRef.current = t * 360;
    };

    repInput?.addEventListener("input", onRepulsion);
    attInput?.addEventListener("input", onAttraction);
    tsInput?.addEventListener("input", onTileSize);
    colInput?.addEventListener("input", onColor);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      repInput?.removeEventListener("input", onRepulsion);
      attInput?.removeEventListener("input", onAttraction);
      tsInput?.removeEventListener("input", onTileSize);
      colInput?.removeEventListener("input", onColor);
    };
  }, [isMobile]);

  if (isMobile === null) {
    return <footer className="w-full h-20 bg-black" />;
  }

  if (isMobile) {
    return (
      <footer className="w-full bg-black py-8 px-6 text-center border-t border-zinc-900">
        <p className="text-xs font-medium tracking-wide text-white/80 whitespace-nowrap">
          faraz.me ©{new Date().getFullYear()}
        </p>
      </footer>
    );
  }

  return (
    <footer className="relative w-full bg-black" style={{ height: "420px" }}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute left-0 right-0 z-20 px-6" style={{ bottom: "32px" }}>
        <div className="flex items-center justify-between text-white text-[10px] uppercase tracking-[0.08em]">
          <div className="flex items-center gap-3">
            <span>Repulsion</span>
            <input
              ref={repulsionInputRef}
              type="range"
              min="0"
              max="0.6"
              step="0.01"
              defaultValue="0.3"
              className="custom-slider"
            />
          </div>

          <div className="flex items-center gap-3">
            <span>Tile Size</span>
            <input
              ref={tileSizeInputRef}
              type="range"
              min="6"
              max="16"
              step="1"
              defaultValue="6"
              className="custom-slider"
            />
          </div>

          <div className="flex items-center gap-3">
            <span>Color</span>
            <input
              ref={colorInputRef}
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0"
              className="custom-slider"
            />
          </div>

          <div className="flex items-center gap-3">
            <span>Attraction</span>
            <input
              ref={attractionInputRef}
              type="range"
              min="0.0005"
              max="0.0035"
              step="0.00005"
              defaultValue="0.002"
              className="custom-slider"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}