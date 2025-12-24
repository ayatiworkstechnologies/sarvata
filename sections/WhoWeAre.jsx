"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <>
      {/* ===== FIRST SECTION ===== */}
      <section className="section bg-white overflow-hidden">
        <div className="container grid grid-cols-12 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            className="col-span-12 md:col-span-4 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/about.png"
                alt="Educator"
                width={380}
                height={420}
                className="rounded"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="col-span-12 md:col-span-8 md:ml-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="heading-lg mb-4">Guiding Learning with Purpose</h2>

            <motion.p
              className="text-muted mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              At Sarvata, we believe education is not just about knowledge, but
              about nurturing confidence, curiosity, and capability at every
              stage of learning.
            </motion.p>

            {/* LINK */}
            <Link
              href="/learning-pathways"
              className="group inline-block text-primary text-sm font-medium relative"
            >
              Click one of the glowing nodes in the image above to explore our
              portals.
              <span
                className="
                  absolute left-0 -bottom-1 h-px w-full
                  bg-current
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left
                "
              />
            </Link>

            {/* ACCENT LINE */}
            <motion.div
              className="border-t border-t-secondary w-20 mt-3 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ===== SECOND SECTION ===== */}
      <section className="relative py-5 bg-white overflow-hidden">
        {/* Bottom Color Strip */}
        <motion.div
          className="
            absolute left-0 right-0 bottom-14 md:bottom-5
            h-20 md:h-32 bg-secondary
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Center Image */}
        <motion.div
          className="relative container-max flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/peopels.png"
            alt="Students"
            width={900}
            height={420}
            className="w-full max-w-xs sm:max-w-md md:max-w-3xl object-contain"
          />
        </motion.div>
      </section>
    </>
  );
}
