"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useConsultation } from "@/context/ConsultationContext";

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
        isModal: true,
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
  const { openModal } = useConsultation();
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,102,170,0.05),transparent_50%)]" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
                    {/* Left */}
                    <div className="select-none text-center lg:col-span-7 lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                Take the First Step
                            </p>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-5xl xl:text-6xl"
                        >
                            Ready to transform
                            <br />
                            <span className="text-gradient">your community?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-muted md:text-[20px] lg:mx-0"
                        >
                            Wherever you are in your journey, we&apos;re ready to meet you there
                            with tailored, actionable support.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            {actions.map((action, i) => (
                                <div key={i} className="flex h-full flex-col">
                                    <span className="mb-2 text-left text-[11px] font-bold uppercase tracking-[0.15em] text-muted/70">
                                        {action.tag}
                                    </span>

                                    {action.isModal ? (
                                        <button
                                            type="button"
                                            onClick={openModal}
                                            className={`group inline-flex min-h-[58px] w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-semibold transition-all duration-300 bg-secondary text-white shadow-lg shadow-secondary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/25`}
                                        >
                                            <span className="pr-4 leading-snug">{action.label}</span>
                                            <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <Link
                                            href={action.href}
                                            className={`group inline-flex min-h-[58px] w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-semibold transition-all duration-300 ${action.variant === "primary"
                                                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                                                : "border border-border bg-white text-foreground shadow-sm hover:-translate-y-1 hover:border-primary/30 hover:text-primary hover:shadow-lg"
                                                }`}
                                        >
                                            <span className="pr-4 leading-snug">{action.label}</span>
                                            <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right image */}
                    <div className="relative hidden lg:col-span-5 lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto h-[500px] w-full max-w-[440px]"
                        >
                            {/* Back layer */}
                            <div className="absolute -left-5 top-8 h-[88%] w-[88%] rounded-[2.25rem] bg-primary/10 blur-sm" />

                            {/* Main image shape */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
                                <Image
                                    src="/home-contact.jpg"
                                    alt="Schedule Consultation with Sarvata"
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-white/10" />
                                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.08)]" />
                            </div>

                            {/* Floating info card */}
                            <div className="absolute -bottom-6 -left-8 max-w-[240px] rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                    Tailored Support
                                </p>
                                <p className="mt-2 text-sm font-medium leading-6 text-foreground/80">
                                    Practical guidance designed for educators, families, and school
                                    leaders.
                                </p>
                            </div>

                            {/* Small accent badge */}
                            <div className="absolute right-[-14px] top-8 rounded-2xl border border-border/60 bg-white/95 px-4 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                                    Trusted Pathways
                                </p>
                                <p className="mt-1 text-sm font-semibold text-foreground">
                                    Start with confidence
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}