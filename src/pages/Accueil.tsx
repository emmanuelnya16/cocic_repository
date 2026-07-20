/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { PartnerLogosMarquee } from "../components/PartnerLogosMarquee";
import { REFERENCES_DATA } from "../data";


export const Accueil: React.FC = () => {
  // Highlighted references to loop inside the marquee
  const marqueeClients = REFERENCES_DATA;

  // Hero background slideshow — smooth crossfade, no black flash
  const heroSlides = [
    "/slides/IMG-20260720-WA0026.jpg",
    "/realisations/IMG-20260720-WA0046.jpg",
    "/realisations/projet_tradex_4.PNG",
    "/slides/IMG-20260720-WA0025.jpg",
    "/realisations/IMG-20260720-WA0053.jpg",
    "/realisations/IMG-20260720-WA0048.jpg",
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 3 poles cards
  const poles = [
    {
      id: "pole-signaletique",
      num: "01",
      title: "Signalétique & Enseignes",
      desc: "Enseignes lumineuses 3D, totems directionnels monumentaux, habillages de façades en Alucobond et signalétique directionnelle intérieure/extérieure intégrée.",
      image: "/realisations/projet_tradex_4.PNG",
      link: "/services?pole=signaletique",
      clipClass: "clip-top-left"
    },
    {
      id: "pole-textile",
      num: "02",
      title: "Textile & Confection",
      desc: "Lignes d'uniformes corporate haut de gamme, tenues industrielles techniques (EPI normés), casquettes et merchandising d'image brodés ou sérigraphiés.",
      image: "/realisations/textile_1.jpg",
      link: "/services?pole=textile",
      clipClass: "clip-bottom-right"
    },
    {
      id: "pole-impression",
      num: "03",
      title: "Impression & Arts Graphiques",
      desc: "Impression numérique UV à plat grand format sur rigides, habillages de flottes de véhicules (wrapping 3M), affichages urbains de haute durabilité.",
      image: "/realisations/IMG-20260720-WA0024.jpg",
      link: "/services?pole=impression",
      clipClass: "clip-top-left"
    }
  ];

  return (
    <PageTransition>
      {/* 1. HERO SECTION — BACKGROUND SLIDESHOW + DESIGN UNCHANGED */}
      <section
        id="hero-section"
        className="relative min-h-screen pt-28 pb-20 flex items-center bg-brand-navy overflow-hidden"
      >
        {/* ── BACKGROUND SLIDESHOW — CROSSFADE ── */}
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${src}")`,
                opacity: idx === activeIdx ? 1 : 0,
                transition: "opacity 1.4s ease-in-out",
                zIndex: idx === activeIdx ? 1 : 0,
                willChange: "opacity",
              }}
            />
          ))}
        </div>

        {/* ── OVERLAYS — toujours au-dessus du slideshow (z-10) ── */}
        {/* Dégradé gauche-droite navy : garantit la lisibilité du texte côté gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-brand-navy/40 pointer-events-none" style={{ zIndex: 10 }} />
        {/* Dégradé bas-haut : assombrit le bas et le haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/40 pointer-events-none" style={{ zIndex: 11 }} />
        {/* Blur permanent sur toute la surface */}
        <div className="absolute inset-0 backdrop-blur-[5px] pointer-events-none" style={{ zIndex: 12 }} />
        {/* Teinte navy supplémentaire pour garantir la lisibilité */}
        <div className="absolute inset-0 bg-brand-navy/30 pointer-events-none" style={{ zIndex: 13 }} />

        {/* Éléments décoratifs abstraits */}
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" style={{ zIndex: 14 }} />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red opacity-15 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 14 }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue opacity-20 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 14 }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content - Sits directly on the background with beautiful, highly legible floating layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left relative z-10"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-red/15 px-4 py-2 border border-brand-red/35 mb-6 clip-btn-cut shadow-md"
            >
              <Sparkles className="w-4 h-4 text-brand-red animate-pulse" />
              <span className="font-display font-bold text-[10px] sm:text-xs text-white uppercase tracking-widest">
                25 Ans d'excellence visuelle
              </span>
            </motion.div>

            {/* Display XXL Slogan with Light Rotation on "Empreinte" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-archivo text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.05] mb-6 text-left font-black drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            >
              Laisser la plus belle<br />
              <span className="inline-block text-brand-red mt-2 relative transform -rotate-1 origin-left font-black tracking-wide drop-shadow-[0_2px_20px_rgba(238,50,58,0.6)]">
                Empreinte…
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-base sm:text-lg md:text-xl text-brand-paleblue max-w-xl mb-8 leading-relaxed text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            >
              COCIC SARL réinvente la communication visuelle en Afrique subsaharienne. 
              Du conseil stratégique de marque à la production industrielle, nous 
              déployons des solutions pérennes de signalétique, textile et impression grand format.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link id="hero-cta-services" to="/services" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto shadow-lg hover:shadow-brand-red/20">
                  Découvrir nos réalisations
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link id="hero-cta-about" to="/a-propos" className="w-full sm:w-auto">
                <Button variant="light" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm shadow-lg">
                  Notre histoire
                </Button>
              </Link>
            </motion.div>

            {/* Metric counters with elegant semi-transparent separator line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full"
            >
              <div className="flex flex-col">
                <AnimatedCounter target={25} suffix=" ans" />
                <span className="font-sans text-[10px] sm:text-xs text-brand-paleblue/80 uppercase tracking-widest mt-1 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  D'Expérience
                </span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter target={40} suffix="+" />
                <span className="font-sans text-[10px] sm:text-xs text-brand-paleblue/80 uppercase tracking-widest mt-1 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  Grands Comptes
                </span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter target={6} suffix=" pays" />
                <span className="font-sans text-[10px] sm:text-xs text-brand-paleblue/80 uppercase tracking-widest mt-1 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  D'Intervention
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero Right: COCIC Logo Display */}
          <div className="lg:col-span-5 hidden lg:block relative justify-self-center w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[4/5] bg-white clip-top-left offset-register border border-brand-paleblue/60 flex items-center justify-center overflow-hidden shadow-xl"
            >
              {/* Subtle light background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-offwhite to-brand-paleblue/20 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

              {/* COCIC Logo — centré et mise en valeur */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-10">
                <img
                  src="/cocic.webp"
                  alt="COCIC SARL — Atelier Intégré Douala"
                  className="w-full max-w-[220px] object-contain drop-shadow-[0_4px_16px_rgba(0,92,170,0.15)]"
                />
                <div className="w-12 h-[2px] bg-brand-red mx-auto" />
                <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-brand-grey text-center">
                  Excellence Industrielle · Douala
                </span>
              </div>

              {/* Highlight red diagonal accent banner */}
              <div className="absolute bottom-6 -left-6 bg-brand-red text-white py-3 px-6 font-display font-bold text-xs uppercase tracking-widest clip-btn-cut shadow-lg">
                Atelier Intégré Douala
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── SLIDE INDICATORS ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="rounded-full transition-all duration-500"
              style={{
                width: idx === activeIdx ? "28px" : "8px",
                height: "8px",
                background: idx === activeIdx ? "#E30613" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </section>

      {/* 2. THE 3 PÔLES OF ACTIVITY */}
      <section id="poles-section" className="py-24 bg-brand-offwhite">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            number="01"
            title="Nos 3 Pôles d'Activité"
            subtitle="De l'étude de plans techniques à la livraison d'enseignes ou d'uniformes, nous maîtrisons l'intégralité du cycle industriel sous un même toit."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {poles.map((pole, idx) => (
              <motion.div
                key={pole.id}
                id={pole.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white border border-brand-paleblue shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                style={{ contentVisibility: "auto" }}
              >
                {/* Visual block with custom clip corners */}
                <div className={`relative h-56 overflow-hidden bg-brand-blue ${pole.clipClass}`}>
                  <img
                    src={pole.image}
                    alt={pole.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  {/* Category numeric indicator */}
                  <span className="absolute top-4 left-4 font-archivo text-2xl text-white/50 group-hover:text-brand-red transition-colors">
                    {pole.num}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-8 flex-grow flex flex-col justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-blue uppercase mb-3 tracking-tight group-hover:text-brand-red transition-colors">
                      {pole.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-grey leading-relaxed mb-6">
                      {pole.desc}
                    </p>
                  </div>

                  <Link
                    id={`link-${pole.id}`}
                    to={pole.link}
                    className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-brand-blue group-hover:text-brand-red uppercase tracking-wider mt-auto focus:outline-none"
                  >
                    Voir les projets
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE BENEFITS/DIFFERENTIATORS ("Pulse Créatif" design touch) */}
      <section id="benefits-section" className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Accroche and Brand vision */}
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-brand-red font-bold block mb-2">
                02 — Notre Vision
              </span>
              <h2 className="font-archivo text-3xl sm:text-4xl uppercase tracking-tight leading-none text-white mb-6">
                Pourquoi travailler avec COCIC ?
              </h2>
              <p className="font-sans text-sm text-brand-paleblue/80 leading-relaxed mb-8">
                Nous associons la rigueur d'un atelier de production certifié B2B avec l'agilité conceptuelle d'une agence de design. Nos équipes vous assistent dans le conseil, la création, la fabrication et l'assemblage physique sur site.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/5 flex items-center justify-center text-brand-red clip-btn-cut">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white mb-1">
                      Technologie CNC & UV
                    </h4>
                    <p className="font-sans text-xs text-brand-paleblue/60 leading-relaxed">
                      Dernières machines laser et traceurs durables pour climats rudes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/5 flex items-center justify-center text-brand-red clip-btn-cut">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white mb-1">
                      Rigueur Allemande & Japonaise
                    </h4>
                    <p className="font-sans text-xs text-brand-paleblue/60 leading-relaxed">
                      Atelier équipé Juki, Tajima, Epson et Roland.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic offset showcase banner */}
            <div className="relative">
              <div className="aspect-video w-full bg-brand-blue clip-top-left offset-register">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial Signage Assembly"
                  loading="lazy"
                  className="w-full h-full object-cover clip-top-left filter grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 clip-bottom-right max-w-xs shadow-xl hidden sm:block">
                <span className="font-archivo text-3xl font-black block leading-none mb-1">
                  100%
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-brand-paleblue/80 block">
                  Intégration de production à Douala
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CLIENT LOGO HORIZONTAL INFINITE SCROLL — 3 rows with real partner logos */}
      <section id="logos-section" className="py-16 bg-white border-y border-brand-paleblue overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-brand-red font-bold block mb-1">
              03 — Confiance
            </span>
            <h3 className="font-archivo text-xl uppercase text-brand-blue">
              Ils nous font confiance au quotidien
            </h3>
          </div>
          <Link
            id="logos-cta-references"
            to="/references"
            className="font-display font-bold text-xs uppercase tracking-wider text-brand-red flex items-center gap-1 hover:underline"
          >
            Voir toutes nos références
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-row partner logos marquee */}
        <PartnerLogosMarquee bgClass="bg-white" />
      </section>


      {/* 5. CATA CITATION & GRAND CTA SECTION */}
      <section id="cta-section" className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />
        
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Slogan Citation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <span className="text-4xl md:text-5xl text-brand-red font-serif italic block mb-4">«</span>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-paleblue leading-relaxed px-6">
              Si vous continuez de faire ce que vous avez toujours fait, vous continuerez d'obtenir ce que vous avez toujours obtenu.
            </p>
            <span className="text-4xl md:text-5xl text-brand-red font-serif italic block mt-4">»</span>
            <span className="font-sans text-xs uppercase tracking-widest text-brand-red font-bold mt-4 block">
              — Directeur Général, COCIC SARL
            </span>
          </motion.div>

          <div className="w-full h-[1px] bg-white/10 my-12" />

          {/* Call-to-action details */}
          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6 text-white">
            Prêt à laisser votre <span className="text-brand-red">Empreinte</span> ?
          </h2>
          <p className="font-sans text-sm text-brand-paleblue/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Discutons de votre projet de signalétique d'agence, d'uniformes d'équipes ou de campagnes publicitaires à impact national. Devis sous 48 heures.
          </p>

          <Link id="footer-cta-contact" to="/contact">
            <Button variant="primary" className="px-10 py-5 text-base">
              Discutons de votre projet
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};
