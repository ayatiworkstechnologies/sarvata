import React from 'react';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import { FiPhone, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';

export default function EventRegistration() {
  return (
    <section id="registration" className="py-24 bg-background relative border-t border-black/5 overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-10 md:p-16 flex flex-col md:flex-row items-stretch justify-between gap-12">

          {/* Left Column: Contact Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-3">
                Step 1
              </span>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Contact Us for further details</h2>
            </div>

            <div className="space-y-5 text-foreground/80 font-medium text-lg">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/5 transition-all text-primary">
                  <FiPhone className="w-5 h-5" />
                </div>
                <a href="tel:+919150418101" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  +91 9150418101
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/5 transition-all text-primary">
                  <FiMail className="w-5 h-5" />
                </div>
                <a href="mailto:events@sarvata.org" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  events@sarvata.org
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/5 transition-all text-primary">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <a href="https://www.sarvata.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  www.sarvata.org
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/5 transition-all text-primary">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <span>Thoraipakkam, Chennai</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
          {/* Horizontal Divider (Mobile only) */}
          <div className="block md:hidden h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

          {/* Right Column: Registration */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide uppercase mb-3">
                Step 2
              </span>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">For institution Registrations</h2>
            </div>

            <div className="mb-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3C7mJjP1EMll4gdWfWlB0gYL0I5p2iHRqOjae_9GhbeRI_Q/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="relative block w-full">
                <AnimatedButton variant="primary" className="w-full justify-center shadow-xl">
                  Institution Registration
                </AnimatedButton>
              </a>
            </div>

            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed relative z-10 pl-2">
                Kindly note, Individuals will be able to register for their preferred workshops starting <strong>15th July</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* Page End Event Logo Thumbnail */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3">
          <div className="relative w-50 h-50  rounded-2xl overflow-hidden border border-black/5 bg-white shadow-md flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
            <Image
              src="/event-logo.png"
              alt="Event Logo Thumbnail"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-xs text-foreground/45 font-bold uppercase tracking-[0.25em]">
            The Sarvata Educators Collective 2026
          </p>
        </div>
      </div>
    </section>
  );
}
