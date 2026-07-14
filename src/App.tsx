/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy loading route components for lightning-fast initial load (Code-Splitting)
const Accueil = React.lazy(() =>
  import("./pages/Accueil").then((m) => ({ default: m.Accueil }))
);
const APropos = React.lazy(() =>
  import("./pages/APropos").then((m) => ({ default: m.APropos }))
);
const Services = React.lazy(() =>
  import("./pages/Services").then((m) => ({ default: m.Services }))
);
const Equipements = React.lazy(() =>
  import("./pages/Equipements").then((m) => ({ default: m.Equipements }))
);
const References = React.lazy(() =>
  import("./pages/References").then((m) => ({ default: m.References }))
);
const Contact = React.lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact }))
);

// Brand-themed dynamic loading indicator
const LoadingScreen: React.FC = () => {
  return (
    <div
      id="brand-loading-screen"
      className="fixed inset-0 bg-brand-navy flex flex-col items-center justify-center z-50 text-white"
    >
      <div className="relative mb-6 animate-pulse">
        <img
          src="/cocic.webp"
          alt="COCIC SARL"
          className="h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_4px_16px_rgba(238,50,58,0.4)]"
        />
      </div>
      <span className="font-display font-bold text-sm uppercase tracking-widest text-brand-paleblue animate-pulse">
        Chargement de l'univers COCIC...
      </span>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div id="app-root-layout" className="flex flex-col min-h-screen bg-brand-offwhite selection:bg-brand-red selection:text-white">
        
        {/* Sticky Header */}
        <Header />

        {/* Core content with route split boundaries */}
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/services" element={<Services />} />
              <Route path="/equipements" element={<Equipements />} />
              <Route path="/references" element={<References />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback redirection to homepage */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </HashRouter>
  );
}
