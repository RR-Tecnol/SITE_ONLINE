import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gestaoLogo from "@/assets/logos/gestao.png";
import {
  UserPlus,
  ClipboardList,
  Stethoscope,
  MessageCircle,
  FileText,
  BarChart2,
  CheckCircle2,
  QrCode,
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

const GestaoSobreRodas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badges = [
    "Mobile First", "Tempo Real", "QR Code", "LGPD", "Multi-perfil"
  ];

  const stats = [
    { value: "BI", label: "Integrado" },
    { value: "Tempo Real", label: "Fila e chat" },
    { value: "QR Code", label: "Por paciente" },
    { value: "LGPD", label: "Auditoria nativa" },
  ];

  const modules = [
    {
      icon: UserPlus,
      title: "Gestão de Pacientes",
      description: "Cadastro com preenchimento automático via CEP, geração de QR Code por paciente para identificação rápida no evento."
    },
    {
      icon: ClipboardList,
      title: "Inscrição em Exames",
      description: "Fluxo integrado ao cadastro, inscrição em múltiplos exames de uma só vez e fila filtrada por tipo de exame."
    },
    {
      icon: Stethoscope,
      title: "Atendimento Médico",
      description: "Prontuário clínico com autosave, fila em tempo real via WebSocket e painel de chamada com controle de ordem."
    },
    {
      icon: MessageCircle,
      title: "Comunicação",
      description: "Chat médico-cidadão em tempo real com salas por paciente e botão de emergência integrado ao painel do médico."
    },
    {
      icon: FileText,
      title: "Resultados e Documentação",
      description: "Página de resultados por paciente, relatório executivo em PDF e módulo de auditoria LGPD nativo."
    },
    {
      icon: BarChart2,
      title: "BI e Gestão Operacional",
      description: "Dashboard com indicadores por gênero e perfil de atendimento, controle de frota e gestão financeira da operação."
    }
  ];

  const reasons = [
    { icon: CheckCircle2, text: "Tudo em um só lugar — cadastro, fila, prontuário e relatório sem sistemas externos" },
    { icon: CheckCircle2, text: "Tempo real — fila e comunicação sincronizadas via WebSocket, sem recarregar a página" },
    { icon: CheckCircle2, text: "Funciona no campo — arquitetura pensada para conectividade limitada e uso em dispositivos móveis" },
    { icon: CheckCircle2, text: "Multi-perfil — interfaces distintas para médico, administrador e cidadão, cada uma com fluxo otimizado" },
    { icon: CheckCircle2, text: "Conformidade LGPD — módulo de auditoria nativo para proteção dos dados dos pacientes" },
    { icon: QrCode, text: "QR Code por paciente — identificação ágil no evento, reduzindo filas e erros de triagem" }
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
                  src={gestaoLogo} 
                  alt="Gestão Sobre Rodas" 
                  className="h-24 sm:h-32 md:h-40 w-auto object-contain scale-[1.7] md:scale-[2]"
                />
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Leve saúde a qualquer lugar, com <span className="text-gradient">total controle.</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é o <span className="text-gradient">Gestão Sobre Rodas?</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gestão Sobre Rodas é uma plataforma digital de gerenciamento de caravanas de saúde itinerantes. Centraliza toda a operação de eventos de saúde em campo — do cadastro do cidadão ao atendimento médico, controle de frota e gestão financeira — em uma única solução mobile-first acessível via navegador, pensada para funcionar mesmo com conectividade limitada.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <h3 className="text-xl font-semibold text-primary mb-3 relative z-10">Para quem é</h3>
                <p className="text-foreground/90 leading-relaxed relative z-10">
                  Prefeituras, secretarias de saúde e organizações que operam unidades móveis de saúde — carretas, ônibus ou tendas — levando atendimento médico a localidades com acesso limitado a serviços de saúde.
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
              <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o <span className="text-gradient">Gestão Sobre Rodas?</span></h2>
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
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">Vamos conversar?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Leve saúde itinerante com tecnologia de ponta</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Fale com um especialista e descubra como o Gestão Sobre Rodas pode transformar a operação das suas caravanas de saúde.
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

export default GestaoSobreRodas;
