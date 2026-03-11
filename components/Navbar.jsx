"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="container-max h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-new.png"
            alt="Sarvata"
            width={160}
            height={64}
            priority
            className="h-14 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-semibold">
          <NavItem name="Home" href="/" active={isActive("/")} />
          <NavItem name="About" href="/about" active={isActive("/about")} />
          <NavItem name="Services" href="/services" active={isActive("/services") || isActive("/pathway")} />
          <NavItem name="Contact" href="/contact" active={isActive("/contact")} />
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-foreground text-background font-bold text-sm tracking-wide hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2.5 w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[18px] w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[26px] w-6 h-[2px] bg-current rounded-full"
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border/40 overflow-hidden"
          >
            <nav className="px-6 py-5 space-y-1">
              <MobileLink name="Home" href="/" pathname={pathname} setMenuOpen={setMenuOpen} />
              <MobileLink name="About" href="/about" pathname={pathname} setMenuOpen={setMenuOpen} />
              <MobileLink name="Services" href="/services" pathname={pathname} setMenuOpen={setMenuOpen} />
              <MobileLink name="Contact" href="/contact" pathname={pathname} setMenuOpen={setMenuOpen} />
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center py-3 rounded-xl bg-foreground text-background font-bold text-sm active:scale-[0.98] transition-all"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ================= HELPERS ================= */

function NavItem({ name, href, active }) {
  return (
    <Link
      href={href}
      className={`relative transition-colors duration-200 ${
        active ? "text-primary" : "text-foreground hover:text-primary"
      }`}
    >
      {name}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded-full transition-transform duration-300 origin-left ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function MobileLink({ name, href, pathname, setMenuOpen }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`block px-4 py-3 rounded-lg transition-all font-semibold ${
        active
          ? "bg-primary/5 text-primary"
          : "text-foreground/80 hover:bg-black/5 hover:text-foreground"
      }`}
    >
      {name}
    </Link>
  );
}
