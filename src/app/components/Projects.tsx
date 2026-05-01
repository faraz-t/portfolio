"use client";

import { useEffect, useRef, useState } from "react";
import Fade from "./Fade";

interface ProjectIndexItem {
  year: string;
  name: string;
  description: React.ReactNode;
  tags: string[];
  image: string;
  link?: string;
}

const projectItems: ProjectIndexItem[] = [
  {
    year: "2026",
    name: "WITNESS",
    description: (
      <>
        mobile app to create study groups focused on social accountability.
        ranked <span className="font-semibold text-white">1st place</span> by
        judges at a project demo showcase.
      </>
    ),
    tags: ["mobile", "native-app"],
    image: "/projects/witness.png",
    link: "https://github.com/faraz-t/witness",
  },
  {
    year: "2026",
    name: "SPEEDSTATS",
    description: (
      <>
        web app that displays extensive real-time stats from a minecraft
        speedrunning api. currently used by{" "}
        <span className="font-semibold text-white">
          1500+ monthly users
        </span>
        .
      </>
    ),
    tags: ["api", "data-viz", "web-app"],
    image: "/projects/speedstats.png",
    link: "https://speedstats.vercel.app/",
  },
  {
    year: "2025",
    name: "NEURAL NET",
    description: (
      <>
        artificial neural network implemented from scratch in{" "}
        <span className="font-semibold text-white">c++</span> to achieve{" "}
        <span className="font-semibold text-white">97% accuracy</span> on image
        classification.
      </>
    ),
    tags: ["machine-learning", "linear-algebra", "math"],
    image: "/projects/neuralnetwork.png",
    link: "https://github.com/faraz-t/neural-network",
  },
  {
    year: "2025",
    name: "BILLBOARD",
    description: (
      <>
        full-stack policy discussion platform with forums, petitions, polls,
        maps, ai integration, and more. placed{" "}
        <span className="font-semibold text-white">top 10</span> @
        hackthechange.
      </>
    ),
    tags: ["full-stack", "relational-database", "ai"],
    image: "/projects/billboard.png",
    link: "https://github.com/faraz-t/BillBoard",
  },
  {
    year: "2025",
    name: "PORTFOLIO",
    description: (
      <>
        personal portfolio website built with{" "}
        <span className="font-semibold text-white">next.js</span>,{" "}
        <span className="font-semibold text-white">tailwind css</span>, and
        vercel for deployment.
      </>
    ),
    tags: ["web", "graphic-design", "ui-ux"],
    image: "/projects/portfolio.png",
    link: "https://github.com/faraz-t/portfolio",
  },
  {
    year: "2024",
    name: "INSIGHTUBC",
    description: (
      <>
        full-stack application using a{" "}
        <span className="font-semibold text-white">restful api</span> to query
        class section datasets and display comprehensive insights.
      </>
    ),
    tags: ["full-stack", "rest-api", "data-viz"],
    image: "/projects/insightubc.png",
  },
  {
    year: "2024",
    name: "IMMUNEIT",
    description: (
      <>
        cybersecurity system designed for growing canadian businesses in
        healthcare. placed{" "}
        <span className="font-semibold text-white">top 10</span> @ produhacks.
      </>
    ),
    tags: ["web-app", "ai", "cybersecurity"],
    image: "/projects/immuneit.png",
    link: "https://github.com/Jacob-Guglielmin/ImmuneIT",
  },
  {
    year: "2024",
    name: "HEART DISEASE",
    description: (
      <>
        comparing the efficacy of{" "}
        <span className="font-semibold text-white">
          4 classification models
        </span>{" "}
        in predicting coronary heart disease. built @ cpl hackathon.
      </>
    ),
    tags: ["statistics", "data-viz", "machine-learning"],
    image: "/projects/heartdisease.png",
    link: "https://github.com/faraz-t/heart-disease",
  },
  {
    year: "2023",
    name: "ELEGANTCHAOS",
    description: (
      <>
        tool for visualizing{" "}
        <span className="font-semibold text-white">
          chaotic mathematical systems
        </span>{" "}
        based on x-y-time equations.
      </>
    ),
    tags: ["mathematics", "algorithms"],
    image: "/projects/elegantchaos.png",
    link: "https://github.com/faraz-t/elegantchaos",
  },
];

function AnimatedTitle({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <div className="relative overflow-hidden leading-[0.9]">
      <div className="flex flex-wrap">
        {letters.map((letter, i) => (
          <span
            key={`top-${i}`}
            style={{
              fontFamily: "Anton, sans-serif",
              transitionDelay: `${i * 18}ms`,
            }}
            className="
              inline-block whitespace-pre
              transition-transform duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              group-hover:-translate-y-full
            "
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      <div className="absolute left-0 top-full flex flex-wrap">
        {letters.map((letter, i) => (
          <span
            key={`bottom-${i}`}
            style={{
              fontFamily: "Anton, sans-serif",
              transitionDelay: `${i * 18}ms`,
            }}
            className="
              inline-block whitespace-pre
              transition-transform duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              group-hover:-translate-y-full
            "
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({
  item,
  delay,
}: {
  item: ProjectIndexItem;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const rowRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!hovered) return;

    let frame = 0;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.08,
        y: prev.y + (targetRef.current.y - prev.y) * 0.08,
      }));

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  const updateTarget = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;

    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleClick = () => {
    if (!item.link) return;
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Fade delay={delay}>
      <div
        ref={rowRef}
        onClick={handleClick}
        onMouseEnter={(e) => {
          updateTarget(e);
          setPosition(targetRef.current);
          setHovered(true);
        }}
        onMouseMove={updateTarget}
        onMouseLeave={() => setHovered(false)}
        className="group relative py-5 cursor-pointer"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-visible transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div
            className="absolute left-0 top-0"
            style={{
              transform: `translate(${position.x - 180}px, ${
                position.y - 140
              }px) rotate(${(position.x - 180) * 0.015}deg)`,
            }}
          >
            <div className="w-72 sm:w-80 md:w-96 lg:w-[28rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={item.image}
                alt=""
                className="block w-full h-auto object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-start gap-3">
            <span
              style={{ fontFamily: "Anton, sans-serif" }}
              className="
                text-xs sm:text-sm tracking-wider
                text-white/40
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {item.year}
            </span>

            <div className="flex-1 min-w-0">
              <h3
                className="
                  text-[2.2rem]
                  sm:text-[3.2rem]
                  md:text-[4.5rem]
                  lg:text-[5.5rem]
                  xl:text-[6.2rem]
                  uppercase
                  text-white
                "
              >
                <AnimatedTitle text={item.name} />
              </h3>

              <div
                className={`
                  overflow-hidden transition-all duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  ${
                    hovered
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0 mt-0"
                  }
                `}
              >
                <p className="max-w-2xl text-sm sm:text-base text-white/80 lowercase leading-relaxed">
                  {item.description}
                </p>

                <p className="mt-2 text-sm sm:text-base text-white/70 lowercase leading-relaxed">
                  <span className="italic">tags:</span>{" "}
                  <span className="italic">{item.tags.join(" / ")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default function Projects() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-20 bg-black">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_2fr] gap-10 lg:gap-14">
        <Fade>
          <div className="lg:sticky lg:top-28 h-fit pt-4 sm:pt-5 flex flex-col items-start">
            <div className="relative inline-block">
              <h2
                style={{ fontFamily: "Anton, sans-serif" }}
                className="
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                  leading-[0.9]
                  tracking-wide
                  text-white
                  uppercase
                "
              >
                Projects
              </h2>

              <span
                className="
                  absolute
                  left-[35%]
                  top-[93%]
                  text-xl sm:text-2xl md:text-3xl
                  italic lowercase
                  tracking-tight
                  text-black
                  whitespace-nowrap
                  pointer-events-none
                  z-20
                  select-none
                "
                style={{
                  fontFamily: '"Times New Roman", Georgia, serif',
                  WebkitTextStroke: "0.6px rgba(255,255,255,0.9)",
                  textShadow:
                    "0 0 1px rgba(255,255,255,0.95), 1px 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                (hover for more info)
              </span>
            </div>

            <div className="mt-16 w-full max-w-[320px] opacity-90 mix-blend-screen">
              <img
                src="/dither3.png"
                alt="artwork"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </Fade>

        <div>
          {projectItems.map((item, index) => (
            <ProjectRow key={index} item={item} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}