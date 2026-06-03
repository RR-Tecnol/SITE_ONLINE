import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, Award, Lightbulb, Shield, Users, X, ArrowRight } from "lucide-react";

import logoF7 from "@/assets/logos/Logmarca F7 Infraestrutura.png";
import logoVivver from "@/assets/logos/Logo Vivver Sistemas 2025.png";
import logoBeneficencia from "@/assets/logos/logo_hospital_beneficencia.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPartners, setShowPartners] = useState(false);

  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Qualidade em tudo que fazemos",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando novas soluções",
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Parceiros de confiança",
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Focados em suas necessidades",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Especialistas em{" "}
              <span className="text-gradient">Tecnologia da Informação</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              A RR TECNOL é uma empresa especializada em consultoria e serviços
              de tecnologia da informação, com experiência comprovada no
              atendimento a empresas públicas e privadas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é oferecer soluções tecnológicas inovadoras e
              personalizadas que impulsionem o crescimento e a eficiência
              operacional de nossos clientes. Com uma equipe de profissionais
              qualificados, estamos prontos para enfrentar os desafios mais
              complexos do cenário tecnológico atual. Como <strong>empresa associada à ABES</strong> (Associação Brasileira das Empresas de Software), reafirmamos nosso compromisso com a excelência, ética e com o desenvolvimento seguro e inovador do setor de tecnologia no Brasil.
            </p>

          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => {
                  if (value.title === "Confiabilidade") {
                    setShowPartners(true);
                  }
                }}
                className={`glass-card glow-border p-6 group cursor-pointer relative overflow-hidden ${
                  value.title === "Confiabilidade" ? "ring-1 ring-primary/20 hover:ring-primary/50" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>

                {value.title === "Confiabilidade" && (
                  <div className="mt-4 flex items-center gap-2 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver parceiros</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPartners && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPartners(false)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setShowPartners(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Nossos Parceiros de Confiabilidade
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Empresas e instituições que confiam em nossas soluções para manter
                suas operações seguras e eficientes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="bg-white rounded-lg p-4 w-full h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <img src={logoF7} alt="F7 Infraestrutura" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 w-full h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <img src={logoVivver} alt="Vivver Sistemas" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-4 w-full h-28 flex items-center justify-center transition-transform hover:scale-105">
                  <img src={logoBeneficencia} alt="Hospital da Beneficência" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
