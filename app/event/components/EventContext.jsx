import React from 'react';
import Image from 'next/image';

export default function EventContext() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground text-center lg:text-left">
          The <span className="text-primary">Human Element</span> in Education
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          <div className="flex-1 w-full flex flex-col gap-8 order-2 lg:order-1">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <Image
                src="/assets/event.png"
                alt="Human-centered environment"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-l-primary relative">
              <p className="text-xl font-medium text-foreground italic leading-snug">
                "We move beyond reactive policies toward proactive, <span className="text-primary font-bold">human-centered systems</span> where technology supports people—not the other way around."
              </p>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="space-y-8 text-lg text-foreground/80 font-secondary leading-relaxed">
              <p>
                <strong className="text-foreground block mb-2 text-xl font-bold">
                  In a world increasingly shaped by artificial intelligence, digital dependency, and rapid change, what truly defines educational excellence?
                </strong>
                Is it technology alone, or the <strong className="text-foreground">Human Element</strong> that shapes how leaders lead, teachers inspire, and learners grow? As schools navigate evolving systems, the real challenge lies in cultivating ethical clarity, emotional wellbeing, authentic growth, and psychological safety at the heart of education.
              </p>

              <p>
                The Sarvata Educators Collective 2026 is a premium, high-impact gathering, designed for forward-thinking school leaders and educators. Unlike conventional conferences filled with passive lectures, this Collective focuses on the human factor that no algorithm can replicate: <strong className="text-foreground">moral discernment, emotional regulation, professional capital, cognitive empathy, and conscious leadership</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
