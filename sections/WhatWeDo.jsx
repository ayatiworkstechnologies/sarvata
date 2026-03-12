"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const communities = [
    {
        title: "Educators",
        description: "Practical frameworks and job-embedded support to make responsive practice sustainable.",
        cta: "Explore Services",
        href: "/services",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="16" cy="10" r="5" />
                <path d="M7 26c0-5 4-9 9-9s9 4 9 9" />
                <path d="M22 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        gradient: "from-emerald-500 to-teal-500",
        lightBg: "bg-emerald-50",
        accent: "text-emerald-600",
    },
    {
        title: "School Leaders",
        description: "Strategic partnership to build the systems, culture, and capacity for meaningful change.",
        cta: "Explore Services",
        href: "/services",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
                <rect x="6" y="12" width="20" height="14" rx="2" />
                <path d="M16 4v8M10 8l6-4 6 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        gradient: "from-blue-500 to-indigo-500",
        lightBg: "bg-blue-50",
        accent: "text-blue-600",
    },
    {
        title: "Parents",
        description: "Professional support to understand your child's learning profile and advocate effectively.",
        cta: "Explore Services",
        href: "/services",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="10" r="4" />
                <circle cx="22" cy="12" r="3" />
                <path d="M5 26c0-4 3-7 7-7 2 0 4 1 5 2.5" />
                <path d="M16 26c0-3 2.5-5.5 6-5.5s5 2 5 5.5" />
            </svg>
        ),
        gradient: "from-primary to-purple-500",
        lightBg: "bg-purple-50",
        accent: "text-primary",
    },
];

export default function WhatWeDo() {
    return (
        <section className="relative bg-soft-bg py-24 md:py-32 overflow-hidden">
            {/* Soft decorative blur */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-max relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left: Text & Image */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-primary font-semibold text-xs mb-6 tracking-widest uppercase">
                                What We Do
                            </div> */}
                            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                                What We Do
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                                Supporting your <br />
                                <span className="text-gradient">educational community</span>
                            </h2>
                            <p className="text-lg text-muted font-secondary leading-relaxed mb-8">
                                We work with three interconnected groups to build truly learner-centered environments. Real change happens when educators, leaders, and parents row in the same direction.
                            </p>

                            <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                                <Image
                                    src="/about-web.jpg"
                                    alt="Educational community working together"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Cards */}
                    <div className="lg:col-span-7">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {communities.map((item, i) => (
                                <motion.div
                                    variants={itemVariants}
                                    key={i}
                                    className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-transparent overflow-hidden"
                                >
                                    {/* Hover gradient line on left */}
                                    {/* <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} /> */}

                                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                                        <div className={`shrink-0 w-16 h-16 rounded-2xl ${item.lightBg} ${item.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                            <p className="text-muted font-secondary leading-relaxed mb-4">
                                                {item.description}
                                            </p>
                                            <Link
                                                href={item.href}
                                                className={`inline-flex items-center gap-2 font-semibold text-sm ${item.accent} group-hover:gap-3 transition-all`}
                                            >
                                                {item.cta}
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
