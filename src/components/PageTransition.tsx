/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  // If system prefers reduced motion, do a simple fade or bypass animation entirely
  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 };
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exit = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 };

  return (
    <motion.div
      id="page-transition-wrapper"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} // smooth easeOut
      className="w-full min-h-screen bg-brand-offwhite"
    >
      {children}
    </motion.div>
  );
};
