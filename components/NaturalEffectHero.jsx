"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

// Reusable Animated Root Component
const RootPath = ({ d, strokeWidth = 4, progress, delay = 0, color = "#d7ccc8", flow = false }) => {
    // Map the global scroll progress to this specific root's growth
    const pathLength = useTransform(progress, [0, 1], [0, 1]);

    return (
        <>
            {/* Main Root Body */}
            <motion.path
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                style={{ pathLength }}
                filter="url(#roughRoot)"
            />
            {/* Flowing Energy Effect (Optional) */}
            {/* Flowing Energy Effect (Upgraded) */}
            {flow && (
                <motion.path
                    d={d}
                    fill="none"
                    stroke="#ff9100"
                    strokeWidth={strokeWidth * 0.5}
                    strokeDasharray="10 100"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    style={{ pathLength }}
                    filter="url(#glowRoot)"
                    animate={{ strokeDashoffset: [0, -110] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            )}
        </>
    );
};

// GLOWING SEED COMPONENT (New)

// SEED NAVIGATION DATA
const SEED_DATA = [
    { id: 1, x: "16%", y: "62%", href: "/pathway-leaders", label: "Leaders" },
    { id: 2, x: "83%", y: "62%", href: "/pathway-educators", label: "Educators" },
    { id: 3, x: "30%", y: "93%", href: "/pathway-parents", label: "Parents" },
    { id: 4, x: "70%", y: "93%", href: "/pathway-learners", label: "Learners" }
];

// Note: Adapted logic to run without SVG props inside the overlay map, using `seed` prop
const GlowingSeedOverlay = ({ seed, progress }) => {
    // Scale up from 0 to 1 based on overall progress (simplified for list)
    const scale = useTransform(progress, [0.4, 0.6], [0, 1]);

    return (
        <motion.a
            href={seed.href}
            className="absolute w-12 h-12 -ml-6 -mt-6 md:w-20 md:h-20 md:-ml-10 md:-mt-10 cursor-pointer z-50 pointer-events-auto"
            style={{ left: seed.x, top: seed.y, scale }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={{
                hidden: { opacity: 0, scale: 0.6 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", stiffness: 120 },
                },
            }}
        >
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                <defs>
                    {/* Define filters/gradients directly here or reuse from main SVG if globally available. 
                            Safest to reuse IDs if main SVG is mounted, but for robustness defining small inline usage or relying on main SVG definition.
                            Currently assuming main SVG Definitions are active in DOM.
                        */}
                </defs>
                <g transform="translate(0, 0)">
                    {/* BACKGROUND GLOW HALO */}
                    <circle cx="102" cy="100" r="60" fill="#ffa000" opacity="0.4" filter="url(#outerSeedGlow)" />

                    {/* Shadow */}
                    <ellipse cx="102" cy="182" rx="40" ry="10" fill="#000" fillOpacity="0.2" />

                    {/* Main Body - Golden Husk with Neon Pulse */}
                    <motion.path d="M102,182 C65,178 32,145 28,95 C26,45 68,18 105,12 C145,18 178,48 172,98 C168,148 138,178 102,182 Z"
                        fill="url(#organicHusk)"
                        stroke="#ff9100"
                        strokeWidth="2"
                        filter="url(#seedOutlineGlow)"
                        animate={{
                            strokeWidth: [2, 4, 2],
                            strokeOpacity: [0.8, 1, 0.8],
                            filter: ["drop-shadow(0 0 2px #ff6d00)", "drop-shadow(0 0 8px #ff6d00)", "drop-shadow(0 0 2px #ff6d00)"]
                        }}
                        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Inner Core - BLINKING HEARTBEAT & GLOW */}
                    <motion.path d="M102,172 C80,165 58,135 58,95 C58,55 78,35 105,30 L102,172 Z"
                        fill="url(#fleshyCore)"
                        stroke="#ff6f00"
                        strokeWidth="0.5"
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
                            scale: [1, 1.08, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Texture Lines (Left) */}
                    <g stroke="#ff8f00" fill="none" strokeLinecap="round">
                        <path d="M98,155 Q80,135 75,105" strokeWidth="0.4" opacity="0.6" />
                        <path d="M100,115 Q75,95 70,65" strokeWidth="0.3" opacity="0.5" />
                    </g>
                    {/* Texture Lines (Right) */}
                    <g stroke="#ff6f00" strokeWidth="0.4" fill="none" opacity="0.6">
                        <path d="M115,168 C135,155 160,125 160,95" />
                        <path d="M120,135 C140,125 165,105 167,75" />
                    </g>
                </g>
            </svg>
        </motion.a>
    );
};



// Floating Ambient Particles (Pollen/Dust/Motes)
const FloatingParticles = ({ type = "pollen" }) => {
    const [particles, setParticles] = React.useState([]);

    React.useEffect(() => {
        // Reduce particle count on mobile for performance
        const isMobile = window.innerWidth < 768;
        const baseCount = type === "pollen" ? 20 : 30;
        const count = isMobile ? Math.floor(baseCount / 2) : baseCount;
        setParticles(Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            size: Math.random() * 3 + 1,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            sway: Math.random() * 20 - 10 // Pre-calculate sway
        })));
    }, [type]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={`absolute rounded-full opacity-60 ml-5 ${type === "pollen" ? "bg-yellow-100" : "bg-teal-200"}`}
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        filter: type === "motes" ? "blur(1px)" : "none"
                    }}
                    animate={{
                        y: type === "pollen" ? [0, 50, 0] : [0, -40, 0],
                        x: [0, p.sway, 0], // Use pre-calculated sway
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                />
            ))}
        </div>
    );
};



// User Provided SVG Leaf - NOW INTERACTIVE
const UserLeaf = ({ className, rotate = 0, delay = 0, scale = 1, duration = 6 }) => {
    // Basic interaction: sway faster and scale slightly on hover
    return (
        <motion.div
            style={{
                rotate,
                scale,
                transformOrigin: "42.5% 100%", // Pivot at stem base
                x: "-42.5%", // Center horizontally on the pivot
            }}
            animate={{
                rotate: [rotate, rotate + 3, rotate - 2, rotate],
                scale: [scale, scale * 1.02, scale * 0.98, scale],
            }}
            whileHover={{
                rotate: rotate + 10,
                scale: scale * 1.1,
                transition: { duration: 0.5, ease: "easeOut" }
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={`${className} cursor-pointer`}
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
                        <stop offset="30%" stopColor="#2e7d32" />
                        <stop offset="60%" stopColor="#43a047" />
                        <stop offset="100%" stopColor="#8bc34a" />
                    </linearGradient>
                    <filter id="leafTexture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                        <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                        <feBlend mode="overlay" in="composite" in2="SourceGraphic" />
                    </filter>
                </defs>
                <path d="M100,210 C80,195 25,160 25,100 C25,60 65,40 100,10 C135,40 175,60 175,105 C175,165 120,195 100,210 Z"
                    fill="url(#organicLeafGrad)" stroke="#1e3317" strokeWidth="0.5" filter="url(#leafTexture)"
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
};

export default function NaturalEffectHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax & Smooth Scroll
    // Parallax & Smooth Scroll - Organic "Weighted" Physics
    // Parallax & Smooth Scroll - Organic "Weighted" Physics
    // Increased mass/stiffness for less jitter ("glits")
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.5, stiffness: 50, damping: 20 });
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

    // Parallax for Plant Moving Up
    const plantY = useTransform(smoothProgress, [0, 1], ["0vh", "-10vh"]);

    // STAGGERED ROOT GROWTH TRIGGERS
    const mainRootGrowth = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);
    const subRootGrowth = useTransform(smoothProgress, [0.3, 0.8], [0, 1]);

    // Seed Appearance Trigger (Late stage of main roots)
    const seedGrowth = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);

    // SPIRIT LIGHT - Mouse Follower
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        // Only update if we are in the section (simple approximation)
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full h-[200vh] bg-[#0d0706] overflow-x-hidden">

            {/* 1. ABOVE GROUND (Animated Parallax) */}
            <motion.div
                style={{ y: plantY }}
                className="sticky top-0 w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-end z-0 will-change-transform pt-24 md:pt-0"
            >

                {/* Background Ambience */}
                <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 w-full h-full bg-[conic-gradient(at_top_right,var(--tw-gradient-stops))] from-amber-100/40 via-white to-transparent opacity-60" />
                    {/* Sun / Godrays - Enhanced */}
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-200/30 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute top-0 right-20 w-[4px] h-[80vh] bg-linear-to-b from-white/40 to-transparent rotate-15 blur-[2px]" />
                    <div className="absolute top-0 right-48 w-[30px] h-[90vh] bg-linear-to-b from-white/20 to-transparent rotate-15 blur-md" />
                    <div className="absolute top-0 right-80 w-[60px] h-[70vh] bg-linear-to-b from-white/10 to-transparent rotate-15 blur-xl" />

                    {/* Add Particles - Pollen */}
                    <FloatingParticles type="pollen" />
                </motion.div>

                {/* Soil Mound */}
                <div className="absolute bottom-0 w-full flex justify-center z-20 pointer-events-none">
                    <svg width="700" height="130" viewBox="0 0 700 130" shapeRendering="geometricPrecision" className="w-[140%] sm:w-[110%] md:w-[700px] h-auto translate-y-2">
                        <defs>
                            <filter id="soilNoise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                                <feColorMatrix type="saturate" values="0" />
                                <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
                                <feComposite operator="in" in2="SourceGraphic" result="noise" />
                                <feBlend mode="multiply" in="noise" in2="SourceGraphic" />
                            </filter>
                            <linearGradient id="darkSandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2d1b16" />
                                <stop offset="100%" stopColor="#0d0706" />
                            </linearGradient>
                        </defs>
                        <path d="M50 130 L 650 130 Q 600 70, 500 80 Q 400 30, 350 40 Q 250 20, 150 60 Q 80 70, 50 130 Z" fill="url(#darkSandGrad)" filter="url(#soilNoise)" />
                    </svg>
                </div>

                {/* PLANT CONTAINER */}
                <div className="relative w-[300px] h-[360px] sm:w-[500px] sm:h-[600px] z-10 mb-0 flex justify-center items-end">
                    {/* STEM */}
                    <svg className="absolute bottom-4 w-full h-full overflow-visible" shapeRendering="geometricPrecision" viewBox="0 0 500 600" preserveAspectRatio="xMidYBottom meet">
                        <defs>
                            <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0d380e" />
                                <stop offset="30%" stopColor="#2e7d32" />
                                <stop offset="60%" stopColor="#66bb6a" />
                                <stop offset="85%" stopColor="#a5d6a7" />
                                <stop offset="100%" stopColor="#1b5e20" />
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
                    {/* Sand Overlay for Buried Stem Effect */}
                    <div className="absolute bottom-0 w-full h-12 bg-linear-to-t from-[#1b0f0b] via-[#2d1b16]/80 to-transparent z-20 pointer-events-none blur-[2px]" />

                    {/* LEAVES */}
                    <motion.div className="absolute left-[40.2%] bottom-[36.33%]" initial={{ scale: 0 }} animate={{ scale: 0.7 }} transition={{ delay: 1.8, type: "spring" }}>
                        <UserLeaf className="w-16 h-24 sm:w-28 sm:h-36" rotate={-70} delay={1.8} duration={6.5} />
                    </motion.div>
                    <motion.div className="absolute left-[61.8%] bottom-[46.33%]" initial={{ scale: 0 }} animate={{ scale: 0.7 }} transition={{ delay: 2.0, type: "spring" }}>
                        <UserLeaf className="w-16 h-24 sm:w-28 sm:h-36" rotate={60} delay={2.0} duration={5.8} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ delay: 3.0, type: "spring" }}>
                        <UserLeaf className="w-24 h-32 sm:w-36 sm:h-48" rotate={-5} delay={3.0} duration={7.2} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.0 }} transition={{ delay: 2.5, type: "spring" }}>
                        <UserLeaf className="w-24 h-32 sm:w-36 sm:h-48" rotate={-50} delay={2.5} duration={6.1} />
                    </motion.div>
                    <motion.div className="absolute left-[50%] bottom-[75%]" initial={{ scale: 0 }} animate={{ scale: 1.0 }} transition={{ delay: 2.7, type: "spring" }}>
                        <UserLeaf className="w-24 h-32 sm:w-36 sm:h-48" rotate={40} delay={2.7} duration={5.5} />
                    </motion.div>
                </div>
            </motion.div>

            {/* 2. UNDERGROUND (Scroll Reveal) */}
            <div className="relative w-full h-screen bg-gradient-to-b from-[#2d1b16] via-[#1a0f0d] to-[#0d0706] flex justify-center items-start pt-0 z-0 overflow-hidden mt-[-2px]">

                {/* SOIL CAP (Moves with Underground to prevent gap on scroll) */}
                <div className="absolute top-0 left-0 w-full flex justify-center z-30 pointer-events-none -translate-y-[99%]">
                    <svg width="700" height="130" viewBox="0 0 700 130" shapeRendering="geometricPrecision" className="w-[140%] sm:w-[110%] md:w-[700px] h-auto translate-y-1">
                        <defs>
                            <filter id="soilNoiseCap">
                                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                                <feColorMatrix type="saturate" values="0" />
                                <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
                                <feComposite operator="in" in2="SourceGraphic" result="noise" />
                                <feBlend mode="multiply" in="noise" in2="SourceGraphic" />
                            </filter>
                            <linearGradient id="darkSandGradCap" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2d1b16" />
                                <stop offset="100%" stopColor="#0d0706" />
                            </linearGradient>
                        </defs>
                        <path d="M50 130 L 650 130 Q 600 70, 500 80 Q 400 30, 350 40 Q 250 20, 150 60 Q 80 70, 50 130 Z" fill="url(#darkSandGradCap)" filter="url(#soilNoiseCap)" />
                    </svg>
                </div>

                {/* Sprit Light Follower */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 z-0 mix-blend-color-dodge"
                    style={{
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                        background: "radial-gradient(circle, rgba(255,200,100,0.3) 0%, rgba(255,100,50,0) 70%)"
                    }}
                />

                {/* Spirit Particles in Soil */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <FloatingParticles type="motes" />
                </div>

                {/* Vignette Overlay for Depth */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] mix-blend-multiply" />

                {/* Texture / Noise Overlay for Soil */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Main Roots Container */}
                <div className="relative w-full max-w-[350px] md:max-w-[600px] h-[70vh] md:h-[90vh] mt-[-30px] md:mt-[-50px]">
                    <svg className="w-full h-full overflow-visible" shapeRendering="geometricPrecision" viewBox="0 0 600 800" preserveAspectRatio="xMidYTop meet">
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

                            {/* Sharp Neon Glow for Seed Outline */}
                            <filter id="seedOutlineGlow" height="300%" width="300%" x="-75%" y="-75%">
                                <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
                                <feGaussianBlur in="thicken" stdDeviation="4" result="blurred" />
                                <feFlood floodColor="#ff6d00" result="glowColor" />
                                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow" />
                                <feMerge>
                                    <feMergeNode in="softGlow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            {/* Organic Seed Gradients */}
                            <radialGradient id="organicHusk" cx="50%" cy="60%" r="70%" fx="45%" fy="30%">
                                <stop offset="0%" stopColor="#fff8e1" />
                                <stop offset="50%" stopColor="#ffecb3" />
                                <stop offset="85%" stopColor="#ffa000" />
                                <stop offset="100%" stopColor="#bf360c" />
                            </radialGradient>

                            {/* Bark/Rough Texture Filter - ENHANCED */}
                            <filter id="roughRoot">
                                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                                <feComposite operator="in" in="noise" in2="SourceGraphic" result="textured" />
                            </filter>

                            <linearGradient id="fleshyCore" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="50%" stopColor="#ffff00" />
                                <stop offset="100%" stopColor="#ffea00" />
                            </linearGradient>
                        </defs>

                        {/* Central Strong Taproot (MAIN) - Organic Wiggle */}
                        <RootPath d="M300 -100 C 300 -20, 290 200, 300 350 C 305 450, 295 600, 300 750" strokeWidth={12} progress={mainRootGrowth} color="#bcaaa4" flow={true} />

                        {/* Left Main Root (MAIN) - Twisted */}
                        <RootPath d="M300 -50 C 280 20, 200 180, 180 300 C 160 420, 120 480, 100 500" strokeWidth={8} progress={mainRootGrowth} color="#a1887f" flow={true} />

                        {/* Right Main Root (MAIN) - Twisted */}
                        <RootPath d="M300 -50 C 320 20, 400 180, 420 300 C 440 420, 480 480, 500 500" strokeWidth={8} progress={mainRootGrowth} color="#a1887f" flow={true} />

                        {/* Deep Side Root Left (MAIN) */}
                        <RootPath d="M300 300 C 270 350, 220 500, 180 750" strokeWidth={6} progress={mainRootGrowth} color="#8d6e63" flow={true} />

                        {/* Deep Side Root Right (MAIN) */}
                        <RootPath d="M300 350 C 330 400, 380 500, 420 750" strokeWidth={6} progress={mainRootGrowth} color="#8d6e63" flow={true} />


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

                        {/* Nutrient Flow Pulse */}
                        <motion.path d="M300 -100 C 300 -20, 290 200, 300 350 C 305 450, 295 600, 300 750"
                            fill="none"
                            stroke="#ffcc80"
                            strokeWidth="2"
                            strokeDasharray="10 100"
                            opacity="0.3"
                            animate={{ strokeDashoffset: [0, -110] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* --- OLD SEEDS REMOVED FROM SVG --- */}
                        {/* Now rendered in overlay layer below */}

                    </svg>

                    {/* Depth Gradient Overlay (Outside SVG) */}
                    {/* Depth Gradient Overlay (Outside SVG) - Vignette */}
                    {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] mix-blend-multiply z-10" /> */}

                    {/* DETAIL LABELS REMOVED */}

                    {/* --- SEEDS OVERLAY LAYER --- */}
                    <motion.div
                        className="absolute inset-0 z-50 pointer-events-none" // Overlay container
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        {SEED_DATA.map((seed, i) => (
                            <GlowingSeedOverlay key={seed.id} seed={seed} progress={smoothProgress} />
                        ))}
                    </motion.div>

                </div>
            </div>

        </div>
    );
}
