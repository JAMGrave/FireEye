import { motion } from "framer-motion";
import { Brain, Cpu, Wrench, Leaf, User } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const teamMembers = [
  {
    name: "Membro da Equipa",
    role: "Coordenação",
    bio: "Responsável pela gestão e coordenação geral do projeto.",
    placeholder: true,
  },
  {
    name: "Membro da Equipa",
    role: "Desenvolvimento IA",
    bio: "Especialista em inteligência artificial e machine learning.",
    placeholder: true,
  },
  {
    name: "Membro da Equipa",
    role: "Hardware & Drones",
    bio: "Responsável pela integração de hardware e sistemas de drone.",
    placeholder: true,
  },
  {
    name: "Membro da Equipa",
    role: "Comunicação",
    bio: "Gestão de comunicação e relação com parceiros.",
    placeholder: true,
  },
];

const competencies = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Desenvolvimento de algoritmos de deteção e classificação de risco",
    color: "tech",
  },
  {
    icon: Cpu,
    title: "Sistemas Embebidos",
    description: "Integração de sensores térmicos e processamento de dados",
    color: "fire",
  },
  {
    icon: Wrench,
    title: "Engenharia de Drones",
    description: "Operação e manutenção de veículos aéreos não tripulados",
    color: "tech",
  },
  {
    icon: Leaf,
    title: "Impacto Ambiental",
    description: "Análise e medição de benefícios para o ecossistema",
    color: "green",
  },
];

export const EquipaPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="equipa-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Quem Somos
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Nossa <span className="text-fire-gradient">Equipa</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Uma equipa jovem e dedicada de estudantes de Maristas de Carcavelos, 
              unidos pela missão de proteger as florestas portuguesas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-glow group"
              >
                {/* Photo Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-fire-main/10 to-tech-main/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-12 h-12 text-slate-500" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-fire-main/20 text-fire-light text-xs font-medium mb-3">
                    {member.role}
                  </span>
                  <p className="text-slate-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Competências
            </h2>
            <p className="text-slate-400 mt-4">
              As áreas de especialização que impulsionam o FireEye
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-glow"
              >
                <div
                  className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    comp.color === "fire"
                      ? "bg-fire-main/20"
                      : comp.color === "tech"
                      ? "bg-tech-main/20"
                      : "bg-green-500/20"
                  }`}
                >
                  <comp.icon
                    className={`w-7 h-7 ${
                      comp.color === "fire"
                        ? "text-fire-main"
                        : comp.color === "tech"
                        ? "text-tech-main"
                        : "text-green-500"
                    }`}
                  />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {comp.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {comp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <blockquote className="text-xl md:text-2xl font-heading text-white leading-relaxed">
              "Somos uma equipa jovem com um objetivo claro: usar tecnologia para proteger 
              o que mais importa. Estamos focados em execução e resultados."
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
