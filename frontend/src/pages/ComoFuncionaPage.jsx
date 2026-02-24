import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Thermometer, Brain, Plane, Bell, MapPin, Clock, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const steps = [
  {
    number: "01",
    icon: Thermometer,
    title: "Deteção por Câmara Térmica",
    description: "Câmaras térmicas de alta sensibilidade estão instaladas em zonas estratégicas e monitorizam continuamente a floresta. Detetam qualquer anomalia de temperatura que possa indicar um foco de incêndio, mesmo em condições de pouca visibilidade ou durante a noite.",
    details: ["Monitorização 24/7", "Alta sensibilidade", "Deteção de calor anómalo"],
    color: "fire",
  },
  {
    number: "02",
    icon: Brain,
    title: "Análise e Classificação por IA",
    description: "Quando uma anomalia é detetada, a informação é enviada instantaneamente para o nosso sistema de inteligência artificial. A IA analisa os dados térmicos, considera fatores como condições meteorológicas e histórico da zona, e classifica o nível de risco.",
    details: ["Análise em tempo real", "Machine Learning avançado", "Classificação de risco"],
    color: "tech",
  },
  {
    number: "03",
    icon: Plane,
    title: "Verificação Autónoma por Drone",
    description: "Se o risco for classificado como significativo, um drone autónomo é imediatamente despachado para o local. O drone voa até às coordenadas indicadas e captura imagens e vídeo em tempo real para confirmação visual da existência de fogo.",
    details: ["Deslocação autónoma", "Câmara de alta resolução", "Confirmação visual"],
    color: "fire",
  },
  {
    number: "04",
    icon: Bell,
    title: "Alerta Imediato às Autoridades",
    description: "Caso o incêndio seja confirmado, o sistema envia automaticamente um alerta aos bombeiros e autoridades competentes. O alerta inclui coordenadas GPS precisas, imagens do local, nível de risco estimado e recomendações de ação.",
    details: ["Alerta multicanal", "Coordenadas GPS", "Imagens em tempo real"],
    color: "tech",
  },
];

export const ComoFuncionaPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="como-funciona-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tech-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-tech-main font-mono text-sm tracking-widest uppercase">
              O Processo
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Como <span className="text-tech-gradient">Funciona</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Um sistema integrado de deteção precoce que combina câmaras térmicas, inteligência artificial 
              e drones autónomos para garantir a proteção das florestas portuguesas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-32 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent hidden md:block" />
                )}
                
                <div className="glass rounded-2xl p-8 md:p-10 card-glow">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <span className="text-8xl font-heading font-bold text-white/5">
                          {step.number}
                        </span>
                        <div
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center ${
                            step.color === "fire"
                              ? "bg-fire-main/20"
                              : "bg-tech-main/20"
                          }`}
                        >
                          <step.icon
                            className={`w-8 h-8 ${
                              step.color === "fire" ? "text-fire-main" : "text-tech-main"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <span
                            key={detailIndex}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              step.color === "fire"
                                ? "bg-fire-main/10 text-fire-light border border-fire-main/20"
                                : "bg-tech-main/10 text-tech-light border border-tech-main/20"
                            }`}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Características do Sistema
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 text-center card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-fire-main/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-fire-main" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-2">
                Zonas Estratégicas
              </h3>
              <p className="text-slate-400 text-sm">
                Câmaras posicionadas em pontos críticos com maior risco de incêndio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 text-center card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-tech-main/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-tech-main" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-2">
                Tempo de Reação
              </h3>
              <p className="text-slate-400 text-sm">
                Menos de 5 minutos desde a deteção até ao alerta às autoridades
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 text-center card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-500">24/7</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-2">
                Operação Contínua
              </h3>
              <p className="text-slate-400 text-sm">
                Vigilância ininterrupta dia e noite, em todas as condições
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
              Quer Ver o Sistema em Ação?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Agende uma demonstração e descubra como o FireEye pode proteger a sua região.
            </p>
            <Link
              to="/contactos?type=demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="como-funciona-cta"
            >
              Agendar Demonstração
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
