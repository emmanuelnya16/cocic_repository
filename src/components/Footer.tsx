/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, ArrowUpRight, Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-brand-navy text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Identity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 shrink-0 overflow-hidden">
                <img
                  src="/cocic.webp"
                  alt="COCIC SARL Logo"
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
            
            <p className="font-sans text-sm text-brand-paleblue/70 mb-6 leading-relaxed">
              Depuis 25 ans, nous donnons du relief et de la pérennité à l'image des marques leaders en Afrique subsaharienne. Concepteur et fabricant intégré.
            </p>

            <div className="flex items-center gap-4">
              <a
                id="footer-social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-brand-red text-brand-paleblue hover:text-white transition-all duration-300 clip-btn-cut"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-in"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-brand-red text-brand-paleblue hover:text-white transition-all duration-300 clip-btn-cut"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-ig"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-brand-red text-brand-paleblue hover:text-white transition-all duration-300 clip-btn-cut"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-red mb-6">
              Menu de Navigation
            </h4>
            <ul className="space-y-3 font-sans text-sm text-brand-paleblue/70">
              <li>
                <Link to="/" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  À Propos de nous
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  Services & Réalisations
                </Link>
              </li>
              <li>
                <Link to="/equipements" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  Parc Équipements
                </Link>
              </li>
              <li>
                <Link to="/references" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  Références Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-red mb-6">
              Coordonnées Douala
            </h4>
            <ul className="space-y-4 font-sans text-sm text-brand-paleblue/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>
                  Logpom (carrefour des Ateliers),<br />
                  Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href="tel:+237699999999" className="hover:text-brand-red transition-colors">
                  +237 699 99 99 99
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href="mailto:contact@cocic-sarl.com" className="hover:text-brand-red transition-colors">
                  contact@cocic-sarl.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-red shrink-0" />
                <span>Afrique Centrale & Subsaharienne</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Key figures */}
          <div className="bg-white/5 p-6 clip-top-left border border-white/5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-red mb-4">
              Notre Mission
            </h4>
            <p className="font-sans text-xs text-brand-paleblue/80 italic leading-relaxed mb-4">
              « Concevoir pour innover, produire pour différencier. »
            </p>
            <div className="w-full h-[1px] bg-white/10 my-4" />
            <span className="font-sans text-xs text-brand-paleblue/50 block">
              Disponibilité commerciale :<br />
              Lundi — Vendredi : 08h00 - 17h30<br />
              Samedi : 08h00 - 13h00
            </span>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-paleblue/50 font-sans gap-4">
          <span>
            © {currentYear} COCIC SARL. Tous droits réservés.
          </span>
          <div className="flex items-center gap-6">
            <a href="#mentions" className="hover:text-brand-red transition-colors">Mentions légales</a>
            <a href="#charte" className="hover:text-brand-red transition-colors">Charte de confidentialité</a>
            <a href="#top" onClick={handleScrollToTop} className="text-brand-red hover:underline font-medium">Retour en haut ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
