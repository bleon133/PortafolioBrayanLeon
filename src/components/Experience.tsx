import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

interface ExperienceProps {
  language: 'es' | 'en';
}

export function Experience({ language }: ExperienceProps) {
  const content = {
    es: {
      title: "Experiencia Laboral",
      experiences: [
        {
          company: "Devs Technology",
          position: "Programador Full-Stack",
          period: "Junio 2023 - Septiembre 2025",
          achievements: "He adquirido experiencia en el desarrollo de software con Spring Boot, Java, PHP, MongoDB y Kotlin Multiplataforma (iOS y Android), participando en el levantamiento de requerimientos, diseño e implementación de módulos con buenas prácticas, integración de APIs REST, control de versiones con Git, y en el despliegue y soporte de aplicaciones en entornos productivos.",
          skills: ["Spring Boot", "Java", "PHP", "MongoDB", "Kotlin Multiplatform", "Git", "APIs REST"]
        }
      ]
    },
    en: {
      title: "Work Experience",
      experiences: [
        {
          company: "Devs Technology",
          position: "Full-Stack Developer", 
          period: "June 2023 - September 2025",
          achievements: "I have gained experience in software development with Spring Boot, Java, PHP, MongoDB and Kotlin Multiplatform (iOS and Android), participating in requirements gathering, design and implementation of modules with best practices, REST API integration, version control with Git, and deployment and support of applications in production environments.",
          skills: ["Spring Boot", "Java", "PHP", "MongoDB", "Kotlin Multiplatform", "Git", "REST APIs"]
        }
      ]
    }
  };

  return (
    <section id="experience" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient waves */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.1) 25%, transparent 50%, rgba(6, 182, 212, 0.1) 75%, transparent 100%)",
            backgroundSize: "400% 400%"
          }}
        />
        
        {/* Timeline elements */}
        <motion.div
          className="absolute left-1/4 top-1/3 w-1 h-32 bg-gradient-to-b from-blue-500/30 to-transparent"
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/4 w-1 h-24 bg-gradient-to-t from-cyan-500/30 to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating dots */}
        <motion.div
          className="absolute top-1/6 right-1/5 w-3 h-3 bg-blue-400/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/6 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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

        <div className="max-w-4xl mx-auto">
          {content[language].experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <a 
                          href="https://d3vs.tech/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-2xl text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                        >
                          {exp.company}
                          <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </div>
                      <h4 className="text-xl text-gray-200">{exp.position}</h4>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.achievements}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}