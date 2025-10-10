import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [totalProjects, setTotalProjects] = useState<number>(7);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Apply theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  const handleProjectsCountChange = (count: number) => {
    setTotalProjects(count);
  };

  const handleThemeChange = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <main>
        <section id="hero">
          <Hero language={language} />
        </section>

        <section id="about">
          <About language={language} totalProjects={totalProjects} />
        </section>

        <section id="skills">
          <Skills language={language} />
        </section>

        <section id="experience">
          <Experience language={language} />
        </section>

        <section id="projects">
          <Projects language={language} onProjectsCountChange={handleProjectsCountChange} />
        </section>

        <section id="education">
          <Education language={language} />
        </section>

        <section id="contact">
          <Contact language={language} />
        </section>
      </main>

      <Footer language={language} />

      <Toaster
        position="bottom-right"
        theme={theme}
      />
    </div>
  );
}