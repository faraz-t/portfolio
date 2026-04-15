import Project from "./components/Project";
import Fade from "./components/Fade";
import Showcase from "./components/Showcase";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-12 leading-[1.8]">
      {/* Intro */}
      <Fade>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Hey, I'm <span className="gradient-text">Faraz</span>.
        </h1>
        <p className="flex items-center gap-1 text-pretty text-xs sm:text-sm text-[var(--foreground)]/75">
          <MapPin className="inline-block" size={10} />
          BC, Canada
        </p>
      </Fade>

      {/* <Fade>
        <p className="text-lg sm:text-2xl md:text-4xl text-[var(--foreground)] leading-6 sm:leading-10 tracking-[-0.03em] mb-8">
          I'm a <span className="highlight">student</span> and <span className="highlight">developer</span> studying computer science and data science at <span className="highlight">UBC</span>. My interests lie in <span className="highlight">full-stack development</span>, <span className="highlight">data</span>, and <span className="highlight">machine learning</span>.
        </p>
      </Fade>

      <Fade>
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 mb-6">
          I'm also an administrative lead & developer for <span className="highlight">UBC Bionics</span>, where I write full-stack code while leading a team of web devs, financial officers, and sponsorship coordinators. Previously, I did freelance web development for a company that aggregates reviews, and helped them reach a <span className="highlight">200%</span> increase in traffic.
        </p>
      </Fade>

      <Fade>
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 mb-6">
          I am passionate about building software that is <span className="highlight">simple</span>, <span className="highlight">powerful</span>, and <span className="highlight">elegant</span>. This website is a collection of some of my recent projects and experiments. I hope you find something interesting!
        </p>
      </Fade> */}

      <Fade>
        <p className="text-lg sm:text-2xl md:text-4xl text-[var(--foreground)] leading-6 sm:leading-10 tracking-[-0.03em] mb-8">
          I am passionate about building software that is <span className="highlight">simple</span>, <span className="highlight">powerful</span>, and <span className="highlight">elegant</span>.
        </p>
      </Fade>

      <Fade>
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 mb-6">
          I'm studying computer science and data science at UBC, where I focus on software development, data, and machine learning.
          I also do full-stack development & admin work at UBC Bionics, building projects while leading a team of web devs, financial officers, and sponsorship coordinators.
          Previously, I did freelance web development for a review aggregator company and helped them reach a 2x increase in traffic.
        </p>
      </Fade>

      <Fade>
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 mb-6">
          This site is a collection of some of my recent projects and experiments. I hope you find something interesting!
        </p>
      </Fade>

      {/* Projects */}
      <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Fade>
            <Project
              imageSrc="/witness.png"
              title="Witness"
              descriptionBold="(1st by Judges Choice @ Demo Showcase)"
              description="Mobile app to create study groups focused on social accountability."
              date="2026"
              tags={["mobile", "native-app"]}
              github="https://github.com/faraz-t/witness"
              slug="witness"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/speedstats.png"
              title="SpeedStats"
              descriptionBold="(1500+ Monthly Users)"
              description="Web app that displays extensive real-time stats from a Minecraft speedrunning API."
              date="2026"
              tags={["api", "data-viz", "web-app",]}
              github="https://github.com/faraz-t/speedstats"
              slug="speedstats"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/neuralnetwork.png"
              title="Custom Neural Network"
              description="Artificial neural network implemented from scratch in C++ to achieve 97% accuracy on image classification."
              date="2025"
              tags={["machine-learning", "linear-algebra", "math"]}
              github="https://github.com/faraz-t/neural-network"
              slug="neural-network"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/billboard.png"
              title="BillBoard"
              descriptionBold="(Top 10 @ HackTheChange)"
              description="Full-stack policy discussion platform with forums, petitions, polls, maps, AI integration, and more."
              date="2025"
              tags={["full-stack", "relational-database", "ai",]}
              github="https://github.com/faraz-t/billboard"
              slug="billboard"
            />
          </Fade>
          {/* <Fade>
            <Project
              imageSrc="/portfolio.png"
              title="Portfolio"
              description="Personal portfolio website built with Next.js, Tailwind CSS, and Vercel for deployment."
              date="2026"
              tags={["web", "graphic-design", "ui-ux"]}
              slug="portfolio"
            />
          </Fade> */}
          <Fade>
            <Project
              imageSrc="/insightubc.png"
              title="InsightUBC"
              description="Full-stack application using a RESTful API to query class section datasets and display comprehensive insights."
              date="2024"
              tags={["full-stack", "rest-api", "data-viz"]}
              slug="insight-ubc"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/immuneit.png"
              title="ImmuneIT"
              descriptionBold="(Top 10 @ ProduHacks)"
              description="Cybersecurity system designed for growing Canadian businesses in healthcare."
              date="2024"
              tags={["web-app", "ai", "cybersecurity"]}
              github="https://github.com/jacob-guglielmin/immuneit"
              slug="immune-it"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/heartdisease.png"
              title="Identifying Heart Disease"
              descriptionBold="(Built @ CPL Hackathon)"
              description="Comparing the efficacy of 4 different classification models in predicting coronary heart disease."
              date="2024"
              tags={["statistics", "data-viz", "machine-learning"]}
              github="https://github.com/faraz-t/heart-disease"
              slug="heart-disease"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/elegantchaos.png"
              title="ElegantChaos"
              description="Tool for visualizing chaotic mathematical systems based on x-y-time equations."
              date="2023"
              tags={["mathematics", "algorithms"]}
              github="https://github.com/faraz-t/elegantchaos"
              slug="elegant-chaos"
            />
          </Fade>
      </div>
      <Fade>
        <Showcase title="Feel free to reach out!">
          <div className="flex items-center justify-center gap-6 mt-2">
            <a
              href="https://github.com/faraz-t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 text-white transition-opacity"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/farazht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 text-white transition-opacity"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:opacity-70 text-white transition-opacity"
            >
              <Mail size={22} />
            </a>
          </div>
        </Showcase>
      </Fade>
    </section>
    </main>
  );
}
