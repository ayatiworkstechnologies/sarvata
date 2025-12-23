"use client";

import { useEffect, useRef, useState } from "react";

export default function WhoWeAre() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* FIRST SECTION */}
      <section ref={ref} className="section bg-white overflow-hidden">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/about.png"
              alt="Educator"
              className="rounded w-full max-w-md md:max-w-full mx-auto"
            />
          </div>

          {/* CONTENT */}
          <div
            className={`transition-all duration-700 delay-150 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="heading-lg mb-4">
              Guiding Learning with Purpose
            </h2>
            <p className="text-muted mb-6">
              At Sarvata, we believe education is not just about knowledge,
              but about nurturing confidence, curiosity, and capability
              at every stage of learning.
            </p>

            <button className="btn btn-primary">
              Know Our Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* SECOND SECTION — IMAGE WITH BOTTOM BG STRIP */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">
        
        {/* Bottom Background Color Strip */}
        <div
          className="
            absolute left-0 right-0
            bottom-16 md:bottom-24
            h-20 md:h-32
            bg-[color:var(--color-secondary)]
          "
        />

        {/* Centered Image */}
        <div className="relative container-max flex justify-center">
          <img
            src="/peopels.png"
            alt="Students"
            className="
              w-full
              max-w-xs sm:max-w-md md:max-w-3xl
              object-contain
            "
          />
        </div>

      </section>
    </>
  );
}
