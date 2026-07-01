import React from 'react';
import { FiCoffee, FiFileText, FiAlertCircle, FiAward, FiUsers, FiMail, FiClock, FiCheckCircle } from 'react-icons/fi';

export default function EventDetails() {
  return (
    <>
      {/* ───────────────── REFRESHMENTS & NETWORKING ───────────────── */}
      <section className="py-24 bg-gray-50 border-t border-black/5 relative overflow-hidden">
        {/* Subtle decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Refreshments & Networking
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tea & Lunch */}
            <div className="p-8 bg-white border border-black/5 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                <FiCoffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Tea & Lunch</h3>
              <p className="text-foreground/70 leading-relaxed">
                All confirmed delegates will be hosted with tea and lunch during the summit, creating opportunities for meaningful networking and collegial conversations with fellow educational leaders.
              </p>
            </div>

            {/* Sponsor Interaction */}
            <div className="p-8 bg-white border border-black/5 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sponsor Interaction</h3>
              <p className="text-foreground/70 leading-relaxed">
                Delegates can also engage with our sponsors, who bring extensive experience in serving educational institutions. Dedicated interaction spaces are provided to them so that you will have the opportunities to directly interact and explore solutions that can add value to your organisation.
              </p>
            </div>

            {/* Certificate */}
            <div className="p-8 bg-white border border-black/5 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Certificate of Participation</h3>
              <p className="text-foreground/70 leading-relaxed">
                At the conclusion of the summit, all delegates will receive a formal Certificate of Participation recognising their engagement in this advanced professional learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── REGISTRATION PROCESS ───────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/[0.04] to-transparent rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
              How to Register
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Registration Process
            </h2>
            <p className="text-lg text-foreground/60 font-secondary max-w-2xl mx-auto">
              Secure your institution&apos;s place in three simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white border border-black/5 rounded-3xl p-8 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-primary/20">
                    1
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Submit Registration</h3>
                <p className="text-foreground/65 leading-relaxed flex-1 font-secondary">
                  To secure your institution&apos;s presence and your personal seat at the Leadership Track, please submit your 5 official nominations using the secure registration form.
                </p>
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe3C7mJjP1EMll4gdWfWlB0gYL0I5p2iHRqOjae_9GhbeRI_Q/viewform?usp=preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide group/btn"
                  >
                    <FiFileText className="w-4.5 h-4.5" />
                    Registration Form
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white border border-black/5 rounded-3xl p-8 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-primary/20">
                    2
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Register Before Deadline</h3>
                <p className="text-foreground/65 leading-relaxed flex-1 font-secondary">
                  Complete your registration to confirm your participation. Seats are limited and allocated on a first-come, first-served basis.
                </p>
                <div className="mt-6 flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/[0.06] to-primary/[0.02] rounded-xl border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                    <FiClock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Deadline</p>
                    <p className="text-base font-bold text-foreground">14th July, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white border border-black/5 rounded-3xl p-8 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-primary/20">
                    3
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Get Confirmation</h3>
                <p className="text-foreground/65 leading-relaxed flex-1 font-secondary">
                  You will receive a confirmation email at the address provided during registration. If you don&apos;t see it in your inbox, please check your spam/junk folder.
                </p>
                <div className="mt-6 flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-green-500/[0.06] to-green-500/[0.02] rounded-xl border border-green-500/10">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-green-500/10">
                    <FiMail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Status</p>
                    <p className="text-base font-bold text-green-700">Confirmation Email Sent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(160,102,170,0.15),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(217,166,58,0.1),transparent_50%)]"></div>
            <div className="relative px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                  <FiFileText className="w-6 h-6 text-white/90" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Workshop Details</p>
                  <p className="text-white font-bold text-lg md:text-xl">Download the Event Brochure</p>
                </div>
              </div>
              <a
                href="/pdf/The Sarvata Educators Collective 2026 - Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-foreground font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide shrink-0 group/dl"
              >
                Event Brochure
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary group-hover/dl:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Welcome closing message */}
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/55 font-secondary leading-relaxed italic max-w-2xl mx-auto">
              We look forward to welcoming you and your educational leaders for a day of meaningful learning, insightful dialogue, and transformative strategies for the future of education.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── KINDLY NOTE ───────────────── */}
      <section className="py-24 bg-gray-50 border-t border-black/5 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
              Important Information
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Kindly Note
            </h2>
            <p className="text-lg text-foreground/60 font-secondary max-w-2xl mx-auto">
              Please review these guidelines before registering
            </p>
          </div>

          {/* Cards Grid — 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">

            {/* Delegate Limits */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-3xl border border-black/5 p-7 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/15 shrink-0">
                    <FiUsers className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Delegate Limits</h3>
                </div>
                <p className="text-foreground/65 leading-relaxed font-secondary text-[15px]">
                  Each institution may register, in addition to the school leader, a maximum of <strong className="text-foreground">4 delegates</strong> for the summit. Delegates may choose any one of the available tracks scheduled across the morning or afternoon sessions. Institutions have the flexibility to distribute their delegates across different sessions based on their areas of interest and preferred timings.
                </p>
              </div>
            </div>

            {/* Leaders' Post-Lunch Invite */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-3xl border border-black/5 p-7 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/15 shrink-0">
                    <FiCheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Leaders&apos; Session</h3>
                </div>
                <p className="text-foreground/65 leading-relaxed font-secondary text-[15px]">
                  Following the exclusive School Leaders&apos; Session in the morning, leaders are invited to attend the post-lunch sessions to gain deeper insights into the learning experiences, frameworks, and discussions their delegates will engage with during the summit.
                </p>
              </div>
            </div>

            {/* Confirmation Email */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-3xl border border-black/5 p-7 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/15 shrink-0">
                    <FiMail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Confirmation Email</h3>
                </div>
                <p className="text-foreground/65 leading-relaxed font-secondary text-[15px]">
                  Post registration, you will receive a confirmation email at the email address provided during registration. If you do not find the confirmation email in your inbox, we request you to kindly check your <strong className="text-foreground">spam/junk folder</strong>.
                </p>
              </div>
            </div>

            {/* Waitlist */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-3xl border border-black/5 p-7 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-400/15 shrink-0">
                    <FiAlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Waitlist Policy</h3>
                </div>
                <p className="text-foreground/65 leading-relaxed font-secondary text-[15px]">
                  If the seats for your preferred track are full, your registration will be placed on the <strong className="text-foreground">waitlist</strong>. We will keep you informed of any changes or updates regarding seat availability.
                </p>
              </div>
            </div>
          </div>

          {/* First-come first-served — full-width urgency banner */}
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.08] via-primary/[0.04] to-secondary/[0.06]"></div>
            <div className="relative px-7 py-6 md:px-10 md:py-7 flex items-start gap-5 border border-primary/10 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/15 shrink-0 mt-0.5">
                <FiClock className="w-5.5 h-5.5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">First-Come, First-Served</h3>
                <p className="text-foreground/65 leading-relaxed font-secondary text-[15px]">
                  Registration is on a <strong className="text-foreground">first-come, first-served basis</strong> due to limited seating across sessions. We encourage you to register at the earliest to secure your participation and not miss this opportunity for an enriching professional learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
