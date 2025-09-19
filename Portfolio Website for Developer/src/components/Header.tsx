import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  language: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        experience: "Experiencia",
        education: "Educación",
        contact: "Contacto"
      },
      menu: {
        title: "Menú",
        language: "Idioma"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact"
      },
      menu: {
        title: "Menu",
        language: "Language"
      }
    }
  };

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <span className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BL
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content[language].nav[item.key as keyof typeof content[typeof language]['nav']]}
                </motion.button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                className="border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-400"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language.toUpperCase()}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden border-gray-700 text-gray-300"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Slide Panel from Right */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/98 backdrop-blur-md border-l border-gray-800/50 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                <span className="text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {content[language].menu.title}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="border-gray-700 text-gray-300 hover:text-blue-400"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 px-6 py-8">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-300 hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30"
                    >
                      {content[language].nav[item.key as keyof typeof content[typeof language]['nav']]}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Footer Controls */}
              <div className="p-6 border-t border-gray-800/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{content[language].menu.language}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                    className="border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-400"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </>
  );
}