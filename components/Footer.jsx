"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
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
    <footer className="bg-white border-t border-t-black/20">

      {/* MAIN FOOTER */}
      <motion.div
        className="
          container-max py-14
          grid gap-10
          sm:grid-cols-2
          md:grid-cols-4
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* BRAND + CONTACT */}
        <motion.div variants={item} className="space-y-4">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Sarvata"
              className="h-16 md:h-20"
            />
          </Link>

          <h4 className="font-semibold">Contact Us</h4>

          <p className="text-sm">
            Sarvata Educational Consultancy
          </p>

          <p className="text-sm">
            <span className="font-medium">Email :</span>{" "}
            <a
              href="mailto:sarvata.edu@gmail.com"
              className="hover:text-primary transition-colors"
            >
              sarvata.edu@gmail.com
            </a>
          </p>

          <p className="text-sm">
            <span className="font-medium">Phone :</span>{" "}
            <a
              href="tel:+919150418101"
              className="hover:text-primary transition-colors"
            >
              +91 91504 18101
            </a>
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={item}>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Philosophy", href: "/philosophy" },
              { name: "Contact Us", href: "/contact" },
            ].map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="
                    inline-block
                    hover:text-primary
                    transition-all
                    hover:translate-x-1
                  "
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LEARNING PATHWAYS */}
        <motion.div variants={item}>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Learning Pathways
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "For Educators", href: "/pathways/educators" },
              { name: "For Leaders", href: "/pathways/leaders" },
              { name: "For Parents", href: "/pathways/parents" },
              { name: "For Learners", href: "/pathways/learners" },
            ].map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="
                    inline-block
                    hover:text-primary
                    transition-all
                    hover:translate-x-1
                  "
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SOCIAL */}
        <motion.div variants={item}>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Follow Us
          </h4>

          <div className="flex items-center gap-4 text-primary">
            {[
              { icon: <FaFacebookF size={16} />, href: "https://facebook.com", label: "Facebook" },
              { icon: <FaInstagram size={16} />, href: "https://instagram.com", label: "Instagram" },
              { icon: <FaLinkedinIn size={16} />, href: "https://linkedin.com", label: "LinkedIn" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-9 h-9 rounded-full
                  flex items-center justify-center
                  bg-primary/10
                  hover:bg-primary/20
                  transition-colors
                "
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="border-t border-t-black/20">
        <motion.div
          className="container-max py-4 text-center text-sm text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} Sarvata Educational Consultancy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
