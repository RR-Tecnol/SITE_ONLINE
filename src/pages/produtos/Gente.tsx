import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import genteLogo from "@/assets/logos/gente.png";
import {
  UserCircle,
  Banknote,
  Clock,
  LineChart,
  Landmark,
  HeartPulse,
  Shield,
  Smartphone,
  FileText,
  CheckCircle2,
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

const Gente = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    "eSocial", "LRF", "LGPD", "CNAB 240", "App Mobile", "On-Premise / Nuvem"
  ];

  const stats = [
    { value: "37", label: "Módulos" },
    { value: "100%", label: "Digital" },
    { value: "eSocial Integrado", label: "Conformidade total" },
    { value: "Web + App", label: "Mobile" },
  ];

  const modules = [
    {
      icon: UserCircle,
      title: "Portal do Servidor & RH",
      description: "Dashboard com histórico funcional, progressão por PCCV, contracheque digital e onboarding 100% por link tokenizado."
    },
    {
      icon: Banknote,
      title: "Folha de Pagamento",
      description: "Cálculo auditável com rastreabilidade por rubrica. Holerite PDF, CNAB 240 multi-banco e consistência Folha × RPPS × Consignação."
    },
    {
      icon: Clock,
      title: "Ponto, Escalas & Jornada",
      description: "App mobile com reconhecimento facial e geolocalização. Escalas hospitalares, banco de horas e cálculo automático de sobreaviso."
    },
    {
      icon: LineChart,
      title: "Carreira e Desempenho",
      description: "Progressão com análise de impacto LRF, avaliação por critérios ponderados e treinamentos com certificado digital."
    },
    {
      icon: Landmark,
      title: "ERP Financeiro & Fiscal",
      description: "Contabilidade PCASP/MCASP, execução orçamentária, empenho/liquidação, integração SAGRES/TCE-MA, SICONFI, RGF e RREO."
    },
    {
      icon: HeartPulse,
      title: "Saúde, SST & Pessoas",
      description: "ASOs, EPIs, laudos de insalubridade, benefícios integrados à folha, pesquisa NPS e ouvidoria com protocolo anônimo."
    },
    {
      icon: Shield,
      title: "Segurança & Conformidade",
      description: "LGPD com anonimização PII, trilha de auditoria criptografada, honeytokens e integração eSocial S-2200/S-2206/S-2299."
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Ponto com reconhecimento facial e geolocalização. Holerite e escala acessíveis pelo celular. Android + iOS nativos."
    },
    {
      icon: FileText,
      title: "Gestão RH & Relatórios",
      description: "Central de relatórios com quadro de servidores, folha, ponto e eSocial. Portal do gestor com aprovações e escala da equipe."
    }
  ];

  const reasons = [
    "100% digital — elimina papéis, planilhas e processos manuais",
    "App mobile com reconhecimento facial — sem custo de equipamento REP",
    "IA de auditoria de folha — detecta inconsistências antes do fechamento, evitando retrabalho e erros de pagamento",
    "Integração nativa: folha → contabilidade → tesouraria em tempo real",
    "Envio automático de pagamentos para os principais bancos — sem digitação manual, sem risco de erro",
    "Multi-tenant — arquitetura pronta para gerenciar múltiplos municípios em uma única plataforma"
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
                src={genteLogo} 
                alt="Sistema GENTE" 
                className="h-32 sm:h-40 md:h-48 object-contain mb-8 drop-shadow-lg"
              />
              
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Modernizando o RH municipal — <span className="text-gradient">do ponto ao contracheque.</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O que é o <span className="text-gradient">GENTE?</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O GENTE é um ERP Municipal completo da RR TECNOL para modernizar a gestão de pessoas e finanças públicas. Web-nativo, opera sem instalação local, com arquitetura multi-tenant e conformidade total com eSocial, LRF e LGPD. Ideal para prefeituras e governos estaduais que precisam de um sistema robusto, seguro e 100% digital.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <h3 className="text-xl font-semibold text-primary mb-3 relative z-10">Público-alvo</h3>
                <p className="text-foreground/90 leading-relaxed relative z-10">
                  Prefeituras e Governos Estaduais que buscam modernizar a gestão de servidores com tecnologia segura e em conformidade com a legislação pública brasileira.
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
              <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o <span className="text-gradient">GENTE?</span></h2>
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
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{reason}</p>
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
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">Pronto para modernizar?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Leve o GENTE para o seu município</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Fale com um especialista e descubra como podemos transformar a gestão de pessoas da sua prefeitura.
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

export default Gente;
