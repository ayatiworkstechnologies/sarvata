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
            className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5"
                : "bg-white ring-1 ring-black/5 shadow-sm"
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
                  <NavItem
                    name="About Us"
                    href="/about-us"
                    active={isActive("/about-us")}
                  />
                  <NavItem
                    name="Services"
                    href="/services"
                    active={servicesActive}
                    dropdownItems={[
                      {
                        name: "For Educators",
                        href: "/services/for-educators",
                        subLinks: [
                          {
                            name: "Workshops & Training",
                            href: "/services/for-educators/workshops-training",
                          },
                          {
                            name: "Teacher Mentoring",
                            href: "/services/for-educators/teacher-mentoring",
                          },
                          {
                            name: "Free Resources & Tools",
                            href: "/services/for-educators/free-resources-tools",
                          },
                        ],
                      },
                      {
                        name: "For School Leaders",
                        href: "/services/for-leaders",
                        subLinks: [
                          {
                            name: "Inclusion Audits",
                            href: "/services/for-leaders/inclusion-audits-roadmaps",
                          },
                          {
                            name: "Faculty & Leadership Mentoring",
                            href: "/services/for-leaders/faculty-leadership-mentoring",
                          },
                          {
                            name: "Strategic Planning & Systems",
                            href: "/services/for-leaders/strategic-planning-systems",
                          },
                          {
                            name: "Programs for Students",
                            href: "/services/for-leaders/student-programs",
                          },
                        ],
                      },
                      {
                        name: "For Parents",
                        href: "/services/for-parents",
                        subLinks: [
                          {
                            name: "Insights & Guidance",
                            href: "/services/for-parents/insights-guidance",
                          },
                          {
                            name: "Parent Workshops",
                            href: "/services/for-parents/parent-workshops",
                          },
                          {
                            name: "School Partnership",
                            href: "/services/for-parents/school-partnership-advocacy",
                          },
                          {
                            name: "For Your Child",
                            href: "/services/for-parents/for-your-child",
                          },
                        ],
                      },
                    ]}
                  />
                  <NavItem
                    name="Contact Us"
                    href="/contact-us"
                    active={isActive("/contact-us")}
                  />
                </div>
              </nav>

              {/* DESKTOP CTA */}
              <div className="hidden md:flex items-center shrink-0">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn btn-primary !h-11 !px-6 !py-0 !min-h-0 text-sm shadow-lg shadow-primary/20"
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
                  animate={
                    menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
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
                  animate={
                    menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
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
                  <div className="border-t border-black/5 px-4 pb-4 pt-3 overflow-y-auto max-h-[calc(100vh-140px)] custom-scrollbar">
                    <div className="space-y-1 rounded-2xl bg-black/[0.02] p-2">
                      <MobileLink
                        name="Home"
                        href="/"
                        pathname={pathname}
                        setMenuOpen={setMenuOpen}
                      />
                      <MobileLink
                        name="About Us"
                        href="/about-us"
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
                        <div className="ml-3 mt-1 space-y-2 border-l border-primary/10 pl-3 py-2">
                          <MobileAccordion
                            name="For Educators"
                            href="/services/for-educators"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            subLinks={[
                              {
                                name: "Workshops & Training",
                                href: "/services/for-educators/workshops-training",
                              },
                              {
                                name: "Teacher Mentoring",
                                href: "/services/for-educators/teacher-mentoring",
                              },
                              {
                                name: "Free Resources & Tools",
                                href: "/services/for-educators/free-resources-tools",
                              },
                            ]}
                          />
                          <MobileAccordion
                            name="For School Leaders"
                            href="/services/for-leaders"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            subLinks={[
                              {
                                name: "Inclusion Audits",
                                href: "/services/for-leaders/inclusion-audits-roadmaps",
                              },
                              {
                                name: "Faculty & Leadership Mentoring",
                                href: "/services/for-leaders/faculty-leadership-mentoring",
                              },
                              {
                                name: "Strategic Planning & Systems",
                                href: "/services/for-leaders/strategic-planning-systems",
                              },
                              {
                                name: "Programs for Students",
                                href: "/services/for-leaders/student-programs",
                              },
                            ]}
                          />
                          <MobileAccordion
                            name="For Parents"
                            href="/services/for-parents"
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            subLinks={[
                              {
                                name: "Insights & Guidance",
                                href: "/services/for-parents/insights-guidance",
                              },
                              {
                                name: "Parent Workshops",
                                href: "/services/for-parents/parent-workshops",
                              },
                              {
                                name: "School Partnership",
                                href: "/services/for-parents/school-partnership-advocacy",
                              },
                              {
                                name: "For Your Child",
                                href: "/services/for-parents/for-your-child",
                              },
                            ]}
                          />
                        </div>
                      </div>

                      <MobileLink
                        name="Contact Us"
                        href="/contact-us"
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
                        className="btn btn-primary w-full shadow-lg shadow-primary/20"
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
  const pathname = usePathname();

  // Initialize with the current active category or the first one
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Set initial hovered category when opening the dropdown
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (dropdownItems) {
      const current =
        dropdownItems.find((cat) => pathname.startsWith(cat.href)) ||
        dropdownItems[0];
      setHoveredCategory(current);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
          active
            ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
            : "text-foreground/75 hover:text-primary"
        }`}
      >
        <span className="relative z-10">{name}</span>
        {active && !dropdownItems && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        )}

        {dropdownItems && (
          <ChevronDown
            className={`relative z-10 h-4 w-4 transition-transform duration-300 ${
              isHovered ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {dropdownItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
            >
              <div className="flex min-w-[640px] overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.12)]">
                {/* Left Side: Categories */}
                <div className="w-[260px] bg-black/[0.01] p-3 border-r border-black/5">
                  <div className="space-y-1">
                    {dropdownItems.map((category, idx) => {
                      const isCatHovered =
                        hoveredCategory?.name === category.name;
                      const isActuallyActive = pathname.startsWith(
                        category.href,
                      );

                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredCategory(category)}
                          className={`group relative flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 cursor-pointer ${
                            isCatHovered
                              ? "bg-white shadow-sm text-primary ring-1 ring-black/5"
                              : "text-foreground/60 hover:text-primary hover:bg-white/30"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isActuallyActive && (
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                            <Link
                              href={category.href}
                              className={`flex-1 text-[14px] font-bold tracking-tight ${isActuallyActive && !isCatHovered ? "text-foreground" : ""}`}
                            >
                              {category.name}
                            </Link>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 -rotate-90 transition-transform duration-300 ${isCatHovered ? "opacity-100 translate-x-1" : "opacity-0 group-hover:opacity-40"}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Sub-links Only */}
                <div className="flex-1 p-6 relative">
                  <AnimatePresence mode="wait">
                    {hoveredCategory && (
                      <motion.div
                        key={hoveredCategory.name}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 gap-1"
                      >
                        {hoveredCategory.subLinks?.map((sub, sIdx) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              className={`group relative flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
                                isSubActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted hover:bg-black/[0.02] hover:text-primary"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 relative z-10">
                                {isSubActive && (
                                  <motion.div
                                    layoutId="active-sub-dot"
                                    className="h-1.5 w-1.5 rounded-full bg-primary"
                                  />
                                )}
                                <span
                                  className={`text-[13.5px] font-bold ${isSubActive ? "text-primary" : ""}`}
                                >
                                  {sub.name}
                                </span>
                              </div>
                              <span
                                className={`relative z-10 transition-all duration-300 group-hover:translate-x-1 ${isSubActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                              >
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ================= MOBILE LINK ================= */

function MobileAccordion({ name, href, subLinks, pathname, setMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const active = subLinks.some((link) => pathname === link.href) || (href && pathname.startsWith(href));

  return (
    <div className="space-y-1">
      <div
        className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
          isOpen || active
            ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
            : "text-foreground/70 hover:text-primary"
        }`}
      >
        <Link 
          href={href || "#"} 
          className="flex items-center gap-2 flex-grow"
        >
          {active && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
          <span>{name}</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-black/5 rounded-lg transition-colors"
          aria-label="Toggle sub-menu"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 space-y-1 border-l border-primary/10 pl-3 py-1">
              {subLinks.map((link, idx) => (
                <MobileLink
                  key={idx}
                  name={link.name}
                  href={link.href}
                  pathname={pathname}
                  setMenuOpen={setMenuOpen}
                  isSub
                  fontSmall
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({
  name,
  href,
  pathname,
  setMenuOpen,
  isSub = false,
  fontSmall = false,
}) {
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`relative block rounded-xl px-4 transition-all duration-300 ${
        fontSmall
          ? "py-1.5 text-[12.5px] font-medium"
          : isSub
            ? "py-2.5 text-[14px] font-semibold"
            : "py-3 text-[15px] font-bold"
      } ${
        active
          ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
          : "text-foreground/75 hover:text-primary"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{name}</span>
        {active && <span className="h-2 w-2 rounded-full bg-primary" />}
      </div>
    </Link>
  );
}
