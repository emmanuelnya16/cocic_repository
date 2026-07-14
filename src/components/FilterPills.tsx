/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterPillsProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
}

export const FilterPills: React.FC<FilterPillsProps> = ({
  options,
  activeId,
  onChange,
}) => {
  return (
    <div
      id="filter-pills-container"
      className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap"
    >
      {options.map((option) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            id={`filter-pill-${option.id}`}
            onClick={() => onChange(option.id)}
            className={`relative shrink-0 font-display font-medium text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none cursor-pointer clip-btn-cut ${
              isActive
                ? "text-white z-10"
                : "text-brand-blue hover:text-brand-red bg-brand-paleblue/50 hover:bg-brand-paleblue"
            }`}
          >
            {/* Sliding Solid Active Background */}
            {isActive && (
              <motion.div
                layoutId="activePillBg"
                className="absolute inset-0 bg-brand-red -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 uppercase tracking-wider text-xs">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
