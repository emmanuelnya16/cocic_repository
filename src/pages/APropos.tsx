/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Cpu, Layers, Landmark, Network, ArrowRight, Quote } from "lucide-react";
import { motion, useInView } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { TIMELINE_DATA } from "../data";

export const APropos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 5 Facteurs clés de succès with lucide icons
  const successFactors = [
    {
      id: "factor-1",
      icon: <Layers className="w-6 h-6 text-brand-red" />,
      title: "Intégration Totale de la Chaîne",
      desc: "De l'étude de faisabilité technique à la livraison d'enseignes ou d'uniformes, nous gérons 100% de la production à Douala sans sous-traitance."
    },
    {
      id: "factor-2",
      icon: <Cpu className="w-6 h-6 text-brand-red" />,
      title: "Parc Technologique de Pointe",
      desc: "Investissements continus dans les traceurs UV Mimaki, fraiseuses CNC et brodeuses Tajima de dernière génération pour des finitions irréprochables."
    },
    {
      id: "factor-3",
      icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
      title: "Robustesse Adaptée aux Climats",
      desc: "Sélection stricte des matériaux (Alucobond lourd, vinyles 3M coulés, encres anti-UV) résistants aux conditions climatiques d'Afrique centrale."
    },
    {
      id: "factor-4",
      icon: <Landmark className="w-6 h-6 text-brand-red" />,
      title: "Capacité Industrielle & Gros Volumes",
      desc: "Capacité d'honorer de grands chantiers réseaux bancaires nationaux ou de gros volumes textiles (plus de 1500 pièces) dans des délais ultra courts."
    },
    {
      id: "factor-5",
      icon: <Network className="w-6 h-6 text-brand-red" />,
      title: "Expertise Logistique Régionale",
      desc: "Déploiement éprouvé en zone CEMAC (Gabon, Congo, Centrafrique...) avec une parfaite maîtrise des convois logistiques de chantiers extérieurs."
    }
  ];

  return (
    <PageTransition>
      {/* 1. HERO ACTION SECTION */}
      <section
        id="about-hero"
        className="relative pt-40 pb-28 bg-brand-navy text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600")`,
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
                25 Ans d'histoire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-archivo text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6 font-black"
            >
              À Propos de <span className="text-brand-red">COCIC</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-paleblue mb-8 leading-relaxed"
            >
              D'un simple atelier d'impression à un partenaire industriel et créatif de premier plan. Nous concevons pour innover et produisons pour différencier.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button id="about-hero-contact-btn" variant="primary" className="shadow-lg hover:shadow-brand-red/20">
                  Lancer votre projet
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#about-intro">
                <Button id="about-hero-values-btn" variant="light" className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm">
                  Notre Vision & Valeurs
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL BRAND INTRO */}
      <section id="about-intro" className="py-24 bg-brand-offwhite border-b border-brand-paleblue">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            number="01"
            title="Notre Vision Strategique"
            subtitle="D'un simple atelier d'impression à un partenaire industriel et créatif de premier plan."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-2xl text-brand-blue uppercase mb-6 leading-tight">
                CONCEVOIR POUR INNOVER, PRODUIRE POUR DIFFÉRENCIER
              </h3>
              <p className="font-sans text-sm text-brand-grey leading-relaxed mb-6">
                Depuis sa fondation en 2001 à Douala, COCIC SARL s'est imposée comme le pionnier de la signalétique industrielle et de la confection sur-mesure au Cameroun. Notre force repose sur un outil industriel entièrement intégré qui nous permet de maîtriser chaque maillon de la chaîne : le design, l'ingénierie structurelle, le façonnage technique et la pose finale.
              </p>
              <p className="font-sans text-sm text-brand-grey leading-relaxed">
                Aujourd'hui, nous n'agissons plus comme un simple exécutant technique. Nous co-concevons l'identité visuelle de nos clients en y intégrant des logiques de durabilité et de performance commerciale. Nous sommes fiers de collaborer avec les plus grandes institutions financières, compagnies énergétiques et ONG internationales de la sous-région.
              </p>
            </div>

            {/* Offset Register styled illustration image */}
            <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
              <div className="aspect-[4/3] bg-brand-blue clip-top-left offset-register">
                <img
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=600"
                  alt="Industrial Designing"
                  loading="lazy"
                  className="w-full h-full object-cover clip-top-left filter grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAJESTIC BRAND QUOTE SECTION */}
      <section id="about-quote" className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-12 h-12 text-brand-red mx-auto mb-6 opacity-80" />
          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-brand-paleblue leading-relaxed mb-6">
            « Si vous continuez de faire ce que vous avez toujours fait, vous continuerez d'obtenir ce que vous avez toujours obtenu. »
          </blockquote>
          <div className="w-12 h-[2px] bg-brand-red mx-auto mb-4" />
          <cite className="font-sans text-xs uppercase tracking-widest text-brand-red font-bold not-italic">
            — L'Esprit COCIC S.A.
          </cite>
        </div>
      </section>

      {/* 3. ARBRE CHRONOLOGIQUE VERTICAL (VERTICAL TREE TIMELINE) */}
      <section id="about-timeline" className="py-24 bg-white overflow-hidden border-b border-brand-paleblue">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            number="02"
            title="25 Ans de Trajectoire"
            subtitle="Explorez les grandes étapes de croissance et de modernisation technologique qui ont forgé notre expertise."
          />

          <div className="relative mt-20 max-w-5xl mx-auto">
            {/* Trunk line (vertical line) of the tree */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-paleblue md:-translate-x-1/2" />
            
            <div className="space-y-16 relative">
              {TIMELINE_DATA.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={event.id}
                    id={`timeline-event-${event.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                    className={`flex flex-col md:flex-row relative items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Width filler on the opposite side to balance the layout on desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Node marker (the "branch connection") on the trunk line */}
                    <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 w-5 h-5 rounded-full bg-white border-4 border-brand-red md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-sm transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mx-auto mt-0.5" />
                    </div>

                    {/* Content card */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 relative">
                      <div className="bg-brand-offwhite border border-brand-paleblue p-8 clip-top-left hover:border-brand-blue hover:shadow-xl transition-all duration-300 relative group">
                        {/* Elegant Year Indicator */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-archivo text-3xl font-black text-brand-red leading-none select-none tracking-tight">
                            {event.annee}
                          </span>
                          <div className="h-[2px] bg-brand-paleblue flex-grow" />
                        </div>

                        <h4 className="font-display font-bold text-base md:text-lg text-brand-blue uppercase mb-3 tracking-wide">
                          {event.titre}
                        </h4>
                        
                        <p className="font-sans text-xs md:text-sm text-brand-grey leading-relaxed">
                          {event.description}
                        </p>

                        {/* Little absolute aesthetic corner tag on hover */}
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-red opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 5 FACTEURS CLÉS DE SUCCÈS (STAGGERED ANIMATIONS) */}
      <section id="about-factors" className="py-24 bg-brand-offwhite">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            number="03"
            title="Facteurs cles de succes"
            subtitle="Notre méthodologie industrielle repose sur 5 piliers cardinaux garantissant l'excellence de nos prestations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {successFactors.map((factor, idx) => (
              <motion.div
                key={factor.id}
                id={factor.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-paleblue p-8 clip-bottom-right shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start"
              >
                <div className="w-12 h-12 rounded-none bg-brand-paleblue/50 flex items-center justify-center mb-6 border border-brand-paleblue clip-btn-cut shrink-0">
                  {factor.icon}
                </div>

                <h4 className="font-display font-bold text-base text-brand-blue uppercase mb-3 tracking-tight">
                  {factor.title}
                </h4>
                
                <p className="font-sans text-xs text-brand-grey leading-relaxed">
                  {factor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PREVIEW MACHINERY PARC LINK */}
      <section id="about-machinery-preview" className="py-20 bg-brand-darkblue text-white relative">
        <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-brand-blue p-8 md:p-12 clip-top-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
            <div className="max-w-2xl text-left">
              <span className="font-sans text-xs uppercase tracking-widest text-brand-red font-bold block mb-2">
                04 — Outil de Production
              </span>
              <h3 className="font-archivo text-2xl sm:text-3xl uppercase text-white mb-4">
                Découvrez notre Parc d'Équipements de pointe
              </h3>
              <p className="font-sans text-sm text-brand-paleblue/80 leading-relaxed">
                Pour assurer de telles prestations d'ingénierie et de confection textiles, nous exploitons un parc d'équipements de pointe uniques en Afrique centrale, combinant de grandes marques japonaises et européennes.
              </p>
            </div>

            <Link id="about-cta-equipments" to="/equipements" className="shrink-0 w-full lg:w-auto">
              <Button variant="light" className="w-full lg:w-auto">
                Consulter le parc machines
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
