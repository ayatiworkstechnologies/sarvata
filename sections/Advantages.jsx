"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "Community Support",
    desc: "Join a vibrant community of learners for networking and collaboration. Connect with like-minded individuals and share your knowledge.",
  },
  {
    title: "Expert Instructors",
    desc: "Become part of an energetic group of learners where you can network and collaborate. Meet others who share your interests and exchange insights.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Learn at your own pace with flexible schedules that fit your lifestyle, allowing balance between learning and life.",
  },
  {
    title: "Adaptable Timetable",
    desc: "Our programs adapt to your needs, ensuring consistency without compromising flexibility.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Learn at your own pace with flexible schedules that fit your lifestyle, allowing balance between learning and life.",
  },
  {
    title: "Adaptable Timetable",
    desc: "Our programs adapt to your needs, ensuring consistency without compromising flexibility.",
  },
];

export default function Advantages() {
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  /* Scroll-based activation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = hovered ?? active;

  return (
    <section
      className="relative section bg-cover bg-center"
      style={{ backgroundImage: "url('/glass-img.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" />

      <div className="relative container-max grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT — STICKY */}
        <div className="text-white lg:sticky lg:top-32 self-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Discover the Advantages of Sarvata Academy
          </h2>

          <p className="mt-5">
            Become part of an energetic learning community where you can engage and collaborate. Connect with fellow enthusiasts and exchange valuable ideas!
          </p>
        </div>

        {/* RIGHT — SCROLL AREA */}
        <div className="relative max-h-130 space-y-6 overflow-y-scroll pr-2 scrollbar-hide">
          {FEATURES.map((item, i) => {
            const isActive = current === i;

            return (
              <motion.div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                data-index={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  scale: isActive ? 1.03 : 1,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative overflow-hidden rounded"
              >
                {/* SECONDARY BG — INK SPREAD */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-secondary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </AnimatePresence>

                {/* CONTENT */}
                <div
                  className={`
                    relative p-6 transition-colors duration-300 border-b-2 border-primary
                    ${isActive ? "text-white" : "bg-white/90 text-black"}
                  `}
                >
                  <h4 className="font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                 
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
