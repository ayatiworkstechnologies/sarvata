"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const actions = [
    {
        label: "Learn about our services",
        description: "Exploring options?",
        href: "/services",
        style: "primary",
    },
    {
        label: "Schedule a consultation",
        description: "Ready to talk?",
        href: "/contact",
        style: "secondary",
    },
    {
        label: "Contact us",
        description: "Questions?",
        href: "/contact",
        style: "tertiary",
    },
];

export default function GetStarted() {
    return (
        <section className="relative bg-white py-24 md:py-32 overflow-hidden">
            {/* Bright animated background accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative mx-auto max-w-5xl px-6 md:px-10 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left content */}
                    <div className="lg:col-span-7 select-none text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8 text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Take the First Step
                            </div>
                        </motion.div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-5xl xl:text-6xl tracking-tight"
                        >
                            Ready to transform<br />
                            <span className="text-gradient">your community?</span>
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto lg:mx-0 mt-6 max-w-xl text-[18px] font-secondary leading-relaxed text-muted md:text-[20px]"
                        >
                            Wherever you are in your journey, we&apos;re ready to meet you there with tailored, actionable support.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-4"
                        >
                            {actions.map((action, i) => (
                                <Link
                                    key={i}
                                    href={action.href}
                                    className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-xl w-full sm:w-auto px-8 py-4 transition-all duration-300
                                        ${action.style === "primary"
                                            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                                            : action.style === "secondary"
                                                ? "border-2 border-primary/20 text-foreground hover:border-primary bg-white hover:-translate-y-1"
                                                : "text-muted hover:text-primary hover:-translate-y-1"
                                        }`}
                                >
                                    <span className={`text-xs font-secondary mb-0.5 ${action.style === "primary" ? "text-white/80" : "text-muted/70"}`}>
                                        {action.description}
                                    </span>
                                    <span className="text-base font-bold flex items-center gap-2 z-10 whitespace-nowrap">
                                        {action.label}
                                        <motion.svg 
                                            className="w-4 h-4" 
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 4 }}
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </motion.svg>
                                    </span>
                                </Link>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right side Image block */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                        >
                            <Image 
                                src="/home-contact.jpg" 
                                alt="Get Started with Sarvata"
                                fill
                                className="object-cover"
                            />
                            {/* Inner glow/shadow for depth */}
                            <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
