/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Calendar, Landmark, Tag, HelpCircle, Eye, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionTitle } from "../components/SectionTitle";
import { FilterPills } from "../components/FilterPills";
import { Button } from "../components/Button";
import { REALISATIONS_DATA } from "../data";
import { Realisation } from "../types";

export const Services: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Primary Filter (Poles)
  const mainPoles = [
    { id: "all", label: "Tous nos pôles" },
    { id: "signaletique", label: "Signalétique" },
    { id: "textile", label: "Textile & Confection" },
    { id: "impression", label: "Impression & Arts graphiques" },
  ];

  // Read pole from search parameter if present, fallback to "all"
  const initialPole = searchParams.get("pole") || "all";
  const [activePole, setActivePole] = useState<string>(initialPole);

  // Sync state with query parameters
  useEffect(() => {
    const poleParam = searchParams.get("pole");
    if (poleParam) {
      setActivePole(poleParam);
    } else {
      setActivePole("all");
    }
  }, [searchParams]);

  // Secondary categories based on chosen pole
  const getSecondaryCategories = (pole: string) => {
    switch (pole) {
      case "signaletique":
        return [
          { id: "all-sec", label: "Tous" },
          { id: "Enseignes", label: "Enseignes" },
          { id: "Totems", label: "Totems" },
          { id: "Signalétique Intérieure", label: "Signalétique Intérieure" },
        ];
      case "textile":
        return [
          { id: "all-sec", label: "Tous" },
          { id: "Uniformes Corporate", label: "Uniformes Corporate" },
          { id: "Tenues Techniques", label: "Tenues Techniques" },
          { id: "Merchandising", label: "Merchandising" },
        ];
      case "impression":
        return [
          { id: "all-sec", label: "Tous" },
          { id: "Impression Grand Format", label: "Impression Grand Format" },
          { id: "Arts Graphiques", label: "Arts Graphiques" },
          { id: "Événementiel", label: "Événementiel" },
        ];
      default:
        return [];
    }
  };

  const [activeSecondary, setActiveSecondary] = useState<string>("all-sec");

  // Reset secondary filter when primary pole changes
  const handlePoleChange = (poleId: string) => {
    setActiveSecondary("all-sec");
    if (poleId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ pole: poleId });
    }
    setActivePole(poleId);
  };

  // Selected Realization for Lightbox modal
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);

  // Filtered portfolio list
  const filteredProjects = REALISATIONS_DATA.filter((project) => {
    // Check main pole
    const matchesPole = activePole === "all" || project.pole === activePole;
    
    // Check secondary category
    const matchesSecondary =
      activeSecondary === "all-sec" || project.categorie === activeSecondary;

    return matchesPole && matchesSecondary;
  });

  const secondaryOptions = getSecondaryCategories(activePole);

  return (
    <PageTransition>
      {/* SERVICES HERO ACTION SECTION */}
      <section
        id="services-hero"
        className="relative pt-40 pb-28 bg-brand-navy text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600")`,
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
                Expertises & Métiers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-archivo text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6 font-black"
            >
              Services & <span className="text-brand-red">Réalisations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-paleblue mb-8 leading-relaxed"
            >
              Des solutions industrielles globales de communication visuelle. Découvrez notre catalogue de projets et d'expertises : Signalétique, Confection Textile et Impression Grand Format.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button id="services-hero-quote-btn" variant="primary" className="shadow-lg hover:shadow-brand-red/20">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#services-portfolio">
                <Button id="services-hero-explore-btn" variant="light" className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm">
                  Explorer le Catalogue
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-portfolio" className="py-24 bg-brand-offwhite min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            number="01"
            title="Catalogue de Realisations"
            subtitle="Découvrez comment nous traduisons l'excellence des marques sur des supports physiques durables de haute précision."
          />

          {/* MAIN FILTER PILLS */}
          <div className="mb-6 bg-white p-4 border border-brand-paleblue clip-top-left shadow-sm">
            <span className="font-sans text-[10px] uppercase tracking-widest text-brand-grey font-bold block mb-3">
              Filtrer par pôle principal :
            </span>
            <FilterPills
              options={mainPoles}
              activeId={activePole}
              onChange={handlePoleChange}
            />
          </div>

          {/* SECONDARY FILTER PILLS (Visible only if a specific pole is active) */}
          <AnimatePresence mode="wait">
            {activePole !== "all" && secondaryOptions.length > 0 && (
              <motion.div
                key={activePole}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-8 bg-brand-paleblue/20 p-4 border border-brand-paleblue/60 clip-btn-cut flex items-center gap-4 flex-wrap"
              >
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                  Sous-catégories :
                </span>
                <FilterPills
                  options={secondaryOptions}
                  activeId={activeSecondary}
                  onChange={setActiveSecondary}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* PROJECTS GRID WITH MASONRY / GRID FLUIDITY */}
          <motion.div
            layout
            id="portfolio-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white border border-brand-paleblue overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 clip-top-left cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedProject(project)}
                >
                  
                  {/* Duotone Image Block */}
                  <div className="relative h-64 overflow-hidden duotone-container">
                    <img
                      src={project.image}
                      alt={`${project.client} - ${project.titre}`}
                      loading="lazy"
                      className="w-full h-full object-cover duotone-filter transition-all duration-500 transform group-hover:scale-105"
                    />

                    {/* Tag Pole in corner */}
                    <div className="absolute top-4 left-4 bg-brand-red text-white py-1 px-3 font-display font-bold text-[9px] uppercase tracking-wider clip-btn-cut z-10">
                      {project.pole}
                    </div>

                    {/* View overlay icon */}
                    <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center clip-btn-cut shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card footer description with sector band */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-brand-red font-bold block mb-1">
                        {project.categorie} • {project.client}
                      </span>
                      <h3 className="font-display font-bold text-base text-brand-blue uppercase leading-snug group-hover:text-brand-red transition-colors mb-3">
                        {project.titre}
                      </h3>
                      <p className="font-sans text-xs text-brand-grey line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Sector ribbon banner in lower deck */}
                    <div className="mt-4 pt-4 border-t border-brand-paleblue/50 flex items-center justify-between text-[10px] font-sans text-brand-grey uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-brand-blue" />
                        {project.secteur}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-brand-blue/60">{project.annee}</span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-white border border-brand-paleblue clip-top-left">
              <HelpCircle className="w-12 h-12 text-brand-grey/50 mx-auto mb-4" />
              <h4 className="font-display font-bold text-lg text-brand-blue uppercase mb-2">
                Aucun projet correspondant
              </h4>
              <p className="font-sans text-sm text-brand-grey">
                Nous enrichissons continuellement notre catalogue de réalisations d'Afrique subsaharienne.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* DETAILED PROJECT LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="project-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="project-lightbox-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white max-w-3xl w-full clip-top-left shadow-2xl overflow-hidden border border-brand-paleblue"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.titre}
                  className="w-full h-full object-cover"
                />
                <button
                  id="lightbox-close-button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-brand-navy/80 hover:bg-brand-red text-white w-10 h-10 flex items-center justify-center clip-btn-cut cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-brand-blue text-white font-display font-bold text-[9px] uppercase tracking-widest py-1 px-3.5 clip-btn-cut">
                    {selectedProject.pole}
                  </span>
                  <span className="bg-brand-paleblue text-brand-blue font-sans text-[9px] uppercase tracking-wider py-1 px-3">
                    {selectedProject.categorie}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-brand-blue uppercase leading-tight mb-2">
                  {selectedProject.titre}
                </h3>
                <span className="font-sans text-xs text-brand-red uppercase tracking-wider font-bold block mb-4">
                  Client : {selectedProject.client}
                </span>

                <p className="font-sans text-sm text-brand-grey leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* technical footnotes */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-paleblue/50 text-[11px] font-sans text-brand-grey uppercase tracking-wider">
                  <div>
                    <span className="block text-brand-blue/60 text-[9px]">Secteur</span>
                    <strong className="block text-brand-blue mt-0.5">{selectedProject.secteur}</strong>
                  </div>
                  <div>
                    <span className="block text-brand-blue/60 text-[9px]">Année de pose</span>
                    <strong className="block text-brand-blue mt-0.5">{selectedProject.annee}</strong>
                  </div>
                  <div>
                    <span className="block text-brand-blue/60 text-[9px]">Qualité technique</span>
                    <strong className="block text-brand-blue mt-0.5 flex items-center gap-1">
                      <span className="w-2 h-2 bg-brand-red rounded-full" />
                      100% COCIC
                    </strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
