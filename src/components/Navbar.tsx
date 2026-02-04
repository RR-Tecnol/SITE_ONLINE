import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Quem Somos", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
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
            href="#hero"
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
            {navItems.map((item) => (
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
            {navItems.map((item) => (
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
