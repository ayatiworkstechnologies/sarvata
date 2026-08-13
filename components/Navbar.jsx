"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Quote } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

/* ============================================================
   NAV DATA (Header)
   ============================================================ */

const SERVICES_MENU = [
  {
    name: "For Educators",
    href: "/services/for-educators",
    tagline: "Grow the craft of teaching",
    subLinks: [
      { name: "Workshops & Training", href: "/services/for-educators/workshops-training" },
      { name: "Teacher Mentoring", href: "/services/for-educators/teacher-mentoring" },
    ],
  },
  {
    name: "For School Leaders",
    href: "/services/for-leaders",
    tagline: "Build the systems around them",
    subLinks: [
      { name: "Inclusion Audits", href: "/services/for-leaders/inclusion-audits-roadmaps" },
      { name: "Faculty & Leadership Mentoring", href: "/services/for-leaders/faculty-leadership-mentoring" },
      { name: "Strategic Planning & Systems", href: "/services/for-leaders/strategic-planning-systems" },
      {
        name: "Programs for Students",
        href: "/services/for-leaders/student-programs",
        subLinks: [
          { name: "Cyber Safety & Digital Citizenship", href: "/services/for-leaders/student-programs/cyber-safety-digital-citizenship" },
          { name: "Mental Health & Well-Being", href: "/services/for-leaders/student-programs/mental-health-well-being" },
          { name: "Healthy Relationships & Boundaries", href: "/services/for-leaders/student-programs/healthy-relationships-boundaries" },
        ],
      },
    ],
  },
  {
    name: "For Parents",
    href: "/services/for-parents",
    tagline: "Keep the whole child in view",
    subLinks: [
      { name: "Insights & Guidance", href: "/services/for-parents/insights-guidance" },
      { name: "Parent Workshops", href: "/services/for-parents/parent-workshops" },
      { name: "School Partnership", href: "/services/for-parents/school-partnership-advocacy" },
      {
        name: "For Your Child",
        href: "/services/for-parents/for-your-child",
        subLinks: [
          { name: "Understanding How Your Child Learns", href: "/services/for-parents/for-your-child/understanding-how-your-child-learns" },
        ],
      },
    ],
  },
];

const PRIMARY_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services", dropdownItems: SERVICES_MENU },
  { name: "Events", href: "/event" },
  { name: "Gallery", href: "/gallery" },
  //{ name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact-us" },
];


const TESTIMONIALS = [
  {
    quote:
      "SARVATA is more than a professional learning platform. It is a transformative community that nurtures educators to lead with awareness, empathy, and purpose.",
    name: "Nagasudaa Karthick",
    school: "DAV Public School, Velachery",
    track: "The Leadership Engine",
  },
  {
    quote:
      "Today's Sarvata learning session was highly engaging, insightful, and relevant to my role as a school leader. The practical strategies and real-life examples provided valuable ideas I can implement to enhance teaching, learning, and school management.",
    name: "Dr. K. Vanitha",
    school: "Periyar Centenary Memorial Matriculation HSS, Trichy",
    track: "The Leadership Engine",
  },
  {
    quote: "A deep, immersive experience with an opportunity to design the future the right way.",
    name: "Jyoti Kothari",
    school: "Success Vidyapeeth",
    track: "The Leadership Engine",
  },
  {
    quote:
      "A very interactive session, well-facilitated. It gave a lot of opportunities to think creatively as well as collaborate.",
    name: "Aruna Arun",
    school: "Budding Minds International School",
    track: "The Unseen Curriculum",
  },
  {
    quote:
      "This experience broadened my perspective, helping me recognise that meaningful learning extends far beyond the boundaries of textbooks — it's about nurturing reflective thinkers.",
    name: "Navitha Raj",
    school: "SV High International School",
    track: "The Unseen Curriculum",
  },
  {
    quote:
      "Today's session on 'The Learner's Blueprint' was highly engaging, insightful, and thought-provoking. It helped me understand learners from a deeper perspective and reflect on my own teaching practices.",
    name: "Dr. Chhaya Bhadauria",
    school: "Ramana Vidyalaya, Chengalpet",
    track: "The Learner's Blueprint",
  },
  {
    quote:
      "It is an eye-opening event for me. Each student is a world... understanding them takes a lot of work, and you made it simple.",
    name: "Sakthi Sarguna",
    school: "Milton International School",
    track: "The Learner's Blueprint",
  },
  {
    quote:
      "The 'Conscious Educator' session was a much-needed pause. It reminded me that teacher well-being and student well-being are connected — it's learning that actually translates into action.",
    name: "Rutika Jayaram",
    school: "Sarvata Educators Collective",
    track: "The Conscious Educator",
  },
  {
    quote:
      "Loved the idea that digital well-being was included along with physical and emotional well-being. The energy and connection the facilitators built with the audience were superb.",
    name: "Devitha Kannan",
    school: "APL Global School",
    track: "The Conscious Educator",
  },
  {
    quote:
      "The session was exceptionally informative and professionally enriching, reinforcing the importance of adopting inclusive, evidence-based teaching practices for equitable, learner-centred classrooms.",
    name: "Nagasudaa Karthick",
    school: "DAV Public School, Velachery",
    track: "The Cognitive Spectrum",
  },
  {
    quote: "A refreshing and mind-enriching session.",
    name: "Mrs. J. Gayathri",
    school: "Fathima Central Senior Secondary School",
    track: "The Cognitive Spectrum",
  },
  {
    quote:
      "With more skills, you are well-prepared for the challenges in life, which in turn improves your emotional well-being towards yourself and others.",
    name: "Grace Jeyakumar",
    school: "Vaels International School",
    track: "The ASUDE Simulation Lab",
  },
];

/* ============================================================
   HEADER
   ============================================================ */

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const servicesActive = SERVICES_MENU.some((c) => isActive(c.href)) || isActive("/services");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="px-4 pt-4 md:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
            scrolled
              ? "border-black/5 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl"
              : "border-black/5 bg-white/70 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* LOGO */}
            <Link href="/" className="group flex shrink-0 items-center">
              <Image
                src="/logo.png"
                alt="Sarvata"
                width={152}
                height={60}
                priority
                className="h-14 w-auto transition duration-300 group-hover:opacity-85"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 rounded-full border border-black/[0.04] bg-black/[0.025] p-1.5">
                {PRIMARY_LINKS.map((item) => (
                  <NavItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    active={item.dropdownItems ? servicesActive : isActive(item.href)}
                    dropdownItems={item.dropdownItems}
                  />
                ))}
              </div>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex shrink-0 items-center">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary group !flex !h-11 !min-h-0 items-center gap-1.5 !py-0 !px-6 text-sm shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Schedule Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] text-foreground transition hover:bg-black/[0.07] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
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
                className="overflow-hidden lg:hidden"
              >
                <div className="custom-scrollbar max-h-[calc(100vh-140px)] overflow-y-auto border-t border-black/5 px-4 pb-4 pt-3">
                  <div className="space-y-1 rounded-2xl bg-black/[0.02] p-2">
                    {PRIMARY_LINKS.map((item) =>
                      item.dropdownItems ? (
                        <div key={item.name} className="rounded-xl bg-white/70 p-1">
                          <MobileAccordion
                            name={item.name}
                            href={item.href}
                            pathname={pathname}
                            setMenuOpen={setMenuOpen}
                            subLinks={item.dropdownItems}
                          />
                        </div>
                      ) : (
                        <MobileLink
                          key={item.name}
                          name={item.name}
                          href={item.href}
                          pathname={pathname}
                          setMenuOpen={setMenuOpen}
                        />
                      )
                    )}
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
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ name, href, active, dropdownItems }) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (dropdownItems) {
      const current = dropdownItems.find((cat) => pathname.startsWith(cat.href)) || dropdownItems[0];
      setHoveredCategory(current);
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={() => setIsHovered(false)}>
      <Link
        href={href}
        className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-300 ${
          active ? "text-primary" : "text-foreground/70 hover:text-primary"
        }`}
      >
        {active && (
          <motion.span
            layoutId="nav-active-pill"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] ring-1 ring-black/5"
          />
        )}
        <span>{name}</span>
        {dropdownItems && (
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
        )}
      </Link>

      {dropdownItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
            >
              <div className="flex min-w-[660px] overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
                {/* Categories */}
                <div className="w-[260px] border-r border-black/5 bg-black/[0.015] p-3">
                  <div className="space-y-1">
                    {dropdownItems.map((category) => {
                      const isCatHovered = hoveredCategory?.name === category.name;
                      const isCatActive = pathname.startsWith(category.href);
                      return (
                        <div
                          key={category.name}
                          onMouseEnter={() => setHoveredCategory(category)}
                          className={`group relative cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 ${
                            isCatHovered
                              ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                              : "text-foreground/60 hover:bg-white/40 hover:text-primary"
                          }`}
                        >
                          <Link href={category.href} className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-2">
                              {isCatActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                              <span className="text-[14px] font-bold tracking-tight">{category.name}</span>
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 -rotate-90 transition-all duration-300 ${
                                isCatHovered ? "translate-x-0.5 opacity-100" : "opacity-0 group-hover:opacity-40"
                              }`}
                            />
                          </Link>
                          {category.tagline && (
                            <p
                              className={`mt-0.5 text-[11.5px] font-medium transition-colors ${
                                isCatHovered ? "text-primary/60" : "text-foreground/35"
                              }`}
                            >
                              {category.tagline}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-links */}
                <div className="relative flex-1 p-6">
                  <AnimatePresence mode="wait">
                    {hoveredCategory && (
                      <motion.div
                        key={hoveredCategory.name}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.18 }}
                        className="grid grid-cols-1 gap-1"
                      >
                        {hoveredCategory.subLinks?.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          const hasChildren = sub.subLinks?.length > 0;
                          const isChildActive = hasChildren && sub.subLinks.some((c) => pathname === c.href);
                          return (
                            <div key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
                                  isSubActive || isChildActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted hover:bg-black/[0.02] hover:text-primary"
                                }`}
                              >
                                <span className="flex items-center gap-2.5">
                                  {(isSubActive || isChildActive) && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  )}
                                  <span className="text-[13.5px] font-bold">{sub.name}</span>
                                </span>
                                <span
                                  className={`transition-all duration-300 group-hover:translate-x-1 ${
                                    isSubActive || isChildActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                  }`}
                                >
                                  →
                                </span>
                              </Link>
                              {hasChildren && (
                                <div className="ml-6 mt-1 space-y-0.5 border-l-2 border-primary/10 pl-3">
                                  {sub.subLinks.map((child) => {
                                    const isChildLinkActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className={`group flex items-center justify-between rounded-lg px-3 py-2 transition-all duration-300 ${
                                          isChildLinkActive
                                            ? "bg-primary/8 text-primary"
                                            : "text-muted/80 hover:bg-black/[0.02] hover:text-primary"
                                        }`}
                                      >
                                        <span className="flex items-center gap-2">
                                          {isChildLinkActive && <span className="h-1 w-1 rounded-full bg-primary" />}
                                          <span className="text-[12.5px] font-semibold">{child.name}</span>
                                        </span>
                                        <span
                                          className={`text-xs transition-all duration-300 group-hover:translate-x-1 ${
                                            isChildLinkActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                          }`}
                                        >
                                          →
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
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

/* ================= MOBILE ================= */

function MobileAccordion({ name, href, subLinks, pathname, setMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const active = subLinks.some((link) => pathname === link.href) || (href && pathname.startsWith(href));

  return (
    <div className="space-y-1">
      <div
        className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
          isOpen || active ? "bg-white text-primary shadow-sm ring-1 ring-black/5" : "text-foreground/70 hover:text-primary"
        }`}
      >
        <Link href={href || "#"} className="flex flex-grow items-center gap-2">
          {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
          <span>{name}</span>
        </Link>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-1 transition-colors hover:bg-black/5"
          aria-label="Toggle sub-menu"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
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
            <div className="ml-4 mt-1 space-y-1 border-l border-primary/10 py-1 pl-3">
              {subLinks.map((link) =>
                link.subLinks?.length ? (
                  <MobileNestedAccordion
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    pathname={pathname}
                    setMenuOpen={setMenuOpen}
                    subLinks={link.subLinks}
                  />
                ) : (
                  <MobileLink
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    pathname={pathname}
                    setMenuOpen={setMenuOpen}
                    isSub
                    fontSmall
                  />
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNestedAccordion({ name, href, subLinks, pathname, setMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const active = pathname === href || subLinks.some((link) => pathname === link.href);

  return (
    <div className="space-y-0.5">
      <div
        className={`flex w-full items-center justify-between rounded-xl px-4 py-1.5 text-[12.5px] font-medium transition-all duration-300 ${
          isOpen || active ? "bg-white/80 text-primary shadow-sm ring-1 ring-black/5" : "text-foreground/70 hover:text-primary"
        }`}
      >
        <Link href={href || "#"} className="flex flex-grow items-center gap-2" onClick={() => setMenuOpen(false)}>
          {active && <span className="h-1 w-1 rounded-full bg-primary" />}
          <span>{name}</span>
        </Link>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-1 transition-colors hover:bg-black/5"
          aria-label="Toggle sub-menu"
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-0.5 space-y-0.5 border-l border-primary/10 py-0.5 pl-3">
              {subLinks.map((link) => (
                <MobileLink
                  key={link.name}
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

function MobileLink({ name, href, pathname, setMenuOpen, isSub = false, fontSmall = false }) {
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`relative block rounded-xl px-4 transition-all duration-300 ${
        fontSmall ? "py-1.5 text-[12.5px] font-medium" : isSub ? "py-2.5 text-[14px] font-semibold" : "py-3 text-[15px] font-bold"
      } ${active ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/5" : "text-foreground/75 hover:text-primary"}`}
    >
      <div className="flex items-center justify-between">
        <span>{name}</span>
        {active && <span className="h-2 w-2 rounded-full bg-primary" />}
      </div>
    </Link>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */

export function Testimonials() {
  const [activeTrack, setActiveTrack] = useState("All");

  const filtered =
    activeTrack === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.track === activeTrack);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.03),transparent_45%)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-primary">
            Sarvata Educators Collective · 25 July 2026
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What educators are saying
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Reflections from school leaders, teachers, and counsellors straight from the
            Collective's six learning tracks.
          </p>
        </div>

        {/* Track filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TRACKS.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                activeTrack === track
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-black/[0.03] text-foreground/60 hover:bg-black/[0.06] hover:text-foreground"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <motion.figure
                key={`${t.name}-${t.track}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
              >
                <Quote className="h-6 w-6 text-primary/30" strokeWidth={2.5} />
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-black/5 pt-4">
                  <p className="text-[14px] font-bold text-foreground">{t.name}</p>
                  <p className="text-[12.5px] text-muted">{t.school}</p>
                  <span className="mt-2 inline-block rounded-full bg-primary/8 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-primary/70">
                    {t.track}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;