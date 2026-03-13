"use client";

import { createContext, useContext, useState } from "react";

const ConsultationContext = createContext(null);

export function ConsultationProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ConsultationContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used inside ConsultationProvider");
  return ctx;
}
