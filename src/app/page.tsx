import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import ProjectsGrid from "./components/ProjectsGrid";
import Showcase from "./components/Showcase";
import { Github, Linkedin, Mail } from "lucide-react";
import Fade from "./components/Fade";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <Introduction />

      {/* Projects Grid Section */}
      <ProjectsGrid />

      {/* Contact Section */}
      <section className="w-full py-20 px-4 sm:px-6 md:px-8 bg-black border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <Fade>
            <Showcase title="Feel free to reach out!">
              <div className="flex items-center justify-center gap-8 mt-6">
                <a
                  href="https://github.com/faraz-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/farazht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:text-gray-300 text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </Showcase>
          </Fade>
        </div>
      </section>
    </main>
  );
}