# FireEye - PRD (Product Requirements Document)

## Original Problem Statement
Website moderno e extremamente apelativo para o projeto FireEye - sistema de deteção precoce de incêndios florestais em Portugal. Visual futurista + institucional com foco em inovação tecnológica, confiança e impacto ambiental.

## User Personas
1. **Proteção Civil / ICNF** - Entidades governamentais interessadas em soluções de prevenção
2. **Câmaras Municipais** - Autarquias de zonas com risco florestal
3. **Empresas Tech** - Potenciais parceiros tecnológicos
4. **Investidores** - Interessados em apoiar o projeto piloto

## Core Requirements (Static)
- Website em português (Portugal)
- Tema dark com acentos laranja fogo (#FF4500) e azul tecnológico (#00A3FF)
- 12 páginas: Home, Sobre, Visão, Missão, Valores, Como Funciona, Impacto, Ficha NABCH, Vídeo, Protótipo, Equipa, Contactos
- Formulário de contacto funcional com envio de emails
- Animações modernas (Framer Motion, particles)
- Mobile-first e responsivo

## What's Been Implemented (24 Feb 2026)
- ✅ Homepage completa com hero, proposta de valor, como funciona, impacto, parceiros, FAQ, CTA final
- ✅ Todas as 12 páginas implementadas com conteúdo completo
- ✅ Navbar sticky com dropdown e CTAs
- ✅ Footer robusto com links e redes sociais
- ✅ Formulário de contacto com 4 tipos (demo, parceiro, piloto, geral)
- ✅ Backend API para contactos com integração Resend
- ✅ Animações Framer Motion em todas as páginas
- ✅ Partículas de fogo no hero
- ✅ Accordion FAQ funcional
- ✅ Design system consistente (glassmorphism, glows)
- ✅ Logótipo FireEye integrado

## Prioritized Backlog

### P0 (Crítico) - Completo ✅
- Website funcional com todas as páginas
- Formulário de contacto operacional

### P1 (Importante)
- Verificar domínio no Resend para emails em produção
- Adicionar fotos reais da equipa quando disponíveis
- Adicionar vídeo real de apresentação
- Adicionar imagens reais do protótipo

### P2 (Nice to Have)
- Adicionar logos reais de parceiros
- Multi-idioma (PT/EN)
- Analytics (Google Analytics)
- SEO meta tags por página
- Animação de mapa de zonas estratégicas

## Technical Stack
- **Frontend**: React 19, Tailwind CSS, Framer Motion, tsparticles, Shadcn/UI
- **Backend**: FastAPI, Motor (MongoDB async), Resend
- **Database**: MongoDB

## Contact Information
- Email: fireeye.cmc@gmail.com
- Location: Maristas de Carcavelos
- Instagram: fire._.eye
- Facebook: FireEye

## Notes
- Resend API em modo teste - emails só enviados para email verificado (joaoagrave@gmail.com)
- Para produção: verificar domínio em resend.com/domains
