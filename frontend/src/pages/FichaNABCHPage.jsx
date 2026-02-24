import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertCircle, Lightbulb, Gift, Users, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const sections = [
  {
    id: "necessidade",
    icon: AlertCircle,
    letter: "N",
    title: "Necessidade",
    color: "red",
    content: `Portugal tem registado, nos últimos anos, um aumento preocupante do número e da intensidade dos incêndios florestais, causando milhares de hectares ardidos, destruição de ecossistemas, elevados prejuízos económicos e riscos diretos para populações e infraestruturas.

Muitos incêndios tornam-se incontroláveis porque não são detetados na sua fase inicial, o que demonstra a necessidade urgente de soluções mais rápidas, eficazes e autónomas para identificar focos de incêndio antes que se espalhem.`,
  },
  {
    id: "aproximacao",
    icon: Lightbulb,
    letter: "A",
    title: "Aproximação à Solução",
    color: "fire",
    content: `A nossa miniempresa propõe um sistema inovador baseado em tecnologia avançada que combina câmaras térmicas de alta sensibilidade com inteligência artificial. Estas câmaras são instaladas em zonas estratégicas e conseguem identificar pequenas alterações de temperatura que possam indicar um foco de incêndio.

Quando é detetada uma ameaça, a informação é enviada para um drone autónomo equipado com IA, que se desloca ao local para confirmar visualmente se existe fogo. Caso o incêndio seja confirmado, o sistema alerta imediatamente os bombeiros e as autoridades competentes, garantindo uma resposta rápida.`,
  },
  {
    id: "beneficios",
    icon: Gift,
    letter: "B",
    title: "Benefícios",
    color: "tech",
    content: `O nosso projeto oferece benefícios importantes para entidades públicas, empresas e proprietários florestais, pois permite a deteção precoce de incêndios, impedindo que pequenos focos se transformem em grandes catástrofes.

Com uma resposta mais rápida, reduz-se significativamente a área ardida, protegendo florestas, património natural e comunidades. Além disso, o sistema diminui prejuízos económicos para o Estado e para privados, aumenta a segurança das populações e garante uma vigilância contínua e autónoma, funcionando 24 horas por dia.`,
  },
  {
    id: "colaboracao",
    icon: Users,
    letter: "C",
    title: "Colaboração",
    color: "green",
    content: `Para garantir a eficácia e aplicação real do projeto, é essencial colaborar com entidades estratégicas como os corpos de bombeiros, que receberão alertas imediatos e poderão intervir rapidamente.

Também será importante trabalhar em conjunto com a Proteção Civil, o ICNF e as câmaras municipais, especialmente em zonas de maior risco. Além disso, a parceria com empresas tecnológicas fornecedoras de drones, câmaras térmicas e software, bem como com organizações ambientais, reforça a implementação do sistema e contribui para uma maior proteção do território.`,
  },
];

export const FichaNABCHPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="ficha-nabch-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Documento Institucional
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Ficha <span className="text-fire-gradient">NABCH</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Necessidade, Aproximação, Benefícios, Colaboração e Gancho — a estrutura 
              que resume o valor e potencial do projeto FireEye.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hook/Headline Section */}
      <section className="py-12 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            {...fadeInUp}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fire-main/30 to-tech-main/30" />
            <div className="relative p-8 md:p-12 text-center">
              <span className="text-fire-main font-mono text-sm tracking-widest uppercase mb-4 block">
                Gancho
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                "Prevenção inteligente para um futuro sem incêndios."
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NABC Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div
                  className={`p-6 flex items-center gap-4 border-b border-white/10 ${
                    section.color === "red"
                      ? "bg-red-500/10"
                      : section.color === "fire"
                      ? "bg-fire-main/10"
                      : section.color === "tech"
                      ? "bg-tech-main/10"
                      : "bg-green-500/10"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      section.color === "red"
                        ? "bg-red-500/20"
                        : section.color === "fire"
                        ? "bg-fire-main/20"
                        : section.color === "tech"
                        ? "bg-tech-main/20"
                        : "bg-green-500/20"
                    }`}
                  >
                    <span
                      className={`text-2xl font-heading font-bold ${
                        section.color === "red"
                          ? "text-red-500"
                          : section.color === "fire"
                          ? "text-fire-main"
                          : section.color === "tech"
                          ? "text-tech-main"
                          : "text-green-500"
                      }`}
                    >
                      {section.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-slate-300 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
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
              Quer ser Parceiro Piloto?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Junte-se às entidades que estão a liderar a transformação na prevenção de incêndios.
            </p>
            <Link
              to="/contactos?type=pilot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="nabch-cta"
            >
              Quero ser Parceiro Piloto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
