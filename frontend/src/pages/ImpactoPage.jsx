import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Target, Shield, Leaf, TrendingDown, Euro, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const impactMetrics = [
  {
    icon: TrendingDown,
    value: "-60%",
    label: "Área Ardida",
    description: "Redução estimada na área afetada por incêndio através de deteção precoce",
    color: "fire",
  },
  {
    icon: Clock,
    value: "-45%",
    label: "Tempo de Resposta",
    description: "Diminuição no tempo entre início do fogo e chegada dos meios de combate",
    color: "tech",
  },
  {
    icon: Euro,
    value: "-50%",
    label: "Custos Operacionais",
    description: "Redução nos custos de combate a incêndios devido a intervenções mais rápidas",
    color: "yellow",
  },
  {
    icon: Leaf,
    value: "30K+",
    label: "Toneladas CO₂",
    description: "Emissões evitadas anualmente pela prevenção de grandes incêndios",
    color: "green",
  },
];

const additionalBenefits = [
  {
    icon: Shield,
    title: "Segurança das Populações",
    description: "Maior tempo de evacuação e proteção de comunidades em zonas de risco.",
  },
  {
    icon: Target,
    title: "Precisão de Alocação",
    description: "Recursos de combate direcionados com precisão GPS para máxima eficiência.",
  },
];

export const ImpactoPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="impacto-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Resultados Esperados
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Impacto <span className="text-fire-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Métricas estimadas do impacto positivo que o sistema FireEye pode ter na proteção 
              das florestas portuguesas e na redução de danos ambientais e económicos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Metrics */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-glow group"
              >
                <div
                  className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    metric.color === "fire"
                      ? "bg-fire-main/20"
                      : metric.color === "tech"
                      ? "bg-tech-main/20"
                      : metric.color === "green"
                      ? "bg-green-500/20"
                      : "bg-yellow-500/20"
                  }`}
                >
                  <metric.icon
                    className={`w-7 h-7 ${
                      metric.color === "fire"
                        ? "text-fire-main"
                        : metric.color === "tech"
                        ? "text-tech-main"
                        : metric.color === "green"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  />
                </div>
                <div
                  className={`text-5xl font-heading font-bold mb-2 ${
                    metric.color === "fire"
                      ? "text-fire-gradient"
                      : metric.color === "tech"
                      ? "text-tech-gradient"
                      : metric.color === "green"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {metric.value}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-400">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeInUp} className="text-center text-xs text-slate-500 mt-8">
            * Indicadores estimados com base em estudos e projeções; em validação com piloto.
          </motion.p>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Benefícios Adicionais
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8 card-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-fire-main/20 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-fire-main" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="glass rounded-2xl p-8 md:p-12 border border-green-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-green-500" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                Impacto Ambiental
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Cada hectare de floresta que conseguimos proteger representa não só a preservação de 
              biodiversidade única, mas também a captura contínua de CO₂ da atmosfera. Os incêndios 
              florestais libertam enormes quantidades de gases de efeito estufa e destroem sumidouros 
              de carbono vitais.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Com o FireEye, estimamos poder evitar a emissão de mais de 30.000 toneladas de CO₂ 
              anualmente, contribuindo ativamente para os objetivos de neutralidade carbónica de Portugal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Quer Fazer Parte Deste Impacto?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Junte-se ao projeto piloto e ajude-nos a validar estes resultados.
            </p>
            <Link
              to="/contactos?type=pilot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="impacto-cta"
            >
              Apoiar o Piloto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
