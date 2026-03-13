"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesActive =
    isActive("/services") ||
    isActive("/services/for-educators") ||
    isActive("/services/for-leaders") ||
    isActive("/services/for-parents");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="px-4 pt-4 md:px-6 lg:px-8">
          <div
            className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${scrolled
              ? "bg-white/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5"
              : "bg-white/65 backdrop-blur-xl ring-1 ring-white/40"
              }`}
          >
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* LOGO */}
              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sarvata"
                  width={160}
                  height={64}
                  priority
                  className="h-15 w-auto md:h-15 transition duration-300 hover:opacity-90"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center">
                <div className="flex items-center gap-2 rounded-full bg-black/[0.03] p-1.5">
                  <NavItem name="Home" href="/" active={isActive("/")} />
                  <NavItem name="About" href="/about" active={isActive("/about")} />
                  <NavItem
                    name="Services"
                    href="/services"
                    active={servicesActive}
                    dropdownItems={[
                      { name: "For Educators", href: "/services/for-educators" },
                      { name: "For School Leaders", href: "/services/for-leaders" },
                      { name: "For Parents", href: "/services/for-parents" },
                    ]}
                  />
                  <NavItem name="Contact" href="/contact" active={isActive("/contact")} />
                </div>
              </nav>

              {/* DESKTOP CTA */}
              <div className="hidden md:flex items-center shrink-0">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] text-foreground transition hover:bg-black/[0.06]"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute h-[2px] w-5 rounded-full bg-current"
                  style={{ top: "15px" }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute h-[2px] w-5 rounded-full bg-current"
                  style={{ top: "21px" }}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute h-[2px] w-5 rounded-full bg-current"
                  style={{ top: "27px" }}
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
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="border-t border-black/5 px-4 pb-4 pt-3">
                    <div className="space-y-1 rounded-2xl bg-black/[0.02] p-2">
                      <MobileLink
                        name="Home"
                        href="/"
                        pathname={pathname}
                        setMenuOpen={setMenuOpen}
                      />
                      <MobileLink
                        name="About"
                        href="/about"
                        pathname={pathname}
                        setMenuOpen={setMenuOpen}
                      />

                      <div className="rounded-xl bg-white/70 p-1">
                        <MobileLink
                          name="Services"
                          href="/services"
                          pathname={pathname}
                          setMenuOpen={setMenuOpen}
                        />
                        <div className="ml-3 mt-1 space-y-1 border-l border-primary/15 pl-3">
                          <MobileLink
                            name="For Educators"
                            href="/services/for-educators"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            isSub
                          />
                          <MobileLink
                            name="For School Leaders"
                            href="/services/for-leaders"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            isSub
                          />
                          <MobileLink
                            name="For Parents"
                            href="/services/for-parents"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            isSub
                          />
                        </div>
                      </div>

                      <MobileLink
                        name="Contact"
                        href="/contact"
                        pathname={pathname}
                        setMenuOpen={setMenuOpen}
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpen(false);
                          openModal();
                        }}
                        className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary"
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

    </>
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ name, href, active, dropdownItems }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-300 ${active ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5" : "text-foreground/75 hover:text-primary"
          }`}
      >

        <span className="relative z-10">{name}</span>

        {dropdownItems && (
          <ChevronDown
            className={`relative z-10 h-4 w-4 transition-transform duration-300 ${isHovered ? "rotate-180" : ""
              }`}
          />
        )}
      </Link>

      {dropdownItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="absolute left-1/2 top-full z-50 min-w-[250px] -translate-x-1/2 pt-4"
            >
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white/95 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                {dropdownItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-foreground/75 transition-all duration-200 hover:text-primary"
                  >
                    <span>{item.name}</span>
                    <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ================= MOBILE LINK ================= */

function MobileLink({ name, href, pathname, setMenuOpen, isSub = false }) {
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`relative block rounded-xl px-4 transition-all duration-300 ${isSub ? "py-2.5 text-[14px]" : "py-3 text-[15px]"
        } ${active
          ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
          : "text-foreground/75 hover:text-primary"
        }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{name}</span>
        {active && <span className="h-2 w-2 rounded-full bg-primary" />}
      </div>
    </Link>
  );
}