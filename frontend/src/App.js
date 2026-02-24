import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { SobrePage } from "./pages/SobrePage";
import { VisaoPage } from "./pages/VisaoPage";
import { MissaoPage } from "./pages/MissaoPage";
import { ValoresPage } from "./pages/ValoresPage";
import { ComoFuncionaPage } from "./pages/ComoFuncionaPage";
import { ImpactoPage } from "./pages/ImpactoPage";
import { FichaNABCHPage } from "./pages/FichaNABCHPage";
import { VideoPage } from "./pages/VideoPage";
import { PrototipoPage } from "./pages/PrototipoPage";
import { EquipaPage } from "./pages/EquipaPage";
import { ContactosPage } from "./pages/ContactosPage";

function App() {
  return (
    <div className="App bg-background min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/visao" element={<VisaoPage />} />
            <Route path="/missao" element={<MissaoPage />} />
            <Route path="/valores" element={<ValoresPage />} />
            <Route path="/como-funciona" element={<ComoFuncionaPage />} />
            <Route path="/impacto" element={<ImpactoPage />} />
            <Route path="/ficha-nabch" element={<FichaNABCHPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/prototipo" element={<PrototipoPage />} />
            <Route path="/equipa" element={<EquipaPage />} />
            <Route path="/contactos" element={<ContactosPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#0A0A0A',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
