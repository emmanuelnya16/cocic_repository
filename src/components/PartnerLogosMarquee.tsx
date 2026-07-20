/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// All 30 real partner logos from /public/logos-partenaires/
const ALL_LOGOS: string[] = Array.from({ length: 30 }, (_, i) => `/logos-partenaires/logo${i + 1}.PNG`);

// Split the 30 logos into 3 groups of 10 for 3 rows
const ROW_1 = ALL_LOGOS.slice(0, 10);
const ROW_2 = ALL_LOGOS.slice(10, 20);
const ROW_3 = ALL_LOGOS.slice(20, 30);

interface LogoRowProps {
  logos: string[];
  animationClass: string;
  rowIndex: number;
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, animationClass, rowIndex }) => {
  // Duplicate 4x for seamless infinite scroll (no visible gap)
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="logos-marquee-track relative w-full flex items-center overflow-hidden py-3">
      {/* Left fade edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: rowIndex % 2 === 0
            ? "linear-gradient(to right, #ffffff, transparent)"
            : "linear-gradient(to right, #F7F8FA, transparent)",
        }}
      />
      {/* Right fade edge */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: rowIndex % 2 === 0
            ? "linear-gradient(to left, #ffffff, transparent)"
            : "linear-gradient(to left, #F7F8FA, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div className={`${animationClass} flex items-center gap-8 select-none`}>
        {repeatedLogos.map((src, idx) => (
          <div
            key={`${rowIndex}-${idx}`}
            className="shrink-0 flex items-center justify-center bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ width: "160px", height: "100px", padding: "16px" }}
          >
            <img
              src={src}
              alt={`Logo partenaire ${(idx % logos.length) + 1}`}
              loading="lazy"
              draggable={false}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              style={{ maxWidth: "128px", maxHeight: "72px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface PartnerLogosMarqueeProps {
  /** background color class or style for the section */
  bgClass?: string;
}

export const PartnerLogosMarquee: React.FC<PartnerLogosMarqueeProps> = ({
  bgClass = "bg-white",
}) => {
  return (
    <div className={`w-full py-4 ${bgClass} space-y-3`}>
      {/* Row 1 – left to right (normal) */}
      <LogoRow logos={ROW_1} animationClass="animate-marquee" rowIndex={0} />

      {/* Row 2 – right to left (reverse) */}
      <LogoRow logos={ROW_2} animationClass="animate-marquee-reverse" rowIndex={1} />

      {/* Row 3 – left to right slow */}
      <LogoRow logos={ROW_3} animationClass="animate-marquee-slow" rowIndex={2} />
    </div>
  );
};
