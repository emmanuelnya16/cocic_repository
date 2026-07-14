/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "relative inline-flex items-center justify-center font-display font-bold tracking-wide text-sm px-6 py-3.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer clip-btn-cut";

  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-dark border-none shadow-md",
    secondary:
      "border-2 border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white",
    light:
      "bg-white text-brand-blue hover:bg-brand-red hover:text-white shadow-sm",
  };

  return (
    <motion.button
      id={`btn-${variant}-${Math.random().toString(36).substr(2, 5)}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
