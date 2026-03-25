import React from "react";


export default function SectionHeading({ title, children, className = "", light = false, split = true }) {
  const baseClasses = `text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 leading-[1.05] tracking-tight ${className}`;

  if (children) {
    return (
      <h2 className={baseClasses}>
        {children}
      </h2>
    );
  }

  if (typeof title === "string") {
    const words = title.split(" ");
    let firstPart = title;
    let secondPart = "";

    // Optional explicit control over splitting
    if (split === false || words.length <= 3) {
      return <h2 className={baseClasses}>{title}</h2>;
    }

    // Split logic
    if (words.length > 3) {
       // Split roughly in half. E.g "Why Traditional PD Often Falls Short" -> 6/2 = 3.
       const splitIndex = Math.ceil(words.length / 2);
       firstPart = words.slice(0, splitIndex).join(" ");
       secondPart = words.slice(splitIndex).join(" ");
    }

    const spanClass = light 
      ? "text-secondary italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e0c4e8] to-white lg:leading-tight" 
      : "text-primary italic font-bold text-gradient lg:leading-tight";

    return (
      <h2 className={baseClasses}>
        {firstPart} <br className="hidden sm:block" />
        <span className={spanClass}>
          {secondPart}
        </span>
      </h2>
    );
  }

  return null;
}
