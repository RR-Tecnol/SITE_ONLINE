import { motion } from "framer-motion";
import { Globe, MessageCircle, Mail } from "lucide-react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { useEffect, useRef } from "react";
import logoRRTecnol from "@/assets/logo-rrtecnol.png";

// Componente de Partículas
const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number; y: number; size: number; speedX: number; speedY: number; opacity: number;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;
            }
            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(0, 210, 235, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            const maxDistance = 150;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.15;
                        ctx!.strokeStyle = `rgba(0, 210, 235, ${opacity})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => { particle.update(); particle.draw(); });
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        init();
        animate();

        window.addEventListener("resize", () => { resizeCanvas(); init(); });
        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener("resize", resizeCanvas); };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />;
};

const Linktree = () => {
    const links = [
        { icon: Globe, label: "Nosso Site", href: "https://rrtecnol.com.br/", description: "Conheça nossos serviços" },
        { icon: MessageCircle, label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=559888956818&text&type=phone_number&app_absent=0", description: "Fale conosco agora" },
        { icon: Mail, label: "Email", href: "mailto:contato@rrtecnol.com.br", description: "Envie um email" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
    ];

    return (
        <div className="linktree-container">
            <div className="grid-pattern" />
            <ParticleBackground />
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />

            <div className="content">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inner-content">
                    {/* Logo */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="logo-container">
                        <img src={logoRRTecnol} alt="RR TECNOL" className="logo" />
                    </motion.div>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="tagline">
                        Consultoria & Serviços de TI
                    </motion.p>

                    {/* Links */}
                    <div className="links-container">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="link-card"
                            >
                                <div className="link-icon"><link.icon /></div>
                                <div className="link-text">
                                    <h3>{link.label}</h3>
                                    <p>{link.description}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Social */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="social-links">
                        {socialLinks.map((social) => (
                            <motion.a key={social.label} href={social.href} whileHover={{ scale: 1.1 }} className="social-icon">
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    <p className="footer">© {new Date().getFullYear()} RR TECNOL. Todos os direitos reservados.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Linktree;
