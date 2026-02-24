import { motion } from "framer-motion";
import { Shield, Lightbulb, Leaf, Zap, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const values = [
  {
    icon: Shield,
    title: "Segurança",
    description: "A proteção de vidas, comunidades e ecossistemas é a nossa prioridade absoluta.",
    color: "fire",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Procuramos constantemente novas soluções tecnológicas para desafios reais.",
    color: "tech",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Cada ação visa preservar o ambiente e garantir um futuro mais verde.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Otimizamos recursos para maximizar impacto e minimizar desperdício.",
    color: "yellow",
  },
  {
    icon: Heart,
    title: "Responsabilidade Ambiental",
    description: "Comprometemo-nos com a proteção ativa do património natural português.",
    color: "fire",
  },
];

export const ValoresPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="valores-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Os Nossos Valores
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Valores <span className="text-fire-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e ação do nosso projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass rounded-2xl p-8 card-glow group ${
                  index === values.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    value.color === "fire"
                      ? "bg-fire-main/20 group-hover:bg-fire-main/30"
                      : value.color === "tech"
                      ? "bg-tech-main/20 group-hover:bg-tech-main/30"
                      : value.color === "green"
                      ? "bg-green-500/20 group-hover:bg-green-500/30"
                      : "bg-yellow-500/20 group-hover:bg-yellow-500/30"
                  }`}
                >
                  <value.icon
                    className={`w-8 h-8 ${
                      value.color === "fire"
                        ? "text-fire-main"
                        : value.color === "tech"
                        ? "text-tech-main"
                        : value.color === "green"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fire-main/10 to-tech-main/10" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <blockquote className="text-2xl md:text-3xl font-heading text-white leading-relaxed">
              "Os nossos valores não são apenas palavras — são o compromisso que assumimos com Portugal e com as futuras gerações."
            </blockquote>
            <p className="mt-6 text-fire-main font-medium">
              — Equipa FireEye
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
