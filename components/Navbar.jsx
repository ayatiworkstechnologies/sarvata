"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Learning Pathways", href: "/learning-pathways" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"}
      `}
    >
      <div className="container-max h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Sarvata" className="h-16 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <motion.div
                key={link.name}
                className="relative"
                whileHover="hover"
              >
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    active ? "text-secondary" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>

                {/* UNDERLINE */}
                <motion.span
                  initial={false}
                  animate={{
                    scaleX: active ? 1 : 0,
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-secondary
                    origin-left
                  "
                />
              </motion.div>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-8 h-8 text-white"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute top-2 left-0 w-8 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute top-4 left-0 w-8 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute top-6 left-0 w-8 h-[2px] bg-white"
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="flex flex-col gap-6 px-6 py-8 text-sm font-medium text-white">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      transition-transform
                      ${active ? "text-white font-semibold" : "text-white/80"}
                      hover:translate-x-1
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
