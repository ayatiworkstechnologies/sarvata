"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

/* ─── data ─────────────────────────────────────────────────────── */
const ROLES = ["Educator", "School Leader", "Parent", "Learner", "Other"];
const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

/* ─── tiny svg helpers ─────────────────────────────────────────── */
const Icon = ({ d, size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d={d} />
  </svg>
);

/* ─── main ─────────────────────────────────────────────────────── */
export default function ConsultationModal({ open, onClose }) {
  const scrollRef = useRef(null);

  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  /* lock body scroll + ESC */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1400));
    console.log("Consultation data:", data);
    reset();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4 md:p-6">

          {/* ── backdrop ── */}
          <motion.div
            className="absolute inset-0 bg-[#0f0a1a]/70 backdrop-blur-[6px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* ── sheet / dialog ── */}
          <motion.div
            ref={scrollRef}
            role="dialog" aria-modal="true" aria-label="Schedule Consultation"
            className={`
              relative z-10 w-full
              sm:max-w-[680px]
              flex flex-col
              /* mobile: slides up from bottom, rounded top corners */
              rounded-t-[28px] sm:rounded-[28px]
              /* height: fills most of screen on mobile, auto on desktop */
              max-h-[92dvh] sm:max-h-[90vh]
              overflow-hidden
              bg-white
              shadow-[0_-20px_80px_rgba(0,0,0,0.18)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.22)]
            `}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
            /* on sm+ override to scale-in from center */
            style={{ "--tw-enter-translate-y": "0" }}
          >

            {/* ═══════════ HEADER BAND ═══════════ */}
            <div
              className="shrink-0 flex items-center justify-between gap-4 px-6 pt-5 pb-5 sm:px-8 sm:pt-6"
              style={{ background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)" }}
            >
              {/* left */}
              <div className="flex items-center gap-3 min-w-0">
                {/* calendar icon badge */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 leading-none mb-1">
                    Free · 20–30 min
                  </p>
                  <h2 className="text-lg sm:text-xl font-bold text-white leading-tight truncate">
                    Schedule a Consultation
                  </h2>
                </div>
              </div>

              {/* pills */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <Pill icon="M15 10l4.553-2.277A1 1 0 0121 8.677v6.646a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" label="Online" />
                <Pill icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" label="Free" />
              </div>

              {/* close */}
              <button
                type="button" onClick={onClose} aria-label="Close"
                className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* gold strip */}
            <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg,#E2C473,#c8a84e,#E2C473)" }} />

            {/* ═══════════ SCROLLABLE BODY ═══════════ */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {isSubmitSuccessful ? (
                <SuccessState onClose={onClose} />
              ) : (
                <div className="px-6 py-7 sm:px-8 sm:py-8 space-y-6">

                  {/* info row */}
                  <div className="flex flex-wrap gap-3">
                    <InfoChip
                      icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      text="20–30 minutes"
                    />
                    <InfoChip
                      icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      text="Confirmation via email"
                    />
                    <InfoChip
                      icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      text="No commitment required"
                    />
                  </div>

                  {/* form */}
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

                    {/* row 1 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Full Name" error={errors.name}>
                        <input
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                          className={`form-input ${errors.name ? "error" : ""}`}
                        />
                      </Field>
                      <Field label="Email Address" error={errors.email}>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                          })}
                          placeholder="you@example.com"
                          className={`form-input ${errors.email ? "error" : ""}`}
                        />
                      </Field>
                    </div>

                    {/* row 2 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Phone Number" error={errors.phone}>
                        <input
                          {...register("phone", { required: "Phone number is required" })}
                          placeholder="+91 98765 43210"
                          className={`form-input ${errors.phone ? "error" : ""}`}
                        />
                      </Field>
                      <Field label="I'm reaching out as" error={errors.role}>
                        <div className="relative">
                          <select
                            {...register("role", { required: "Please select your role" })}
                            className={`form-input select-arrow ${errors.role ? "error" : ""}`}
                          >
                            <option value="">Select role…</option>
                            {ROLES.map((r) => <option key={r}>{r}</option>)}
                          </select>
                          <ChevronIcon />
                        </div>
                      </Field>
                    </div>

                    {/* row 3 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Preferred Date" error={errors.date}>
                        <input
                          type="date"
                          {...register("date", { required: "Please choose a date" })}
                          className={`form-input ${errors.date ? "error" : ""}`}
                        />
                      </Field>
                      <Field label="Preferred Time" error={errors.time}>
                        <div className="relative">
                          <select
                            {...register("time", { required: "Please choose a time" })}
                            className={`form-input select-arrow ${errors.time ? "error" : ""}`}
                          >
                            <option value="">Select time…</option>
                            {TIMES.map((t) => <option key={t}>{t}</option>)}
                          </select>
                          <ChevronIcon />
                        </div>
                      </Field>
                    </div>

                    {/* message */}
                    <Field label="What would you like to discuss?" error={errors.message}>
                      <textarea
                        rows={3}
                        {...register("message", { required: "Please share a few details" })}
                        placeholder="Share your goals, questions, or context…"
                        className={`form-input resize-none ${errors.message ? "error" : ""}`}
                        style={{ minHeight: "96px" }}
                      />
                    </Field>

                    {/* divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />

                    {/* submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn group"
                    >
                      {/* shimmer */}
                      <span className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700" />

                      {isSubmitting ? (
                        <span className="flex items-center gap-2.5">
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Booking your slot…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2.5">
                          Book Consultation
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-center text-[12px] text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
                      We'll confirm your slot by email or phone. No spam, ever.
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

/* ─── Field wrapper ─────────────────────────────────────────────── */
function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="field-label">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11.5px] font-medium text-red-500">
          <svg className="h-3 w-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
}

/* ─── InfoChip ─────────────────────────────────────────────────── */
function InfoChip({ icon, text }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-[#faf7fc] px-3 py-1.5 border border-[#e5d0f0]">
      <svg className="h-3.5 w-3.5 shrink-0 text-[#A066AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <span className="text-[12px] font-semibold text-[#4a3a5a]" style={{ fontFamily: "var(--font-secondary)" }}>{text}</span>
    </div>
  );
}

/* ─── Pill (header badge) ──────────────────────────────────────── */
function Pill({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 border border-white/20">
      <svg className="h-3 w-3 text-[#E2C473]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}

/* ─── ChevronIcon ─────────────────────────────────────────────── */
function ChevronIcon() {
  return (
    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
}

/* ─── SuccessState ─────────────────────────────────────────────── */
function SuccessState({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-5 px-8 py-14 text-center"
    >
      {/* check circle */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg,#A066AA20,#E2C47320)" }}>
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "linear-gradient(135deg,#A066AA,#E2C473)" }} />
        <div className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg,#A066AA,#7a45a0)" }}>
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* text */}
      <div>
        <h3 className="text-2xl font-bold text-[#171717] mb-2">You're All Set!</h3>
        <p className="text-[16px] leading-7 text-[#6b7280] max-w-xs" style={{ fontFamily: "var(--font-secondary)" }}>
          Thank you for reaching out. We'll review your details and confirm your consultation slot shortly.
        </p>
      </div>

      {/* gold badge */}
      <div className="flex items-center gap-2 rounded-full px-4 py-2 border"
        style={{ background: "#fffbee", borderColor: "#E2C47350" }}>
        <svg className="h-4 w-4 text-[#c8a84e]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-[13px] font-semibold text-[#7a5c1e]" style={{ fontFamily: "var(--font-secondary)" }}>
          Expect a response within 1 business day
        </span>
      </div>

      <button
        type="button" onClick={onClose}
        className="submit-btn mt-2 w-auto px-10"
      >
        Close
      </button>
    </motion.div>
  );
}