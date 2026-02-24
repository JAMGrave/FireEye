import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FireParticles } from "../components/FireParticles";
import { 
  Thermometer, 
  Brain, 
  Plane, 
  Bell, 
  Clock, 
  Target, 
  Shield, 
  Leaf,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1648464676756-1ca51d0c4688?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBmaXJlJTIwZmxhbWVzJTIwbmlnaHR8ZW58MHx8fHwxNzcxOTM3NjMxfDA&ixlib=rb-4.1.0&q=85",
  thermal: "https://images.pexels.com/photos/7859787/pexels-photo-7859787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  drone: "https://images.pexels.com/photos/27540652/pexels-photo-27540652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  firefighters: "https://images.pexels.com/photos/20316405/pexels-photo-20316405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const steps = [
  {
    icon: Thermometer,
    title: "Deteção Térmica",
    description: "Câmaras térmicas monitorizam 24/7 e detetam anomalias de calor",
    color: "fire",
  },
  {
    icon: Brain,
    title: "Análise IA",
    description: "Inteligência artificial classifica o risco em tempo real",
    color: "tech",
  },
  {
    icon: Plane,
    title: "Verificação Drone",
    description: "Drone autónomo confirma visualmente a presença de fogo",
    color: "fire",
  },
  {
    icon: Bell,
    title: "Alerta Imediato",
    description: "Bombeiros são alertados com localização GPS exata",
    color: "tech",
  },
];

const impactCards = [
  {
    icon: Clock,
    value: "-45%",
    label: "Tempo de Resposta",
    description: "Redução drástica no tempo entre deteção e alerta",
  },
  {
    icon: Target,
    value: "99%",
    label: "Precisão",
    description: "Taxa de deteção sem falsos positivos",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Vigilância",
    description: "Monitorização contínua dia e noite",
  },
  {
    icon: Leaf,
    value: "-60%",
    label: "Área Ardida",
    description: "Menos hectares destruídos por incêndio",
  },
];

const faqItems = [
  {
    question: "Como evitam falsos positivos?",
    answer: "O nosso sistema utiliza uma abordagem em duas fases: primeiro, as câmaras térmicas detetam anomalias de calor, e depois um drone autónomo equipado com IA confirma visualmente a presença de fogo antes de alertar as autoridades. Esta dupla verificação elimina praticamente todos os falsos positivos.",
  },
  {
    question: "Qual o tempo médio entre deteção e alerta?",
    answer: "O tempo médio desde a deteção inicial até ao alerta aos bombeiros é inferior a 5 minutos. Isto inclui a análise da IA, o deslocamento do drone para confirmação visual e o envio do alerta com coordenadas GPS precisas.",
  },
  {
    question: "Funciona de noite e com fumo?",
    answer: "Sim, as câmaras térmicas funcionam 24 horas por dia, independentemente das condições de visibilidade. Detetam radiação infravermelha (calor), não dependendo de luz visível. Mesmo em condições de fumo denso, conseguem identificar focos de calor anómalos.",
  },
  {
    question: "Que áreas pode cobrir?",
    answer: "Cada estação de câmaras térmicas pode cobrir até 10 km de raio em terreno aberto. Com uma rede estrategicamente posicionada, podemos cobrir grandes extensões florestais. O sistema é escalável e adaptável a diferentes geografias.",
  },
  {
    question: "Como se integra com bombeiros e autoridades?",
    answer: "O FireEye integra-se diretamente com os sistemas de comunicação existentes dos bombeiros e da Proteção Civil. Os alertas são enviados automaticamente via múltiplos canais (SMS, app dedicada, central de comando) incluindo coordenadas GPS, imagens do drone e nível de risco estimado.",
  },
];

const partnerLogos = [
  { name: "Proteção Civil", placeholder: true },
  { name: "ICNF", placeholder: true },
  { name: "Câmara Municipal", placeholder: true },
  { name: "Bombeiros", placeholder: true },
  { name: "Tech Partner", placeholder: true },
];

export const HomePage = () => {
  return (
    <div className="bg-background" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Floresta em chamas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Particles */}
        <FireParticles />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-fire-main/20 border border-fire-main/30 text-fire-light text-sm font-mono"
            >
              SISTEMA DE DETEÇÃO PRECOCE
            </motion.span>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
              <span className="text-white">Deteção precoce.</span>
              <br />
              <span className="text-fire-gradient">Resposta imediata.</span>
              <br />
              <span className="text-white">Menos hectares queimados.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Câmaras térmicas + Inteligência Artificial + Drones autónomos para travar incêndios antes de crescerem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contactos?type=demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow group"
                data-testid="hero-cta-demo"
              >
                Pedir Demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/como-funciona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/20 hover:border-tech-main hover:text-tech-main rounded-md transition-all duration-300"
                data-testid="hero-cta-how"
              >
                Ver Como Funciona
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-fire-main"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-background-paper" data-testid="value-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Proposta de Valor
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
              Proteção Inteligente
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Thermometer,
                title: "Deteção Térmica Contínua",
                description: "Monitorização 24/7 com câmaras térmicas de alta sensibilidade que detetam qualquer anomalia de temperatura.",
                image: IMAGES.thermal,
              },
              {
                icon: Plane,
                title: "Confirmação Autónoma",
                description: "Drones equipados com IA confirmam visualmente a existência de fogo, eliminando falsos alarmes.",
                image: IMAGES.drone,
              },
              {
                icon: Bell,
                title: "Alerta Imediato",
                description: "Bombeiros e autoridades são alertados instantaneamente com localização GPS e imagens em tempo real.",
                image: IMAGES.firefighters,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl bg-background border border-white/10 card-glow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-8 relative">
                  <div className="w-14 h-14 rounded-xl bg-fire-main/20 flex items-center justify-center mb-4 -mt-20 relative z-10 border border-fire-main/30">
                    <item.icon className="w-7 h-7 text-fire-main" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden" data-testid="how-it-works-section">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fire-main/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-tech-main font-mono text-sm tracking-widest uppercase">
              Processo
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
              Como Funciona
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Um sistema integrado em 4 etapas que garante deteção rápida e resposta eficaz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
                )}
                
                <div className="glass rounded-2xl p-6 relative z-10 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        step.color === "fire"
                          ? "bg-fire-main/20 text-fire-main"
                          : "bg-tech-main/20 text-tech-main"
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-4xl font-bold text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 text-tech-main hover:text-tech-light font-medium transition-colors"
              data-testid="how-it-works-link"
            >
              Ver detalhes completos
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 md:py-32 bg-background-paper" data-testid="impact-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Resultados
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
              Impacto Mensurável
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {impactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass rounded-2xl p-8 text-center card-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-fire-main/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-fire-main/20 transition-colors">
                  <card.icon className="w-7 h-7 text-fire-main" />
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-fire-gradient mb-2">
                  {card.value}
                </div>
                <div className="font-heading font-semibold text-white mb-2">
                  {card.label}
                </div>
                <p className="text-sm text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p {...fadeInUp} className="text-center text-xs text-slate-500 mt-8">
            * Indicadores estimados; em validação com piloto.
          </motion.p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 md:py-32 bg-background" data-testid="partners-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-tech-main font-mono text-sm tracking-widest uppercase">
              Colaboração
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
              Parceiros & Instituições
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Trabalhamos em conjunto com entidades estratégicas para maximizar o impacto
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="w-36 h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-medium text-sm hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                {partner.name}
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/contactos?type=partner"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-fire-main border border-fire-main/30 hover:bg-fire-main/10 rounded-md transition-colors"
              data-testid="become-partner-btn"
            >
              Tornar-se Parceiro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-background-paper" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Perguntas Frequentes
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-4">
              FAQ
            </h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl border border-white/10 overflow-hidden px-6"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left text-white hover:text-fire-main py-5 font-heading font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden" data-testid="final-cta-section">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-fire-main/20 to-tech-main/20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fire-main/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-main/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Junte-se à Prevenção Inteligente
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Seja parceiro desta revolução tecnológica na proteção das nossas florestas. 
              Juntos podemos fazer a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactos?type=demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
                data-testid="final-cta-demo"
              >
                Agendar Demonstração
              </Link>
              <Link
                to="/contactos?type=partner"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 rounded-md transition-all duration-300"
                data-testid="final-cta-partner"
              >
                Quero ser Parceiro
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
