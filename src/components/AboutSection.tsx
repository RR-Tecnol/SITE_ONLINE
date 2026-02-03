import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Lightbulb, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              complexos do cenário tecnológico atual.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="min-w-[100px]">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">10+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Anos de Experiência</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">100+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Projetos Entregues</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">50+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Clientes Satisfeitos</div>
              </div>
            </div>
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
                className="glass-card glow-border p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
