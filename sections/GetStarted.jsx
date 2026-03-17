"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useConsultation } from "@/context/ConsultationContext";
import { FloatingShapes, SubtleGrid } from "@/components/VectorDecorations";


export default function GetStarted() {
    const { openModal } = useConsultation();

    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            <SubtleGrid />
            <FloatingShapes />
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
                            className="mt-10"
                        >
                            <div className="relative group/btn inline-flex">
                                {/* Animated Glow behind the button */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-40 group-hover/btn:opacity-75 blur-lg transition-all duration-500 will-change-transform"></div>
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="relative z-10 inline-flex min-h-[64px] items-center justify-between rounded-2xl bg-gradient-to-r from-primary to-[#703b7b] px-8 py-5 text-left text-[16px] font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-[#703b7b] hover:to-primary"
                                >
                                    <span className="pr-6 leading-snug">Schedule a Consultation</span>
                                    <svg
                                        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
                            </div>
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
                                    src="/img-home.jpg"
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