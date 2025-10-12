import Project from "./components/Project";

export default function HomePage() {
  return (
    <main className="mx-auto px-8 md:px-16 py-12 space-y-12 leading-[1.8]">
      {/* Name */}
      <h1 className="relative z-10 text-6xl font-bold leading-tight tracking-tight">
        Faraz Tehrani
      </h1>

      <p className="text-4xl text-[var(--foreground)] leading-10 tracking-[-0.03em] mb-8 max-w-3xl">
        I'm a student at the <span className="highlight">University of British Columbia</span>, 
        interested in <span className="highlight">full-stack development</span>, {" "}
        <span className="highlight">data</span>, {" "}and <span className="highlight">machine learning</span>.
      </p>

      <p className="text-xl text-[var(--foreground)]/75 leading-7 mb-6 max-w-3xl">
        My background includes working with{" "}
        <span className="highlight">JavaScript</span>,{" "}
        <span className="highlight">TypeScript</span>,{" "}
        <span className="highlight">React</span>, and{" "}
        <span className="highlight">Next.js</span> to create responsive and
        accessible web applications. I enjoy solving complex problems with
        simple, maintainable code.
      </p>

      <p className="text-xl text-[var(--foreground)]/75 leading-7 mb-6 max-w-3xl">
        Beyond coding, I’m interested in{" "}
        <span className="highlight">creative technology</span>,{" "}
        <span className="highlight">data visualization</span>, and{" "}
        <span className="highlight">interactive media</span> — blending art and
        logic to tell stories through software. Below are some of my selected projects.
      </p>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project
            imageSrc="/test.jpg"
            title="My Portfolio Revamp"
            description="A modern Next.js portfolio with unique font styling, animations, and a project showcase."
            date="Oct 2025"
            tags={["Next.js", "Tailwind", "React", "TypeScript"]}
          />

          <Project
            imageSrc="/test.jpg"
            title="Particle Life Simulation"
            description="A custom particle life simulation with unique behaviors and rules."
            date="Sep 2025"
            tags={["JavaScript", "Canvas", "Simulation"]}
          />

          <Project
            imageSrc="/test.jpg"
            title="Data Visualization Dashboard"
            description="Interactive charts and dashboards built with D3.js and React for analytics insights."
            date="Aug 2025"
            tags={["D3.js", "React", "Data"]}
          />
        </div>
      </section>
    </main>
  );
}
