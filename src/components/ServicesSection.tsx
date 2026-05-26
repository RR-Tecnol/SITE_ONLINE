import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Wrench,
  HeadphonesIcon,
  Globe,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Programas",
      description:
        "Desenvolvimento de programas de computador sob encomenda, personalizados para suas necessidades específicas.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Consultoria em TI",
      description:
        "Consultoria especializada em tecnologia da informação para otimizar seus processos e infraestrutura.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico",
      description:
        "Suporte técnico, manutenção e outros serviços em tecnologia da informação com excelência.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Provedores de Acesso",
      description:
        "Provedores de acesso às redes de comunicações com conectividade confiável e de alta velocidade.",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Cloud,
      title: "Hospedagem e Aplicações",
      description:
        "Tratamento de dados, provedores de serviços de aplicação e hospedagem na internet segura.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: ShieldCheck,
      title: "Monitoramento de Segurança",
      description:
        "Monitoramento de segurança eletrônica para proteção completa dos seus sistemas e dados.",
      gradient: "from-purple-500 to-pink-500",
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
    </section>
  );
};

export default ServicesSection;
