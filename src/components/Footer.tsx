import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Linkedin, Instagram, Facebook, ArrowUp, ShieldCheck, Mail, Phone, User } from "lucide-react";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

const Footer = () => {
  const [showDpo, setShowDpo] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { label: "Quem Somos" },
        { label: "Nossos Valores" },
        { label: "Equipe" },
        { label: "Carreiras" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { label: "Desenvolvimento" },
        { label: "Consultoria" },
        { label: "Suporte" },
        { label: "Cloud" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidade" },
        { label: "Termos de Uso" },
        { label: "Cookies" },
        { label: "Encarregado de Dados (DPO)", action: () => setShowDpo(true) },
      ],
    },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#hero" className="flex items-center mb-0 md:mb-4">
              <img
                src={logoRRTecnol}
                alt="RR TECNOL"
                className="w-[280px] sm:w-auto h-auto sm:h-40 md:h-40 -my-6 sm:my-0 object-contain"
              />
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto lg:mx-0">
              Consultoria e Serviços de Tecnologia da Informação. Transformando
              desafios em soluções tecnológicas inovadoras.
            </p>
            <p className="text-muted-foreground text-sm font-medium mb-6">
              CNPJ: 63.093.541/0001-21
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors bg-transparent border-none p-0 cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RR TECNOL. Todos os direitos
            reservados.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {showDpo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDpo(false)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-md w-full relative"
            >
              {/* Fechar */}
              <button
                onClick={() => setShowDpo(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>

              {/* Header */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Encarregado de Proteção de Dados (DPO)
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Em conformidade com a LGPD — Lei nº 13.709/2018
              </p>

              <div className="border-t border-border/50 pt-6 space-y-4">
                {/* Nome */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Nome completo</p>
                    <p className="text-sm font-medium text-foreground">João André Baluz Caminha</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:joao@rrtecnol.com.br"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      joao@rrtecnol.com.br
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefone / WhatsApp</p>
                    <a
                      href="https://wa.me/5598982450008"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      (98) 98245-0008
                    </a>
                  </div>
                </div>
              </div>

              {/* Nota LGPD */}
              <p className="mt-6 text-xs text-muted-foreground bg-secondary/30 rounded-lg p-3 leading-relaxed">
                Para exercer seus direitos como titular de dados — acesso, correção, exclusão ou portabilidade — entre em contato com nosso encarregado.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
