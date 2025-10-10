import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import emailjs from "@emailjs/browser";

interface ContactProps {
  language: 'es' | 'en';
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    es: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje"
      },
      success: "¡Mensaje enviado correctamente! Te responderé pronto.",
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      sending: "Enviando...",
      social: "Encuéntrame en:"
    },
    en: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Error sending message. Please try again.",
      sending: "Sending...",
      social: "Find me on:"
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(language === 'es' ? 'Por favor completa todos los campos' : 'Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_1vbtujs"; // ✅ Service ID configurado
      const templateId = "template_daht8pd"; // ✅ Template ID configurado
      const publicKey = "UyuW-vGcA1fCSLmeW"; // ✅ Public Key configurado

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        mailtoBody: `Hola ${formData.name},\n\nGracias por tu mensaje. Te responderé pronto.\n\nSaludos,\nBrayan León`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success(content[language].success);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(content[language].error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/brayan-steven-le%C3%B3n-martinez-a7528416b/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bleon133',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:brot10102017@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:min-h-screen lg:flex lg:items-center bg-card text-card-foreground relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Communication waves */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-500/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-cyan-400/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-500/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Message/email icons floating */}
        <motion.div
          className="absolute top-1/6 left-1/3 w-8 h-6 bg-blue-400/20 rounded-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/6 w-6 h-6 bg-cyan-400/30 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Connection lines */}
        <motion.div
          className="absolute top-1/3 right-0 w-32 h-0.5 bg-gradient-to-l from-blue-500/30 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-32 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent"
          animate={{
            scaleX: [1, 0.5, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Social network nodes */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400/50 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
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
          <p className="text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background/50 border-border backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl text-blue-400">
                  {content[language].form.send}
                </h3>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      {content[language].form.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-input-background border-input text-foreground focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      {content[language].form.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-input-background border-input text-foreground focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {content[language].form.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-2 bg-input-background border-input text-foreground focus:border-blue-500 resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {content[language].sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {content[language].form.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-blue-400 mb-6">
                {content[language].social}
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border hover:border-blue-500/50 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-lg">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-background/30 p-6 rounded-lg border border-border">
              <h4 className="text-lg text-cyan-400 mb-2">
                {language === 'es' ? '¿Listo para colaborar?' : 'Ready to collaborate?'}
              </h4>
              <p className="text-muted-foreground">
                {language === 'es' 
                  ? 'Siempre estoy interesado en nuevos proyectos y oportunidades. No dudes en contactarme.'
                  : "I'm always interested in new projects and opportunities. Feel free to reach out."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}