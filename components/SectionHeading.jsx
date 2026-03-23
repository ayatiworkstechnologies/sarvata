import React from "react";

/**
 * SectionHeading
 * 
 * Automatically applies the "Partnership, Not Prescription" global H2 design.
 * It intelligently splits string titles into two halves, inserting a <br /> and 
 * applying an italicized text gradient to the second half.
 * 
 * Props:
 *  - title: string to automatically format
 *  - children: manual string/JSX override (bypasses auto-format)
 *  - className: applied to the root <h2>
 *  - light: boolean (if true, uses a lighter gradient suitable for dark backgrounds)
 */
export default function SectionHeading({ title, children, className = "", light = false }) {
  if (children) {
    return (
      <h2 className={`heading-xl mb-8 leading-[1.1] ${className}`}>
        {children}
      </h2>
    );
  }

  if (typeof title === "string") {
    const words = title.split(" ");
    let firstPart = title;
    let secondPart = "";

    // Split logic
    if (words.length > 2) {
       // Split roughly in half. E.g "Why Traditional PD Often Falls Short" -> 6/2 = 3.
       const splitIndex = Math.ceil(words.length / 2);
       firstPart = words.slice(0, splitIndex).join(" ");
       secondPart = words.slice(splitIndex).join(" ");
    } else if (words.length === 2) {
       firstPart = words[0];
       secondPart = words[1];
    } else {
       return <h2 className={`heading-xl mb-8 leading-[1.1] ${className}`}>{title}</h2>;
    }

    const spanClass = light 
      ? "text-secondary italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e0c4e8] to-white" 
      : "text-primary italic font-bold text-gradient";

    return (
      <h2 className={`heading-xl mb-8 leading-[1.1] ${className}`}>
        {firstPart} <br />
        <span className={spanClass}>
          {secondPart}
        </span>
      </h2>
    );
  }

  return null;
}
