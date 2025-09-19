import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { GraduationCap, Award } from "lucide-react";

interface EducationProps {
  language: 'es' | 'en';
}

export function Education({ language }: EducationProps) {
  const content = {
    es: {
      title: "Educación y Certificaciones",
      education: [
        {
          type: "education",
          title: "Técnico en Sistemas",
          institution: "SENA",
          period: "2017 - 2018",
          description: "Formación técnica fundamental en sistemas de información, mantenimiento de equipos, redes básicas y fundamentos de programación."
        },
        {
          type: "education",
          title: "Ingeniería de Sistemas",
          institution: "Universidad Autónoma de Bucaramanga (UNAB)",
          period: "2020 - 2024",
          description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles."
        },
        {
          type: "education",
          title: "Tecnología de desarrollo de videojuegos y entornos interactivos",
          institution: "SENA",
          period: "2023 - En curso",
          description: "Formación especializada en desarrollo de videojuegos, motores gráficos, programación en Unity, diseño de entornos interactivos y experiencias inmersivas."
        },
        {
          type: "certification",
          title: "Spring Boot Developer",
          institution: "Oracle Academy",
          period: "2023",
          description: "Certificación en desarrollo de aplicaciones empresariales con Spring Framework."
        },
        {
          type: "certification",
          title: "Kotlin Multiplatform Developer",
          institution: "Google Developers",
          period: "2024",
          description: "Especialización en desarrollo multiplataforma con Kotlin y Jetpack Compose."
        },
        {
          type: "certification",
          title: "Introduction to MongoDB",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Certificación en fundamentos de MongoDB, incluyendo conceptos básicos de bases de datos NoSQL, operaciones CRUD y modelado de datos."
        },
        {
          type: "certification",
          title: "MongoDB Data Modeling Path",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Especialización avanzada en modelado de datos con MongoDB, optimización de esquemas y mejores prácticas para aplicaciones escalables."
        }
      ]
    },
    en: {
      title: "Education & Certifications",
      education: [
        {
          type: "education",
          title: "Systems Technician",
          institution: "SENA",
          period: "2017 - 2018",
          description: "Fundamental technical training in information systems, equipment maintenance, basic networks and programming fundamentals."
        },
        {
          type: "education",
          title: "Systems Engineering",
          institution: "Universidad Autónoma de Bucaramanga (UNAB)",
          period: "2020 - 2024",
          description: "Comprehensive training in software development, databases, systems architecture and agile methodologies."
        },
        {
          type: "education",
          title: "Technology in Video Game Development and Interactive Environments",
          institution: "SENA",
          period: "2023 - In progress",
          description: "Specialized training in video game development, graphics engines, Unity programming, interactive environment design and immersive experiences."
        },
        {
          type: "certification",
          title: "Spring Boot Developer",
          institution: "Oracle Academy",
          period: "2023",
          description: "Certification in enterprise application development with Spring Framework."
        },
        {
          type: "certification",
          title: "Kotlin Multiplatform Developer",
          institution: "Google Developers",
          period: "2024",
          description: "Specialization in multiplatform development with Kotlin and Jetpack Compose."
        },
        {
          type: "certification",
          title: "Introduction to MongoDB",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Certification in MongoDB fundamentals, including basic NoSQL database concepts, CRUD operations and data modeling."
        },
        {
          type: "certification",
          title: "MongoDB Data Modeling Path",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Advanced specialization in MongoDB data modeling, schema optimization and best practices for scalable applications."
        }
      ]
    }
  };

  return (
    <section id="education" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Academic achievement symbols */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-32 h-32 border border-blue-500/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-cyan-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Knowledge path lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating educational elements */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-4 h-4 bg-blue-400/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/3 w-3 h-3 bg-cyan-400/50 rounded-full"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Graduation cap silhouette */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-6 h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transform rotate-12"
          animate={{
            rotate: [12, 15, 12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            clipPath: "polygon(0% 80%, 20% 60%, 80% 60%, 100% 80%, 50% 100%)"
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
          {content[language].education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {item.type === 'education' ? (
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-blue-400" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-cyan-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl text-blue-400">{item.title}</h3>
                          <h4 className="text-lg text-gray-200">{item.institution}</h4>
                        </div>
                        <span className="text-gray-400">{item.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 leading-relaxed ml-16">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}