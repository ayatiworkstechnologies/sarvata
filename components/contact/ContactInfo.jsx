"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

const audiences = [
  {
    title: "For Educators",
    desc: "Questions about workshops, mentoring, or resources? We'd love to discuss how we can support your practice.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "For School Leaders",
    desc: "Interested in audits, faculty development, or systems work? Let's explore what would be most valuable for your school.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "For Parents",
    desc: "Looking for assessment, counseling, workshops, or advocacy support? We're here to help you navigate your child's journey.",
    color: "from-rose-500 to-pink-600",
  },
];

const socials = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs mb-5 tracking-widest uppercase">
          Contact Us
        </div>
        <h2 className="heading-xl mb-4">
          Let&apos;s Start a <span className="text-gradient">Conversation</span>
        </h2>
        <p className="text-lg text-muted font-secondary leading-relaxed">
          Whether you&apos;re exploring options or ready to partner, we&apos;re
          here to help.
        </p>
      </motion.div>

      {/* ── Get in Touch: Audience Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold border-b border-border pb-3">
          Get in Touch
        </h3>
        <div className="space-y-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className="group p-5 rounded-2xl border border-border/60 bg-soft-bg/30 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-2 h-2 mt-2 rounded-full bg-linear-to-br ${a.color} shrink-0`}
                />
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {a.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed font-secondary">
                    {a.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Direct Contact & Office Hours ── */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold border-b border-border pb-3">
            Direct Contact
          </h3>
          <ul className="space-y-3 text-sm font-secondary text-muted">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <LuMail className="w-4 h-4 text-primary" />
              </span>
              <a
                href="mailto:sarvata.edu@gmail.com"
                className="hover:text-primary transition-colors"
              >
                sarvata.edu@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <LuPhone className="w-4 h-4 text-primary" />
              </span>
              <a
                href="tel:+919150418101"
                className="hover:text-primary transition-colors"
              >
                +91 91504 18101
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <LuMapPin className="w-4 h-4 text-primary" />
              </span>
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold border-b border-border pb-3">
              Office Hours
            </h3>
            <div className="space-y-2 text-sm font-secondary text-muted">
              <p className="font-medium text-foreground">Monday - Friday</p>
              <p>9:00 AM - 5:00 PM IST</p>
              <p className="text-xs italic mt-3 text-muted/70">
                We respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Follow Us  -  inline after Office Hours */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold border-b border-border pb-3">
              Follow Us
            </h3>
            <p className="text-xs text-muted/70 font-secondary">
              Stay connected for updates & insights.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/60 bg-soft-bg/30 flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
