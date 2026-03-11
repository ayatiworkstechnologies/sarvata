"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const differentiators = [
    {
        title: "Grounded in Practice",
        description: "We're educators who've lived the gap between vision and reality.",
        icon: "🌱",
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        title: "Systems Thinking",
        description: "We address culture, pedagogy, and operational systems together.",
        icon: "🔗",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        title: "Building Independence",
        description: "Our goal is your capacity, not your dependency.",
        icon: "🏗️",
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Sustained Partnership",
        description: "We support implementation, not just deliver workshops.",
        icon: "🤝",
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
];

export default function OurApproach() {
    return (
        <section className="relative bg-white py-24 md:py-32 overflow-hidden">
            {/* Soft decorative background elements */}
            <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container-max relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left side: Images & Visuals */}
                    <div className="relative order-2 lg:order-1 hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/50"
                        >
                            <Image 
                                src="/home-contact.jpg" 
                                alt="Teachers collaborating"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        
                        {/* Floating stat card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-border/60 max-w-[240px]"
                        >
                            <div className="flex gap-4 items-center mb-2">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-foreground">2000+</h4>
                                    <p className="text-xs text-muted font-secondary uppercase tracking-wider">Educators</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Text & Differentiators */}
                    <div className="order-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-14"
                        >
                            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                                Our Approach
                            </p>
                            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight mb-6">
                                Partnership,<br />
                                <span className="text-gradient">Not Prescription</span>
                            </h2>
                            <p className="text-lg leading-relaxed text-muted mb-4 font-secondary">
                                We don&apos;t arrive with generic solutions. We begin by understanding your context,
                                your goals, and your challenges. You bring expertise in your community. We bring
                                frameworks, research, and external perspectives. 
                            </p>
                            <p className="text-lg leading-relaxed text-foreground font-medium font-secondary">
                                Together, we build approaches that are both aspirational and realistic.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {differentiators.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex gap-5 group items-start"
                                >
                                    <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.bg} flex items-center justify-center text-2xl shadow-sm border border-black/5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className={`text-lg font-bold text-foreground mb-1 group-hover:${item.color} transition-colors`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-base text-muted font-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
