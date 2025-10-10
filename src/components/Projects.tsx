import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Info } from "lucide-react";
import { useState, useEffect } from "react";
import cthulhuJamboreeImage from 'figma:asset/7005250012ee8ad4f7888b003f064100dd6ea406.png';
import meditrazImage from 'figma:asset/cac45787e2dea9faad3a5efeca0e0ab332ad6066.png';
import huronTrollImage from 'figma:asset/6fdaca9e30efe358a51ab97d00bb13d3e9263eb8.png';
import bgAppImage from 'figma:asset/be329ee186a655d4b8d2cdc449b2c47102ec3cc0.png';
import renacerVikingoImage from 'figma:asset/f868a3fe84f8022f20e5235eb9e7e4a373b97dac.png';
import devsTechImage from 'figma:asset/270bcfae3469384788323c389972d1f200fc9b67.png';
import defenderLogin from 'figma:asset/427b35d46468c423e7629a7ba835b95ec8667cf7.png';
import defenderUsers from 'figma:asset/987c400a1ff891fbc5bc781e0bedb1060e9b3aa4.png';
import defenderClients from 'figma:asset/a5a4b3aca861af4e15329b2a6511b940031a381b.png';
import defenderMap from 'figma:asset/b6d3e86b84921ba0d5c5150c83c51c712c36371e.png';
import defenderWeapons from 'figma:asset/adc02eaa9bfa7e9f0520d046b17ad6f6d381f922.png';
import defenderSchedule from 'figma:asset/14d18ad5acbfc5bfaf48ae766aca22b52ef0b5e2.png';
import defenderLog from 'figma:asset/2f0cbedc6d30b3bff1213257f8130f67dceb858a.png';
import defenderRonda from 'figma:asset/3b1266a9e6b0cd7b13b25b28b932a64b076f9bf4.png';
import defenderTransfer from 'figma:asset/25ad7a59de7e4bd42bd3024ab3da0c88ef86bd82.png';
import defenderAppInicio from 'figma:asset/9fefdf8f92369c3e8fc5591d047b26e17dc26d62.png';
import defenderAppLogin from 'figma:asset/0af6fc3bf8a5484a620ea200d5e390d10713eb29.png';
import defenderAppNovedades from 'figma:asset/181435c573246b77c3621b7c8c93b6c20e735f13.png';
import defenderAppTurnos from 'figma:asset/87e3d484fc330e2cd7f3598fc6a8ed59a2b4dca9.png';

interface ProjectsProps {
  language: 'es' | 'en';
  onProjectsCountChange?: (count: number) => void;
}

export function Projects({ language, onProjectsCountChange }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

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

  const defenderAppDetails = {
    images: [
      {
        src: defenderAppLogin,
        description: {
          es: "Iniciar sesión: Sistema de inicio de sesión y olvidar contraseña para acceso seguro a la aplicación móvil.",
          en: "Login: Login system and forgot password for secure access to the mobile application."
        }
      },
      {
        src: defenderAppInicio,
        description: {
          es: "Inicio: Pantalla principal donde el vigilante visualiza el tiempo restante hasta el inicio de su turno mediante un temporizador, y accede a las categorías principales como gestión de rondas y estado de turnos.",
          en: "Home: Main screen where the security guard views the remaining time until their shift starts through a timer, and accesses main categories such as rounds management and shift status."
        }
      },
      {
        src: defenderAppNovedades,
        description: {
          es: "Novedades: Formulario para generar novedades de los puestos de trabajo, permitiendo registro de incidencias y eventos.",
          en: "News: Form to generate workstation news, allowing registration of incidents and events."
        }
      },
      {
        src: defenderAppTurnos,
        description: {
          es: "Turnos: Visualizador de turnos en el sistema con calendario interactivo para gestionar y consultar los turnos programados.",
          en: "Shifts: Shift viewer in the system with interactive calendar to manage and consult scheduled shifts."
        }
      }
    ]
  };

  const defenderDetails = {
    images: [
      {
        src: defenderLogin,
        description: {
          es: "Login: Sistema de inicio de sesión con apartado de olvidar contraseña, este maneja los JSON Web Token",
          en: "Login: Login system with forgot password section, handles JSON Web Tokens"
        }
      },
      {
        src: defenderUsers,
        description: {
          es: "Usuarios: En este se visualiza una tabla de los usuarios del sistema, con la posibilidad de editarlos, cambiar contraseña, inactivar/activar, y crear nuevos usuarios",
          en: "Users: This displays a table of system users, with the ability to edit them, change passwords, deactivate/activate, and create new users"
        }
      },
      {
        src: defenderClients,
        description: {
          es: "Clientes: En este apartado se puede ver la edición de un cliente del sistema, junto con sus campos y la imagen representativa, con la posibilidad de exportar masivamente todos los clientes",
          en: "Clients: This section shows the editing of a system client, along with its fields and representative image, with the ability to massively export all clients"
        }
      },
      {
        src: defenderMap,
        description: {
          es: "Mapa de puestos: En este apartado se visualiza el monitoreo de la ubicación de cada uno de los puestos de trabajo, incluyendo un sistema de filtraje en el apartado superior.",
          en: "Workstation Map: This section displays the monitoring of the location of each workstation, including a filtering system in the upper section."
        }
      },
      {
        src: defenderWeapons,
        description: {
          es: "Armas: En este apartado se enfoca para la creación de armas en el sistema, como a su vez una vez creada la posibilidad de trasladarlos a otros puesto de trabajo.",
          en: "Weapons: This section focuses on creating weapons in the system, as well as the ability to transfer them to other workstations once created."
        }
      },
      {
        src: defenderSchedule,
        description: {
          es: "Programación de turno: En este apartado permite crear los diferentes tipos de programación de turnos suministrados por el sistemas, asignando así al personal encargado junto. Como a su vez posibilidad de generar novedades y reemplazos.",
          en: "Shift Scheduling: This section allows creating different types of shift schedules provided by the system, assigning the responsible personnel. It also allows generating news and replacements."
        }
      },
      {
        src: defenderLog,
        description: {
          es: "Bitácora: En esta se hace un sistema de log de la interacción de los usuarios durante el sistema.",
          en: "Log: This implements a log system for user interactions throughout the system."
        }
      },
      {
        src: defenderRonda,
        description: {
          es: "Ronda: Se implementa un manejo de rondas para el desarrollo por los guardas.",
          en: "Rounds: Implements round management for development by guards."
        }
      },
      {
        src: defenderTransfer,
        description: {
          es: "Transferencia: En esta se ve las transferencias de turnos que existen entre guardas.",
          en: "Transfer: This shows the shift transfers that exist between guards."
        }
      }
    ]
  };

  const projects = [
    {
      name: language === 'es' ? "Sistema para una empresa de vigilancia" : "Security Company Management System",
      description: language === 'es' ? "Plataforma integral para gestionar usuarios, clientes y puestos; planificar turnos y rondas; controlar armas y mapas; consultar historiales y alertas; y administrar nómina, métricas, backups y bitácora. Participé en gran parte del desarrollo durante mi estadía en Devs Technology." : "Comprehensive platform to manage users, clients and posts; plan shifts and rounds; control weapons and maps; consult histories and alerts; and manage payroll, metrics, backups and logs. I participated in a large part of the development during my stay at Devs Technology.",
      technologies: ["Spring Boot", "Java", "Bootstrap", "Thymeleaf", "MongoDB", "WebSocket", "Leaflet", "jQuery"],
      hasDetails: true,
      detailsData: defenderDetails,
      image: defenderLogin,
      category: "web",
      company: "Devs Technology"
    },
    {
      name: language === 'es' ? "Aplicación para control de vigilantes" : "Security Guards Control Application",
      description: language === 'es' ? "Aplicación móvil multiplataforma diseñada para optimizar la gestión operativa de vigilantes. Permite realizar y consultar transferencias de turnos, visualizar la programación de turnos asignados, registrar y dar seguimiento a minutas de novedades, y facilitar la realización de revistas de puestos por parte de los supervisores. Desarrollada durante mi estadía en Devs Technology." : "Cross-platform mobile application designed to optimize security guards operational management. Allows performing and consulting shift transfers, viewing assigned shift schedules, recording and tracking incident reports, and facilitating workstation reviews by supervisors. Developed during my time at Devs Technology.",
      technologies: ["Android Studio", "Kotlin Multiplatform"],
      hasDetails: true,
      detailsData: defenderAppDetails,
      image: defenderAppLogin,
      category: "app",
      company: "Devs Technology"
    },
    {
      name: "Devs Tech",
      description: language === 'es' ? "Sitio web corporativo de presentación de Devs Technology. Desarrollé el código de la página web de acuerdo al prototipo de Figma administrado durante mi estadía en la empresa." : "Corporate presentation website for Devs Technology. I developed the website code according to the Figma prototype provided during my time at the company.",
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Three.js", "Figma"],
      link: "https://d3vs.tech/",
      image: devsTechImage,
      category: "web",
      company: "Devs Technology"
    },
    {
      name: language === 'es' ? "Renacer Vikingo" : "Viking Rebirth",
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
      name: language === 'es' ? "BGApp Móvil" : "BGApp Mobile",
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

  useEffect(() => {
    if (onProjectsCountChange) {
      onProjectsCountChange(projects.length);
    }
  }, [onProjectsCountChange, projects.length]);

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
    <section id="projects" className="py-20 lg:min-h-screen bg-card text-card-foreground transition-colors duration-300">
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
          <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-12 bg-muted/50 backdrop-blur-sm">
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
                    className="inline-flex items-center gap-3 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full border border-border"
                  >
                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                    <span className="text-lg text-foreground">
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
                        <Card className="bg-background/50 border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full group relative overflow-hidden">
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
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                              
                              {/* Category Badge */}
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="absolute top-3 right-3"
                              >
                                <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs text-foreground rounded-full border border-border">
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
                              className="text-muted-foreground mb-4 text-sm leading-relaxed"
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
                                    className="text-xs bg-muted/50 text-foreground border-border hover:border-blue-500/50 transition-colors duration-200"
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
                              {project.hasDetails ? (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                                    onClick={() => {
                                      setSelectedProject(project);
                                      setModalOpen(true);
                                    }}
                                  >
                                    <Info className="w-4 h-4 mr-1" />
                                    {language === 'es' ? 'Ver detalles' : 'View details'}
                                  </Button>
                                </motion.div>
                              ) : (
                                <>
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
                                </>
                              )}
                              {project.github && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="border-border text-muted-foreground hover:bg-muted hover:border-border transition-all duration-200"
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
                    <p className="text-muted-foreground text-lg">
                      {language === 'es' ? 'No hay proyectos en esta categoría' : 'No projects in this category'}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Modal with Carousel */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden bg-background border-border text-foreground p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-base sm:text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pr-8">
                {selectedProject?.name}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                {selectedProject?.company ? (
                  <>
                    {language === 'es' ? 'Desarrollado en' : 'Developed at'} {selectedProject.company}
                  </>
                ) : (
                  selectedProject?.description
                )}
              </DialogDescription>
            </DialogHeader>
            
            {selectedProject?.detailsData && (
              <div className="mt-3 sm:mt-4 overflow-hidden">
                <Carousel className="w-full overflow-hidden">
                  <CarouselContent className="-ml-2 sm:-ml-4">
                    {selectedProject.detailsData.images.map((item: any, index: number) => (
                      <CarouselItem key={index} className="pl-2 sm:pl-4">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="rounded-lg overflow-hidden border border-border bg-card flex items-center justify-center p-2 sm:p-4">
                            <img
                              src={item.src}
                              alt={`Screenshot ${index + 1}`}
                              className="max-w-full h-auto object-contain rounded"
                              style={{ maxHeight: '50vh' }}
                            />
                          </div>
                          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border">
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {item.description[language]}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 sm:left-2 h-8 w-8 sm:h-10 sm:w-10 bg-card border-border hover:bg-muted text-foreground" />
                  <CarouselNext className="right-0 sm:right-2 h-8 w-8 sm:h-10 sm:w-10 bg-card border-border hover:bg-muted text-foreground" />
                </Carousel>

                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted/50 text-foreground border-border text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}