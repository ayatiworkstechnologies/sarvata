"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Mail,
  Star,
  Video,
  X,
} from "lucide-react";

const ROLES = ["Educator", "School Leader", "Parent", "Other"];
const TIMES = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const API_URL =
  "https://api.ayatiworks.com/api/v1/public/sarvata/consultation_booking/records";
const API_KEY =
  "1596386488d95a0a8609be0a112d8fdd96049c89664068b7c5f230b5d8ec1caf";

function getTodayInputValue() {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  return new Date(today.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
}

export default function ConsultationModal({ open, onClose }) {
  const [submitSucceeded, setSubmitSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const minDate = useMemo(() => getTodayInputValue(), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const handleClose = useCallback(() => {
    onClose();
    window.setTimeout(() => {
      setSubmitSucceeded(false);
      setSubmitError("");
      reset();
    }, 220);
  }, [onClose, reset]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose, open]);

  const onSubmit = async (data) => {
    setSubmitError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation booking");
      }

      reset();
      setSubmitSucceeded(true);
    } catch (error) {
      console.error("Error submitting consultation booking:", error);
      setSubmitError("We could not book your consultation right now. Please try again in a moment.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-9999 flex items-end justify-center sm:items-center sm:p-4 md:p-6">
          <motion.div
            className="absolute inset-0 bg-[#0f0a1a]/70 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_-20px_80px_rgba(0,0,0,0.18)] sm:max-h-[90vh] sm:max-w-[680px] sm:rounded-[28px] sm:shadow-[0_40px_100px_rgba(0,0,0,0.22)]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
          >
            <div className="flex w-full items-center justify-center pt-3 sm:hidden">
              <div className="h-1.5 w-12 rounded-full bg-white/20" />
            </div>

            <div
              className="flex shrink-0 items-center justify-between gap-4 px-6 pt-2 pb-5 sm:px-8 sm:pt-6"
              style={{ background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)" }}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Calendar className="h-5 w-5 text-white" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-bold uppercase leading-none tracking-[0.28em] text-white/60">
                    Free · 20-30 min
                  </p>
                  <h2
                    id="consultation-modal-title"
                    className="truncate text-base font-bold leading-tight text-white sm:text-xl"
                  >
                    Schedule a Consultation
                  </h2>
                </div>
              </div>

              <div className="hidden shrink-0 items-center gap-2 sm:flex">
                <Pill Icon={Video} label="Online" />
                <Pill Icon={Check} label="Free" />
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close consultation modal"
                className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            <div
              className="h-[3px] w-full shrink-0"
              style={{ background: "linear-gradient(90deg,#E2C473,#c8a84e,#E2C473)" }}
            />

            <div className="custom-scrollbar flex-1 overflow-y-auto overscroll-contain">
              {submitSucceeded ? (
                <SuccessState onClose={handleClose} />
              ) : (
                <div className="space-y-6 px-5 py-6 sm:px-8 sm:py-8">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <InfoChip Icon={Clock} text="20-30 minutes" />
                    <InfoChip Icon={Mail} text="Email confirmation" />
                    <InfoChip Icon={Check} text="No commitment" />
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field id="consultation-name" label="Full Name" error={errors.name}>
                        <input
                          id="consultation-name"
                          autoComplete="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                          className={`form-input ${errors.name ? "error" : ""}`}
                        />
                      </Field>

                      <Field id="consultation-email" label="Email Address" error={errors.email}>
                        <input
                          id="consultation-email"
                          type="email"
                          autoComplete="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+\.\S+$/,
                              message: "Enter a valid email",
                            },
                          })}
                          placeholder="you@example.com"
                          className={`form-input ${errors.email ? "error" : ""}`}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field id="consultation-phone" label="Phone Number" error={errors.phone}>
                        <input
                          id="consultation-phone"
                          type="tel"
                          autoComplete="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[+()\-\s\d]{7,20}$/,
                              message: "Enter a valid phone number",
                            },
                          })}
                          placeholder="+91 98765 43210"
                          className={`form-input ${errors.phone ? "error" : ""}`}
                        />
                      </Field>

                      <Field id="consultation-role" label="I'm reaching out as" error={errors.role}>
                        <div className="relative">
                          <select
                            id="consultation-role"
                            {...register("role", { required: "Please select your role" })}
                            className={`form-input select-arrow ${errors.role ? "error" : ""}`}
                          >
                            <option value="">Select role...</option>
                            {ROLES.map((role) => (
                              <option key={role} value={role}>
                                {role}
                              </option>
                            ))}
                          </select>
                          <ChevronIcon />
                        </div>
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field id="consultation-date" label="Preferred Date" error={errors.date}>
                        <input
                          id="consultation-date"
                          type="date"
                          min={minDate}
                          {...register("date", { required: "Please choose a date" })}
                          className={`form-input ${errors.date ? "error" : ""}`}
                        />
                      </Field>

                      <Field id="consultation-time" label="Preferred Time" error={errors.time}>
                        <div className="relative">
                          <select
                            id="consultation-time"
                            {...register("time", { required: "Please choose a time" })}
                            className={`form-input select-arrow ${errors.time ? "error" : ""}`}
                          >
                            <option value="">Select time...</option>
                            {TIMES.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                          <ChevronIcon />
                        </div>
                      </Field>
                    </div>

                    <Field id="consultation-message" label="What would you like to discuss?" error={errors.message}>
                      <textarea
                        id="consultation-message"
                        rows={3}
                        {...register("message", { required: "Please share a few details" })}
                        placeholder="Share your goals, questions, or context..."
                        className={`form-input resize-none ${errors.message ? "error" : ""}`}
                        style={{ minHeight: "96px" }}
                      />
                    </Field>

                    {submitError && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                        {submitError}
                      </p>
                    )}

                    <div className="h-px bg-linear-to-r from-transparent via-[#e5e7eb] to-transparent" />

                    <button type="submit" disabled={isSubmitting} className="submit-btn group">
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      {isSubmitting ? (
                        <span className="flex items-center gap-2.5">
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Booking your slot...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2.5">
                          Book Consultation
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                        </span>
                      )}
                    </button>

                    <p className="text-center text-[12px] text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
                      We&apos;ll confirm your slot by email or phone. No spam, ever.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({ id, label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11.5px] font-medium text-red-500">
          <Check className="h-3 w-3 shrink-0" />
          {error.message}
        </p>
      )}
    </div>
  );
}

function InfoChip({ Icon, text }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#e5d0f0] bg-[#faf7fc] px-3 py-1.5">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[#A066AA]" strokeWidth={2} />
      <span className="text-[12px] font-semibold text-[#4a3a5a]" style={{ fontFamily: "var(--font-secondary)" }}>
        {text}
      </span>
    </div>
  );
}

function Pill({ Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/12 px-3 py-1">
      <Icon className="h-3 w-3 text-[#E2C473]" strokeWidth={2.5} />
      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">{label}</span>
    </div>
  );
}

function ChevronIcon() {
  return (
    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]">
      <ChevronDown className="h-4 w-4" strokeWidth={2} />
    </span>
  );
}

function SuccessState({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:px-8 sm:py-16"
    >
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24"
        style={{ background: "linear-gradient(135deg,#A066AA20,#E2C47320)" }}
      >
        <div
          className="absolute inset-0 animate-ping rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg,#A066AA,#E2C473)" }}
        />
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
          style={{ background: "linear-gradient(135deg,#A066AA,#7a45a0)" }}
        >
          <Check className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={3} />
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm">
        <h3 className="mb-2 text-xl font-black tracking-tight text-[#171717] sm:text-2xl">You&apos;re All Set!</h3>
        <p className="text-[14px] leading-relaxed text-[#6b7280] sm:text-[16px]" style={{ fontFamily: "var(--font-secondary)" }}>
          Thank you for reaching out. We&apos;ll review your details and confirm your consultation slot shortly.
        </p>
      </div>

      <div
        className="flex items-center gap-2 rounded-2xl border px-4 py-2.5"
        style={{ background: "#fffbee", borderColor: "#E2C47360" }}
      >
        <Star className="h-4 w-4 shrink-0 text-[#c8a84e]" fill="currentColor" />
        <span className="text-left text-[12px] font-bold text-[#7a5c1e] sm:text-[13px]" style={{ fontFamily: "var(--font-secondary)" }}>
          Expect a response within 1 business day
        </span>
      </div>

      <button type="button" onClick={onClose} className="submit-btn mt-2 w-auto px-10">
        Close
      </button>
    </motion.div>
  );
}
