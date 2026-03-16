"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";

export default function InnerHero({
  title,
  subtitle,
  breadcrumbs = [],
  variant = "default"
}) {
  const getVariantVectors = () => {
    switch (variant) {
      case "digital":
        return (
          <>
            <motion.div animate={{ opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-72 h-72 text-primary opacity-[0.08]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 20L180 60V140L100 180L20 140V60L100 20Z" stroke="currentColor" strokeWidth="1"/>
                  <path d="M100 60L180 100V180L100 140L20 180V100L100 60Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
                  <path d="M60 100H140M100 60V140" stroke="currentColor" strokeWidth="1" />
               </svg>
            </div>
            <div className="absolute bottom-1/4 left-[5%] grid grid-cols-6 gap-2 opacity-[0.05]">
              {[...Array(24)].map((_, i) => <div key={i} className="w-1 h-1 bg-primary rounded-full" />)}
            </div>
          </>
        );
      case "mental-health":
        return (
          <>
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] text-secondary opacity-[0.06]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    animate={{ d: [
                        "M100,20 C120,20 180,60 180,100 C180,140 120,180 100,180 C80,180 20,140 20,100 C20,60 80,20 100,20",
                        "M100,30 C130,10 170,50 170,100 C170,150 130,190 100,170 C70,190 30,150 30,100 C30,50 70,10 100,30"
                    ]}}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                    stroke="currentColor" strokeWidth="1"
                  />
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
               </svg>
            </div>
          </>
        );
      case "mentoring":
        return (
          <>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-32 bg-gradient-to-r from-primary/10 to-transparent rotate-12 blur-2xl" />
            <div className="absolute top-10 right-10 w-64 h-64 text-primary opacity-[0.07]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="140" width="20" height="40" fill="currentColor" />
                  <rect x="70" y="110" width="20" height="70" fill="currentColor" />
                  <rect x="100" y="80" width="20" height="100" fill="currentColor" />
                  <rect x="130" y="50" width="20" height="130" fill="currentColor" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M40,130 L70,100 L100,70 L130,40 L160,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  />
                  <circle cx="160" cy="10" r="4" fill="currentColor" />
               </svg>
            </div>
          </>
        );
      case "planning":
        return (
          <>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            <div className="absolute top-1/4 right-1/4 w-80 h-80 text-foreground opacity-[0.06]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="160" height="160" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                  <path d="M20 100H180M100 20V180" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
                  <rect x="80" y="80" width="40" height="40" fill="currentColor" />
               </svg>
            </div>
          </>
        );
      case "advocacy":
        return (
          <>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -top-[10%] left-[5%] w-[400px] h-[400px] border border-secondary/10 rounded-full border-dashed" />
            <div className="absolute bottom-10 right-10 w-72 h-72 text-secondary opacity-[0.08]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="80" r="30" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 160C50 130 72.3858 106 100 106C127.614 106 150 130 150 160" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M150 100L180 70M180 130L150 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="180" cy="70" r="5" fill="currentColor" />
               </svg>
            </div>
          </>
        );
      case "resources":
        return (
          <>
            <div className="absolute bottom-0 right-0 w-[500px] h-full bg-gradient-to-tl from-primary/5 to-transparent" />
            <div className="absolute top-20 right-20 w-64 h-64 text-primary opacity-[0.08]">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 40H140L160 60V160H40V40Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M140 40V60H160" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M60 80H120M60 110H140M60 140H100" stroke="currentColor" strokeWidth="1" />
               </svg>
            </div>
          </>
        );
      default:
        return (
          <>
            {/* Default Morphing Shape */}
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.07] text-primary">
              <svg viewBox="0 0 200 200"><path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.4,90,-15.8,87.7,-0.7C85.4,14.4,78.2,27.9,69.5,40.1C60.8,52.3,50.6,63.2,38.2,71.2C25.8,79.2,11.2,84.3,-3,89.5C-17.2,94.7,-34.4,100,-48.6,94.3C-62.8,88.6,-74,71.9,-81.2,55.3C-88.4,38.7,-91.6,22.2,-89.9,6.5C-88.2,-9.2,-81.6,-24.1,-72.6,-37.5C-63.6,-50.9,-52.2,-62.8,-39.2,-70.8C-26.2,-78.8,-11.6,-82.9,2.4,-87.1C16.4,-91.3,30.7,-83.6,44.7,-76.4Z" transform="translate(100 100)" /></svg>
            </motion.div>
          </>
        );
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      {/* ── Decorative Background Elements ── */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {getVariantVectors()}
        
        {/* Common Accents */}
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-transparent border border-white/20 backdrop-blur-sm" />
      </div>
      
      {/* ── Content ── */}
      <div className="container-max pt-28 pb-32 md:pt-44 md:pb-40 relative z-10">
         <div className="max-w-4xl relative">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] leading-[1.1]">
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-6 text-lg leading-8 text-muted max-w-2xl">
                {subtitle}
              </motion.p>
            )}

            <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-10 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary origin-left" />
         </div>
      </div>

      {/* ── Bottom Breadcrumbs ── */}
      {breadcrumbs.length > 0 && (
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="container-max pb-8 md:pb-10">
            <motion.nav 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
              className="inline-flex max-w-full rounded-2xl border border-border/40 bg-white/60 backdrop-blur-md px-5 py-2.5 shadow-sm shadow-black/5"
            >
              <ol className="flex flex-wrap items-center gap-2.5 text-[14px] font-medium text-muted">
                <li className="flex items-center gap-2">
                  <HiHome className="text-[18px] text-primary" />
                  <Link href="/" className="transition hover:text-foreground">Home</Link>
                </li>
                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <GrNext className="text-[10px] text-muted/50" />
                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-foreground">{item.label}</Link>
                    ) : (
                      <span className="text-foreground font-semibold">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          </div>
        </div>
      )}
    </section>
  );
}
