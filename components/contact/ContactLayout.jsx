"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import ContactForm from "./ContactForm";
import { useConsultation } from "@/context/ConsultationContext";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import ContactMap from "./ContactMap";

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
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61566288371125",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/sarvata_edu_consultancy_/",
    label: "Instagram",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/sarvata-transform-learning",
    label: "LinkedIn",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/SarvataOfficial",
    label: "X",
  },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com/@SarvataTransformingLearning",
    label: "YouTube",
  },
];

export default function ContactLayout() {
  const { openModal } = useConsultation();
  return (
    <section className="section relative overflow-hidden bg-background">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-[90px]" />

      <div className="container-max space-y-16 relative z-10">
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
            Let&apos;s Start a{" "}
            <span className="text-primary">Conversation</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Whether you&apos;re exploring options or ready to partner,
            we&apos;re here to help.
          </p>
        </motion.div>

        {/* 2 Column */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <ContactForm />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="mb-4 border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className="group rounded-xl border border-border bg-soft-bg/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(160,102,170,0.4)]`}
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

            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-center gap-4">
                <span className="text-primary">
                  <LuMail className="h-5 w-5" />
                </span>
                <a
                  href="mailto:sarvata.edu@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  sarvata.edu@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-4">
                <span className="text-primary">
                  <LuPhone className="h-5 w-5" />
                </span>
                <a
                  href="tel:+919150418101"
                  className="transition-colors hover:text-primary"
                >
                  +91 91504 18101
                </a>
              </li>

              <li className="flex items-center gap-4">
                <span className="text-primary">
                  <LuMapPin className="h-5 w-5" />
                </span>
                <span>Chennai, Tamil Nadu</span>
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
              <p className="mt-2 text-xs italic text-muted/60">
                We respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Follow Us
            </h3>

            <p className="text-xs text-muted/60">
              Stay connected for updates & insights.
            </p>

            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-primary transition-all duration-200 hover:-translate-y-1 hover:text-primary/70"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <ContactMap />

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-4xl border border-border bg-soft-bg/30 p-8 sm:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Schedule a Consultation
              </h3>
              <p className="leading-relaxed text-muted">
                Ready to discuss your specific needs? Schedule a free 20-30
                minute consultation to explore how we can support your goals.
              </p>
            </div>

            <ScheduleConsultationButton label="Schedule a Consultation" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
