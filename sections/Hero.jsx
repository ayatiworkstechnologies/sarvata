"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="Growth and learning"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional soft overlay (keep light so seeds show) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CLICKABLE GLOW SEEDS */}
      <div className="absolute inset-0 z-10">
        
        {/* Educators */}
        <Link
          href="/pathways/educators"
          className="seed seed-1"
          aria-label="For Educators"
        />

        {/* Leaders */}
        <Link
          href="/pathways/leaders"
          className="seed seed-2"
          aria-label="For Leaders"
        />

        {/* Parents */}
        <Link
          href="/pathways/parents"
          className="seed seed-3"
          aria-label="For Parents"
        />

        {/* Learners */}
        <Link
          href="/pathways/learners"
          className="seed seed-4"
          aria-label="For Learners"
        />
      </div>

    </section>
  );
}
