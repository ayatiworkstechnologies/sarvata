"use client";

import Link from "next/link";
import React from "react";

/**
 * AnimatedButton
 * 
 * Reusable component for the liquid-fill animated button based on WhatWeDo section. 
 * Defaults to a button, but renders as a Link if href is provided.
 *
 * Props:
 *  - href       : string (if passed, renders a Link)
 *  - onClick    : function
 *  - children   : React node (the label text)
 *  - className  : extra classes to apply to the container
 *  - accentColor: hex color or CSS variable string for the fill background
 *  - type       : "button" | "submit" | "reset" (default "button")
 */
export default function AnimatedButton({
  href,
  onClick,
  children,
  className = "",
  accentColor = "var(--primary)",
  type = "button",
}) {
  const innerContent = (
    <>
      <div className="relative z-10 flex flex-col items-start pr-4">
        <span className="text-base font-bold tracking-tight">
          {children}
        </span>
      </div>

      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 transition-all duration-500 group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:rotate-[360deg] shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 -z-0 translate-y-[101%] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover/btn:translate-y-0"
        style={{ backgroundColor: accentColor }}
      />
    </>
  );

  const baseClasses = `group/btn relative inline-flex items-center justify-between overflow-hidden rounded-2xl bg-white px-8 py-5 text-black transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
