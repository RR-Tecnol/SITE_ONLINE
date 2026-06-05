import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import upgradeLogo from "@/assets/logos/upgrade.png";
import gestaoLogo from "@/assets/logos/gestao.png";
import genteLogo from "@/assets/logos/gente.png";
import vidaiLogo from "@/assets/logos/vidai.png";
import astreiaLogo from "@/assets/logos/astreia.png";
import susgeriLogo from "@/assets/logos/susgeri.png";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const products = [
    { logo: upgradeLogo, name: "Upgrade" },
    { logo: gestaoLogo, name: "Gestão Sobre Rodas" },
    { logo: genteLogo, name: "Sistema Gente" },
    { logo: vidaiLogo, name: "Vidai" },
    { logo: astreiaLogo, name: "AstréIA" },
    { logo: susgeriLogo, name: "Susgeri" },
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Produtos <span className="text-gradient">Desenvolvidos</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Conheça algumas das plataformas e sistemas que criamos para transformar o dia a dia de nossos clientes.
          </p>
        </motion.div>

        {/* Big White Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-[0_0_60px_rgba(0,210,235,0.15)] mx-auto max-w-6xl"
        >
          {/* Subtle Outer Glow simulating the image's border lines */}
          <div className="absolute inset-0 border-[3px] border-primary/20 rounded-[2.5rem] pointer-events-none" />
          <div className="absolute inset-[-6px] border border-primary/10 rounded-[3rem] pointer-events-none" />

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                onClick={() => {
                  if (product.name === "Sistema Gente") {
                    navigate("/produtos/gente");
                  }
                  if (product.name === "AstréIA") {
                    navigate("/produtos/astreia");
                  }
                }}
                className="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center p-2 cursor-pointer transition-transform duration-300"
              >
                <img 
                  src={product.logo} 
                  alt={`Logo do produto ${product.name}`} 
                  className={`object-contain drop-shadow-sm ${index === 0 ? 'max-h-[75%] max-w-[75%]' : 'max-h-full max-w-full scale-[1.6] md:scale-[2.0]'}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
