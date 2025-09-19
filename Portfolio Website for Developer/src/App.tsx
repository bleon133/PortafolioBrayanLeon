import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Always apply dark theme
    document.documentElement.classList.add('dark');
  }, []);

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
      />
      
      <main>
        <section id="hero">
          <Hero language={language} />
        </section>
        
        <section id="about">
          <About language={language} />
        </section>
        
        <section id="skills">
          <Skills language={language} />
        </section>
        
        <section id="experience">
          <Experience language={language} />
        </section>
        
        <section id="projects">
          <Projects language={language} />
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
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#ffffff',
            border: '1px solid #374151',
          },
        }}
      />
    </div>
  );
}