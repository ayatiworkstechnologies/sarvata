"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollUI() {
  /* ===== SCROLL PROGRESS ===== */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  /* ===== SCROLL ACTIONS ===== */
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <>
      {/* ================= TOP PROGRESS BAR ================= */}
      <motion.div
        className="
          fixed top-0 left-0 right-0 h-[3px]
          bg-primary
          origin-left
          z-[9999]
        "
        style={{ scaleX }}
      />

      {/* ================= RIGHT BOTTOM CONTROLS ================= */}
      <div className="fixed right-5 bottom-6 z-[9999] flex flex-col gap-3">
        {/* SCROLL TOP */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            w-11 h-11 rounded-full
            bg-primary
            text-white
            flex items-center justify-center
            shadow-lg
            hover:opacity-90
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-200
          "
        >
          <ArrowUp size={18} />
        </button>

        {/* SCROLL BOTTOM */}
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="
            w-11 h-11 rounded-full
            bg-white
            text-primary
            border border-primary/30
            flex items-center justify-center
            shadow-md
            hover:bg-primary
            hover:text-white
            hover:border-primary
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-200
          "
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </>
  );
}
