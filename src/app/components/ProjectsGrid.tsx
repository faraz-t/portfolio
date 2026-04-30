import React from "react";
import Project from "./Project";
import Fade from "./Fade";

interface ProjectData {
  imageSrc: string;
  title: string;
  description: string;
  descriptionBold?: string;
  date?: string;
  tags?: string[];
  github?: string;
  slug?: string;
}

const projects: ProjectData[] = [
  {
    imageSrc: "/witness.png",
    title: "Witness",
    descriptionBold: "(1st by Judges Choice @ Demo Showcase)",
    description: "Mobile app to create study groups focused on social accountability.",
    date: "2026",
    tags: ["mobile", "native-app"],
    github: "https://github.com/faraz-t/witness",
    slug: "witness",
  },
  {
    imageSrc: "/speedstats.png",
    title: "SpeedStats",
    descriptionBold: "(1500+ Monthly Users)",
    description: "Web app that displays extensive real-time stats from a Minecraft speedrunning API.",
    date: "2026",
    tags: ["api", "data-viz", "web-app"],
    github: "https://github.com/faraz-t/speedstats",
    slug: "speedstats",
  },
  {
    imageSrc: "/neuralnetwork.png",
    title: "Custom Neural Network",
    description: "Artificial neural network implemented from scratch in C++ to achieve 97% accuracy on image classification.",
    date: "2025",
    tags: ["machine-learning", "linear-algebra", "math"],
    github: "https://github.com/faraz-t/neural-network",
    slug: "neural-network",
  },
  {
    imageSrc: "/billboard.png",
    title: "BillBoard",
    descriptionBold: "(Top 10 @ HackTheChange)",
    description: "Full-stack policy discussion platform with forums, petitions, polls, maps, AI integration, and more.",
    date: "2025",
    tags: ["full-stack", "relational-database", "ai"],
    github: "https://github.com/faraz-t/billboard",
    slug: "billboard",
  },
  {
    imageSrc: "/portfolio.png",
    title: "Portfolio",
    description: "Personal portfolio website built with Next.js, Tailwind CSS, and Vercel for deployment.",
    date: "2026",
    tags: ["web", "graphic-design", "ui-ux"],
    slug: "portfolio",
  },
  {
    imageSrc: "/insightubc.png",
    title: "InsightUBC",
    description: "Full-stack application using a RESTful API to query class section datasets and display comprehensive insights.",
    date: "2024",
    tags: ["full-stack", "rest-api", "data-viz"],
    slug: "insight-ubc",
  },
  {
    imageSrc: "/immuneit.png",
    title: "ImmuneIT",
    descriptionBold: "(Top 10 @ ProduHacks)",
    description: "Cybersecurity system designed for growing Canadian businesses in healthcare.",
    date: "2024",
    tags: ["web-app", "ai", "cybersecurity"],
    github: "https://github.com/jacob-guglielmin/immuneit",
    slug: "immune-it",
  },
  {
    imageSrc: "/heartdisease.png",
    title: "Identifying Heart Disease",
    descriptionBold: "(Built @ CPL Hackathon)",
    description: "Comparing the efficacy of 4 different classification models in predicting coronary heart disease.",
    date: "2024",
    tags: ["statistics", "data-viz", "machine-learning"],
    github: "https://github.com/faraz-t/heart-disease",
    slug: "heart-disease",
  },
  {
    imageSrc: "/elegantchaos.png",
    title: "ElegantChaos",
    description: "Tool for visualizing chaotic mathematical systems based on x-y-time equations.",
    date: "2023",
    tags: ["mathematics", "algorithms"],
    github: "https://github.com/faraz-t/elegantchaos",
    slug: "elegant-chaos",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-[1600px] mx-auto">
        {/* Section title */}
        <Fade>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-white">
            Projects
          </h2>
        </Fade>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <Fade key={`${project.title}-${index}`} delay={index * 0.05}>
              <div className="flex flex-col h-full">
                <Project
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  descriptionBold={project.descriptionBold}
                  date={project.date}
                  tags={project.tags}
                  github={project.github}
                  slug={project.slug}
                />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
