import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import astreiaLogo from "@/assets/logos/astreia.png";
import {
  FileSearch,
  Mic,
  EyeOff,
  PenLine,
  FileCheck,
  Scale,
  Languages,
  FileOutput,
  NotebookPen,
  CheckCircle2,
  ArrowRight,
  Brain,
  Code
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

const Astreia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badges = [
    "100% Local", "LGPD", "PJe Integrado", "IA Avançada", "Desktop App"
  ];

  const stats = [
    { value: "9", label: "Módulos" },
    { value: "100%", label: "Local" },
    { value: "< 2s", label: "Por análise" },
    { value: "PJe", label: "Integrado" },
  ];

  const modules = [
    {
      icon: FileSearch,
      title: "Analisador",
      description: "Analisa processos judiciais via PDF local ou busca direta por número CNJ no PJe."
    },
    {
      icon: Mic,
      title: "Transcrição",
      description: "Converte áudio e vídeo de audiências em texto e gera atas automaticamente com IA."
    },
    {
      icon: EyeOff,
      title: "Anonimizador",
      description: "Oculta CPF, RG, e-mail e telefone de documentos PDF — 100% local, sem envio de dados."
    },
    {
      icon: PenLine,
      title: "Preparador",
      description: "Gera minutas de petições, contratos e documentos jurídicos com base no caso."
    },
    {
      icon: FileCheck,
      title: "Revisor",
      description: "Revisão e correção de peças jurídicas com análise de consistência e linguagem."
    },
    {
      icon: Scale,
      title: "Análise de Provas",
      description: "Analisa documentos probatórios, identifica pontos relevantes e contradições."
    },
    {
      icon: Languages,
      title: "Linguagem Simples",
      description: "Traduz textos jurídicos complexos para linguagem acessível ao cidadão comum."
    },
    {
      icon: FileOutput,
      title: "Conversor",
      description: "Converte e exporta documentos jurídicos em diferentes formatos (.docx, .txt)."
    },
    {
      icon: NotebookPen,
      title: "Notas",
      description: "Anotações e observações integradas ao fluxo de trabalho jurídico."
    }
  ];

  const reasons = [
    { icon: CheckCircle2, text: "100% local — seus dados nunca saem do seu computador" },
    { icon: CheckCircle2, text: "Integração com PJe — busca processos diretamente pelo número CNJ" },
    { icon: CheckCircle2, text: "Análise em menos de 2 segundos com IA avançada" },
    { icon: CheckCircle2, text: "Conformidade LGPD — anonimização automática de dados sensíveis" },
    { icon: Brain, text: "Prompts especialistas pré-configurados para cada módulo jurídico" },
    { icon: Code, text: "Use seus próprios prompts — personalize a IA para o seu jeito de trabalhar" }
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
              
              <motion.img 
                variants={itemVariants}
                src={astreiaLogo} 
                alt="AstréIA" 
                className="h-32 sm:h-40 md:h-48 object-contain mb-8 drop-shadow-lg"
              />
              
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Transforme sua rotina <span className="text-gradient">hoje.</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é a <span className="text-gradient">AstréIA?</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A AstréIA é um assistente jurídico com inteligência artificial que roda 100% no seu computador. Analisa processos, transcreve audiências, anonimiza documentos e muito mais — tudo sem enviar seus dados para a nuvem. Rápido, seguro e feito para quem vive o Direito no dia a dia.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <h3 className="text-xl font-semibold text-primary mb-3 relative z-10">Para quem é</h3>
                <p className="text-foreground/90 leading-relaxed relative z-10">
                  Qualquer pessoa que lida com o universo jurídico — advogados, procuradores, defensores públicos, estagiários, servidores, estudantes de Direito e até cidadãos que querem entender seus próprios processos.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Módulos do Sistema */}
        <section className="py-24 relative bg-secondary/10">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">9 módulos <span className="text-gradient">especializados</span></h2>
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
              <h2 className="text-3xl md:text-4xl font-bold">Por que escolher a <span className="text-gradient">AstréIA?</span></h2>
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
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">Comece agora</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">A IA jurídica que se adapta a você</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Fale com um especialista e descubra como a AstréIA pode transformar sua rotina jurídica.
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

export default Astreia;
