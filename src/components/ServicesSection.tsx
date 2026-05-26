import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Wrench,
  HeadphonesIcon,
  Globe,
  Cloud,
  ShieldCheck,
  ArrowRight,
  X,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Programas",
      description: "Desenvolvimento de programas de computador sob encomenda, personalizados para suas necessidades específicas.",
      gradient: "from-blue-500 to-cyan-500",
      subtitle: "Sistemas sob medida para o seu negócio",
      details: [
        "Desenvolvimento de sistemas web e mobile do zero",
        "Integração com APIs e sistemas legados",
        "Painéis administrativos e dashboards gerenciais",
        "Manutenção e evolução de sistemas existentes",
        "Metodologia ágil com entregas incrementais",
      ],
      differencial: "Experiência com órgãos públicos e empresas privadas, garantindo conformidade com requisitos técnicos e regulatórios brasileiros.",
    },
    {
      icon: Wrench,
      title: "Consultoria em TI",
      description: "Consultoria especializada em tecnologia da informação para otimizar seus processos e infraestrutura.",
      gradient: "from-cyan-500 to-teal-500",
      subtitle: "Estratégia tecnológica para crescer com segurança",
      details: [
        "Diagnóstico de infraestrutura e processos de TI",
        "Planejamento de modernização e migração de sistemas",
        "Definição de arquitetura de software e cloud",
        "Orientação em conformidade com LGPD",
        "Elaboração de documentação técnica e especificações",
      ],
      differencial: "Visão técnica e de negócio combinadas — entregamos estratégia que pode ser executada, não só relatórios.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico",
      description: "Suporte técnico, manutenção e outros serviços em tecnologia da informação com excelência.",
      gradient: "from-teal-500 to-emerald-500",
      subtitle: "Atendimento ágil para sua operação não parar",
      details: [
        "Suporte remoto e presencial para usuários e sistemas",
        "Manutenção preventiva e corretiva de equipamentos",
        "Gerenciamento de chamados com SLA definido",
        "Atualização e configuração de softwares e redes",
        "Treinamento de equipes internas",
      ],
      differencial: "Atendimento humanizado com tempo de resposta rápido e equipe local em São Luís — MA.",
    },
    {
      icon: Globe,
      title: "Provedores de Acesso",
      description: "Provedores de acesso às redes de comunicações com conectividade confiável e de alta velocidade.",
      gradient: "from-emerald-500 to-green-500",
      subtitle: "Conectividade confiável onde você precisar",
      details: [
        "Configuração e gerenciamento de redes locais (LAN/WAN)",
        "Redundância de conexão para ambientes críticos",
        "Monitoramento 24/7 de disponibilidade",
        "Suporte a redes cabeadas e sem fio (Wi-Fi corporativo)",
      ],
      differencial: "Soluções de conectividade para ambientes públicos e privados com foco em estabilidade e alta disponibilidade.",
    },
    {
      icon: Cloud,
      title: "Hospedagem e Aplicações",
      description: "Tratamento de dados, provedores de serviços de aplicação e hospedagem na internet segura.",
      gradient: "from-violet-500 to-purple-500",
      subtitle: "Sua aplicação no ar com segurança e performance",
      details: [
        "Hospedagem de sistemas web em nuvem (cloud)",
        "Configuração de servidores Linux e ambientes Docker",
        "Gerenciamento de domínios e certificados SSL",
        "Backups automatizados e planos de recuperação",
        "Deploy e CI/CD de aplicações",
      ],
      differencial: "Infraestrutura em nuvem com monitoramento ativo — seus sistemas disponíveis 24 horas por dia.",
    },
    {
      icon: ShieldCheck,
      title: "Monitoramento de Segurança",
      description: "Monitoramento de segurança eletrônica para proteção completa dos seus sistemas e dados.",
      gradient: "from-purple-500 to-pink-500",
      subtitle: "Proteção contínua para seus dados e sistemas",
      details: [
        "Monitoramento eletrônico de redes e sistemas em tempo real",
        "Detecção e resposta a incidentes de segurança",
        "Gestão de acessos e controle de permissões",
        "Análise de vulnerabilidades e relatórios periódicos",
        "Orientação em adequação à LGPD",
      ],
      differencial: "Abordagem proativa — identificamos e neutralizamos ameaças antes que impactem sua operação.",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Soluções Completas em{" "}
            <span className="text-gradient">Tecnologia</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Oferecemos uma gama completa de serviços de TI para impulsionar sua
            empresa ao próximo nível.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(service)}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
              >
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-lg w-full relative"
            >
              {/* Fechar */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Ícone */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedService.gradient} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <selectedService.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {selectedService.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {selectedService.subtitle}
              </p>

              <div className="border-t border-border/50 pt-6 mb-6 space-y-3">
                {selectedService.details.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Diferencial */}
              <div className="bg-secondary/30 rounded-lg p-4 mb-6">
                <p className="text-xs text-primary font-medium mb-1 uppercase tracking-widest">Diferencial</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedService.differencial}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
              >
                Falar sobre este serviço
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
