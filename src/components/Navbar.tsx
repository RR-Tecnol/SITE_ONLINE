import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/#about" },
    { name: "Serviços", href: "/#services" },
    { name: "Contato", href: "/#contact" },
  ];

  const products = [
    { name: "GENTE", description: "Gestão de Pessoas", href: "/produtos/gente" },
    { name: "AstréIA", description: "Assistente Jurídico com IA", href: "/produtos/astreia" },
    { name: "UPGRADE", description: "Tecnologia Educacional", href: "/produtos/upgrade" },
    { name: "Gestão Sobre Rodas", description: "Caravanas de Saúde", href: "/produtos/gestao-sobre-rodas" },
    { name: "VidAI", description: "Gestão Clínica com IA", href: "/produtos/vidai" },
    { name: "SUSGERI", description: "Saúde Gerencial e Integrado", href: "/produtos/susgeri" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
        ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={logoRRTecnol}
              alt="RR TECNOL"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transform scale-[2.3] md:scale-[2.5] origin-left ml-0 md:ml-4 relative z-50 transition-transform duration-300"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.slice(0, 3).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              {/* Trigger */}
              <motion.button
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
              >
                Produtos
                <ChevronDown
                  className={`w-3.5 h-3.5 text-primary transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>

              {/* Dropdown */}
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 mt-3 w-64 glass-card p-2 z-50"
                >
                  <p className="text-primary text-[10px] font-medium uppercase tracking-widest px-3 py-1.5">
                    Nossos Produtos
                  </p>
                  <div className="border-t border-border/50 my-1" />
                  {products.map((product) => (
                    <motion.a
                      key={product.name}
                      href={product.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors group/item"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {product.description}
                        </p>
                      </div>
                      <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=559888956818&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 flex flex-col gap-4">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Produtos no mobile */}
            <div>
              <button
                className="flex items-center gap-2 w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                Produtos
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: isMobileProductsOpen ? "auto" : 0, opacity: isMobileProductsOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="pl-4 py-2 flex flex-col gap-3 border-l-2 border-primary/20 ml-2 mt-1 mb-2">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-medium">{product.name}</span>
                      <span className="text-muted-foreground/60 text-xs truncate">— {product.description}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {navItems.slice(3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=559888956818&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Button variant="hero" size="sm" className="w-full">
                Fale Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
