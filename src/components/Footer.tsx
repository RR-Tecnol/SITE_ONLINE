import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

const Footer = () => {
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
      links: ["Quem Somos", "Nossos Valores", "Equipe", "Carreiras"],
    },
    {
      title: "Serviços",
      links: ["Desenvolvimento", "Consultoria", "Suporte", "Cloud"],
    },
    {
      title: "Legal",
      links: ["Privacidade", "Termos de Uso", "Cookies"],
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
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
    </footer>
  );
};

export default Footer;
