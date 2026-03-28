"use client";

import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

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
  variant = "white",
  accentColor = "var(--secondary)",
  type = "button",
}) {
  const isPrimary = variant === "primary";

  const innerContent = (
    <>
      <div className="relative z-10 flex flex-col items-start pr-4">
        <span className="text-sm md:text-base font-bold tracking-tight">
          {children}
        </span>
      </div>

      <div className={`relative z-10 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-lg md:rounded-xl transition-all duration-500 group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:rotate-360 shrink-0 ${
        isPrimary ? 'bg-white/20 text-white' : 'bg-black/5 text-black'
      }`}>
        <LuArrowRight
          className="w-4 h-4 md:w-5 md:h-5"
          strokeWidth={3}
        />
      </div>

      <div
        className="absolute inset-0 z-0 translate-y-[101%] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover/btn:translate-y-0 shadow-inner"
        style={{ backgroundColor: accentColor }}
      />
    </>
  );

  const baseClasses = `group/btn relative inline-flex items-center justify-between overflow-hidden rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-2xl ${
    isPrimary ? 'bg-primary text-white hover:text-foreground' : 'bg-white text-black hover:text-foreground'
  } ${className}`;

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
