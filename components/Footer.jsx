"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "For Educators", href: "/services/for-educators" },
  { name: "For School Leaders", href: "/services/for-leaders" },
  { name: "For Parents", href: "/services/for-parents" },
];

const socials = [
  { Icon: FaLinkedinIn, href: "https://in.linkedin.com/..." },
  { Icon: FaInstagram, href: "https://www.instagram.com/..." },
  { Icon: FaFacebookF, href: "https://www.facebook.com/..." },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 pb-10">
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-secondary/5 blur-[80px]" />
      </div>

      <div className="container-max relative z-10 px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* 1. BRAND PROFILE CARD (Z-Index Anchor) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between p-10 rounded-[40px] bg-soft border border-border shadow-[0_8px_40px_rgba(0,0,0,0.02)]"
          >
            <div>
              <Image
                src="/logo.png"
                alt="Sarvata"
                width={160}
                height={50}
                className="h-12 w-auto object-contain mb-10"
                priority
              />
              <p className="text-lg leading-relaxed text-muted font-light max-w-sm">
                Empowering educators, school leaders, and families with clear,
                structured, and actionable learning support.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white border border-border transition-all hover:bg-primary hover:border-primary shadow-sm"
                >
                  <Icon
                    className="text-primary group-hover:text-white transition-colors"
                    size={18}
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* 2. NAVIGATION GRID & CTA BOX */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Quick Links Group */}
            <div className="grid grid-cols-2 gap-8 flex-grow">
              <FooterList title="Pathways" links={pageLinks} />
              <FooterList title="Support" links={serviceLinks} />
            </div>

            {/* Bottom Glass CTA */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-[32px] bg-foreground p-8 md:p-10 shadow-2xl"
            >
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Ready to grow?
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Explore pathways built for the community.
                  </p>
                </div>
                <ScheduleConsultationButton />
              </div>
              {/* Abstract Shine */}
              <div className="absolute -top-1/2 -right-1/4 h-full w-full bg-gradient-to-br from-white/10 to-transparent rotate-45 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* 3. LEGAL & ATTRIBUTION FOOTNOTE */}
        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} Sarvata Educational Consultancy
          </p>

          <Link
            href="https://ayatiworks.com"
            target="_blank"
            className="group flex items-center gap-4 px-6 py-2 rounded-full border border-border bg-soft hover:bg-white transition-all shadow-sm"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-muted/60">
              Built By
            </span>
            <Image
              src="/ayati-logo-web.png"
              alt="Ayatiworks"
              width={100}
              height={24}
              className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }) {
  return (
    <div className="px-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">
          {title}
        </h4>
      </div>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-base font-medium text-muted transition-all hover:text-primary hover:pl-2"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
