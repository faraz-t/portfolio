"use client";
import React, { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    let animationFrame: number;

    const animate = () => {
      setPos((prev) => {
        const speed = 0.1;
        const x = prev.x + (target.current.x - prev.x) * speed;
        const y = prev.y + (target.current.y - prev.y) * speed;
        return { x, y };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(var(--foreground-rgb), 0.1), transparent 80%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}