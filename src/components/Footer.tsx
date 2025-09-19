import { motion } from "motion/react";
import { Heart, Code, Coffee } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    es: {
      made: "Hecho con",
      and: "y",
      by: "por",
      rights: "Todos los derechos reservados."
    },
    en: {
      made: "Made with",
      and: "and",
      by: "by",
      rights: "All rights reserved."
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>{content[language].made}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>{content[language].and}</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span>{content[language].and}</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-yellow-600" />
            </motion.div>
            <span>{content[language].by}</span>
            <span className="text-blue-400">Brayan León</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Brayan Steven León Martinez. {content[language].rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}