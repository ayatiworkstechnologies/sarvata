"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Reusable Animated Root Component
const RootPath = ({ d, strokeWidth = 4, progress, delay = 0, color = "#d7ccc8" }) => {
    // Map the global scroll progress to this specific root's growth
    const pathLength = useTransform(progress, [0, 1], [0, 1]);
    
    return (
        <motion.path
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ pathLength }}
        />
    );
};

// GLOWING SEED COMPONENT (New)
// GLOWING SEED COMPONENT (Golden Blink Design + Link Support)
const GlowingSeed = ({ cx, cy, delay, progress, href = "#", tooltip = "Explore" }) => {
    // Scale up from 0 to 1
    const scale = useTransform(progress, [0.85, 1], [0, 0.5]); 
    // Fade in
    const opacity = useTransform(progress, [0.8, 1], [0, 1]);
    
    return (
        <motion.g style={{ opacity, scale, x: cx, y: cy }}>
             {/* Interactive Container: SVG Anchor */}
             <motion.a 
                href={href} 
                className="cursor-pointer"
                whileHover="hover"
                initial="initial"
            >
                {/* Center the design */}
                <g transform="translate(-100, -100)">
                    
                    {/* BACKGROUND GLOW HALO (New) */}
                    <circle cx="102" cy="100" r="60" fill="#ffa000" opacity="0.4" filter="url(#outerSeedGlow)" />

                    {/* Shadow */}
                    <ellipse cx="102" cy="182" rx="40" ry="10" fill="#000" fillOpacity="0.2" />

                    {/* Main Body - Golden Husk */}
                    <path d="M102,182 C65,178 32,145 28,95 C26,45 68,18 105,12 C145,18 178,48 172,98 C168,148 138,178 102,182 Z" 
                        fill="url(#organicHusk)" 
                        stroke="#bf360c" 
                        strokeWidth="0.7" 
                        filter="url(#seedGrain)" />

                    {/* Inner Core - BLINKING HEARTBEAT */}
                    <motion.path d="M102,172 C80,165 58,135 58,95 C58,55 78,35 105,30 L102,172 Z" 
                        fill="url(#fleshyCore)" 
                        stroke="#ff6f00" 
                        strokeWidth="0.5" 
                        opacity="1"
                        animate={{ opacity: [0.6, 1, 0.6], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut", delay: delay }}
                    />

                    {/* Texture Lines (Left) */}
                    <g stroke="#ff8f00" fill="none" strokeLinecap="round">
                        <path d="M98,155 Q80,135 75,105" strokeWidth="0.4" opacity="0.6" />
                        <path d="M100,115 Q75,95 70,65" strokeWidth="0.3" opacity="0.5" />
                        <path d="M102,75 Q85,55 90,40" strokeWidth="0.3" opacity="0.5" />
                    </g>

                    {/* Texture Lines (Right) */}
                    <g stroke="#ff6f00" strokeWidth="0.4" fill="none" opacity="0.6">
                        <path d="M115,168 C135,155 160,125 160,95" />
                        <path d="M120,135 C140,125 165,105 167,75" />
                        <path d="M110,50 C130,45 155,60 160,85" />
                    </g>

                    {/* Tiny Tip Detail */}
                    <circle cx="105" cy="12" r="1.5" fill="#bf360c" opacity="0.8" />
                    
                    {/* TOOLTIP (Appears on Hover) */}
                    <motion.g 
                        variants={{ initial: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.2 }}
                        style={{ pointerEvents: 'none' }}
                    >
                        {/* Tooltip Bg */}
                        <rect x="50" y="-40" width="104" height="30" rx="15" fill="black" fillOpacity="0.8" />
                        {/* Tooltip Text */}
                        <text x="102" y="-20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                            {tooltip}
                        </text>
                    </motion.g>
                </g>
            </motion.a>
        </motion.g>
    );
};

// Floating Ambient Particles (Pollen/Dust)
const FloatingParticles = () => {
    const [particles, setParticles] = React.useState([]);

    React.useEffect(() => {
        // Generate positions only on client to avoid hydration mismatch
        setParticles(Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5
        })));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-40 ml-5"
                    style={{ left: p.x, top: p.y }}
                    animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                />
            ))}
        </div>
    );
};

// Animated Text Label
const DetailLabel = ({ children, x, y, progress, triggerRange }) => {
    const opacity = useTransform(progress, triggerRange, [0, 1]);
    const translateY = useTransform(progress, triggerRange, [20, 0]);
    
    return (
        <motion.div 
            style={{ opacity, y: translateY, left: x, top: y }}
            className="absolute z-10 pointer-events-none"
        >
            <div className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#d7ccc8] text-xs md:text-sm font-light tracking-[0.2em] shadow-lg">
                {children}
            </div>
        </motion.div>
    );
};

// User Provided SVG Leaf
const UserLeaf = ({ className, rotate = 0, delay = 0, scale = 1 }) => (
    <motion.div
        style={{
            rotate,
            scale,
            transformOrigin: "42.5% 100%", // Pivot at stem base
            x: "-42.5%", // Center horizontally on the pivot
        }}
        animate={{
            rotate: [rotate, rotate + 2, rotate - 1, rotate]
        }}
        transition={{
            duration: 6, // Fixed duration to prevent hydration mismatch
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 1,
        }}
        className={className}
    >
        <svg
            viewBox="0 0 200 250"
            fill="none"
            style={{ overflow: 'visible' }}
            className="drop-shadow-sm"
        >
            <defs>
                <linearGradient id="organicLeafGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#1b5e20" />
                    <stop offset="40%" stopColor="#43a047" />
                    <stop offset="100%" stopColor="#8bc34a" />
                </linearGradient>
            </defs>
            <path d="M100,210 C80,195 25,160 25,100 C25,60 65,40 100,10 C135,40 175,60 175,105 C175,165 120,195 100,210 Z"
                fill="url(#organicLeafGrad)" stroke="#1e3317" strokeWidth="0.5"
            />
            <path d="M100,210 C98,150 102,70 100,10" stroke="#1e3317" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
            <g stroke="#1e3317" strokeWidth="0.8" fill="none" opacity="0.4" strokeLinecap="round">
                <path d="M99,180 C80,175 45,160 40,135" />
                <path d="M100,145 C75,140 40,120 35,90" />
                <path d="M101,110 C80,100 55,85 50,60" />
                <path d="M100,170 C125,165 160,150 165,125" />
                <path d="M101,130 C130,125 165,110 170,80" />
                <path d="M100,95 C125,90 155,75 160,50" />
            </g>
            <path d="M100,210 C102,230 98,240 85,250" stroke="#558b2f" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
    </motion.div>
);

export default function NaturalEffectHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    
    // Parallax & Smooth Scroll
    // Parallax & Smooth Scroll - Organic "Weighted" Physics
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.5, stiffness: 45, damping: 15 });
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

    // Parallax for Plant Moving Up
    const plantY = useTransform(smoothProgress, [0, 1], ["0vh", "-60vh"]);

    // STAGGERED ROOT GROWTH TRIGGERS
    const mainRootGrowth = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);
    const subRootGrowth = useTransform(smoothProgress, [0.3, 0.8], [0, 1]);

    // Seed Appearance Trigger (Late stage of main roots)
    const seedGrowth = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full h-[200vh] bg-[#3e2723]">
            
            {/* 1. ABOVE GROUND (Animated Parallax) */}
            <motion.div 
                style={{ y: plantY }}
                className="sticky top-0 w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-end z-0"
            >
                
                {/* Background Ambience */}
                <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-lime-50/20 to-white" />
                    <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-yellow-100/40 rounded-full blur-[40px]" />
                    {/* Add Particles */}
                    <FloatingParticles />
                </motion.div>

                {/* Soil Mound */}
                <div className="absolute bottom-0 w-full flex justify-center z-20 pointer-events-none">
                    <svg width="700" height="130" viewBox="0 0 700 130" className="w-[110%] md:w-[700px] h-auto translate-y-1">
                        <path d="M50 130 L 650 130 Q 600 70, 500 80 Q 400 30, 350 40 Q 250 20, 150 60 Q 80 70, 50 130 Z" fill="#3e2723" />
                    </svg>
                </div>

                {/* PLANT CONTAINER */}
                <div className="relative w-[500px] h-[600px] z-10 mb-5 flex justify-center items-end">
                    {/* STEM */}
                    <svg className="absolute bottom-4 w-full h-full overflow-visible" viewBox="0 0 500 600" preserveAspectRatio="xMidYBottom meet">
                        <defs>
                            <linearGradient id="stemGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#33691e" />
                                <stop offset="100%" stopColor="#558b2f" />
                            </linearGradient>
                            <clipPath id="growClip">
                                <motion.rect x="0" y="0" width="500" height="600" initial={{ y: 600 }} animate={{ y: 0 }} transition={{ duration: 2.0, ease: "easeInOut", delay: 1.0 }} />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#growClip)">
                            <path d="M240 600 Q 235 400, 248 150 L 252 150 Q 265 400, 260 600 Z" fill="url(#stemGradient)" />
                            <path d="M245 420 Q 240 400, 200 380 L 202 384 Q 235 405, 246 430 Z" fill="url(#stemGradient)" />
                            <path d="M255 360 Q 260 340, 310 320 L 308 324 Q 265 345, 256 370 Z" fill="url(#stemGradient)" />
                        </g>
                    </svg>

                    {/* LEAVES */}
                    <motion.div className="absolute left-[40.2%] bottom-[36.33%]" initial={{ scale: 0 }} animate={{ scale: 0.7 }} transition={{ delay: 1.8, type: "spring" }}>
                        <UserLeaf className="w-28 h-36" rotate={-70} delay={1.8} />
                    </motion.div>
                    <motion.div className="absolute left-[61.8%] bottom-[46.33%]" initial={{ scale: 0 }} animate={{ scale: 0.7 }} transition={{ delay: 2.0, type: "spring" }}>
                        <UserLeaf className="w-28 h-36" rotate={60} delay={2.0} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ delay: 3.0, type: "spring" }}>
                        <UserLeaf className="w-36 h-48" rotate={-5} delay={3.0} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.0 }} transition={{ delay: 2.5, type: "spring" }}>
                        <UserLeaf className="w-36 h-48" rotate={-50} delay={2.5} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.0 }} transition={{ delay: 2.7, type: "spring" }}>
                        <UserLeaf className="w-36 h-48" rotate={40} delay={2.7} />
                    </motion.div>
                </div>
            </motion.div>

            {/* 2. UNDERGROUND (Scroll Reveal) */}
            <div className="relative w-full h-screen bg-[#3e2723] flex justify-center items-start pt-0 z-0 overflow-hidden">
                
                 {/* Texture / Noise Overlay for Soil */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" 
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
                 />

                {/* Main Roots Container */}
                <div className="relative w-[600px] h-[90vh] mt-[-50px]"> 
                   <svg className="w-full h-full overflow-visible" viewBox="0 0 600 800" preserveAspectRatio="xMidYTop meet">
                       <defs>
                           <filter id="glowRoot" x="-20%" y="-20%" width="140%" height="140%">
                               <feGaussianBlur stdDeviation="2" result="blur" />
                               <feComposite in="SourceGraphic" in2="blur" operator="over" />
                           </filter>

                           {/* Outer Halo for Seeds */}
                            <filter id="outerSeedGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="15" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>

                           {/* Organic Seed Gradients */}
                            <radialGradient id="organicHusk" cx="50%" cy="60%" r="70%" fx="45%" fy="30%">
                                <stop offset="0%" stopColor="#fff8e1" />
                                <stop offset="50%" stopColor="#ffecb3" />
                                <stop offset="85%" stopColor="#ffa000" />
                                <stop offset="100%" stopColor="#bf360c" />
                            </radialGradient>

                            <linearGradient id="fleshyCore" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="50%" stopColor="#ffff00" />
                                <stop offset="100%" stopColor="#ffea00" />
                            </linearGradient>
                       </defs>

                       {/* Central Strong Taproot (MAIN) - Organic Wiggle */}
                       <RootPath d="M300 0 C 310 100, 290 200, 300 350 C 305 450, 295 600, 300 750" strokeWidth={12} progress={mainRootGrowth} color="#bcaaa4" />
                       
                       {/* Left Main Root (MAIN) - Twisted */}
                       <RootPath d="M300 50 C 260 120, 200 180, 180 300 C 160 420, 120 480, 100 500" strokeWidth={8} progress={mainRootGrowth} color="#a1887f" />

                       {/* Right Main Root (MAIN) - Twisted */}
                       <RootPath d="M300 50 C 340 120, 400 180, 420 300 C 440 420, 480 480, 500 500" strokeWidth={8} progress={mainRootGrowth} color="#a1887f" />

                       {/* Deep Side Root Left (MAIN) */}
                       <RootPath d="M300 300 C 270 350, 220 500, 180 750" strokeWidth={6} progress={mainRootGrowth} color="#8d6e63" />

                       {/* Deep Side Root Right (MAIN) */}
                       <RootPath d="M300 350 C 330 400, 380 500, 420 750" strokeWidth={6} progress={mainRootGrowth} color="#8d6e63" />


                       {/* --- SUB ROOTS (SUB) - Branching & Wobbly --- */}
                       
                       {/* Off Left Main */}
                       <RootPath d="M220 200 C 190 220, 160 210, 120 250" strokeWidth={3} progress={subRootGrowth} color="#d7ccc8" />
                       <RootPath d="M150 350 C 120 380, 90 420, 50 500" strokeWidth={3} progress={subRootGrowth} color="#d7ccc8" />

                       {/* Off Right Main */}
                       <RootPath d="M380 200 C 410 220, 440 210, 480 250" strokeWidth={3} progress={subRootGrowth} color="#d7ccc8" />
                       <RootPath d="M450 350 C 480 380, 510 420, 550 500" strokeWidth={3} progress={subRootGrowth} color="#d7ccc8" />

                       {/* Off Center Taproot */}
                       <RootPath d="M300 200 C 280 230, 250 260, 250 350" strokeWidth={4} progress={subRootGrowth} color="#bcaaa4" />
                       <RootPath d="M300 500 C 320 540, 350 570, 350 650" strokeWidth={4} progress={subRootGrowth} color="#bcaaa4" />
                       <RootPath d="M300 600 C 290 630, 270 680, 270 750" strokeWidth={3} progress={subRootGrowth} color="#bcaaa4" />

                       {/* --- FINE CAPILLARIES (Extra Detail) --- */}
                       <RootPath d="M100 500 C 80 520, 60 550, 40 600" strokeWidth={1} progress={subRootGrowth} color="#efebe9" />
                       <RootPath d="M500 500 C 530 520, 560 550, 580 600" strokeWidth={1} progress={subRootGrowth} color="#efebe9" />
                       <RootPath d="M180 750 C 170 780, 150 800, 140 820" strokeWidth={1} progress={subRootGrowth} color="#efebe9" />
                       <RootPath d="M420 750 C 440 780, 460 800, 480 820" strokeWidth={1} progress={subRootGrowth} color="#efebe9" />

                      {/* GLOWING SEEDS - Attached to root tips (Inside SVG) - EXACTLY 4 */}
                      
                      {/* 1. Left Main Tip */}
                      <GlowingSeed cx={100} cy={500} progress={mainRootGrowth} />

                       {/* 2. Right Main Tip */}
                      <GlowingSeed cx={500} cy={500} progress={mainRootGrowth} />

                      {/* 3. Deep Side Left */}
                      <GlowingSeed cx={180} cy={750} progress={mainRootGrowth} delay={0.2} />

                      {/* 4. Deep Side Right */}
                      <GlowingSeed cx={420} cy={750} progress={mainRootGrowth} delay={0.2} />
                      
                   </svg>
                   
                   {/* Depth Gradient Overlay (Outside SVG) */}
                   {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40" /> */}
                   
                   {/* DETAIL LABELS */}
                   <DetailLabel x="10%" y="20%" progress={mainRootGrowth} triggerRange={[0.1, 0.3]}>DEEP ROOTS</DetailLabel>
                   <DetailLabel x="75%" y="40%" progress={subRootGrowth} triggerRange={[0.3, 0.5]}>SYSTEM</DetailLabel>
                   <DetailLabel x="15%" y="60%" progress={subRootGrowth} triggerRange={[0.5, 0.7]}>STABILITY</DetailLabel>
                   <DetailLabel x="70%" y="80%" progress={subRootGrowth} triggerRange={[0.7, 0.9]}>GROWTH</DetailLabel>

                </div>
            </div>

        </div>
    );
}
