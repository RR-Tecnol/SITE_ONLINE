import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import upgradeLogo from "@/assets/logos/upgrade.png";
import gestaoLogo from "@/assets/logos/gestao.png";
import genteLogo from "@/assets/logos/gente.png";
import vidaiLogo from "@/assets/logos/vidai.png";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    { logo: upgradeLogo, name: "Upgrade" },
    { logo: gestaoLogo, name: "Gestão Sobre Rodas" },
    { logo: genteLogo, name: "Sistema Gente" },
    { logo: vidaiLogo, name: "Vidai" },
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

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card p-6 flex items-center justify-center group cursor-pointer relative overflow-hidden h-40 lg:h-52"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Logo Area */}
              <div className="w-full h-full p-2 flex items-center justify-center relative z-10">
                <img 
                  src={product.logo} 
                  alt={`Logo do produto ${product.name}`} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
