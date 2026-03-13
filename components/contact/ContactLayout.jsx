"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";

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

export default function ContactLayout() {
  return (
    <section className="section relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-10 top-0 -z-10 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-secondary/10 blur-[90px]" />

      <div className="container-max space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
            Contact Us
          </p>

          <h2 className="heading-xl mb-4 text-foreground">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Whether you&apos;re exploring options or ready to partner, we&apos;re here to help.
          </p>
        </motion.div>

        {/* 2 Column */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="mb-4 border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Get in Touch
            </h3>

            <div className="space-y-3">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${a.color}`}
                    />
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                        {a.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <ContactForm />
        </div>

        {/* Info Row */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Direct Contact */}
          <div className="space-y-4">
            <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Direct Contact
            </h3>

            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:sarvata.edu@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  sarvata.edu@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <a
                  href="tel:+919150418101"
                  className="transition-colors hover:text-primary"
                >
                  +91 91504 18101
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Office Hours
            </h3>

            <div className="space-y-1 text-sm text-muted">
              <p className="font-medium text-foreground">Monday - Friday</p>
              <p>9:00 AM - 5:00 PM IST</p>
              <p className="mt-2 text-xs italic text-muted/70">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Follow Us
            </h3>

            <p className="text-xs text-muted/70">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl border border-primary/15 bg-[linear-gradient(135deg,rgba(160,102,170,0.06),rgba(226,196,115,0.08),rgba(160,102,170,0.05))] p-8 sm:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Schedule a Consultation
              </h3>
              <p className="leading-relaxed text-muted">
                Ready to discuss your specific needs? Schedule a free 20-30 minute
                consultation to explore how we can support your goals.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(160,102,170,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(160,102,170,0.28)] active:scale-[0.98]"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}