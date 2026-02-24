import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Cpu, Leaf, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const commitments = [
  {
    icon: Shield,
    title: "Segurança do Território",
    description: "Proteger as florestas, comunidades e infraestruturas portuguesas através de vigilância tecnológica avançada.",
    color: "fire",
  },
  {
    icon: Cpu,
    title: "Inovação Aplicada",
    description: "Utilizar as mais recentes tecnologias de IA, drones e sensores térmicos para criar soluções práticas e eficazes.",
    color: "tech",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade Mensurável",
    description: "Reduzir significativamente os danos ambientais e económicos causados pelos incêndios florestais.",
    color: "green",
  },
];

export const VisaoPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="visao-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tech-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-tech-main font-mono text-sm tracking-widest uppercase">
              A Nossa Visão
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Visão <span className="text-tech-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ser a solução de referência em Portugal na deteção precoce de incêndios florestais, 
              utilizando tecnologia avançada para garantir uma resposta rápida, eficaz e sustentável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="glass rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              Queremos construir um futuro onde os incêndios sejam identificados antes de se tornarem graves, 
              protegendo as florestas, as comunidades e reduzindo significativamente os danos ambientais e económicos.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Queremos liderar a transformação tecnológica na prevenção de incêndios, contribuindo para um 
              <span className="text-fire-main font-semibold"> país mais seguro e resiliente</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Commitments */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Visão em 3 Compromissos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-glow text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                    commitment.color === "fire"
                      ? "bg-fire-main/20"
                      : commitment.color === "tech"
                      ? "bg-tech-main/20"
                      : "bg-green-500/20"
                  }`}
                >
                  <commitment.icon
                    className={`w-8 h-8 ${
                      commitment.color === "fire"
                        ? "text-fire-main"
                        : commitment.color === "tech"
                        ? "text-tech-main"
                        : "text-green-500"
                    }`}
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  {commitment.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Partilha da Nossa Visão?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Junte-se a nós na construção de um futuro mais seguro para as florestas portuguesas.
            </p>
            <Link
              to="/contactos?type=partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="visao-cta"
            >
              Tornar-se Parceiro
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
