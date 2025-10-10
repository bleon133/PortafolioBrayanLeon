import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface EducationProps {
  language: 'es' | 'en';
}

export function Education({ language }: EducationProps) {
  const content = {
    es: {
      title: "Educación y Certificaciones",
      viewCert: "Ver certificado",
      educationTab: "Educación",
      certificationsTab: "Certificaciones",
      education: [
        {
          type: "education",
          title: "Ingeniería de Sistemas",
          institution: "Universidad Autónoma de Bucaramanga (UNAB)",
          period: "2023 - En curso (6° Semestre)",
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
          type: "education",
          title: "Técnico en Sistemas",
          institution: "SENA",
          period: "2017 - 2018",
          description: "Formación técnica fundamental en sistemas de información, mantenimiento de equipos, redes básicas y fundamentos de programación.",
          certLink: "https://drive.google.com/file/d/13oQgGLn1QQPwcix5hFv1GojTQnKJCjdu/view?usp=sharing"
        }
      ],
      certifications: [
        {
          type: "certification",
          title: "Aprende a crear un videojuego RPG en 2D con Unity",
          institution: "Udemy",
          period: "28-10-2025",
          description: "Certificación en desarrollo de videojuegos RPG 2D con Unity, incluyendo sistemas de combate, inventario, misiones y narrativa interactiva.",
          certLink: "https://drive.google.com/file/d/1t4IMfncAerW3cKqV1TvaMgAwhB0sqRuF/view?usp=sharing"
        },
        {
          type: "certification",
          title: "AWS Academy Graduate - Data Engineering - Training Badge",
          institution: "AWS Academy",
          period: "23-09-2025",
          description: "Certificación en ingeniería de datos con AWS, incluyendo procesamiento de datos a gran escala, almacenamiento, ETL y análisis con servicios de AWS.",
          certLink: "https://drive.google.com/file/d/1eYrXEgdDrnHYXG-zAzoxffurdFhmvG2Y/view?usp=sharing"
        },
        {
          type: "certification",
          title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
          institution: "AWS Academy",
          period: "23-09-2025",
          description: "Certificación en fundamentos de computación en la nube con AWS, conceptos básicos de infraestructura, servicios principales y mejores prácticas de AWS.",
          certLink: "https://drive.google.com/file/d/12jIoirZxfIdk_4Gtxw8NHPQmZUzblvMj/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Herramientas científicas para alcanzar las metas en tu vida personal y profesional",
          institution: "Social BEE Lab",
          period: "16-12-2022",
          description: "Formación en herramientas científicas y estrategias basadas en evidencia para el desarrollo personal y profesional, optimización de metas y mejora del rendimiento.",
          certLink: "https://drive.google.com/file/d/1xgYhrS6ayqvcwgKZstPnzvh0xA1Vrr5H/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Introduction to MongoDB",
          institution: "MongoDB",
          period: "28-05-2025",
          description: "Certificación en fundamentos de MongoDB, incluyendo conceptos básicos de bases de datos NoSQL, operaciones CRUD y modelado de datos.",
          certLink: "https://drive.google.com/file/d/1jeAabqaxKilmYADhOCzbeuxOYRMiZCW6/view?usp=sharing"
        },
        {
          type: "certification",
          title: "MongoDB Data Modeling Path",
          institution: "MongoDB",
          period: "28-05-2025",
          description: "Especialización avanzada en modelado de datos con MongoDB, optimización de esquemas y mejores prácticas para aplicaciones escalables.",
          certLink: "https://drive.google.com/file/d/1PGJrhYEHsopmwZ9dmqtVKm-t0vaZr-c1/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Herramientas metodológicas en investigación aplicada: conceptualización básica ciencia, tecnología e innovación",
          institution: "SENA",
          period: "13-12-2018",
          description: "Formación en metodologías de investigación aplicada, conceptos fundamentales de ciencia, tecnología e innovación, y desarrollo de proyectos investigativos.",
          certLink: "https://drive.google.com/file/d/1axLDeAp2OIzbeZfgUNWaFctHrBW_EOC2/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Programación de aplicaciones para dispositivos móviles",
          institution: "SENA",
          period: "05-12-2018",
          description: "Certificación en desarrollo de aplicaciones móviles, incluyendo fundamentos de programación móvil, interfaces de usuario y funcionalidades nativas.",
          certLink: "https://drive.google.com/file/d/1lVmVuAAEm5qR1icBXOrbQXIduVyhtw_k/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Sensibilización de emprendimiento",
          institution: "SENA",
          period: "19-09-2016",
          description: "Formación en emprendimiento, desarrollo de ideas de negocio, plan de negocios y estrategias empresariales.",
          certLink: "https://drive.google.com/file/d/1qhyHk7YetPywrqbuUFYuSvyCy_M--Ec5/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Participación de clubes de ciencia Bucaramanga 2016",
          institution: "SENA",
          period: "28-06-2016",
          description: "Participación activa en clubes de ciencia, desarrollo de proyectos científicos y tecnológicos, y presentación de investigaciones.",
          certLink: "https://drive.google.com/file/d/1rEfsmiGSyNgIvAZMLImDfzMxovgMfeYQ/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Introducción a la metodología investigativa",
          institution: "SENA",
          period: "23-05-2016",
          description: "Formación en fundamentos de investigación, métodos científicos y técnicas de recolección y análisis de datos.",
          certLink: "https://drive.google.com/file/d/1n5PT_WnRcTGLwCvJucqHjnPo1dTQ85d_/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Principios de electrónica",
          institution: "SENA",
          period: "25-04-2016",
          description: "Certificación en conceptos básicos de electrónica, circuitos, componentes electrónicos y fundamentos de electricidad.",
          certLink: "https://drive.google.com/file/d/1lI01_z_69wijbPkSDtWibsphsroQU1zZ/view?usp=sharing"
        }
      ]
    },
    en: {
      title: "Education & Certifications",
      viewCert: "View certificate",
      educationTab: "Education",
      certificationsTab: "Certifications",
      education: [
        {
          type: "education",
          title: "Systems Engineering",
          institution: "Universidad Autónoma de Bucaramanga (UNAB)",
          period: "2023 - In progress (6th Semester)",
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
          type: "education",
          title: "Systems Technician",
          institution: "SENA",
          period: "2017 - 2018",
          description: "Fundamental technical training in information systems, equipment maintenance, basic networks and programming fundamentals.",
          certLink: "https://drive.google.com/file/d/13oQgGLn1QQPwcix5hFv1GojTQnKJCjdu/view?usp=sharing"
        }
      ],
      certifications: [
        {
          type: "certification",
          title: "Learn to Create a 2D RPG Video Game with Unity",
          institution: "Udemy",
          period: "10-28-2025",
          description: "Certification in 2D RPG video game development with Unity, including combat systems, inventory, quests and interactive narrative.",
          certLink: "https://drive.google.com/file/d/1t4IMfncAerW3cKqV1TvaMgAwhB0sqRuF/view?usp=sharing"
        },
        {
          type: "certification",
          title: "AWS Academy Graduate - Data Engineering - Training Badge",
          institution: "AWS Academy",
          period: "09-23-2025",
          description: "Certification in data engineering with AWS, including large-scale data processing, storage, ETL and analytics with AWS services.",
          certLink: "https://drive.google.com/file/d/1eYrXEgdDrnHYXG-zAzoxffurdFhmvG2Y/view?usp=sharing"
        },
        {
          type: "certification",
          title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
          institution: "AWS Academy",
          period: "09-23-2025",
          description: "Certification in AWS cloud computing fundamentals, basic infrastructure concepts, core services and AWS best practices.",
          certLink: "https://drive.google.com/file/d/12jIoirZxfIdk_4Gtxw8NHPQmZUzblvMj/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Scientific Tools to Achieve Goals in Your Personal and Professional Life",
          institution: "Social BEE Lab",
          period: "12-16-2022",
          description: "Training in scientific tools and evidence-based strategies for personal and professional development, goal optimization and performance improvement.",
          certLink: "https://drive.google.com/file/d/1xgYhrS6ayqvcwgKZstPnzvh0xA1Vrr5H/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Introduction to MongoDB",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Certification in MongoDB fundamentals, including basic NoSQL database concepts, CRUD operations and data modeling.",
          certLink: "https://drive.google.com/file/d/1jeAabqaxKilmYADhOCzbeuxOYRMiZCW6/view?usp=sharing"
        },
        {
          type: "certification",
          title: "MongoDB Data Modeling Path",
          institution: "MongoDB",
          period: "05-28-2025",
          description: "Advanced specialization in MongoDB data modeling, schema optimization and best practices for scalable applications.",
          certLink: "https://drive.google.com/file/d/1PGJrhYEHsopmwZ9dmqtVKm-t0vaZr-c1/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Methodological Tools in Applied Research: Basic Conceptualization of Science, Technology and Innovation",
          institution: "SENA",
          period: "12-13-2018",
          description: "Training in applied research methodologies, fundamental concepts of science, technology and innovation, and research project development.",
          certLink: "https://drive.google.com/file/d/1axLDeAp2OIzbeZfgUNWaFctHrBW_EOC2/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Mobile Application Development",
          institution: "SENA",
          period: "12-05-2018",
          description: "Certification in mobile application development, including mobile programming fundamentals, user interfaces and native functionalities.",
          certLink: "https://drive.google.com/file/d/1lVmVuAAEm5qR1icBXOrbQXIduVyhtw_k/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Entrepreneurship Awareness",
          institution: "SENA",
          period: "09-19-2016",
          description: "Training in entrepreneurship, business idea development, business plan and business strategies.",
          certLink: "https://drive.google.com/file/d/1qhyHk7YetPywrqbuUFYuSvyCy_M--Ec5/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Participation in Science Clubs Bucaramanga 2016",
          institution: "SENA",
          period: "06-28-2016",
          description: "Active participation in science clubs, development of scientific and technological projects, and research presentations.",
          certLink: "https://drive.google.com/file/d/1rEfsmiGSyNgIvAZMLImDfzMxovgMfeYQ/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Introduction to Research Methodology",
          institution: "SENA",
          period: "05-23-2016",
          description: "Training in research fundamentals, scientific methods and data collection and analysis techniques.",
          certLink: "https://drive.google.com/file/d/1n5PT_WnRcTGLwCvJucqHjnPo1dTQ85d_/view?usp=sharing"
        },
        {
          type: "certification",
          title: "Principles of Electronics",
          institution: "SENA",
          period: "04-25-2016",
          description: "Certification in basic electronics concepts, circuits, electronic components and electricity fundamentals.",
          certLink: "https://drive.google.com/file/d/1lI01_z_69wijbPkSDtWibsphsroQU1zZ/view?usp=sharing"
        }
      ]
    }
  };

  const renderEducationCard = (item: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <Card className="bg-card/50 border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
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
                  <h4 className="text-lg text-foreground">{item.institution}</h4>
                </div>
                <span className="text-muted-foreground">{item.period}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground leading-relaxed ml-16">
            {item.description}
          </p>
          {item.certLink && (
            <div className="ml-16 mt-4">
              <a
                href={item.certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{content[language].viewCert}</span>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="education" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-background text-foreground relative overflow-hidden transition-colors duration-300">
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
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="education">{content[language].educationTab}</TabsTrigger>
              <TabsTrigger value="certifications">{content[language].certificationsTab}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education">
              {content[language].education.map((item, index) => renderEducationCard(item, index))}
            </TabsContent>
            
            <TabsContent value="certifications">
              {content[language].certifications.map((item, index) => renderEducationCard(item, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}