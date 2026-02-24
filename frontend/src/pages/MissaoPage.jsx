import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const MissaoPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="missao-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              A Nossa Missão
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Missão <span className="text-fire-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              O projeto consiste num sistema inovador de deteção precoce de incêndios, usando câmaras térmicas 
              que identificam rapidamente qualquer foco de calor suspeito. Essas informações são enviadas para 
              uma inteligência artificial integrada num drone, que vai verificar no local se existe fogo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-8">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Se o incêndio for confirmado, os bombeiros são alertados de imediato. Esta solução ajuda a 
              <span className="text-fire-main font-semibold"> reduzir a área ardida em Portugal</span> e 
              diminui os custos associados aos incêndios, permitindo uma resposta muito mais rápida e eficaz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Missão Operacional */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-10 card-glow"
            >
              <div className="w-16 h-16 rounded-2xl bg-tech-main/20 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-tech-main" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
                Missão Operacional
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-tech-main mt-2 flex-shrink-0" />
                  <span>Vigilância contínua 24/7 das zonas florestais de risco</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-tech-main mt-2 flex-shrink-0" />
                  <span>Reduzir drasticamente o tempo entre deteção e alerta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-tech-main mt-2 flex-shrink-0" />
                  <span>Garantir resposta imediata com coordenadas GPS precisas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-tech-main mt-2 flex-shrink-0" />
                  <span>Eliminar falsos positivos através de confirmação visual</span>
                </li>
              </ul>
            </motion.div>

            {/* Missão Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-10 card-glow"
            >
              <div className="w-16 h-16 rounded-2xl bg-fire-main/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-fire-main" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
                Missão Social
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-fire-main mt-2 flex-shrink-0" />
                  <span>Proteger vidas humanas e comunidades vulneráveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-fire-main mt-2 flex-shrink-0" />
                  <span>Preservar ecossistemas e biodiversidade portuguesa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-fire-main mt-2 flex-shrink-0" />
                  <span>Reduzir impacto económico dos incêndios florestais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-fire-main mt-2 flex-shrink-0" />
                  <span>Contribuir para um país mais seguro e sustentável</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Apoie a Nossa Missão
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Descubra como o sistema funciona e como pode contribuir para esta causa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/como-funciona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
                data-testid="missao-cta-how"
              >
                Ver Como Funciona
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/impacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/20 hover:border-fire-main rounded-md transition-all duration-300"
                data-testid="missao-cta-impact"
              >
                Ver Impacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
