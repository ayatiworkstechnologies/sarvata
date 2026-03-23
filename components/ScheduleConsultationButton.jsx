"use client";

import { useConsultation } from "@/context/ConsultationContext";
import AnimatedButton from "@/components/AnimatedButton";

/**
 * ScheduleConsultationButton
 *
 * Drop-in button that opens the global consultation modal.
 * Now standardized using the AnimatedButton design.
 *
 * Props:
 *  - label    : button text (default "Schedule Consultation")
 *  - variant  : historical prop, maps to accentColor
 *               ("primary" -> #703b7b, "secondary" -> #a066aa, "outline" -> #1e293b, etc)
 *  - className: extra Tailwind classes to merge in
 *  - fullWidth: boolean (default false)
 */
export default function ScheduleConsultationButton({
  label = "Schedule Consultation",
  variant = "primary",
  className = "",
  fullWidth = false,
}) {
  const { openModal } = useConsultation();

  // Map old variants to accent colors
  const accentColorMap = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    outline: "#1e293b",
    ghost: "var(--primary)",
  };

  const accentColor = accentColorMap[variant] || "var(--primary)";

  return (
    <AnimatedButton
      onClick={openModal}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      accentColor={accentColor}
    >
      {label}
    </AnimatedButton>
  );
}
