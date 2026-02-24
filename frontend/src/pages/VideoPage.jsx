import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, CheckCircle, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const videoHighlights = [
  "Demonstração do sistema de deteção térmica em funcionamento",
  "Visualização do processo de análise por IA em tempo real",
  "Exemplo de confirmação visual por drone autónomo",
];

export const VideoPage = () => {
  return (
    <div className="bg-background pt-24" data-testid="video-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tech-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-tech-main font-mono text-sm tracking-widest uppercase">
              Apresentação
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              Vídeo <span className="text-tech-gradient">FireEye</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Veja o FireEye em ação e descubra como a nossa tecnologia está a revolucionar 
              a deteção precoce de incêndios florestais em Portugal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp}>
            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10">
              {/* Placeholder Video */}
              <div className="absolute inset-0 bg-gradient-to-br from-fire-main/20 to-tech-main/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 group cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white font-heading text-xl">
                    Vídeo de Apresentação
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    Em breve disponível
                  </p>
                </div>
              </div>
              
              {/* Uncomment and add video URL when available */}
              {/* <iframe
                src="YOUR_VIDEO_URL"
                title="FireEye - Vídeo de Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              /> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              O que vai ver
            </h2>
          </motion.div>

          <div className="space-y-4">
            {videoHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 glass rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-fire-main/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-fire-main" />
                </div>
                <p className="text-slate-300">
                  {highlight}
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
              Quer uma Demonstração ao Vivo?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Agende uma sessão com a nossa equipa para ver o sistema em funcionamento.
            </p>
            <Link
              to="/contactos?type=demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="video-cta"
            >
              Marcar Demonstração ao Vivo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
