import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EventHighlightBar() {
  return (
    <section className="relative -mt-16 z-30 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300">

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-10 w-full lg:w-auto">
            {/* Logo Thumbnail (Near Event Info) */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative w-32 h-32 flex items-center justify-center hover:scale-105 transition-transform">
                <Image
                  src="/event-logo.png"
                  alt="Event Logo Thumbnail"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                📅
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Date</p>
                <p className="text-[15px] font-bold text-foreground">July 24, 2026</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-black/10"></div>

            {/* Time */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                ⏰
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Time</p>
                <p className="text-[15px] font-bold text-foreground">9:30 AM - 4:30 PM IST</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-black/10"></div>

            {/* Venue */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                📍
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Venue</p>
                <p className="text-[15px] font-bold text-foreground">APL Global School, Chennai</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3C7mJjP1EMll4gdWfWlB0gYL0I5p2iHRqOjae_9GhbeRI_Q/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto shrink-0">
            <button className="w-full btn btn-primary shadow-lg shadow-primary/25 !h-12 !px-8 text-sm font-semibold tracking-wide hover:shadow-xl hover:shadow-primary/30 transition-all">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
