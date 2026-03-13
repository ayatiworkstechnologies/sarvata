"use client";

import { useConsultation } from "@/context/ConsultationContext";

/**
 * ScheduleConsultationButton
 *
 * Drop-in button that opens the global consultation modal.
 *
 * Props:
 *  - label    : button text (default "Schedule Consultation")
 *  - variant  : "primary" | "secondary" | "outline" | "ghost" (default "primary")
 *  - size     : "sm" | "md" | "lg" (default "md")
 *  - className: extra Tailwind classes to merge in
 *  - fullWidth: boolean (default false)
 */
export default function ScheduleConsultationButton({
  label = "Schedule Consultation",
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
}) {
  const { openModal } = useConsultation();

  /* Size map */
  const sizeClass = {
    sm: "h-10 px-4 text-[13px]",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  }[size];

  /* Variant map — mirrors the existing .btn system but as inline Tailwind */
  const variantClass = {
    primary:
      "bg-primary text-white shadow-[0_8px_24px_rgba(160,102,170,0.28)] hover:shadow-[0_14px_32px_rgba(160,102,170,0.36)] hover:-translate-y-0.5",
    secondary:
      "bg-primary/90 text-white hover:bg-primary hover:-translate-y-0.5 shadow-md shadow-primary/10",
    outline:
      "border border-primary text-foreground hover:bg-primary hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-primary underline-offset-4 hover:underline",
  }[variant];

  return (
    <button
      type="button"
      onClick={openModal}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        transition-all duration-300
        ${sizeClass}
        ${variantClass}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {label}
      {variant !== "ghost" && (
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
