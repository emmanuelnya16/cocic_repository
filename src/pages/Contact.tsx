/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, Send, MessageCircle, Star, Sparkles, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";

export const Contact: React.FC = () => {
  // Form fields
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [message, setMessage] = useState("");
  
  // Custom Select Dropdown State
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedPole, setSelectedPole] = useState({
    id: "signaletique",
    label: "Signalétique & Enseignes 3D"
  });

  const poleOptions = [
    { id: "signaletique", label: "Signalétique & Enseignes 3D" },
    { id: "textile", label: "Textile & Confection d'unifomes" },
    { id: "impression", label: "Impression numérique UV grand format" },
    { id: "autres", label: "Autre besoin de communication visuelle" }
  ];

  // Feedback State
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API query validation
    if (nom && email && message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setNom("");
        setEmail("");
        setEntreprise("");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <PageTransition>
      {/* HERO ACTION SECTION (HERO BANNER) */}
      <section
        id="contact-hero"
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy overflow-hidden flex items-center border-b border-brand-paleblue"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/90 to-brand-navy/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/30 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
        
        {/* Halftone pattern / decorative glow elements */}
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-red opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue opacity-30 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-red/20 px-4 py-2 border border-brand-red/40 mb-6 clip-btn-cut shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-brand-red animate-pulse" />
            <span className="font-display font-bold text-[10px] sm:text-xs text-white uppercase tracking-widest">
              Réponse Commerciale sous 48H
            </span>
          </motion.div>

          {/* Majestic Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-archivo text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-6 font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] max-w-4xl"
          >
            Concrétisons Votre <br />
            <span className="inline-block text-brand-red font-black tracking-wide drop-shadow-[0_2px_15px_rgba(238,50,58,0.5)] transform -rotate-1 origin-left">
              Prochaine Empreinte
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-brand-paleblue max-w-2xl mb-10 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
          >
            Que vous souhaitiez implanter des enseignes lumineuses 3D, confectionner des tenues industrielles ou piloter une campagne d'affichage grand format, nos ingénieurs et chargés d'affaires sont à votre entière disposition.
          </motion.p>

          {/* Interactive Hero Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              onClick={() => document.getElementById("contact-content-section")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 shadow-lg hover:shadow-brand-red/25 justify-center py-4 px-8"
            >
              <span>Lancer un Devis Gratuit</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </Button>
            
            <a
              href="https://wa.me/237699999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 clip-btn-cut font-display font-bold text-sm tracking-wide shadow-md transition-all duration-300 justify-center hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="tel:+237699999999"
              className="flex items-center gap-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white px-6 py-3.5 clip-btn-cut font-display font-bold text-sm tracking-wide transition-all duration-300 justify-center hover:scale-[1.02] backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-brand-red shrink-0" />
              <span>+237 699 99 99 99</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CORE CONTACT INTERFACES */}
      <section id="contact-content-section" className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Contact Coordinates & Local Map (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              
              {/* Highlight WhatsApp and quick-phone action */}
              <div className="bg-brand-navy text-white p-8 clip-top-left border border-white/5 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />
                
                <h4 className="font-display font-bold text-base uppercase text-brand-red mb-4">
                  Service Client Rapide
                </h4>
                <p className="font-sans text-xs text-brand-paleblue/70 leading-relaxed mb-6">
                  Pour toute urgence ou question commerciale rapide, nos télé-conseillers sont joignables directement via WhatsApp et par appel téléphonique classique.
                </p>

                <div className="space-y-4">
                  <a
                    id="contact-whatsapp-btn"
                    href="https://wa.me/237699999999"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 clip-btn-cut font-display font-bold text-sm tracking-wide shadow-md transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Discuter sur WhatsApp</span>
                  </a>

                  <a
                    id="contact-phone-btn"
                    href="tel:+237699999999"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white p-4 clip-btn-cut border border-white/10 font-display font-bold text-sm tracking-wide transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-red" />
                    <span>Appeler le +237 699 99 99 99</span>
                  </a>
                </div>
              </div>

              {/* Classic Coordinates */}
              <div className="space-y-4 font-sans text-sm text-brand-grey">
                <div className="flex items-start gap-3 bg-brand-offwhite p-4 clip-btn-cut border border-brand-paleblue/50">
                  <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue uppercase font-display text-xs tracking-wider block mb-1">Usine de Production</strong>
                    <span>Logpom (Carrefour des Ateliers), Douala, Cameroun</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-offwhite p-4 clip-btn-cut border border-brand-paleblue/50">
                  <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue uppercase font-display text-xs tracking-wider block mb-1">Messagerie Électronique</strong>
                    <a href="mailto:contact@cocic-sarl.com" className="hover:text-brand-red transition-colors font-medium">
                      contact@cocic-sarl.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Local Area Embed Map iframe */}
              <div className="relative w-full h-[320px] md:h-[400px] bg-brand-paleblue border border-brand-paleblue/80 clip-top-left overflow-hidden shadow-md group">
                {/* Overlay header for context */}
                <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/40 to-transparent p-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5 drop-shadow-md">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0" /> Usine de Production COCIC
                  </span>
                </div>
                
                {/* Embed Map of Douala, Logpom */}
                <iframe
                  id="google-maps-embed"
                  title="Usine COCIC Douala Logpom"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.167886470875!2d9.754321285229492!3d4.062345678912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611234567890ab%3A0x1234567890abcdef!2sLogpom%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1626245678901!5m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                ></iframe>

                {/* Floating Map Action Button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href="https://maps.google.com/?q=Logpom,+Douala,+Cameroun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red hover:bg-brand-blue text-white px-4 py-2 font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider clip-btn-cut shadow-lg hover:shadow-brand-red/20 transition-all duration-300 inline-flex items-center gap-1.5"
                  >
                    <span>Ouvrir dans Google Maps</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Column 2: Interactive Request Capture Form (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-brand-offwhite border border-brand-paleblue p-8 md:p-10 clip-top-left space-y-6 shadow-sm">
                
                <h4 className="font-display font-bold text-lg text-brand-blue uppercase mb-6 leading-none pb-3 border-b border-brand-paleblue">
                  Soumettre une demande d'étude
                </h4>

                {/* Grid Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="form-nom" className="font-sans text-xs uppercase tracking-wider text-brand-blue font-bold mb-2">
                      Nom complet *
                    </label>
                    <input
                      id="form-nom"
                      type="text"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Ex. Emmanuel NYA"
                      className="w-full bg-white border border-brand-paleblue p-3.5 focus:outline-none focus:border-brand-red font-sans text-sm clip-btn-cut"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="form-email" className="font-sans text-xs uppercase tracking-wider text-brand-blue font-bold mb-2">
                      Adresse Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex. emmanuel@entreprise.com"
                      className="w-full bg-white border border-brand-paleblue p-3.5 focus:outline-none focus:border-brand-red font-sans text-sm clip-btn-cut"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col items-start">
                  <label htmlFor="form-entreprise" className="font-sans text-xs uppercase tracking-wider text-brand-blue font-bold mb-2">
                    Nom de votre Entreprise / Institution
                  </label>
                  <input
                    id="form-entreprise"
                    type="text"
                    value={entreprise}
                    onChange={(e) => setEntreprise(e.target.value)}
                    placeholder="Ex. Ecobank Cameroun S.A."
                    className="w-full bg-white border border-brand-paleblue p-3.5 focus:outline-none focus:border-brand-red font-sans text-sm clip-btn-cut"
                  />
                </div>

                {/* Custom Stylised Select Option Dropdown ("pas un select natif brut") */}
                <div className="flex flex-col items-start relative">
                  <span className="font-sans text-xs uppercase tracking-wider text-brand-blue font-bold mb-2">
                    Pôle d'activité concerné *
                  </span>
                  
                  {/* Trigger Box */}
                  <button
                    id="form-select-trigger"
                    type="button"
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className="w-full bg-white border border-brand-paleblue p-4 flex items-center justify-between font-sans text-sm text-brand-blue font-semibold clip-btn-cut cursor-pointer focus:outline-none focus:border-brand-red"
                  >
                    <span>{selectedPole.label}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-red transition-transform duration-300 ${isSelectOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Options menu */}
                  <AnimatePresence>
                    {isSelectOpen && (
                      <motion.div
                        id="form-select-dropdown"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-brand-paleblue shadow-lg z-20 clip-bottom-right overflow-hidden"
                      >
                        {poleOptions.map((opt) => (
                          <button
                            key={opt.id}
                            id={`form-select-option-${opt.id}`}
                            type="button"
                            onClick={() => {
                              setSelectedPole(opt);
                              setIsSelectOpen(false);
                            }}
                            className="w-full text-left p-3.5 hover:bg-brand-paleblue/40 font-sans text-sm text-brand-blue transition-colors focus:outline-none flex items-center gap-2 cursor-pointer border-b border-brand-paleblue/20 last:border-0"
                          >
                            <span className={`w-2 h-2 rounded-full ${opt.id === selectedPole.id ? "bg-brand-red" : "bg-brand-paleblue"}`} />
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div className="flex flex-col items-start">
                  <label htmlFor="form-message" className="font-sans text-xs uppercase tracking-wider text-brand-blue font-bold mb-2">
                    Description de votre besoin / Message *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Veuillez détailler votre projet (ex. dimensions de l'enseigne, quantité de polos corporate, type d'impression sur vinyle coulé...)"
                    className="w-full bg-white border border-brand-paleblue p-3.5 focus:outline-none focus:border-brand-red font-sans text-sm clip-btn-cut resize-none"
                  ></textarea>
                </div>

                {/* Actions submit and validation notice */}
                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full justify-center">
                    Soumettre ma demande
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* Submission Feedback Alert message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      id="form-feedback-success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="bg-[#eaf5ec] border border-[#a2d4b1] p-4 text-xs font-sans text-[#226338] flex items-start gap-3 clip-btn-cut mt-4"
                    >
                      <Star className="w-5 h-5 text-[#2E8B57] fill-[#2E8B57] shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <strong className="block font-bold mb-1">Votre message a été transmis avec succès !</strong>
                        <span>Nous l'étudions avec notre équipe d'ingénieurs techniques et vous recontactons sous 48 heures. Merci de votre confiance en COCIC SARL.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
