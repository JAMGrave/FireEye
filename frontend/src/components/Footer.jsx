import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_forest-guard-1/artifacts/0d8csrbh_logotipo%20FireEye.png";

const footerLinks = {
  projeto: [
    { label: "Sobre o FireEye", path: "/sobre" },
    { label: "Como Funciona", path: "/como-funciona" },
    { label: "Impacto", path: "/impacto" },
    { label: "Ficha NABCH", path: "/ficha-nabch" },
  ],
  institucional: [
    { label: "A Nossa Visão", path: "/visao" },
    { label: "Missão", path: "/missao" },
    { label: "Valores", path: "/valores" },
    { label: "Equipa", path: "/equipa" },
  ],
  recursos: [
    { label: "Vídeo", path: "/video" },
    { label: "Protótipo", path: "/prototipo" },
    { label: "FAQ", path: "/#faq" },
    { label: "Contactos", path: "/contactos" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background-paper border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={LOGO_URL} alt="FireEye" className="h-14" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Sistema inovador de deteção precoce de incêndios florestais utilizando 
              câmaras térmicas, inteligência artificial e drones autónomos.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/fire._.eye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-fire-main/20 text-slate-400 hover:text-fire-main transition-all duration-300"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588297911360"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-tech-main/20 text-slate-400 hover:text-tech-main transition-all duration-300"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Projeto</h4>
            <ul className="space-y-3">
              {footerLinks.projeto.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-fire-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-fire-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contactos</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:fireeye.cmc@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-fire-main transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  fireeye.cmc@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                Maristas de Carcavelos
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contactos?type=partner"
                className="inline-flex items-center gap-2 text-sm font-medium text-fire-main hover:text-fire-light transition-colors"
              >
                Quero ser parceiro
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} FireEye. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-500">
            Desenvolvido por alunos de Maristas de Carcavelos
          </p>
        </div>
      </div>
    </footer>
  );
};
