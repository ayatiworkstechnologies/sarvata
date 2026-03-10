"use client";

import { useState } from "react";

const communities = [
    {
        title: "Educators",
        description:
            "Practical frameworks and job-embedded support to make responsive practice sustainable.",
        cta: "Explore Services for Educators",
        href: "/hub-one",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="16" cy="10" r="5" />
                <path d="M7 26c0-5 4-9 9-9s9 4 9 9" />
                <path d="M22 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        gradient: "from-[#6bcf8e]/10 to-[#6bcf8e]/5",
        accent: "#6bcf8e",
    },
    {
        title: "School Leaders",
        description:
            "Strategic partnership to build the systems, culture, and capacity for meaningful educational change.",
        cta: "Explore Services for Leaders",
        href: "/hub-two",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.2}>
                <rect x="6" y="12" width="20" height="14" rx="2" />
                <path d="M16 4v8M10 8l6-4 6 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        gradient: "from-[#58c4d4]/10 to-[#58c4d4]/5",
        accent: "#58c4d4",
    },
    {
        title: "Parents",
        description:
            "Professional support to understand your child's learning profile and advocate effectively.",
        cta: "Explore Services for Parents",
        href: "/hub-three",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="12" cy="10" r="4" />
                <circle cx="22" cy="12" r="3" />
                <path d="M5 26c0-4 3-7 7-7 2 0 4 1 5 2.5" />
                <path d="M16 26c0-3 2.5-5.5 6-5.5s5 2 5 5.5" />
            </svg>
        ),
        gradient: "from-[#a88ee0]/10 to-[#a88ee0]/5",
        accent: "#a88ee0",
    },
];

export default function WhatWeDo() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="relative bg-[#fafbfa] py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                {/* Section Header */}
                <div className="mb-14 md:mb-20">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b8f72] font-medium">
                        What We Do
                    </p>
                    <h2 className="mt-3 text-3xl font-light leading-tight text-[#1a2b1e] md:text-4xl lg:text-5xl">
                        We work with three<br />interconnected communities
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                    {communities.map((item, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl border border-[#e2e8e3] bg-white p-8 md:p-10
                                        transition-all duration-500 ease-out
                                        hover:border-[${item.accent}]/30 hover:shadow-xl hover:shadow-[${item.accent}]/5
                                        hover:-translate-y-1`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Subtle gradient background on hover */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}
                                            opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className="mb-6 inline-flex items-center justify-center rounded-xl p-3 transition-colors duration-300"
                                    style={{
                                        color: item.accent,
                                        backgroundColor: hoveredIndex === i
                                            ? `${item.accent}15`
                                            : "#f4f6f4",
                                    }}
                                >
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-medium text-[#1a2b1e] md:text-2xl">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-8 text-[15px] leading-relaxed text-[#5a6b5e]">
                                    {item.description}
                                </p>

                                {/* CTA Link */}
                                <a
                                    href={item.href}
                                    className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-300"
                                    style={{ color: item.accent }}
                                >
                                    {item.cta}
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
