"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalisedLearningCTA() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !agree) return;
    setOpen(false);
    // 👉 API / form submit hook here
  }

  return (
    <>
      {/* ===== CTA SECTION ===== */}
      <section className="section bg-white">
        <motion.div
          className="container-max text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="heading-lg mb-4">
            Personalised Learning Experience
          </h2>

          <p className="text-muted max-w-4xl text-sm md:text-base mx-auto mb-8">
            We provide tailored courses designed around your unique learning
            style. Our engaging programs ensure you grasp every concept while
            making learning an enjoyable journey.
          </p>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(true)}
            className="
              inline-flex items-center justify-center
              px-7 py-3 rounded
              bg-[color:var(--color-primary)]
              text-white text-sm font-semibold
              shadow-lg shadow-black/10
            "
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </section>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ y: 40, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative bg-white rounded
                w-full max-w-md mx-4
                p-6 md:p-8
                shadow-2xl
              "
            >
              <h3 className="text-lg font-semibold mb-2">
                Stay Connected
              </h3>

              <p className="text-sm text-muted mb-6">
                Get updates on personalised learning programs and insights.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="
                      w-full rounded border border-black/10
                      px-4 py-2.5 text-sm
                      focus:outline-none focus:ring-2
                      focus:ring-[color:var(--color-primary)]
                    "
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2 text-xs text-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 accent-[color:var(--color-primary)]"
                    required
                  />
                  I agree to receive learning updates and communication.
                </label>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="
                      flex-1 py-2.5 rounded
                      text-sm font-medium
                      border border-black/10
                      hover:bg-black/5 transition
                    "
                  >
                    Cancel
                  </button>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      flex-1 py-2.5 rounded
                      bg-[color:var(--color-primary)]
                      text-white text-sm font-semibold
                    "
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
