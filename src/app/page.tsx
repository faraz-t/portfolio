import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import IrisTransition from "./components/IrisTransition";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Introduction />
      <Projects />
      <IrisTransition />
      <Footer />
    </main>
  );
}