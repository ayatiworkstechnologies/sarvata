"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1500));
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[28px] border border-border bg-background p-6 shadow-[0_16px_40px_rgba(23,23,23,0.06)] sm:p-8"
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative">
        <div className="mb-6">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-primary">
            Send a Message
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Tell us how we can help
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted">
            Share a few details and our team will get back to you shortly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitSuccessful ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
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

              <h4 className="text-lg font-bold text-green-800">Thank You!</h4>
              <p className="mt-2 text-sm leading-7 text-green-700">
                Your message has been sent successfully. We&apos;ll reply within
                1-2 business days.
              </p>

              <button
                onClick={() =>
                  reset({}, { keepValues: false, keepIsSubmitSuccessful: false })
                }
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-green-300 bg-white px-5 text-sm font-semibold text-green-700 transition hover:bg-green-100"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Full Name" error={errors.name}>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`form-control ${errors.name ? "form-control-error" : ""}`}
                  />
                </FormField>

                <FormField label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder="john@example.com"
                    className={`form-control ${errors.email ? "form-control-error" : ""}`}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Phone Number" error={errors.phone}>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className={`form-control ${errors.phone ? "form-control-error" : ""}`}
                  />
                </FormField>

                <FormField label="I’m reaching out as" error={errors.role}>
                  <div className="relative">
                    <select
                      {...register("role", { required: "Please select your role" })}
                      className={`form-control form-select ${errors.role ? "form-control-error" : ""
                        }`}
                    >
                      <option value="">Select your role</option>
                      <option value="Educator">Educator</option>
                      <option value="School Leader">School Leader</option>
                      <option value="Parent">Parent</option>
                      <option value="Other">Other</option>
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
                </FormField>
              </div>

              <FormField label="How can we help?" error={errors.message}>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell us about your needs..."
                  rows={5}
                  className={`form-control resize-none ${errors.message ? "form-control-error" : ""
                    }`}
                />
              </FormField>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
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
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FormField({ label, children, error }) {
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