"use client";

import React, { useState } from 'react';

const workshops = [
  {
    title: "The Leadership Engine",
    audience: "For Principals & School Directors",
    question: "How can school leaders reimagine governance, digital policy, and professional growth for the future of education?"
  },
  {
    title: "The Unseen Curriculum",
    audience: "For Academic Coordinators & Senior Subject Teachers",
    question: "How can you embed human values and future competencies into everyday learning?"
  },
  {
    title: "The Learner’s Blueprint",
    audience: "For SEN Coordinators, Mentors & Counsellors",
    question: "Could a deeper understanding of student behaviour unlock better learning outcomes?"
  },
  {
    title: "The Conscious Educator",
    audience: "For Core Teachers & Homeroom Mentors",
    question: "How can reflective practice improve both educator wellbeing and student outcomes in high-demand school environments?"
  },
  {
    title: "The Cognitive Spectrum",
    audience: "For Subject HODs & Inclusion Champions",
    question: "How can education be designed to meet the needs of diverse ways of thinking and learning?"
  },
  {
    title: "The ASUDE Simulation Lab",
    audience: "For Homeroom Teachers, Mentors, Counselors & Value Education Facilitators",
    question: "How can simulation-based learning be used to meaningfully develop life skills, ethics, and social consciousness?"
  },
  {
    title: "The Trust Architecture",
    audience: "For School Leaders, Coordinators & Team Mentors",
    question: "How can we explore short-term gains that affect long-term outcomes, with a focus on trust, decision-making, and sustainable relationship-building in organizations?"
  }
];

export default function WorkshopsList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="workshops" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Curated Workshops</h2>
          <p className="text-lg text-foreground/70 font-secondary max-w-2xl mx-auto">
            As part of this event, we invite you to register and engage in a series of thoughtfully curated workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col gap-2">
            {workshops.map((ws, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-5 py-4 rounded-xl font-medium transition-all duration-200 border ${
                  activeIndex === idx 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white border-black/5 text-foreground/70 hover:bg-gray-50'
                }`}
              >
                {ws.title}
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 flex items-stretch">
            <div className="w-full bg-gray-50 border border-black/5 rounded-2xl p-8 md:p-12 relative flex flex-col justify-center min-h-[300px]">
              <div 
                className="relative z-10 animate-fade-in-up" 
                key={activeIndex} 
              >
                <div className="inline-block px-3 py-1 rounded-md bg-white border border-black/5 shadow-sm text-xs font-bold tracking-wide text-primary mb-4 uppercase">
                  {workshops[activeIndex].audience}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground leading-tight">
                  {workshops[activeIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-foreground/70 font-secondary leading-relaxed border-l-4 border-primary pl-4 py-1 italic">
                  "{workshops[activeIndex].question}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
