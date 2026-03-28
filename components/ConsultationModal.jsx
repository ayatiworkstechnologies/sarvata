"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  LuCalendar, LuX, LuClock, LuMail, LuCheck, 
  LuVideo, LuChevronDown, LuStar, LuArrowRight 
} from "react-icons/lu";

/* ─── data ─────────────────────────────────────────────────────── */
const ROLES = ["Educator", "School Leader", "Parent", "Learner", "Other"];
const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];



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
    try {
      const response = await fetch("https://api.ayatiworks.com/api/v1/public/sarvata/consultation_booking/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "43219e836c683d557e9e15ab623586a147aa22f6639b8253f2a6863330fdedd5"
        },
        body: JSON.stringify({ data: data })
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation booking");
      }

      const result = await response.json();
      console.log("Success:", result);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-9999 flex items-end sm:items-center justify-center sm:p-4 md:p-6">

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

            {/* ── mobile grabber ── */}
            <div className="flex w-full items-center justify-center pt-3 sm:hidden">
              <div className="h-1.5 w-12 rounded-full bg-white/20" />
            </div>

            {/* ═══════════ HEADER BAND ═══════════ */}
            <div
              className="shrink-0 flex items-center justify-between gap-4 px-6 pt-2 pb-5 sm:px-8 sm:pt-6"
              style={{ background: "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)" }}
            >
              {/* left */}
              <div className="flex items-center gap-3 min-w-0">
                {/* calendar icon badge */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <LuCalendar className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 leading-none mb-1">
                    Free · 20-30 min
                  </p>
                  <h2 className="text-base sm:text-xl font-bold text-white leading-tight truncate">
                    Schedule a Consultation
                  </h2>
                </div>
              </div>

              {/* pills */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <Pill Icon={LuVideo} label="Online" />
                <Pill Icon={LuCheck} label="Free" />
              </div>

              {/* close */}
              <button
                type="button" onClick={onClose} aria-label="Close"
                className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
              >
                <LuX className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            {/* gold strip */}
            <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg,#E2C473,#c8a84e,#E2C473)" }} />

            {/* ═══════════ SCROLLABLE BODY ═══════════ */}
            <div className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar">
              {isSubmitSuccessful ? (
                <SuccessState onClose={onClose} />
              ) : (
                <div className="px-5 py-6 sm:px-8 sm:py-8 space-y-6">

                  {/* info row */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <InfoChip
                      Icon={LuClock}
                      text="20-30 minutes"
                    />
                    <InfoChip
                      Icon={LuMail}
                      text="Email Confirmation"
                    />
                    <InfoChip
                      Icon={LuCheck}
                      text="No Commitment"
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
                    <div className="h-px bg-linear-to-r from-transparent via-[#e5e7eb] to-transparent" />

                    {/* submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn group"
                    >
                      {/* shimmer */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />

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
                          <LuArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
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

/* ─── Field wrapper ─────────────────────────────────────────────── */
function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="field-label">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11.5px] font-medium text-red-500">
          <LuCheck className="h-3 w-3 shrink-0" />
          {error.message}
        </p>
      )}
    </div>
  );
}

/* ─── InfoChip ─────────────────────────────────────────────────── */
function InfoChip({ Icon, text }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-[#faf7fc] px-3 py-1.5 border border-[#e5d0f0]">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[#A066AA]" strokeWidth={2} />
      <span className="text-[12px] font-semibold text-[#4a3a5a]" style={{ fontFamily: "var(--font-secondary)" }}>{text}</span>
    </div>
  );
}

/* ─── Pill (header badge) ──────────────────────────────────────── */
function Pill({ Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 border border-white/20">
      <Icon className="h-3 w-3 text-[#E2C473]" strokeWidth={2.5} />
      <span className="text-[11px] font-bold text-white/80 uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}

/* ─── ChevronIcon ─────────────────────────────────────────────── */
function ChevronIcon() {
  return (
    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]">
      <LuChevronDown className="h-4 w-4" strokeWidth={2} />
    </span>
  );
}

/* ─── SuccessState ─────────────────────────────────────────────── */
function SuccessState({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center gap-6 px-6 py-12 sm:px-8 sm:py-16 text-center"
    >
      {/* check circle */}
      <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg,#A066AA20,#E2C47320)" }}>
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "linear-gradient(135deg,#A066AA,#E2C473)" }} />
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg,#A066AA,#7a45a0)" }}>
          <LuCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
        </div>
      </div>

      {/* text */}
      <div className="max-w-xs sm:max-w-sm">
        <h3 className="text-xl sm:text-2xl font-black text-[#171717] mb-2 tracking-tight">You&apos;re All Set!</h3>
        <p className="text-[14px] sm:text-[16px] leading-relaxed text-[#6b7280]" style={{ fontFamily: "var(--font-secondary)" }}>
          Thank you for reaching out. We&apos;ll review your details and confirm your consultation slot shortly.
        </p>
      </div>

      {/* gold badge */}
      <div className="flex items-center gap-2 rounded-2xl px-4 py-2.5 border"
        style={{ background: "#fffbee", borderColor: "#E2C47360" }}>
        <LuStar className="h-4 w-4 shrink-0 text-[#c8a84e]" fill="currentColor" />
        <span className="text-[12px] sm:text-[13px] font-bold text-[#7a5c1e] text-left" style={{ fontFamily: "var(--font-secondary)" }}>
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
