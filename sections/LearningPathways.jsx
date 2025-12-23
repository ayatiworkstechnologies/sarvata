"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PATHWAYS = [
  {
    title: "Educators",
    desc: "You see it every day. The student who finishes early and is bored.",
    image: "/learns-1.png",
    link: "/pathways/educators",
  },
  {
    title: "Leaders",
    desc: "Leading a school today means navigating complex landscapes.",
    image: "/learns-2.png",
    link: "/pathways/leaders",
  },
  {
    title: "Parents",
    desc: "Parenting today means guiding your child through an ever-evolving world.",
    image: "/learns-3.png",
    link: "/pathways/parents",
  },
  {
    title: "Learners",
    desc: "School is more than just classes and grades.",
    image: "/learns-4.png",
    link: "/pathways/learners",
  },
];

export default function LearningPathways() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-white">
      <div className="container-max">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs tracking-wider text-secondary mb-3">
            Educational Journeys
          </span>
          <h2 className="heading-lg mb-3">Learning Pathways</h2>
          <p className="text-muted text-sm">
            We are a premier educational resource, empowering schools,
            educators, and families to unlock every student’s full potential.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PATHWAYS.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="group rounded overflow-hidden bg-white shadow-sm hover:shadow-lg transition">

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm mb-4">
                    {item.desc}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Discover
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
