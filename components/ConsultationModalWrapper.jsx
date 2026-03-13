"use client";

import { useConsultation } from "@/context/ConsultationContext";
import ConsultationModal from "@/components/ConsultationModal";

/**
 * Thin wrapper that connects the global context to the modal.
 * Lives in layout.js so there is exactly ONE modal in the DOM.
 */
export default function ConsultationModalWrapper() {
  const { open, closeModal } = useConsultation();
  return <ConsultationModal open={open} onClose={closeModal} />;
}
