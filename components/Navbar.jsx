"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lpOpen, setLpOpen] = useState(false);
  const [mobileLP, setMobileLP] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isPathwaysActive = pathname.startsWith("/pathway");

  const openLP = () => {
    clearTimeout(closeTimer.current);
    setLpOpen(true);
  };

  const closeLP = () => {
    closeTimer.current = setTimeout(() => {
      setLpOpen(false);
    }, 300);
  };

  const pathways = [
    { name: "For Educators", href: "/pathway-educators" },
    { name: "For Leaders", href: "/pathway-leaders" },
    { name: "For Parents", href: "/pathway-parents" },
    { name: "For Learners", href: "/pathway-learners" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-max h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Sarvata"
            width={160}
            height={64}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-white">
          <NavItem name="Home" href="/" active={isActive("/")} />
          <NavItem name="About" href="/about" active={isActive("/about")} />

          {/* LEARNING PATHWAYS (DESKTOP DROPDOWN) */}
          <div
            className="relative"
            onMouseEnter={openLP}
            onMouseLeave={closeLP}
          >
            <span
              className={`cursor-pointer transition-colors ${
                isPathwaysActive ? "text-secondary" : "text-white/80"
              }`}
            >
              Learning Pathways
            </span>

            <motion.span
              animate={{ scaleX: isPathwaysActive ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 -bottom-1 h-0.5 w-full bg-secondary origin-left"
            />

            <AnimatePresence>
              {lpOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full left-0 mt-8 w-64 bg-white rounded shadow-xl overflow-hidden"
                >
                  {pathways.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-5 py-3 text-sm transition ${
                        pathname === item.href
                          ? "bg-primary/70 text-white"
                          : "hover:bg-primary/40"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem
            name="Contact Us"
            href="/contact"
            active={isActive("/contact")}
          />
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 text-white"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : {}}
            className="absolute top-2 w-8 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : {}}
            className="absolute top-4 w-8 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : {}}
            className="absolute top-6 w-8 h-0.5 bg-white"
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
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="px-6 py-8 space-y-5 text-white text-base">

              <MobileLink name="Home" href="/" pathname={pathname} setMenuOpen={setMenuOpen} />
              <MobileLink name="About" href="/about" pathname={pathname} setMenuOpen={setMenuOpen} />

              {/* MOBILE LEARNING PATHWAYS */}
              <button
                onClick={() => setMobileLP(!mobileLP)}
                className={`w-full text-left flex justify-between items-center ${
                  isPathwaysActive ? "text-secondary" : "text-white/80"
                }`}
              >
                Learning Pathways
                <span>{mobileLP ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {mobileLP && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-3"
                  >
                    {pathways.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block ${
                          pathname === item.href
                            ? "text-secondary font-semibold"
                            : "text-white/80"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <MobileLink name="Contact Us" href="/contact" pathname={pathname} setMenuOpen={setMenuOpen} />

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
    <motion.div className="relative" whileHover="hover">
      <Link
        href={href}
        className={`transition-colors ${
          active ? "text-secondary" : "text-white/80"
        }`}
      >
        {name}
      </Link>
      <motion.span
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-secondary origin-left"
      />
    </motion.div>
  );
}

function MobileLink({ name, href, pathname, setMenuOpen }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`block ${
        active ? "text-secondary font-semibold" : "text-white/80"
      }`}
    >
      {name}
    </Link>
  );
}
