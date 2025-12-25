"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <>
      {/* ===== FIRST SECTION ===== */}
      <section className="section bg-white overflow-hidden">
        <div className="container grid grid-cols-12 gap-8 md:gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            className="
              col-span-12 md:col-span-4
              flex justify-center md:justify-start
            "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="w-full max-w-full md:max-w-none"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/about.jpg"
                alt="Educator"
                width={380}
                height={520}
                className=" w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="
              col-span-12 md:col-span-8
              md:ml-10
              text-center md:text-left
            "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="heading-xl mb-4">
              Welcome to Sarvata
            </h2>

            <motion.p
              className="
                text-muted mb-6
                max-w-md md:max-w-2xl
                mx-auto md:mx-0
              "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We are an educational consultancy dedicated to helping schools, educators, parents, and learners cultivate their unique potential. Explore our portals to find the support you need.
            </motion.p>

            {/* LINK */}
            <Link
              href="/learning-pathways"
              className="
                group inline-block
                text-primary text-lg font-medium
                relative
              "
            >
              Click one of the glowing nodes in the image above to explore our portals.
              <span
                className="
                  absolute left-0 -bottom-1 h-px w-full
                  bg-secondary
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left
                "
              />
            </Link>

           
          </motion.div>
        </div>
      </section>

      {/* ===== SECOND SECTION ===== */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">

        {/* Bottom Color Strip */}
        <motion.div
          className="
            absolute left-0 right-0
            bottom-6 md:bottom-20
            h-22 md:h-38
            bg-secondary
          "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Center Image */}
        <motion.div
          className="
            relative container-max
            flex justify-center
          "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/img.png"
            alt="Students"
            width={900}
            height={420}
            className="
              md:w-full
              md:max-w-3xl
              md:object-contain
            "
          />
        </motion.div>
      </section>
    </>
  );
}
