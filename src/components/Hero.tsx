import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/f47e97b90bcb36343ca9179ff51f80e83e83327d.png";

interface HeroProps {
  language: 'es' | 'en';
}

export function Hero({ language }: HeroProps) {
  const content = {
    es: {
      greeting: "Hola,",
      introduction: "Soy",
      name: "Brayan León",
      profession: "Fullstack Developer",
      elevator: "Apasionado por crear soluciones tecnológicas innovadoras que transforman ideas en productos digitales eficientes",
      cta: "Ver proyectos"
    },
    en: {
      greeting: "Hello,",
      introduction: "I'm",
      name: "Brayan León", 
      profession: "Fullstack Developer",
      elevator: "Passionate about creating innovative technological solutions that transform ideas into efficient digital products",
      cta: "View projects"
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 80; // Height of the fixed header
      const elementPosition = aboutSection.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/brayan-steven-le%C3%B3n-martinez-a7528416b/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/bleon133",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:brot10102017@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden pt-24 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Additional hero elements */}
        <motion.div
          className="absolute top-1/6 right-1/5 w-2 h-2 bg-cyan-400/50 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-blue-400/60 rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl py-6 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center justify-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                {content[language].greeting}
              </h1>
              <div className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="text-white">{content[language].introduction} </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {content[language].name}
                </span>
                <span className="text-white">,</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-tight">
                {content[language].profession}
              </h2>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {content[language].elevator}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {content[language].cta}
              </Button>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl scale-110"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border border-cyan-400/30 shadow-2xl">
                <ImageWithFallback
                  src={profileImage}
                  alt="Brayan Steven León Martinez"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-cyan-400/10"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/80 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500/60 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-300/40 rounded-full blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer w-12 h-12 flex items-center justify-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400 hover:text-cyan-300 transition-colors duration-300" />
      </motion.button>
    </section>
  );
}