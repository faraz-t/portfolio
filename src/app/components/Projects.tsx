"use client";

import { useState, useEffect, useRef } from "react";
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
        Mobile app to create study groups focused on social accountability.
        Ranked <span className="font-semibold text-white">1st place</span> by
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
        Web app that displays extensive real-time stats from a minecraft
        speedrunning api. Currently used by{" "}
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
    year: "2026",
    name: "PORTFOLIO",
    description: (
      <>
        Personal portfolio website built with{" "}
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
    year: "2025",
    name: "NEURAL NET",
    description: (
      <>
        Artificial neural network implemented from scratch in{" "}
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
        Full-stack policy discussion platform with forums, petitions, polls,
        maps, ai integration, and more. Placed{" "}
        <span className="font-semibold text-white">top 10</span> @
        hackthechange.
      </>
    ),
    tags: ["full-stack", "relational-database", "ai"],
    image: "/projects/billboard.png",
    link: "https://github.com/faraz-t/BillBoard",
  },
  {
    year: "2024",
    name: "INSIGHTUBC",
    description: (
      <>
        Full-stack application using a{" "}
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
        Cybersecurity system designed for growing canadian businesses in
        healthcare. Placed{" "}
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
        Comparing the efficacy of{" "}
        <span className="font-semibold text-white">
          4 classification models
        </span>{" "}
        in predicting coronary heart disease. Built @ cpl hackathon.
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
        Tool for visualizing{" "}
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

function AnimatedTitle({ text, isActive }: { text: string; isActive: boolean }) {
  const letters = text.split("");

  return (
    <div className="relative overflow-hidden leading-[0.9]">
      <div className="flex flex-wrap">
        {letters.map((letter, i) => (
          <span
            key={`top-${i}`}
            style={{
              fontFamily: "Anton, sans-serif",
              transitionDelay: `${i * 12}ms`,
            }}
            className={`
              inline-block whitespace-pre
              transition-transform duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${isActive ? "-translate-y-full" : "translate-y-0"}
            `}
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
              transitionDelay: `${i * 12}ms`,
            }}
            className={`
              inline-block whitespace-pre
              transition-transform duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${isActive ? "-translate-y-full" : "translate-y-0"}
            `}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const elements = scrollContainerRef.current?.querySelectorAll("[data-project-trigger]");
    
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeProject = projectItems[activeIndex];

  const handleActiveProjectClick = () => {
    if (activeProject?.link) {
      window.open(activeProject.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-8 bg-black relative">
      
      {/* DESKTOP VIEW: Asymmetric layout breakdown configuration (1/3 Left, 2/3 Right) */}
      <div 
        ref={scrollContainerRef} 
        className="hidden lg:grid grid-cols-[1fr_2fr] gap-14 items-start relative max-w-[1800px] mx-auto"
        style={{ height: `${projectItems.length * 85}vh` }}
      >
        
        {/* Left Column Layout Panel Area (Sticky) */}
        <div className="sticky top-16 flex flex-col z-20 pointer-events-none">
          {/* Top Right Header Text Anchor Alignment Block */}
          <div className="w-full text-right pointer-events-auto pr-2 mb-28">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">
              selected works
            </span>
          </div>

          {/* Project Navigation Item List Section */}
          <div className="flex flex-col gap-3 py-1">
            {projectItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => {
                    const target = document.querySelector(`[data-index="${index}"]`);
                    target?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="group relative py-1 cursor-pointer transition-opacity duration-300 pointer-events-auto"
                  style={{ opacity: isActive ? 1 : 0.12 }}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-white tracking-wide">
                    <AnimatedTitle text={item.name} isActive={isActive} />
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column Editorial Preview Area (Sticky) */}
        <div 
          className="sticky top-16 flex flex-col z-20 cursor-pointer pointer-events-auto"
          onClick={handleActiveProjectClick}
        >
          {activeProject && (
            <div className="w-full flex flex-col gap-2">
              {/* Static Image Canvas */}
              <div className="w-full overflow-hidden bg-zinc-950 aspect-[16/10]">
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="block w-full h-full object-cover opacity-90 transition-all duration-500"
                />
              </div>

              {/* Swiss Layout Typography Grid — Set tighter to the image above */}
              <div className="grid grid-cols-[1.2fr_2fr_0.5fr] gap-6 pt-0.5 text-xs tracking-tight text-white/60 font-sans">
                
                {/* Column One: Name + Tag list */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-medium uppercase tracking-wider text-[13px]">
                    {activeProject.name}
                  </span>
                  <span className="lowercase italic text-white/40 text-[12px]">
                    {activeProject.tags.join(" / ")}
                  </span>
                </div>

                {/* Column Two: Center Narrative Text Block */}
                <div>
                  <p className="leading-relaxed text-white/80 text-[13px] max-w-sm normal-case">
                    {activeProject.description}
                  </p>
                </div>

                {/* Column Three: End Right Year Anchor */}
                <div className="text-right">
                  <span className="text-white font-medium text-[13px]">
                    {activeProject.year}
                  </span>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Scroll Processing Anchor Tracks */}
        <div className="absolute inset-0 flex flex-col pointer-events-none z-10">
          {projectItems.map((_, index) => (
            <div
              key={index}
              data-project-trigger
              data-index={index}
              className="flex-1 w-full"
            />
          ))}
        </div>

      </div>

      {/* MOBILE ALTERNATIVE VIEW LAYOUT: Clean stacked fallback layout structural grid logic */}
      <div className="w-full lg:hidden block py-10 max-w-[1800px] mx-auto">
        {projectItems.map((item, index) => (
          <div 
            key={index}
            onClick={() => item.link && window.open(item.link, "_blank")}
            className="py-8 border-b border-white/10 flex flex-col gap-4"
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl uppercase text-white font-semibold font-mono tracking-wide">{item.name}</h3>
              <span className="text-white/40 text-xs">{item.year}</span>
            </div>
            <div className="w-full overflow-hidden bg-zinc-950 aspect-[16/10]">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
            <span className="lowercase italic text-white/40 text-xs">{item.tags.join(" / ")}</span>
          </div>
        ))}
      </div>

    </section>
  );
}