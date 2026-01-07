"use client";

import { motion } from "framer-motion";

export default function SarvataLoader() {
  return (
    <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
      <motion.div
        className="relative w-20 h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* OUTER RING */}
        <motion.span
          className="absolute inset-0 rounded-full border border-orange-400/30"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "linear",
          }}
        />

        {/* INNER DOT */}
        <motion.span
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-orange-500 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ scale: [1, 1.6, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
