"use client";

const differentiators = [
    {
        title: "Grounded in Practice",
        description: "We're educators who've lived the gap between vision and reality.",
        icon: "🌱",
    },
    {
        title: "Systems Thinking",
        description: "We address culture, pedagogy, and operational systems together.",
        icon: "🔗",
    },
    {
        title: "Building Independence",
        description: "Our goal is your capacity, not your dependency.",
        icon: "🏗️",
    },
    {
        title: "Sustained Partnership",
        description: "We support implementation, not just deliver workshops.",
        icon: "🤝",
    },
];

export default function OurApproach() {
    return (
        <section className="relative bg-[#0e1a11] py-20 md:py-28 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #6bcf8e 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6 md:px-10">
                {/* Partnership Header */}
                <div className="mb-16 md:mb-20 max-w-3xl">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#6bcf8e]/60 font-medium">
                        Our Approach
                    </p>
                    <h2 className="mt-3 text-3xl font-light leading-tight text-white/90 md:text-4xl lg:text-5xl">
                        Partnership, Not Prescription
                    </h2>
                    <p className="mt-6 text-[16px] leading-relaxed text-white/45 md:text-[18px] max-w-2xl">
                        We don&apos;t arrive with generic solutions. We begin by understanding your context,
                        your goals, and your challenges. You bring expertise in your community. We bring
                        frameworks, research, and external perspectives. Together, we build approaches
                        that are both aspirational and realistic.
                    </p>
                </div>

                {/* What Makes Us Different */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-white/70 mb-10 md:text-xl">
                        What Makes Us Different
                    </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
                    {differentiators.map((item, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 md:p-8
                                       backdrop-blur-sm transition-all duration-500
                                       hover:border-[#6bcf8e]/20 hover:bg-white/[0.06]"
                        >
                            <div className="mb-5 text-2xl">{item.icon}</div>
                            <h4 className="mb-2 text-[16px] font-medium text-white/85">
                                {item.title}
                            </h4>
                            <p className="text-[14px] leading-relaxed text-white/40">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
