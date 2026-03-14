import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Facebook, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const contactTypes = [
  { id: "demo", label: "Quero uma demonstração", color: "fire" },
  { id: "partner", label: "Quero ser parceiro", color: "tech" },
  { id: "pilot", label: "Quero apoiar o piloto", color: "green" },
  { id: "general", label: "Contacto geral", color: "slate" },
];

export const ContactosPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    entity: "",
    message: "",
    contact_type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam && contactTypes.find((t) => t.id === typeParam)) {
      setFormData((prev) => ({ ...prev, contact_type: typeParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (typeId) => {
    setFormData((prev) => ({ ...prev, contact_type: typeId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      const result = await response.json();
      setSubmitStatus("success");
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contacto brevemente.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        entity: "",
        message: "",
        contact_type: "general",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-24" data-testid="contactos-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire-main/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-fire-main font-mono text-sm tracking-widest uppercase">
              Contacte-nos
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-8">
              <span className="text-fire-gradient">Contactos</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Estamos prontos para responder às suas questões, agendar demonstrações 
              ou discutir potenciais parcerias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div {...fadeInUp}>
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="font-heading text-2xl font-semibold text-white mb-6">
                  Envie-nos uma mensagem
                </h2>

                {/* Contact Type Selection */}
                <div className="mb-8">
                  <Label className="text-slate-300 mb-3 block">
                    Tipo de contacto
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleTypeSelect(type.id)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          formData.contact_type === type.id
                            ? type.color === "fire"
                              ? "bg-fire-main/20 border-fire-main text-fire-main border"
                              : type.color === "tech"
                              ? "bg-tech-main/20 border-tech-main text-tech-main border"
                              : type.color === "green"
                              ? "bg-green-500/20 border-green-500 text-green-500 border"
                              : "bg-slate-500/20 border-slate-500 text-slate-300 border"
                            : "bg-white/5 border-white/10 text-slate-400 border hover:border-white/20"
                        }`}
                        data-testid={`contact-type-${type.id}`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 mb-2 block">
                      Nome *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="O seu nome"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-fire-main"
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300 mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-fire-main"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="entity" className="text-slate-300 mb-2 block">
                      Entidade / Organização
                    </Label>
                    <Input
                      id="entity"
                      name="entity"
                      type="text"
                      value={formData.entity}
                      onChange={handleInputChange}
                      placeholder="Nome da sua organização (opcional)"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-fire-main"
                      data-testid="contact-entity-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300 mb-2 block">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escreva a sua mensagem..."
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-fire-main resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white bg-fire-main hover:bg-fire-light rounded-md transition-all duration-300 btn-fire-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        A enviar...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Mensagem Enviada!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Ocorreu um erro. Por favor, tente novamente.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="glass rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-semibold text-white mb-6">
                  Informações de Contacto
                </h2>

                <div className="space-y-6">
                  <a
                    href="mailto:fireeye.cmc@gmail.com"
                    className="flex items-center gap-4 text-slate-300 hover:text-fire-main transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-fire-main/20 flex items-center justify-center group-hover:bg-fire-main/30 transition-colors">
                      <Mail className="w-5 h-5 text-fire-main" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">fireeye.cmc@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-xl bg-tech-main/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-tech-main" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Localização</p>
                      <p className="font-medium">Maristas de Carcavelos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-6">
                  Redes Sociais
                </h3>

                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/fire._.eye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-fire-main hover:bg-fire-main/10 transition-all duration-300 group"
                    data-testid="contact-instagram"
                  >
                    <Instagram className="w-5 h-5 text-slate-400 group-hover:text-fire-main" />
                    <span className="text-slate-300 group-hover:text-white">Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61588297911360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-tech-main hover:bg-tech-main/10 transition-all duration-300 group"
                    data-testid="contact-facebook"
                  >
                    <Facebook className="w-5 h-5 text-slate-400 group-hover:text-tech-main" />
                    <span className="text-slate-300 group-hover:text-white">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  Ações Rápidas
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Selecione o tipo de contacto acima para pré-preencher o formulário.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-fire-main" />
                    <span className="text-slate-300">Demonstração — para ver o sistema em ação</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-tech-main" />
                    <span className="text-slate-300">Parceria — para entidades e instituições</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-slate-300">Piloto — para apoiar a fase de testes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
