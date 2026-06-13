"use client";
import { useEffect, useRef } from "react";

const PIXEL_SIZE = 14;
const SPEED_SCALE = 0.5;

interface Pixel {
  x: number;
  y: number;
  row: number;
  col: number;
  baseDensity: number;
  phase: number;
  speed: number;
  t: number;
}

function PixelTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const pixelsRef = useRef<Pixel[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function initPixels(cols: number, rows: number) {
      const px: Pixel[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const rowFraction = r / Math.max(rows - 1, 1);
          px.push({
            x: c * PIXEL_SIZE,
            y: r * PIXEL_SIZE,
            row: r,
            col: c,
            baseDensity: rowFraction,
            phase: Math.random() * Math.PI * 2,
            speed: (0.008 + Math.random() * 0.014) * SPEED_SCALE,
            t: Math.random() * 100,
          });
        }
      }
      pixelsRef.current = px;
    }

    function resize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
      initPixels(Math.ceil(w / PIXEL_SIZE), Math.ceil(h / PIXEL_SIZE));
    }

    function draw() {
      if (!canvas || !ctx) return;

      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const px of pixelsRef.current) {
        px.t += px.speed;

        const wave = Math.sin(px.t + px.phase) * 0.5 + 0.5;
        const noise =
          Math.sin(px.t * 1.7 + px.col * 0.31 + px.row * 0.15) * 0.5 + 0.5;

        const combined = wave * 0.55 + noise * 0.45;

        if (combined < px.baseDensity) {
          ctx.fillStyle = "#0d0d0d";
          ctx.fillRect(px.x, px.y, PIXEL_SIZE, PIXEL_SIZE);
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    animRef.current = requestAnimationFrame(draw);

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(animRef.current);
      resize();
      animRef.current = requestAnimationFrame(draw);
    });

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full pointer-events-none"
      style={{ height: "63vh", imageRendering: "pixelated" }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-white h-[50vh]" />
      <PixelTransition />

      <div
        className="bg-[#0d0d0d] flex flex-col justify-between relative"
        style={{ height: "75vh", padding: "2rem 2.5rem" }}
      >
        {/* TOP ROW */}
        <div className="flex justify-between items-start">

          {/* LEFT: identity block */}
          <div className="flex flex-col items-start leading-none">
            <h2
              className="text-white select-none"
              style={{
                fontFamily: "var(--font-geist-sans, Geist, sans-serif)",
                fontWeight: 700,
                fontSize: "9vw",
                marginBottom: "-0.2rem",
              }}
            >
              faraz.me
            </h2>

            <p
              className="text-white/40 italic text-lg leading-snug ml-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              thank you for your time. i would love to connect
            </p>
          </div>

          {/* RIGHT: columns */}
          <div className="flex gap-48 pt-6">
            {[
              {
                heading: "Site",
                links: [
                  { label: "Home", href: "#" },
                  { label: "About", href: "#" },
                  { label: "Introduction", href: "#" },
                  { label: "Projects", href: "#" },
                ],
              },
              {
                heading: "Articles",
                links: [
                  { label: "Placeholder 1", href: "#" },
                  { label: "Placeholder 2", href: "#" },
                ],
              },
              {
                heading: "Contact",
                links: [
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                  { label: "Email", href: "mailto:yo@faraz.me" },
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="text-md tracking-[0.18em] text-white/25 uppercase mb-4"
                  style={{
                    fontFamily:
                      "var(--font-geist-sans, Geist, sans-serif)",
                  }}
                >
                  {heading}
                </p>

                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[17px] text-white/60 hover:text-white transition-colors duration-200"
                        style={{
                          fontFamily:
                            "var(--font-geist-sans, Geist, sans-serif)",
                          fontWeight: 400,
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-end">

          {/* bottom-left copyright */}
          <p
            className="text-md text-white/50"
            style={{ fontFamily: "Georgia, serif" }}
          >
            © {new Date().getFullYear()} Faraz Tehrani. All rights reserved.
          </p>

          {/* bottom-right art */}
          <img
            src="/art.png"
            alt=""
            className="object-contain mix-blend-screen"
            style={{
              width: "50vw",
              maxHeight: "65vh",
              marginBottom: "-2rem",
              marginRight: "-2.5rem",
            }}
          />
        </div>
      </div>
    </footer>
  );
}