import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import upgradeLogo from "@/assets/logos/upgrade.png";
import {
  GraduationCap,
  Trophy,
  Clock,
  Banknote,
  Award,
  Bell,
  CheckCircle2,
  MapPin,
  ArrowRight
} from "lucide-react";

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Upgrade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badges = [
    "Multi-portal", "Gamificação", "GPS Integrado", "100% Digital", "Gov / Corporativo"
  ];

  const stats = [
    { value: "4", label: "Perfis de acesso" },
    { value: "100%", label: "Digital" },
    { value: "Certificados", label: "Automáticos" },
    { value: "GPS", label: "Integrado" },
  ];

  const modules = [
    {
      icon: GraduationCap,
      title: "Gestão Acadêmica",
      description: "Criação e gestão de cursos, turmas e matrículas com localização geográfica via GPS e geocodificação."
    },
    {
      icon: Trophy,
      title: "Portal do Aluno",
      description: "Perfil gamificado com XP, conquistas e histórico completo — maior engajamento em programas de qualificação."
    },
    {
      icon: Clock,
      title: "Frequência e Ponto",
      description: "Registro de frequência de alunos e ponto de entrada e saída para professores e motoristas."
    },
    {
      icon: Banknote,
      title: "Gestão Financeira",
      description: "Cálculo automático de diárias respeitando o calendário letivo, reembolsos e lançamentos com comprovantes."
    },
    {
      icon: Award,
      title: "Certificados",
      description: "Editor de modelos de certificado com autopreenchimento e emissão automática ao término do curso."
    },
    {
      icon: Bell,
      title: "Comunicação",
      description: "Notificações por e-mail, MFA de acesso, feedback pós-curso com upload de vídeo e comunicação em tempo real."
    }
  ];

  const reasons = [
    { icon: CheckCircle2, text: "Multi-portal — cada perfil (admin, professor, motorista, aluno) com interface própria e UX adaptada" },
    { icon: CheckCircle2, text: "Gamificação — portal do aluno com XP, quests e recompensas para maior engajamento" },
    { icon: CheckCircle2, text: "Gestão financeira integrada — cálculo de diárias respeita o calendário letivo, sem overpayment" },
    { icon: CheckCircle2, text: "Certificados customizáveis — editor de modelos com autopreenchimento dos dados do curso" },
    { icon: MapPin, text: "Localização geográfica — turmas com coordenadas GPS e deeplink para Google Maps" },
    { icon: CheckCircle2, text: "Feito para programas governamentais — rastreabilidade total para múltiplos estados e cursos simultâneos" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-16" ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              <motion.span variants={itemVariants} className="text-primary font-medium text-sm uppercase tracking-widest mb-6">
                Produto RR Tecnol
              </motion.span>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl mb-8 shadow-xl border border-white/20 inline-flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={upgradeLogo} 
                  alt="UPGRADE" 
                  className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                />
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Do treinamento ao certificado, <span className="text-gradient">tudo em um só lugar.</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-16">
                {badges.map(badge => (
                  <span key={badge} className="glass-card px-4 py-2 rounded-full text-sm text-foreground/80 font-medium border border-white/5">
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {stats.map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="glass-card glow-border p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Visão Geral */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é o <span className="text-gradient">UPGRADE?</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O UPGRADE é uma plataforma completa de gestão de treinamentos e cursos profissionalizantes. Cobre todo o ciclo de vida de um programa educacional — da matrícula do aluno até a emissão do certificado, passando por frequência, transporte, pagamento de instrutores e gestão financeira. Desenvolvido para programas de qualificação em larga escala, com múltiplos estados, turmas e perfis de usuário.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <h3 className="text-xl font-semibold text-primary mb-3 relative z-10">Para quem é</h3>
                <p className="text-foreground/90 leading-relaxed relative z-10">
                  Programas governamentais de qualificação profissional, secretarias de educação e empresas de educação corporativa que precisam gerenciar múltiplos cursos, turmas e perfis de usuários com rastreabilidade total.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Módulos do Sistema */}
        <section className="py-24 relative bg-secondary/10">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Módulos do <span className="text-gradient">sistema</span></h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {modules.map((mod, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-card p-8 border-t-2 border-t-primary hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <mod.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{mod.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Por que escolher */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o <span className="text-gradient">UPGRADE?</span></h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {reasons.map((reason, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-card p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: reason.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto glass-card p-12 md:p-16 rounded-[2.5rem] border border-primary/20"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">Pronto para escalar?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Gerencie seu programa educacional do início ao fim</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Fale com um especialista e descubra como o UPGRADE pode transformar a gestão dos seus cursos.
              </p>
              
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,210,235,0.3)]">
                Fale com um especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Upgrade;
