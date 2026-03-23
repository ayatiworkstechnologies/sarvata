"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const FloatingShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-[0.15]">
      {/* Brand Watermarks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2 }}
        className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rotate-[-15deg]"
      >
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-[40%] -right-[20%] w-[500px] h-[500px] rotate-[10deg]"
      >
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </motion.div>
      {/* Soft Blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]"
      />

      {/* Geometric Ornaments */}
      <div className="absolute top-[15%] right-[8%] opacity-[0.15]">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary" />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
          <path d="M60 10V30M60 90V110M10 60H30M90 110H110" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[6%] opacity-[0.12]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" rotate="45" className="text-secondary" />
          <path d="M0 50H100M50 0V100" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
        </svg>
      </div>

      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />
    </div>
  );
};

export const SubtleGrid = () => {
  return (
    <div 
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]" 
      style={{ 
        backgroundImage: `linear-gradient(#E2C473 1px, transparent 1px), linear-gradient(90deg, #E2C473 1px, transparent 1px)`, 
        backgroundSize: '60px 60px' 
      }} 
    />
  );
};
