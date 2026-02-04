import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/brevo";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);



  // ... existing code ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendContactEmail(data);

      toast.success("Mensagem enviada com sucesso!", {
        description: "Recebemos seu contato e retornaremos em breve.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem", {
        description: "Houve um problema ao enviar sua mensagem. Tente novamente ou use o WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@rrtecnol.com.br",
      href: "mailto:contato@rrtecnol.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(98) 9 8895-6818",
      href: "https://api.whatsapp.com/send/?phone=559888956818&text&type=phone_number&app_absent=0",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Luis - MA - Brasil",
      href: "https://www.google.com/maps/place/R.+dos+Beija+%7C+Fl%C3%B4res,+10+-+Ponta+do+Farol,+S%C3%A3o+Lu%C3%ADs+-+MA,+65077-150/@-2.492113,-44.3026291,17z/data=!3m1!4b1!4m10!1m2!2m1!1sR+DOS+BEIJA+FLORES,+n+10,+QUADRA16,+65.077-150,+SAO+MARCOS,+SAO+LUIS+-+MA!3m6!1s0x7f68c477f23d3ed:0x26c8b49a7f8f25d7!8m2!3d-2.492113!4d-44.2977582!15sCklSIERPUyBCRUlKQSBGTE9SRVMsIG4gMTAsIFFVQURSQTE2LCA2NS4wNzctMTUwLCBTQU8gTUFSQ09TLCBTQU8gTFVJUyAtIE1BkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11tdlcl84q?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Vamos Conversar Sobre{" "}
            <span className="text-gradient">Seu Projeto</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Entre em contato conosco e descubra como podemos ajudar a
            transformar sua empresa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="glass-card p-6 flex items-center gap-4 group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {info.title}
                  </div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <Input
                  name="subject"
                  placeholder="Como podemos ajudar?"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
