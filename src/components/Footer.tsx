import { motion } from "motion/react";
import { Heart, Code, Coffee } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    es: {
      crafted: "Diseñado y desarrollado con",
      by: "por",
      rights: "Todos los derechos reservados."
    },
    en: {
      crafted: "Designed and developed with",
      by: "by",
      rights: "All rights reserved."
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>{content[language].crafted}</span>
            <div className="flex items-center gap-1.5">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-4 h-4 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Coffee className="w-4 h-4 text-yellow-600" />
              </motion.div>
            </div>
            <span>{content[language].by}</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Brayan León
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm opacity-70">
            © {currentYear} Brayan Steven León Martinez. {content[language].rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}