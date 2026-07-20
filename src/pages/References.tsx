/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Landmark, ArrowRight, Quote, ShieldAlert, Award, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionTitle } from "../components/SectionTitle";
import { FilterPills } from "../components/FilterPills";
import { Button } from "../components/Button";
import { PartnerLogosMarquee } from "../components/PartnerLogosMarquee";
import { REFERENCES_DATA, TESTIMONIALS_DATA } from "../data";


export const References: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string>("all");

  const sectors = [
    { id: "all", label: "Tous les secteurs" },
    { id: "banque", label: "Banques & Finance" },
    { id: "energie", label: "Énergie & Pétrole" },
    { id: "agro", label: "Agroalimentaire" },
    { id: "transport", label: "Transport & Logistique" },
    { id: "institutionnel", label: "Institutionnel & ONG" },
    { id: "education", label: "Éducation" },
    { id: "pharma", label: "Pharma & Santé" },
    { id: "autres", label: "Autres" },
  ];

  // Filter client references based on active tab
  const filteredClients = activeSector === "all"
    ? REFERENCES_DATA
    : REFERENCES_DATA.filter((client) => client.secteur === activeSector);

  return (
    <PageTransition>
      {/* HEADER HERO ACTION */}
      <section
        id="references-hero"
        className="relative pt-40 pb-28 bg-brand-navy text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600")`,
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
                Confiance & Fidélité
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-archivo text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6 font-black"
            >
              Nos <span className="text-brand-red">Références</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-paleblue mb-8 leading-relaxed"
            >
              Découvrez le réseau de leaders industriels, d'institutions bancaires et d'acteurs de premier plan qui nous accordent leur confiance à travers le continent africain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button id="references-hero-partner-btn" variant="primary" className="shadow-lg hover:shadow-brand-red/20">
                  Lancer votre projet
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#references-gallery">
                <Button id="references-hero-browse-btn" variant="light" className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm">
                  Parcourir par Secteur
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS MARQUEE — 3 rows infinite scroll */}
      <section id="partners-logos-marquee" className="py-16 bg-brand-offwhite border-b border-brand-paleblue overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-widest text-brand-red font-bold block mb-2">
              01 — Nos Partenaires
            </span>
            <h2 className="font-archivo text-3xl md:text-4xl uppercase text-brand-blue font-black tracking-tight">
              Ils nous font <span className="text-brand-red">confiance</span>
            </h2>
            <p className="font-sans text-sm text-brand-grey mt-3 max-w-xl mx-auto leading-relaxed">
              Plus de 30 entreprises leaders, institutions et marques internationales nous accordent leur confiance à travers l'Afrique subsaharienne.
            </p>
          </motion.div>
        </div>

        <PartnerLogosMarquee bgClass="bg-brand-offwhite" />
      </section>

      {/* REFS LOGO GALLERY (FILTERABLE SECTOR GRIDS) */}
      <section id="references-gallery" className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 bg-brand-offwhite p-4 border border-brand-paleblue clip-top-left shadow-sm">
            <span className="font-sans text-[10px] uppercase tracking-widest text-brand-grey font-bold block mb-3">
              Filtrer par secteur d'activité :
            </span>

            <FilterPills
              options={sectors}
              activeId={activeSector}
              onChange={setActiveSector}
            />
          </div>

          {/* LOGO GRID CARDS */}
          <motion.div
            layout
            id="references-logo-grid"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client) => (
                <motion.div
                  key={client.id}
                  id={`client-reference-${client.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-brand-offwhite border border-brand-paleblue/80 p-6 flex flex-col items-center justify-center text-center clip-btn-cut shadow-sm hover:shadow-md hover:border-brand-red transition-all duration-300 relative min-h-[220px] h-auto"
                >
                  {/* Grayscale by default, colorized on hover (<ClientLogo> styled fallback) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="w-3 h-3 text-brand-red fill-brand-red" />
                    <span className="font-mono text-[8px] uppercase font-bold text-brand-red">COCIC Partner</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
                    {client.logoUrl ? (
                      <div className="h-24 w-full max-w-[180px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                        <img
                          src={client.logoUrl}
                          alt={`${client.nom} logo`}
                          referrerPolicy="no-referrer"
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div className="h-24 w-full max-w-[180px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-paleblue/20 to-brand-paleblue/60 border border-brand-paleblue/60 rounded-xl flex items-center justify-center shadow-inner group-hover:from-brand-blue/10 group-hover:to-brand-blue/30 group-hover:border-brand-red/50 transition-all duration-300">
                          <span className="font-display font-black text-xl text-brand-blue group-hover:text-brand-red transition-colors uppercase tracking-wider">
                            {client.nom.split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 3)}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mt-1">
                      <span className="font-display font-bold text-base text-brand-blue uppercase tracking-tight group-hover:text-brand-red transition-colors block">
                        {client.nom}
                      </span>
                      
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-grey group-hover:text-brand-blue transition-colors block mt-0.5">
                        {client.secteur}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredClients.length === 0 && (
            <div className="text-center py-16 bg-brand-offwhite border border-brand-paleblue clip-top-left">
              <span className="font-sans text-sm text-brand-grey block">
                Aucune référence active enregistrée sous ce secteur spécifique.
              </span>
            </div>
          )}

        </div>
      </section>

      {/* CLIENT TESTIMONIALS (REUSABLE TESTIMONIAL CARDS) */}
      <section id="testimonials-section" className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            number="02"
            title="Temoignages Clients"
            subtitle="Nos partenaires s'expriment sur la qualité de nos prestations, le respect des délais et la durabilité de nos produits."
            light={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                id={`testimonial-card-${test.id}`}
                className="bg-white/5 border border-white/10 p-8 clip-top-left flex flex-col justify-between hover:bg-white/10 transition-colors relative"
              >
                {/* Visual quote mark */}
                <Quote className="w-8 h-8 text-brand-red absolute top-6 right-6 opacity-40" />

                <div>
                  {/* Rating star representation */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-red fill-brand-red" />
                    ))}
                  </div>

                  <p className="font-sans text-sm text-brand-paleblue/80 italic leading-relaxed mb-8">
                    « {test.quote} »
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center font-display font-black text-sm clip-btn-cut">
                    {test.company.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <strong className="font-display text-sm uppercase text-white block">
                      {test.clientName}
                    </strong>
                    <span className="font-sans text-xs text-brand-paleblue/50 block">
                      {test.role} — <span className="text-brand-red font-medium">{test.company}</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL REFERENCES FOOTER METRICS */}
      <section id="references-callout" className="py-20 bg-brand-offwhite">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h4 className="font-display font-bold text-lg text-brand-blue uppercase mb-2">
            Certifiés Qualité Partenaire B2B
          </h4>
          <p className="font-sans text-xs text-brand-grey max-w-xl mx-auto">
            Nous respectons rigoureusement les chartes de conformité HSE, les normes anti-incendie pour nos textiles et garantissons l'assemblage mécanique sur site par des techniciens certifiés.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};
