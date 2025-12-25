"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

/* Animation variants */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/20">

      {/* ================= MAIN FOOTER ================= */}
      <motion.div
        className="
          container-max
          pt-10 pb-14
          grid grid-cols-12 gap-y-10 gap-x-6
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* LOGO (FULL WIDTH MOBILE) */}
        <motion.div
          variants={item}
          className="col-span-12 flex justify-start"
        >
          <Link href="/">
            <Image
              src="/logo-1.svg"
              alt="Sarvata"
              width={180}
              height={80}
              className="h-20 md:h-20 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* CONTACT (FULL WIDTH MOBILE) */}
        <motion.div
          variants={item}
          className="col-span-12 md:col-span-4 space-y-4"
        >
          <h4 className="font-semibold text-2xl text-primary border-b border-secondary inline-block pb-1">
            Contact Us
          </h4>

          <p className="font-secondary font-normal">
            Sarvata Transforming Learing
          </p>

          <p className="font-secondary font-normal">
            <span className="font-medium">Email :</span>{" "}
            <a
              href="mailto:sarvata.edu@gmail.com"
              className="hover:text-primary transition"
            >
              sarvata.edu@gmail.com
            </a>
          </p>

          <p className="font-secondary font-normal">
            <span className="font-medium">Phone :</span>{" "}
            <a
              href="tel:+919150418101"
              className="hover:text-primary transition"
            >
              +91 91504 18101
            </a>
          </p>
        </motion.div>

        {/* QUICK LINKS (50% MOBILE) */}
        <motion.div
          variants={item}
          className="col-span-6 md:col-span-3"
        >
          <h4 className="font-semibold text-2xl text-primary border-b border-secondary inline-block pb-1 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 font-secondary font-normal text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/philosophy">Our Philosophy</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* LEARNING PATHWAYS (50% MOBILE) */}
        <motion.div
          variants={item}
          className="col-span-6 md:col-span-3"
        >
          <h4 className="font-semibold text-2xl text-primary border-b border-secondary inline-block pb-1 mb-4">
            Learning Pathways
          </h4>

          <ul className="space-y-3 font-secondary font-normal text-base">
            <li><Link href="/pathway-educators">For Educators</Link></li>
            <li><Link href="/pathway-leaders">For Leaders</Link></li>
            <li><Link href="/pathway-parents">For Parents</Link></li>
            <li><Link href="/pathway-learners">For Learners</Link></li>
          </ul>
        </motion.div>

        {/* SOCIAL (FULL WIDTH MOBILE) */}
        <motion.div
          variants={item}
          className="col-span-12 md:col-span-2"
        >
          <h4 className="font-semibold text-2xl text-primary border-b border-secondary inline-block pb-1 mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4 text-primary">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-black/20">
        <motion.div
          className="container-max py-4 text-center font-secondary font-normal text-lg text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} Sarvata Transforming Learing. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
