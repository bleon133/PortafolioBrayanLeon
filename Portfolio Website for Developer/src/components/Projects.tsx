import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import cthulhuJamboreeImage from 'figma:asset/7005250012ee8ad4f7888b003f064100dd6ea406.png';
import meditrazImage from 'figma:asset/cac45787e2dea9faad3a5efeca0e0ab332ad6066.png';
import huronTrollImage from 'figma:asset/6fdaca9e30efe358a51ab97d00bb13d3e9263eb8.png';
import bgAppImage from 'figma:asset/be329ee186a655d4b8d2cdc449b2c47102ec3cc0.png';
import renacerVikingoImage from 'figma:asset/f868a3fe84f8022f20e5235eb9e7e4a373b97dac.png';

interface ProjectsProps {
  language: 'es' | 'en';
}

export function Projects({ language }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const content = {
    es: {
      title: "Portafolio de Proyectos",
      tabs: {
        all: "Todos",
        web: "Web",
        app: "App",
        games: "Games"
      }
    },
    en: {
      title: "Project Portfolio",
      tabs: {
        all: "All",
        web: "Web",
        app: "App",
        games: "Games"
      }
    }
  };

  const projects = [
    {
      name: "Renacer Vikingo",
      description: language === 'es' ? "Juego 2D pixel art ambientado en la era medieval, donde el reino ha sido invadido por cruzados. El jugador deberá sobrevivir, reconstruir la aldea y ascender de rango en su travesía." : "2D pixel art game set in medieval times, where the kingdom has been invaded by crusaders. The player must survive, rebuild the village and rise in rank on their journey.",
      technologies: ["Unity", "C#"],
      link: "https://github.com/bleon133/vikingo.git",
      github: "https://github.com/bleon133/vikingo.git",
      image: renacerVikingoImage,
      category: "games"
    },
    {
      name: "BGApp Web",
      description: language === 'es' ? "Portal web de turismo en Bucaramanga con rutas, mapas interactivos y reservas." : "Tourism web portal in Bucaramanga with routes, interactive maps and reservations.",
      technologies: ["Spring Boot", "Bootstrap", "MongoDB"],
      link: "#",
      github: "https://github.com/bleon133/BgAppWeb",
      image: bgAppImage,
      category: "web"
    },
    {
      name: "BGApp Móvil",
      description: language === 'es' ? "App móvil offline/online con guías turísticas, geolocalización y notificaciones." : "Offline/online mobile app with tourist guides, geolocation and notifications.",
      technologies: ["Kotlin", "MongoDB"],
      link: "#",
      github: "https://github.com/bleon133/BgAppApp",
      image: bgAppImage,
      category: "app"
    },
    {
      name: "HuronTroll",
      description: language === 'es' ? "Aventura de plataformas 2D pixel art creada en 48h para Global Game Jam 2024." : "2D pixel art platform adventure created in 48h for Global Game Jam 2024.",
      technologies: ["Unity", "C#"],
      link: "https://github.com/bleon133/HuronTroll",
      github: "https://github.com/bleon133/HuronTroll",
      image: huronTrollImage,
      category: "games"
    },
    {
      name: "Meditraz",
      description: language === 'es' ? "Prototipo académico para trazabilidad de medicamentos: inventario, escaneo de códigos y alertas de caducidad." : "Academic prototype for drug traceability: inventory, code scanning and expiration alerts.",
      technologies: ["Angular", "ASP.NET Core", "SQL Server"],
      link: "https://www.youtube.com/watch?v=e8V4vXuJ9jc",
      github: "https://github.com/bleon133/Meditraz",
      image: meditrazImage,
      category: "web"
    },
    {
      name: "Cthulhu Jamboree",
      description: language === 'es' ? "Batalla local 1v1 de burbujas: revienta la de tu oponente antes de caer al vacío." : "Local 1v1 bubble battle: burst your opponent's before falling into the void.",
      technologies: ["Unity", "C#"],
      link: "https://crimpatches.itch.io/chutulu-jamboree",
      github: "https://github.com/bleon133/GameJam2025",
      image: cthulhuJamboreeImage,
      category: "games"
    }
  ];

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };

  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsAnimating(false);
      }, 200);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'app': return '📱';
      case 'games': return '🎮';
      default: return '⭐';
    }
  };

  return (
    <section id="projects" className="py-20 lg:min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto px-6">
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
        </motion.div>

        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-12 bg-gray-700/50 backdrop-blur-sm">
            {['all', 'web', 'app', 'games'].map((category) => (
              <TabsTrigger 
                key={category}
                value={category} 
                className="data-[state=active]:bg-blue-600 relative overflow-hidden transition-all duration-300 data-[state=active]:scale-105"
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">{getCategoryIcon(category)}</span>
                  {content[language].tabs[category as keyof typeof content[typeof language]['tabs']]}
                </motion.span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {['all', 'web', 'app', 'games'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Category Header with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50"
                  >
                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                    <span className="text-lg text-gray-200">
                      {content[language].tabs[category as keyof typeof content[typeof language]['tabs']]}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {filterProjects(category).length}
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Projects Grid with Stagger Animation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="wait">
                    {filterProjects(category).map((project, index) => (
                      <motion.div
                        key={`${category}-${project.name}`}
                        layout
                        initial={{ 
                          opacity: 0, 
                          y: 50, 
                          scale: 0.9,
                          rotateX: -15
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: 1,
                          rotateX: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: -30, 
                          scale: 0.95,
                          rotateX: 15
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          type: "spring",
                          bounce: 0.3
                        }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.02,
                          rotateY: 2,
                          transition: { duration: 0.2 }
                        }}
                        className="perspective-1000"
                      >
                        <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full group relative overflow-hidden">
                          {/* Animated background gradient */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100"
                            initial={false}
                            animate={{ 
                              background: [
                                "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
                                "linear-gradient(225deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(37, 99, 235, 0.05) 100%)",
                                "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)"
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          
                          <CardHeader className="p-0">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ImageWithFallback
                                  src={project.image}
                                  alt={project.name}
                                  className="w-full h-48 object-cover"
                                />
                              </motion.div>
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                              
                              {/* Category Badge */}
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="absolute top-3 right-3"
                              >
                                <span className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm text-xs text-gray-200 rounded-full border border-gray-700/50">
                                  {getCategoryIcon(project.category)} {project.category}
                                </span>
                              </motion.div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="p-6 relative z-10">
                            <motion.h3 
                              className="text-xl text-blue-400 mb-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              {project.name}
                            </motion.h3>
                            
                            <motion.p 
                              className="text-gray-300 mb-4 text-sm leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {project.description}
                            </motion.p>
                            
                            <motion.div 
                              className="flex flex-wrap gap-1 mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="text-xs bg-gray-700/50 text-gray-200 border-gray-600/50 hover:border-blue-500/50 transition-colors duration-200"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                            
                            <motion.div 
                              className="flex gap-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              {project.link && project.link !== "#" && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                  >
                                    <ExternalLink className="w-4 h-4 mr-1" />
                                    Demo
                                  </Button>
                                </motion.div>
                              )}
                              {project.github && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-200"
                                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                                  >
                                    <Github className="w-4 h-4 mr-1" />
                                    GitHub
                                  </Button>
                                </motion.div>
                              )}
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Empty State Animation */}
                {filterProjects(category).length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      🔍
                    </motion.div>
                    <p className="text-gray-400 text-lg">
                      {language === 'es' ? 'No hay proyectos en esta categoría' : 'No projects in this category'}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}