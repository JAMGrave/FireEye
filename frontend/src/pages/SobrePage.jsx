import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const SobrePage = () => {
  return (
    <div className="bg-background pt-24" data-testid="sobre-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Sobre o Projeto
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Sobre o <span className="text-fire-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              O FireEye é um projeto inovador que utiliza câmaras térmicas para detetar o menor sinal de incêndio. 
              Após a deteção, as informações são enviadas para um sistema de inteligência artificial que aciona 
              drones para confirmar a presença de fogo. Se confirmado, os bombeiros são imediatamente alertados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* O Problema */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-red-500" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                O Problema
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Os incêndios florestais em Portugal agravam-se porque são frequentemente detetados tarde demais. 
                Quando os meios de combate chegam ao local, o fogo já se espalhou de forma descontrolada, 
                causando devastação ambiental e económica.
              </p>
            </motion.div>

            {/* A Solução */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8 card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-fire-main/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-fire-main" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                A Solução
              </h2>
              <p className="text-slate-400 leading-relaxed">
                O FireEye integra tecnologia em cadeia: câmaras térmicas para deteção contínua, 
                inteligência artificial para análise de risco e drones autónomos para confirmação visual. 
                Este sistema permite uma resposta muito mais rápida e eficaz.
              </p>
            </motion.div>

            {/* Porquê Agora */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-8 card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-tech-main/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-tech-main" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                Porquê Agora
              </h2>
              <p className="text-slate-400 leading-relaxed">
                As alterações climáticas aumentam o risco de incêndios em Portugal. 
                A necessidade de automação e resposta rápida nunca foi tão urgente. 
                O FireEye representa a evolução natural da prevenção de incêndios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-8">
              Uma Abordagem Revolucionária
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
                Esta abordagem revolucionária visa prevenir incêndios e reduzir o impacto ambiental, 
                especialmente considerando o aumento de hectares queimados em Portugal nos últimos anos.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Com o FireEye, a deteção precoce pode significar menos áreas devastadas e menos custos para o Estado. 
                O sistema opera 24 horas por dia, 7 dias por semana, garantindo vigilância contínua das zonas florestais 
                de maior risco.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A combinação de câmaras térmicas de alta sensibilidade, algoritmos de inteligência artificial 
                avançados e drones autónomos cria uma rede de proteção eficaz que pode identificar focos de incêndio 
                nos primeiros minutos, quando ainda são controláveis.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/como-funciona"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="sobre-cta-how"
            >
              Ver Como Funciona
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/visao"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-white/20 hover:border-fire-main rounded-md transition-all duration-300"
              data-testid="sobre-cta-vision"
            >
              A Nossa Visão
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
