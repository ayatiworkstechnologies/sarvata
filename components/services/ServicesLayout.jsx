"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    audience: "For Educators",
    description:
      "Practical frameworks, workshops, mentoring, and resources to make responsive practice sustainable.",
    href: "/pathway-educators",
    cta: "Explore Educator Services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500/20",
  },
  {
    audience: "For School Leaders",
    description:
      "Strategic partnership to build the systems, culture, and capacity needed for meaningful change.",
    href: "/pathway-leaders",
    cta: "Explore Leader Services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-blue-500 to-indigo-600",
    glow: "bg-blue-500/20",
  },
  {
    audience: "For Parents",
    description:
      "Professional support to understand your child's learning profile and advocate effectively.",
    href: "/pathway-parents",
    cta: "Explore Parent Services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-rose-500 to-pink-600",
    glow: "bg-rose-500/20",
  },
];

export default function ServicesLayout() {
  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4">
              SERVICES
            </p>
            <h2 className="heading-xl mb-6">
              How We Support Your{" "}
              <span className="text-gradient">Educational Community</span>
            </h2>
            <p className="text-xl text-muted font-secondary leading-relaxed">
              We work with three interconnected communities to build truly
              learner-centered educational environments.
            </p>
          </motion.div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.audience}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full rounded-[2rem] border border-border/60 bg-white p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-transparent hover:-translate-y-2">
                  {/* Hover glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 ${service.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      {service.audience}
                    </h3>

                    {/* Description */}
                    <p className="text-muted font-secondary text-base leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 font-semibold text-base bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300`}
                    >
                      {service.cta}
                      <svg
                        className="w-5 h-5 text-current opacity-70 group-hover:opacity-100 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GET STARTED BANNER ================= */}
      <section className="relative bg-soft-bg overflow-hidden border-t border-border/50">
        {/* Vibrant light glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-secondary/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          className="container-max relative z-10 py-20 md:py-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted font-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Take the first step toward building a truly learner-centered
            educational environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/services" className="btn btn-primary w-full sm:w-auto">
              Download Services Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">
              Schedule Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link href="/contact" className="btn btn-outline w-full sm:w-auto">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
