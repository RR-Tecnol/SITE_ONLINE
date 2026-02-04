import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg py-20 md:py-20"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl mx-auto -mt-12 md:-mt-32"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-0 left-1/2 mt-24 md:mt-40 hidden md:inline-flex items-center gap-2 glass-card px-4 py-2 z-20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Consultoria & Serviços de TI
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 sm:-mb-32 md:-mb-40"
          >
            <img
              src={logoRRTecnol}
              alt="RR TECNOL"
              className="h-64 sm:h-80 md:h-96 lg:h-[35rem] w-auto mx-auto border-none shadow-none ring-0 outline-none"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-light leading-tight"
          >
            Transformando Desafios em Soluções
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg text-muted-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Soluções tecnológicas inovadoras para empresas públicas e privadas.
            Impulsionamos o crescimento e a eficiência operacional do seu negócio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=559888956818&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="hero" size="xl" className="w-full">
                Entre em Contato
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="xl" className="w-full">
                Conheça Nossos Serviços
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Descubra Mais</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
