"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const roleOptions = [
    "Educator",
    "School Leader",
    "Parent",
    "Other",
];

const timeOptions = [
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

export default function ConsultationModal({ open, onClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onClose]);

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Consultation Booking:", data);
        reset();
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[9999]">
                    {/* Backdrop */}
                    <motion.button
                        type="button"
                        aria-label="Close modal backdrop"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
                    />

                    {/* Modal */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 28, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.97 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-border bg-background shadow-[0_30px_90px_rgba(23,23,23,0.18)]"
                        >
                            {/* Top accent */}
                            <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

                            {/* Close */}
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition hover:border-primary/20 hover:text-primary"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                                {/* Left panel */}
                                <div className="border-b border-border bg-soft px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                                    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-primary">
                                        Schedule Consultation
                                    </p>

                                    <h3 className="text-3xl font-bold leading-tight text-foreground">
                                        Book a conversation
                                        <span className="text-gradient"> with our team</span>
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-muted">
                                        Choose a preferred date and time, and share a few details.
                                        We’ll use this to understand your needs before the call.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        <InfoItem
                                            title="Duration"
                                            text="20–30 minutes"
                                        />
                                        <InfoItem
                                            title="Mode"
                                            text="Phone / Online consultation"
                                        />
                                        <InfoItem
                                            title="Response"
                                            text="We’ll confirm your slot by email or phone"
                                        />
                                    </div>
                                </div>

                                {/* Right panel */}
                                <div className="px-6 py-8 sm:px-8 sm:py-10">
                                    {isSubmitSuccessful ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.96, y: 8 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
                                        >
                                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                                                <svg
                                                    className="h-7 w-7 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2.2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>

                                            <h4 className="text-lg font-bold text-green-800">
                                                Consultation Request Sent
                                            </h4>
                                            <p className="mt-2 text-sm leading-7 text-green-700">
                                                Thanks for sharing your details. We’ll contact you soon
                                                to confirm the consultation slot.
                                            </p>

                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-green-600 px-5 text-sm font-semibold text-white transition hover:bg-green-700"
                                            >
                                                Close
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                                <Field label="Full Name" error={errors.name}>
                                                    <input
                                                        {...register("name", { required: "Name is required" })}
                                                        placeholder="Enter your name"
                                                        className={`form-control ${errors.name ? "form-control-error" : ""}`}
                                                    />
                                                </Field>

                                                <Field label="Email Address" error={errors.email}>
                                                    <input
                                                        type="email"
                                                        {...register("email", {
                                                            required: "Email is required",
                                                            pattern: {
                                                                value: /^\S+@\S+$/i,
                                                                message: "Enter a valid email",
                                                            },
                                                        })}
                                                        placeholder="Enter your email"
                                                        className={`form-control ${errors.email ? "form-control-error" : ""}`}
                                                    />
                                                </Field>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                                <Field label="Phone Number" error={errors.phone}>
                                                    <input
                                                        {...register("phone", { required: "Phone number is required" })}
                                                        placeholder="+91 98765 43210"
                                                        className={`form-control ${errors.phone ? "form-control-error" : ""}`}
                                                    />
                                                </Field>

                                                <Field label="I’m reaching out as" error={errors.role}>
                                                    <div className="relative">
                                                        <select
                                                            {...register("role", { required: "Please select your role" })}
                                                            className={`form-control form-select ${errors.role ? "form-control-error" : ""}`}
                                                        >
                                                            <option value="">Select role</option>
                                                            {roleOptions.map((role) => (
                                                                <option key={role} value={role}>
                                                                    {role}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                                                            <svg
                                                                className="h-4 w-4"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </Field>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                                <Field label="Preferred Date" error={errors.date}>
                                                    <input
                                                        type="date"
                                                        {...register("date", { required: "Please choose a date" })}
                                                        className={`form-control ${errors.date ? "form-control-error" : ""}`}
                                                    />
                                                </Field>

                                                <Field label="Preferred Time" error={errors.time}>
                                                    <div className="relative">
                                                        <select
                                                            {...register("time", { required: "Please choose a time" })}
                                                            className={`form-control form-select ${errors.time ? "form-control-error" : ""}`}
                                                        >
                                                            <option value="">Select time</option>
                                                            {timeOptions.map((time) => (
                                                                <option key={time} value={time}>
                                                                    {time}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                                                            <svg
                                                                className="h-4 w-4"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </Field>
                                            </div>

                                            <Field label="What would you like to discuss?" error={errors.message}>
                                                <textarea
                                                    {...register("message", { required: "Please enter your message" })}
                                                    rows={4}
                                                    placeholder="Share your goals or questions..."
                                                    className={`form-control resize-none ${errors.message ? "form-control-error" : ""}`}
                                                />
                                            </Field>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(160,102,170,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(160,102,170,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <svg
                                                            className="h-4 w-4 animate-spin text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        Booking Consultation...
                                                    </span>
                                                ) : (
                                                    "Book Consultation"
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}

function Field({ label, children, error }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="pl-0.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">
                {label}
            </label>
            {children}
            {error && (
                <p className="pl-0.5 text-xs font-medium text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}

function InfoItem({ title, text }) {
    return (
        <div className="rounded-2xl border border-border bg-background/70 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {title}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
                {text}
            </p>
        </div>
    );
}