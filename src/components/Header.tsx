/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À Propos" },
    { path: "/services", label: "Services & Réalisations" },
    { path: "/equipements", label: "Équipements" },
    { path: "/references", label: "Références" },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-paleblue/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo COCIC — image réelle cocic.webp */}
            <Link
              id="header-logo-link"
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative h-10 shrink-0 overflow-hidden">
                <img
                  src="/cocic.webp"
                  alt="COCIC SARL Logo"
                  className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  id={`nav-link-${link.path.replace("/", "") || "home"}`}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-display font-medium text-sm tracking-wide transition-colors duration-300 py-2 focus:outline-none ${
                      isActive
                        ? "text-brand-red font-bold"
                        : isScrolled
                        ? "text-brand-blue hover:text-brand-red"
                        : "text-white hover:text-brand-red"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Link id="header-contact-link" to="/contact">
                <Button variant="primary">
                  Contactez-nous
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 focus:outline-none cursor-pointer ${
                isMobileMenuOpen || isScrolled
                  ? "text-brand-blue hover:text-brand-red"
                  : "text-white hover:text-brand-red"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-brand-navy/90 backdrop-blur-md z-40 lg:hidden flex flex-col justify-center px-6"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: idx * 0.05, ease: "easeOut" }}
                >
                  <NavLink
                    id={`mobile-nav-link-${link.path.replace("/", "") || "home"}`}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-2xl font-bold tracking-wide block py-2 ${
                        isActive ? "text-brand-red" : "text-brand-paleblue hover:text-brand-red"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: navLinks.length * 0.05, ease: "easeOut" }}
                className="mt-6"
              >
                <Link
                  id="mobile-contact-button-link"
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="primary" className="w-full">
                    Contactez-nous
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
