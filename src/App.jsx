// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Design from "./components/Design";   // make sure file is src/components/Design.jsx
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Design />   {/* Design section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}