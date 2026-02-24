import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_forest-guard-1/artifacts/0d8csrbh_logotipo%20FireEye.png";

const navItems = [
  {
    label: "Sobre",
    children: [
      { label: "Sobre o FireEye", path: "/sobre" },
      { label: "A Nossa Visão", path: "/visao" },
      { label: "Missão", path: "/missao" },
      { label: "Valores", path: "/valores" },
    ],
  },
  { label: "Como Funciona", path: "/como-funciona" },
  { label: "Impacto", path: "/impacto" },
  { label: "Ficha NABCH", path: "/ficha-nabch" },
  { label: "Vídeo", path: "/video" },
  { label: "Protótipo", path: "/prototipo" },
  { label: "Equipa", path: "/equipa" },
  { label: "Contactos", path: "/contactos" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="navbar-logo">
            <img src={LOGO_URL} alt="FireEye" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
                      data-testid={`nav-dropdown-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 bg-background-paper border border-white/10 rounded-lg overflow-hidden min-w-[200px]"
                        >
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.path}
                              className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                              data-testid={`nav-link-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "text-fire-main"
                        : "text-slate-300 hover:text-white"
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contactos?type=demo"
              className="px-5 py-2.5 text-sm font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow"
              data-testid="cta-demo"
            >
              Pedir Demonstração
            </Link>
            <Link
              to="/contactos"
              className="px-5 py-2.5 text-sm font-medium text-white border border-white/20 hover:border-fire-main hover:text-fire-main rounded-md transition-all duration-300"
              data-testid="cta-contact"
            >
              Falar com a Equipa
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background-paper border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-3 text-slate-300"
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l border-white/10"
                          >
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                to={child.path}
                                className="block py-2 text-sm text-slate-400 hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-3 text-slate-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <Link
                  to="/contactos?type=demo"
                  className="w-full py-3 text-center text-sm font-medium text-white bg-fire-main rounded-md"
                >
                  Pedir Demonstração
                </Link>
                <Link
                  to="/contactos"
                  className="w-full py-3 text-center text-sm font-medium text-white border border-white/20 rounded-md"
                >
                  Falar com a Equipa
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
