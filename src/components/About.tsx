import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Download, Eye, Code, Award, Clock, Star, Users, Target } from "lucide-react";

interface AboutProps {
  language: 'es' | 'en';
}

export function About({ language }: AboutProps) {
  const content = {
    es: {
      title: "Sobre mí",
      subtitle: "Desarrollador apasionado por crear soluciones innovadoras",
      text: "Hola, soy Brayan León, una persona dinámica y perseverante, apasionada por la tecnología y la creación de soluciones innovadoras. Me motiva el aprendizaje continuo y aportar valor mediante el desarrollo web, aplicaciones móviles y videojuegos, siempre en busca de nuevos retos para seguir creciendo en la industria tecnológica.",
      downloadCV: "Descargar CV",
      viewProjects: "Ver proyectos",
      highlights: {
        title: "Características clave",
        items: [
          "Full-Stack Developer",
          "Mobile Developer", 
          "Game Developer",
          "Problem Solver",
          "Team Player",
          "Continuous Learner"
        ]
      },
      stats: {
        projects: {
          number: "6",
          title: "Proyectos totales",
          subtitle: "Desarrollo web, móvil y videojuegos",
          icon: Code,
          color: "blue"
        },
        certifications: {
          number: "5",
          title: "Certificaciones",
          subtitle: "Habilidades profesionales",
          icon: Award,
          color: "cyan"
        },
        experience: {
          number: "2.3",
          title: "Años de experiencia",
          subtitle: "Aprendizaje continuo",
          icon: Clock,
          color: "purple"
        }
      }
    },
    en: {
      title: "About Me",
      subtitle: "Developer passionate about creating innovative solutions",
      text: "Hello, I'm Brayan León, a dynamic and persevering person, passionate about technology and creating innovative solutions. I'm motivated by continuous learning and adding value through web development, mobile applications and video games, always looking for new challenges to continue growing in the tech industry.",
      downloadCV: "Download CV",
      viewProjects: "View projects",
      highlights: {
        title: "Key Features",
        items: [
          "Full-Stack Developer",
          "Mobile Developer",
          "Game Developer", 
          "Problem Solver",
          "Team Player",
          "Continuous Learner"
        ]
      },
      stats: {
        projects: {
          number: "6",
          title: "Total projects",
          subtitle: "Web, mobile and game development",
          icon: Code,
          color: "blue"
        },
        certifications: {
          number: "5", 
          title: "Certifications",
          subtitle: "Professional skills",
          icon: Award,
          color: "cyan"
        },
        experience: {
          number: "2.3",
          title: "Years of experience", 
          subtitle: "Continuous learning",
          icon: Clock,
          color: "purple"
        }
      }
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Here you would implement the actual CV download
    console.log('Downloading CV...');
  };

  const colorSchemes = {
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      borderGradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      numberColor: "text-blue-400"
    },
    cyan: {
      gradient: "from-cyan-500 to-teal-500", 
      bgGradient: "from-cyan-500/5 to-teal-500/5",
      borderGradient: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
      numberColor: "text-cyan-400"
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5", 
      borderGradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      numberColor: "text-purple-400"
    }
  };

  return (
    <section id="about" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-gray-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/6 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/6 right-1/4 w-3 h-3 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400/50 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          animate={{
            scaleX: [0.3, 1.5, 0.3],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Personal branding elements */}
        <motion.div
          className="absolute top-1/4 right-1/6 text-blue-400/15 text-4xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ⚡
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {content[language].title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {content[language].subtitle}
            </p>
            
            {/* Highlight badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {content[language].highlights.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/80 text-gray-200 border-gray-600/50 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Description & Actions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Description Card */}
              <Card className="bg-gray-900/40 border-gray-700/50 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
                
                <CardContent className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl text-blue-400">
                      {language === 'es' ? 'Mi Historia' : 'My Story'}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {content[language].text}
                  </p>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  {content[language].downloadCV}
                </Button>
                
                <Button
                  onClick={scrollToProjects}
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 bg-transparent group"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {content[language].viewProjects}
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {Object.values(content[language].stats).map((stat, index) => {
                const colors = colorSchemes[stat.color as keyof typeof colorSchemes];
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className={`bg-gradient-to-br ${colors.bgGradient} border-0 backdrop-blur-sm relative overflow-hidden h-full`}>
                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.borderGradient} rounded-lg`}>
                        <div className="absolute inset-[1px] bg-gray-900/80 rounded-lg" />
                      </div>
                      
                      <CardContent className="relative p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient}/20`}>
                            <stat.icon className={`w-6 h-6 ${colors.iconColor}`} />
                          </div>
                          <div className={`text-3xl font-bold ${colors.numberColor} group-hover:scale-110 transition-transform duration-300`}>
                            {stat.number}
                          </div>
                        </div>
                        <h3 className={`text-lg bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                          {stat.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {stat.subtitle}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm mx-auto max-w-2xl relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              
              <CardContent className="relative p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <h4 className="text-xl text-blue-400">
                    {language === 'es' ? 'Listo para el próximo reto' : 'Ready for the next challenge'}
                  </h4>
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'es' 
                    ? 'Siempre en busca de oportunidades para aplicar mis habilidades y contribuir a proyectos innovadores que generen impacto real.'
                    : 'Always looking for opportunities to apply my skills and contribute to innovative projects that generate real impact.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}