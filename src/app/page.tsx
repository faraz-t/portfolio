import type { ReactNode, ComponentType } from "react";
import Project from "./components/Project";
import Fade from "./components/Fade";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Cpu,
} from "lucide-react";

const projectItems = [
  {
    year: "2026",
    name: "Witness",
    description: (
      <>
        Mobile app to create study groups focused on social accountability.
        Ranked <span className="font-semibold text-white">1st Place</span> out of 15+ teams at a project demo showcase.
      </>
    ),
    tags: ["mobile", "native-app"],
    image: "/projects/witness.png",
    link: "https://github.com/faraz-t/witness",
  },
  {
    year: "2026",
    name: "SpeedStats",
    description: (
      <>
        Web app that displays extensive real-time stats from a Minecraft
        speedrunning API. Currently used by{" "}
        <span className="font-semibold text-white">1500+ monthly users</span>.
      </>
    ),
    tags: ["api", "data-viz", "web-app"],
    image: "/projects/speedstats.png",
    link: "https://speedstats.vercel.app/",
  },
  {
    year: "2026",
    name: "Z4 Finance",
    description: (
      <>
        Stock research & analytics project combining yfinance data with sentiments from investing subreddits to generate insights on market trends. (WIP)
      </>
    ),
    tags: ["finance", "quant", "nlp", "api"],
    image: "/projects/z4finance.png",
    link: "https://github.com/faraz-t/z4"
  },
  {
    year: "2026",
    name: "Portfolio",
    description: (
      <>
        Personal portfolio website built with
        Next.js, Tailwind CSS, and Vercel for deployment.
      </>
    ),
    tags: ["web", "graphic-design", "ui-ux"],
    image: "/projects/portfolio.png",
    link: "https://github.com/faraz-t/portfolio",
  },
  {
    year: "2025",
    name: "Custom Neural Network",
    description: (
      <>
        Artificial neural network library implemented from scratch in{" "}
        <span className="font-semibold text-white">C++</span> to achieve{" "}
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
    name: "BillBoard",
    description: (
      <>
        Full-stack government policy discussion platform with forums, petitions, polls,
        interactive maps, LLM integration, and more. Placed{" "}
        <span className="font-semibold text-white">Top 10</span> @ HackTheChange.
      </>
    ),
    tags: ["full-stack", "relational-database", "llm"],
    image: "/projects/billboard.png",
    link: "https://github.com/faraz-t/BillBoard",
  },
  {
    year: "2024",
    name: "InsightUBC",
    description: (
      <>
        Full-stack application using a{" "}
        <span className="font-semibold text-white">RESTful API</span> to query
        class section datasets and display comprehensive insights.
      </>
    ),
    tags: ["full-stack", "rest-api", "data-viz"],
    image: "/projects/insightubc.png",
  },
  {
    year: "2024",
    name: "ImmuneIT",
    description: (
      <>
        Cybersecurity system designed for growing canadian businesses in
        healthcare. Placed{" "}
        <span className="font-semibold text-white">Top 15</span> @ ProduHacks.
      </>
    ),
    tags: ["web-app", "cybersecurity", "llm"],
    image: "/projects/immuneit.png",
    link: "https://github.com/Jacob-Guglielmin/ImmuneIT",
  },
  {
    year: "2023",
    name: "Identifying Heart Disease",
    description: (
      <>
        Comparing the efficacy of{" "}
        <span className="font-semibold text-white">4 classification models</span>{" "}
        in predicting coronary heart disease. Built @ CPL hackathon.
      </>
    ),
    tags: ["statistics", "data-viz", "machine-learning"],
    image: "/projects/heartdisease.png",
    link: "https://github.com/faraz-t/heart-disease",
  },
  {
    year: "2023",
    name: "ElegantChaos",
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

const tones = {
  red: "text-red-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  sky: "text-sky-400",
  orange: "text-orange-400",
} as const;

type Tone = keyof typeof tones;

function Em({ children }: { children: ReactNode }) {
  return <span className="text-white">{children}</span>;
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="gradient-text"
      style={{
        display: "inline",
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
        animationDelay: "-4s",
      }}
    >
      {children}
    </span>
  );
}

function Chip({
  tone,
  href,
  icon: Icon,
  logo,
  children,
}: {
  tone: Tone;
  href?: string;
  icon?: ComponentType<{ size?: number | string; className?: string }>;
  logo?: string;
  children: ReactNode;
}) {
  const className = `box-decoration-clone rounded-lg border border-gray-700 px-2 py-0.5 text-[0.9em] font-medium text-gray-200 transition ${
    href ? "hover:border-primary/60 hover:text-white hover:shadow-md hover:shadow-primary/20" : ""
  }`;
  const content = (
    <>
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="mr-1.5 inline-block h-[0.95em] w-auto align-[-0.12em]"
        />
      )}
      {Icon && (
        <Icon
          size="1em"
          className={`mr-1.5 inline-block align-[-0.15em] ${tones[tone]}`}
        />
      )}
      {children}
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 md:px-8 py-16 leading-[1.8]">
        {/* Intro */}
        <Fade>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            Hey, I'm <span className="gradient-text">Faraz</span>.
          </h1>
          <p className="flex items-center gap-1 text-pretty text-xs sm:text-sm text-[var(--foreground)]/75 mb-12">
            <MapPin className="inline-block" size={10} />
            AB, Canada
          </p>
        </Fade>

        {/* About */}
        <Fade>
          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-7 sm:leading-8 mb-6">
            I believe in building software that is{" "}
            <Em>simple, powerful, and elegant</Em>. I have a{" "}
            <Em>degree in Computer Science + Data Science</Em>{" "}
            from{" "}
            <Chip tone="blue" icon={GraduationCap} href="https://www.ubc.ca">
              UBC
            </Chip>
            , and my expertise lies in full-stack development, data science,
            and machine learning.
          </p>
        </Fade>

        <Fade>
          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-7 sm:leading-8 mb-6">
            I&apos;m currently a <Highlight>Junior Data Scientist</Highlight> at{" "}
            <Chip
              tone="red"
              logo="/healthcanada.svg"
              href="https://www.canada.ca/en/health-canada.html"
            >
              Health Canada
            </Chip>
            , where I dig into data, train & evaluate models, and build
            internal tools. Previously, I worked with{" "}
            <Chip tone="violet" icon={Cpu} href="https://ubcbionics.com">
              UBC Bionics
            </Chip>{" "}
            to build and maintain <Em>two full-stack sites</Em> while leading a
            team of developers, finance officers, and sponsorship coordinators.
            Before that, I freelanced for a review-aggregator company, where my
            work drove an <Em>87% increase</Em> in user satisfaction.
          </p>
        </Fade>

        <Fade>
          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-7 sm:leading-8">
            Below are some recent projects and experiments - I hope you find
            something interesting! The rest lives on{" "}
            <Chip tone="amber" icon={Github} href="https://github.com/faraz-t">
              GitHub
            </Chip>{" "}
            and{" "}
            <Chip
              tone="sky"
              icon={Linkedin}
              href="https://linkedin.com/in/farazht"
            >
              LinkedIn
            </Chip>
            , but don&apos;t hesitate to{" "}
            <Chip tone="orange" icon={Mail} href="mailto:youremail@example.com">
              reach out
            </Chip>
            !
          </p>
        </Fade>

        {/* Projects */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projectItems.map((p) => (
              <Fade key={p.name}>
                <Project
                  imageSrc={p.image}
                  title={p.name}
                  description={p.description}
                  date={p.year}
                  tags={p.tags}
                  github={p.link}
                  slug={p.name.toLowerCase().replace(/\s/g, "-")}
                />
              </Fade>
            ))}
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
      </div>
      <Fade>
        <Footer />
      </Fade>
    </main>
  );
}