import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Code2, 
  Database, 
  Wrench, 
  Star,
  Trophy
} from "lucide-react";

interface SkillsProps {
  language: 'es' | 'en';
}

export function Skills({ language }: SkillsProps) {
  const content = {
    es: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías que domino y utilizo para crear soluciones",
      categories: {
        languages: "Desarrollo",
        databases: "Datos", 
        tools: "Herramientas"
      }
    },
    en: {
      title: "Tech Stack",
      subtitle: "Technologies I master and use to create solutions",
      categories: {
        languages: "Development",
        databases: "Data",
        tools: "Tools"
      }
    }
  };

  const skillsData = {
    languages: [
      "Java", "Spring Boot", "C#", "Unity", "Kotlin Multiplatform", 
      "Jetpack Compose", "JavaScript", "PHP", "Python", "MATLAB",
      "jQuery", "Bootstrap", "Android Studio"
    ],
    databases: ["MongoDB", "Oracle", "Firebase"],
    tools: ["Git", "Docker"]
  };

  const skillCategories = [
    {
      title: content[language].categories.languages,
      skills: skillsData.languages,
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      borderGradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: content[language].categories.databases,
      skills: skillsData.databases,
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5",
      borderGradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: content[language].categories.tools,
      skills: skillsData.tools,
      icon: Wrench,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/5 to-emerald-500/5",
      borderGradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="skills" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-card text-card-foreground relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/6 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Tech symbols */}
        <motion.div
          className="absolute top-1/3 left-1/5 text-blue-400/20 text-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          &lt;/&gt;
        </motion.div>
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16 max-w-3xl mx-auto"
        >
          {[
            { icon: Code2, label: language === 'es' ? 'Lenguajes' : 'Languages', count: skillsData.languages.length, color: 'text-blue-400' },
            { icon: Database, label: language === 'es' ? 'Bases de Datos' : 'Databases', count: skillsData.databases.length, color: 'text-purple-400' },
            { icon: Wrench, label: language === 'es' ? 'Herramientas' : 'Tools', count: skillsData.tools.length, color: 'text-green-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-background/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-border text-center"
            >
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2`} />
              <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.count}</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-tight px-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              {/* Category Card */}
              <Card className={`bg-gradient-to-br ${category.bgGradient} border-0 backdrop-blur-sm relative overflow-hidden h-full flex flex-col`}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.borderGradient} rounded-lg`}>
                  <div className="absolute inset-[1px] bg-card rounded-lg" />
                </div>
                
                <CardContent className="relative p-6 flex flex-col h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}/20 relative overflow-hidden`}>
                      {/* Subtle glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/10 blur-sm`} />
                      <category.icon className={`w-6 h-6 ${category.iconColor} relative z-10`} />
                    </div>
                    <div>
                      <h3 className={`text-xl bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {category.skills.length} {language === 'es' ? 'tecnologías' : 'technologies'}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        className="group"
                      >
                        <Badge
                          variant="secondary"
                          className={`
                            bg-background/80 text-foreground border-border 
                            hover:border-current transition-all duration-300 cursor-pointer
                            group-hover:bg-gradient-to-r group-hover:${category.gradient} 
                            group-hover:text-white group-hover:shadow-lg 
                            group-hover:shadow-current/20
                          `}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm mx-auto max-w-2xl relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
            
            <CardContent className="relative p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <h4 className="text-xl text-blue-400">
                  {language === 'es' ? 'Especialización Principal' : 'Main Specialization'}
                </h4>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {language === 'es' 
                  ? 'Desarrollo Full-Stack con especialización en Java/Spring Boot para backend, tecnologías móviles con Kotlin, y desarrollo de videojuegos con Unity/C#. Enfoque en arquitecturas escalables.'
                  : 'Full-Stack development specialized in Java/Spring Boot for backend, mobile technologies with Kotlin, and game development with Unity/C#. Focus on scalable architectures.'
                }
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}