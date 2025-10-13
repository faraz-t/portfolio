import Project from "./components/Project";
import Fade from "./components/Fade";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-12 leading-[1.8]">
      {/* Intro */}
      <Fade>
        <h1 className="text-6xl leading-tight">
          Hey, I'm <span className="stardust-text">Faraz</span>.
        </h1>
      </Fade>

      <Fade>
        <p className="text-4xl text-[var(--foreground)] leading-10 tracking-[-0.03em] mb-8">
          I'm a <span className="highlight">student</span> and <span className="highlight">developer</span>, interested in <span className="highlight">full-stack development</span>, <span className="highlight">data</span>, and <span className="highlight">machine learning</span>.
        </p>
      </Fade>

      <Fade>
        <p className="text-xl text-[var(--foreground)]/75 leading-7 mb-6">
          I currently attend the <span className="highlight">University of British Columbia</span>, pursuing a degree in <span className="highlight">Computer Science</span> and <span className="highlight">Data Science</span>.
        </p>
      </Fade>

      <Fade>
        <p className="text-xl text-[var(--foreground)]/75 leading-7 mb-6">
          I'm also an administrative lead & developer for <span className="highlight">UBC Bionics</span>, where I write full-stack code while leading a team of web devs, financial officers, and sponsorship coordinators. Previously, I did freelance web development for a company that aggregates reviews, and helped them reach a <span className="highlight">300%</span> increase in traffic over a 4-month period.
        </p>
      </Fade>

      <Fade>
        <p className="text-xl text-[var(--foreground)]/75 leading-7 mb-6">
          I am passionate about building software that is <span className="highlight">simple</span>, <span className="highlight">powerful</span>, and <span className="highlight">elegant</span>. This website is a short collection of some of my recent projects and experiments. I hope you find something interesting!
        </p>
      </Fade>

      {/* Projects */}
      <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Fade>
            <Project
              imageSrc="/billboard.png"
              title="BillBoard"
              description="Full-stack policy discussion platform with forums, petitions, polls, maps, AI integration, and more."
              date="2025"
              tags={["full-stack", "relational-database", "ai",]}
              github="https://github.com/farazht/billboard"
              slug="billboard"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/neuralnetwork.png"
              title="Custom Neural Network"
              description="Artificial neural network implemented from scratch in C++ to achieve 97% accuracy on image classification."
              date="2025"
              tags={["machine-learning", "linear-algebra", "math"]}
              github="https://github.com/farazht/neural-network"
              slug="neural-network"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/portfolio.png"
              title="Portfolio"
              description="A brief history of portfolio projects I've built with various technologies over the past few years."
              date="2025"
              tags={["web", "graphic-design", "ui-ux"]}
              slug="portfolio"
            />
          </Fade>
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
              description="Comparing the efficacy of 4 different classification models in predicting coronary heart disease."
              date="2024"
              tags={["statistics", "data-viz", "machine-learning"]}
              github="https://github.com/farazht/heart-disease"
              slug="heart-disease"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/elegantchaos.png"
              title="ElegantChaos"
              description="Tool for visualizing chaotic mathematical systems based on x-y-time equations."
              date="2024"
              tags={["mathematics", "algorithms"]}
              github="https://github.com/farazht/elegantchaos"
              slug="elegant-chaos"
            />
          </Fade>
          <Fade>
            <Project
              imageSrc="/stellarsavings.png"
              title="StellarSavings"
              description="Educational finance management platform tailored for youth, integrating gamification and friendly visuals."
              date="2024"
              tags={["web-app", "front-end"]}
              github="https://github.com/e-woo/stellar-savings"
              slug="stellar-savings"
            />
          </Fade>
        </div>
      </section>
    </main>
  );
}
