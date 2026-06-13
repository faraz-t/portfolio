"use client";
import { useEffect, useRef, useState } from "react";

export default function IrisTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!sectionRef.current) { ticking = false; return; }
      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const raw = Math.min(Math.max(-rect.top / total, 0), 1);
      let nextRadius = 180;
      if (raw <= 0.15) {
        nextRadius = 180;
      } else if (raw >= 0.85) {
        nextRadius = 0;
      } else {
        const normalized = (raw - 0.15) / 0.7;
        const eased = 1 - Math.pow(1 - normalized, 3);
        nextRadius = Math.max(0, 180 - eased * 180);
      }
      setRadius(nextRadius);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white text-black">
        <section className="relative h-screen overflow-hidden">

          <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-180 [writing-mode:vertical-rl]">
            <span className="text-sm sm:text-base md:text-lg uppercase tracking-[0.18em] font-light leading-none">
              ABOUT ME
            </span>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl]">
            <span className="text-sm sm:text-base md:text-lg uppercase tracking-[0.18em] font-light leading-none">
              ABOUT ME
            </span>
          </div>

          <div className="mt-18 px-6">
            <p className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase leading-[1.05] tracking-[-0.02em] text-justify font-light">
              A LITTLE MORE ABOUT ME: I CURRENTLY STUDY{" "}
              COMPUTER SCIENCE AND DATA SCIENCE{" "}
              AT THE UNIVERSITY OF BRITISH COLUMBIA (UBC). I AM INTERESTED IN
              FULL-STACK DEVELOPMENT, DATA SCIENCE, AND MACHINE LEARNING, BUT ULTIMATELY MY PASSION
              LIES IN USING CODE AS A MEDIUM TO
              CREATE WONDERFUL EXPERIENCES.
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/moon.png"
              alt="moon"
              className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px] xl:w-[580px] object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-0 right-0 px-6">
            <p className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase leading-[1.05] tracking-[-0.02em] text-justify font-light">
              I&apos;M ALSO A SOFTWARE DEVELOPER FOR UBC BIONICS,
              WHERE I WRITE FULL-STACK CODE WHILE MANAGING A TEAM OF WEB DEVS, FINANCIAL
              OFFICERS, AND SPONSORSHIP COORDINATORS. PREVIOUSLY, I DID FREELANCE WEB DEVELOPMENT FOR A
              COMPANY THAT AGGREGATES REVIEWS, AND HELPED THEM REACH A 300% INCREASE IN TRAFFIC.
            </p>
          </div>

          {radius > 0 && (
            <div
              className="absolute inset-0 bg-black pointer-events-none"
              style={{ clipPath: `circle(${radius}vw at 50% 50%)`, willChange: "clip-path" }}
            />
          )}
        </section>
      </div>
    </section>
  );
}