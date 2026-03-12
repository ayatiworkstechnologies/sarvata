"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollUI() {
  /* ===== SCROLL PROGRESS ===== */
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== ACTION ===== */
  const handleScroll = () => {
    if (isTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ===== SCROLL PROGRESS BAR ===== */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* ===== FLOATING BUTTON ===== */}
      <button
        onClick={handleScroll}
        aria-label="Scroll control"
        className="
        fixed right-6 bottom-6 z-[9999]
        w-12 h-12
        rounded-full
        bg-primary
        text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        hover:-translate-y-1
        active:scale-95
        transition-all duration-300
      "
      >
        {isTop ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
      </button>
    </>
  );
}