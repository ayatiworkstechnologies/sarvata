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
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at top right, rgba(160,102,170,0.07), transparent 55%)",
                }}
            />
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] opacity-30"
                style={{
                    background:
                        "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)",
                }}
            />

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
                            <span
                                style={{
                                    background:
                                        "linear-gradient(135deg, #A066AA 0%, #7a45a0 60%, #4e2a7a 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                your community?
                            </span>
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
                                            className="group inline-flex min-h-[58px] w-full items-center justify-between rounded-2xl bg-secondary px-5 py-4 text-left text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/25"
                                        >
                                            <span className="pr-4 leading-snug">{action.label}</span>
                                            <svg
                                                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
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
                                            <svg
                                                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
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
                            className="group relative mx-auto h-[500px] w-full max-w-[460px]"
                        >
                            <div className="absolute inset-0 overflow-hidden border border-black/5 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:shadow-[0_28px_70px_rgba(15,23,42,0.20)]">
                                <Image
                                    src="/img.png"
                                    alt="Schedule Consultation with Sarvata"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}