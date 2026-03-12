"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const actions = [
    {
        tag: "Exploring options?",
        label: "Learn about our services",
        href: "/services",
        variant: "primary",
    },
    {
        tag: "Ready to talk?",
        label: "Schedule a consultation",
        href: "/contact",
        variant: "secondary",
    },
    {
        tag: "Questions?",
        label: "Contact us",
        href: "/contact",
        variant: "outline",
    },
];

export default function GetStarted() {
    return (
        <section className="relative bg-white py-24 md:py-32 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-6 md:px-10 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left content */}
                    <div className="lg:col-span-7 select-none text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                                Take the First Step
                            </p>
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

                        {/* ── Upgraded Buttons ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row items-center lg:items-stretch gap-6"
                        >
                            {actions.map((action, i) => (
                                <div key={i} className="flex flex-col items-start gap-2 flex-1 min-w-0">
                                    {/* Tag — outside the button */}
                                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted/70">
                                        {action.tag}
                                    </span>

                                    {/* Button */}
                                    <Link
                                        href={action.href}
                                        className={`btn w-full ${action.variant === "primary"
                                            ? "btn-primary"
                                            : action.variant === "secondary"
                                                ? "btn-secondary"
                                                : "btn-outline"
                                            }`}
                                    >
                                        {action.label}
                                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
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
                            <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
