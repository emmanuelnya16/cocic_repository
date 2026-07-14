/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  id?: string;
  number?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  id,
  number,
  title,
  subtitle,
  light = false,
}) => {
  return (
    <div id={id || `section-title-${title.replace(/\s+/g, "-").toLowerCase()}`} className="mb-12">
      {/* Grille Signal Index Number */}
      {number && (
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-sans font-medium text-xs tracking-widest text-brand-red uppercase">
            {number} —
          </span>
          <div className="w-8 h-[1px] bg-brand-red/40" />
        </motion.div>
      )}

      {/* Title with graphic red triangle marker */}
      <motion.div
        className="flex items-start gap-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Red Triangle cell signature pointing up-right */}
        <div className="mt-2.5 shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-red"
          >
            <path
              d="M1 13L13 1V13H1Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="miter"
            />
          </svg>
        </div>

        <div>
          <h2
            className={`font-archivo text-3xl md:text-4xl tracking-tight leading-none uppercase ${
              light ? "text-white" : "text-brand-blue"
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-3 font-sans text-base max-w-2xl ${
                light ? "text-brand-paleblue/80" : "text-brand-grey"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
