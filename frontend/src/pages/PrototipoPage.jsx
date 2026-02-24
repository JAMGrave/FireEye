import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Wrench, Target, ArrowRight, Image } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const prototypeImages = [
  { id: 1, title: "Câmara Térmica", placeholder: true },
  { id: 2, title: "Sistema IA", placeholder: true },
  { id: 3, title: "Drone Autónomo", placeholder: true },
  { id: 4, title: "Dashboard", placeholder: true },
];

const milestones = [
  {
    title: "Validação Técnica",
    description: "Testes de precisão e fiabilidade do sistema de deteção",
    status: "Em curso",
  },
  {
    title: "Piloto Regional",
    description: "Implementação em zona florestal selecionada com parceiros",
    status: "Próximo",
  },
  {
    title: "Expansão Nacional",
    description: "Escalar a solução para múltiplas regiões de Portugal",
    status: "Futuro",
  },
];

export const PrototipoPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="prototipo-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Desenvolvimento
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Protótipo <span className="text-fire-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Conheça o estado atual do desenvolvimento do nosso sistema e os 
              componentes que estão a dar forma ao FireEye.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Galeria do Protótipo
            </h2>
            <p className="text-slate-400 mt-4">
              Componentes e módulos do sistema FireEye
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prototypeImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-glow group"
              >
                <div className="aspect-video bg-gradient-to-br from-fire-main/10 to-tech-main/10 flex items-center justify-center">
                  <div className="text-center">
                    <Image className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm">Imagem em breve</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-white text-center">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Estado Atual
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="glass rounded-2xl p-8 md:p-10 border border-tech-main/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-tech-main/20 flex items-center justify-center">
                <Wrench className="w-7 h-7 text-tech-main" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-tech-main/20 text-tech-main text-sm font-medium mb-1">
                  Em Desenvolvimento
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  Fase de Prototipagem Avançada
                </h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              O protótipo FireEye encontra-se em fase de desenvolvimento ativo. Os principais 
              componentes — câmara térmica, sistema de IA e drone de verificação — estão a ser 
              integrados e testados para garantir a máxima fiabilidade do sistema completo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Próximos Passos
            </h2>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                {/* Timeline Indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      milestone.status === "Em curso"
                        ? "bg-fire-main animate-pulse"
                        : milestone.status === "Próximo"
                        ? "bg-tech-main"
                        : "bg-slate-600"
                    }`}
                  />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-20 bg-white/10" />
                  )}
                </div>

                {/* Content */}
                <div className="glass rounded-xl p-6 flex-1 card-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {milestone.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        milestone.status === "Em curso"
                          ? "bg-fire-main/20 text-fire-main"
                          : milestone.status === "Próximo"
                          ? "bg-tech-main/20 text-tech-main"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Quer Apoiar a Fase Piloto?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Seja parte da próxima etapa do FireEye. A sua colaboração é essencial.
            </p>
            <Link
              to="/contactos?type=pilot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="prototipo-cta"
            >
              Apoiar Fase Piloto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
