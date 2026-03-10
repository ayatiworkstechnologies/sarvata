"use client";

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
        <section className="relative bg-[#f5f7f5] py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b8f72] font-medium">
                    Take the First Step
                </p>
                <h2 className="mt-3 text-3xl font-light leading-tight text-[#1a2b1e] md:text-4xl lg:text-5xl">
                    Get Started
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[#5a6b5e] md:text-[16px]">
                    Wherever you are in your journey, we&apos;re ready to meet you there.
                </p>

                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
                    {actions.map((action, i) => (
                        <a
                            key={i}
                            href={action.href}
                            className={`group flex flex-col items-center rounded-xl px-8 py-5 transition-all duration-300
                                ${action.style === "primary"
                                    ? "bg-[#1a2b1e] text-white shadow-lg shadow-[#1a2b1e]/15 hover:bg-[#243828] hover:shadow-xl hover:-translate-y-0.5"
                                    : action.style === "secondary"
                                        ? "border-2 border-[#1a2b1e] text-[#1a2b1e] hover:bg-[#1a2b1e] hover:text-white hover:-translate-y-0.5"
                                        : "border border-[#d0d8d0] text-[#5a6b5e] hover:border-[#1a2b1e] hover:text-[#1a2b1e] hover:-translate-y-0.5"
                                }`}
                        >
                            <span className="text-[12px] font-light opacity-60 mb-1">
                                {action.description}
                            </span>
                            <span className="text-[15px] font-medium flex items-center gap-2">
                                {action.label}
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
