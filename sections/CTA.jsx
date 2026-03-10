"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PersonalisedLearningCTA() {
  return (
    <section className="section bg-white">
      <motion.div
        className="container-max text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-xl mb-4">Get Started</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Exploring options? Learn about our services. Ready to talk? Schedule a consultation.
          Questions? Contact us.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/pathway-educators" className="btn btn-primary">Learn about our services</Link>
          <Link href="/contact" className="btn border border-primary text-primary">Schedule a consultation</Link>
          <Link href="/contact" className="btn border border-black/20">Contact us</Link>
        </div>
      </motion.div>
    </section>
  );
}
