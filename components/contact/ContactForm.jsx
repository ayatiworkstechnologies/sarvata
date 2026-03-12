"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1500));
    reset();
  };

  return (
    <motion.div 
      className="p-6 sm:p-8 rounded-2xl bg-white border border-border/60 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-1">Send us a Message</h3>
        <p className="text-muted font-secondary text-sm">We'll get back to you shortly.</p>
      </div>

      {isSubmitSuccessful ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center space-y-2"
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h4 className="text-lg font-bold">Thank You!</h4>
          <p className="font-secondary text-sm">Your message has been sent. We'll reply within 1–2 business days.</p>
          <button 
            onClick={() => reset({}, { keepValues: false, keepIsSubmitSuccessful: false })}
            className="mt-3 text-sm font-semibold text-green-700 hover:underline"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Full Name"
              error={errors.name}
              input={
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="John Doe"
                  className="input-sm"
                />
              }
            />
            <FormField
              label="Email Address"
              error={errors.email}
              input={
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                  })}
                  placeholder="john@example.com"
                  className="input-sm"
                />
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Phone (Optional)"
              error={errors.phone}
              input={
                <input
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  className="input-sm"
                />
              }
            />
            <FormField
              label="I am a:"
              error={errors.role}
              input={
                <select
                  {...register("role", { required: "Please select your role" })}
                  className="input-sm appearance-none cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="Educator">Educator</option>
                  <option value="School Leader">School Leader</option>
                  <option value="Parent">Parent</option>
                  <option value="Other">Other</option>
                </select>
              }
            />
          </div>

          <FormField
            label="How can we help?"
            error={errors.message}
            input={
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us about your needs..."
                rows={3}
                className="input-sm resize-none"
              />
            }
          />

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="
              btn btn-primary w-full
            "
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

/* ── Compact Form Field ── */
function FormField({ label, input, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-foreground/80 pl-0.5 tracking-wide">
        {label}
      </label>
      {input}
      {error && (
        <p className="text-red-500 text-xs pl-0.5 font-medium">{error.message}</p>
      )}
    </div>
  );
}
