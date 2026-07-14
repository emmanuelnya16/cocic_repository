/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layers, Cpu, ShieldCheck, Landmark, Hammer, PenTool, Printer, Scissors, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { EQUIPEMENT_DATA } from "../data";
import { Equipment } from "../types";

export const Equipements: React.FC = () => {
  const [activeAtelier, setActiveAtelier] = useState<string>("all");

  const ateliers = [
    { id: "all", label: "Tous nos Ateliers", icon: <Layers className="w-4 h-4" /> },
    { id: "conception", label: "Conception & Pré-presse", icon: <PenTool className="w-4 h-4" /> },
    { id: "signaletique", label: "Signalétique & Usinage", icon: <Hammer className="w-4 h-4" /> },
    { id: "numerique", label: "Impression Numérique", icon: <Printer className="w-4 h-4" /> },
    { id: "serigraphie", label: "Sérigraphie Textile", icon: <Layers className="w-4 h-4" /> },
    { id: "couture", label: "Couture & Confection", icon: <Scissors className="w-4 h-4" /> },
  ];

  // Continuous Workflow steps (De la conception à la confection)
  const workflowSteps = [
    {
      step: "01",
      title: "Conception",
      desc: "Étude volumique 3D des enseignes & préparation vectorielle."
    },
    {
      step: "02",
      title: "Usinage CNC",
      desc: "Découpe laser micrométrique des tôles et plexiglas."
    },
    {
      step: "03",
      title: "Impression UV",
      desc: "Séchage instantané de haute définition sur rigides ou souples."
    },
    {
      step: "04",
      title: "Sérigraphie",
      desc: "Repérage laser 8 teintes pour textiles de grands volumes."
    },
    {
      step: "05",
      title: "Couture",
      desc: "Assemblage industriel lourd & broderie Tajima."
    }
  ];

  // Filter machines based on active selection
  const filteredEquipments = activeAtelier === "all"
    ? EQUIPEMENT_DATA
    : EQUIPEMENT_DATA.filter((eq) => eq.categorie === activeAtelier);

  return (
    <PageTransition>
      {/* HEADER HERO */}
      <section
        id="equipements-hero"
        className="relative pt-40 pb-28 bg-brand-navy text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Elegant background overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/30 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[4px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-red/20 px-3 py-1.5 border border-brand-red/35 mb-6 clip-btn-cut"
            >
              <span className="font-display font-bold text-[10px] sm:text-xs text-white uppercase tracking-widest">
                Force Industrielle
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-archivo text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6 font-black"
            >
              Notre Parc <span className="text-brand-red">Équipements</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-paleblue mb-8 leading-relaxed"
            >
              Explorez notre outil de production de niveau industriel. Une usine entièrement intégrée de 2000 m² à Douala garantissant la meilleure régularité du marché en signalétique, impression et confection textile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button id="equipements-hero-visit-btn" variant="primary" className="shadow-lg hover:shadow-brand-red/20">
                  Planifier une visite d'atelier
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#workflow-section">
                <Button id="equipements-hero-flow-btn" variant="light" className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm">
                  Voir le Flux de Production
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORKFLOW TRACK ("De la conception à la confection") */}
      <section id="workflow-section" className="py-20 bg-brand-darkblue text-white border-y border-white/5 relative">
        <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-red font-bold block mb-2">
              Flux d'Ingénierie Intégré
            </span>
            <h3 className="font-archivo text-2xl sm:text-3xl uppercase text-white">
              De la conception à la confection
            </h3>
            <p className="font-sans text-xs text-brand-paleblue/60 mt-2 max-w-xl mx-auto">
              Chaque produit traverse une chaîne logique unifiée, éliminant les erreurs d'assemblage et de calage.
            </p>
          </div>

          {/* Flow representation: Horizontal on Desktop, Vertical on Mobile */}
          <div className="relative">
            {/* Horizontal connection line on desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] bg-white/10 z-0">
              <div className="w-full h-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-red opacity-60" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {workflowSteps.map((item, idx) => (
                <div
                  key={item.step}
                  id={`workflow-step-${item.step}`}
                  className="bg-white/5 border border-white/10 p-6 clip-bottom-right flex flex-col items-center text-center relative group hover:bg-white/10 transition-colors"
                >
                  {/* Step number circle */}
                  <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-archivo text-sm font-bold shadow-md z-10 mb-4 group-hover:scale-105 transition-transform">
                    {item.step}
                  </div>

                  <h4 className="font-display font-bold text-sm uppercase text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-paleblue/70 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Mobile connecting arrow */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="lg:hidden w-[2px] h-8 bg-brand-red/30 my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MACHINERY CATALOGUE */}
      <section id="machinery-catalogue" className="py-24 bg-brand-offwhite min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-brand-paleblue/80 pb-6">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-red font-bold block mb-1">
                02 — Inventaire Technique
              </span>
              <h3 className="font-archivo text-xl uppercase text-brand-blue">
                Notre catalogue machines par pôle
              </h3>
            </div>

            {/* Atelier tabs filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
              {ateliers.map((atelier) => {
                const isActive = activeAtelier === atelier.id;
                return (
                  <button
                    key={atelier.id}
                    id={`machinery-tab-${atelier.id}`}
                    onClick={() => setActiveAtelier(atelier.id)}
                    className={`flex items-center gap-2 shrink-0 font-display font-medium text-xs px-4 py-2.5 transition-colors duration-300 focus:outline-none cursor-pointer clip-btn-cut ${
                      isActive
                        ? "bg-brand-blue text-white"
                        : "bg-white text-brand-blue border border-brand-paleblue/80 hover:bg-brand-paleblue/30"
                    }`}
                  >
                    {atelier.icon}
                    <span className="uppercase tracking-wider">{atelier.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* EQUIPMENT CARDS GRID */}
          <div id="equipments-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipments.map((eq) => (
              <div
                key={eq.id}
                id={`equipment-card-${eq.id}`}
                className="bg-white border border-brand-paleblue overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 clip-top-left flex flex-col justify-between group"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-brand-blue">
                  <img
                    src={eq.image}
                    alt={eq.nom}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-90 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-102"
                  />
                  {/* Category Stamp */}
                  <span className="absolute top-4 left-4 bg-brand-blue text-white py-0.5 px-2.5 font-display font-bold text-[8px] uppercase tracking-widest clip-btn-cut z-10">
                    {eq.categorie}
                  </span>
                </div>

                {/* Technical Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-blue uppercase mb-3 tracking-tight group-hover:text-brand-red transition-colors">
                      {eq.nom}
                    </h4>
                    <p className="font-sans text-xs text-brand-grey leading-relaxed mb-6">
                      {eq.description}
                    </p>
                  </div>

                  {/* Blueprint Specifications checklist */}
                  <div className="pt-4 border-t border-brand-paleblue/50 bg-brand-offwhite/50 p-4 clip-bottom-right">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-brand-blue/60 font-bold block mb-2">
                      Spécifications Techniques :
                    </span>
                    <ul className="space-y-1.5">
                      {eq.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-[11px] font-sans text-brand-grey">
                          <span className="text-brand-red font-bold mt-0.5">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* FOOTNOTE DECK */}
          <div className="mt-16 bg-white p-8 border border-brand-paleblue clip-top-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-display font-bold text-sm uppercase text-brand-blue mb-1">
                Besoin d'un audit de faisabilité technique ?
              </h4>
              <p className="font-sans text-xs text-brand-grey">
                Nos ingénieurs structure et experts textiles étudient vos plans ou cahiers des charges pour proposer des optimisations de matériaux.
              </p>
            </div>
            <a
              id="equipments-contact-link"
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-red text-white hover:bg-brand-red-dark font-display font-bold text-xs uppercase px-6 py-3.5 tracking-wider clip-btn-cut cursor-pointer transition-colors shrink-0"
            >
              Consulter nos experts
            </a>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
