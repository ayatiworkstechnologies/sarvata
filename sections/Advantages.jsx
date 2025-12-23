"use client";

import { useEffect, useRef, useState } from "react";

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
];

export default function Advantages() {
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative section bg-cover bg-center"
      style={{ backgroundImage: "url('/advantages-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container-max grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT (Sticky) */}
        <div className="text-white lg:sticky lg:top-32">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Discover the Advantages of <br /> Sarvata Academy
          </h2>

          <p className="text-white/80 max-w-md">
            Become part of an energetic learning community where you can engage
            and collaborate. Connect with fellow enthusiasts and exchange
            valuable ideas.
          </p>
        </div>

        {/* RIGHT CONTENT (Normal Flow – No Scrollbar) */}
        <div className="space-y-6">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              data-index={i}
              className={`rounded p-6 transition-all duration-300
                ${
                  active === i
                    ? "bg-[color:var(--color-secondary)] text-black"
                    : "bg-white/90 text-black"
                }`}
            >
              <h4 className="font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
