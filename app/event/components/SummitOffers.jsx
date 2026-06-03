import React from 'react';

const offers = [
  {
    title: "Human-First Focus",
    description: "We address the internal operating systems of educators and institutions-the invisible drivers of culture, learning, and long-term impact.",
    icon: "🧠",
  },
  {
    title: "Immediate Application",
    description: "Every session delivers ready-to-implement tools, policies, and practices.",
    icon: "⚡",
  },
  {
    title: "Depth Over Breadth",
    description: "Small-group, experiential formats ensure genuine transformation rather than surface-level inspiration.",
    icon: "🌊",
  },
  {
    title: "Ethical Grounding",
    description: "Rooted in established educational philosophy (Fullan, Hargreaves, Gardner, Heckman, Vygotsky, Palmer, and others) while addressing contemporary realities of AI and digital overload.",
    icon: "⚖️",
  },
  {
    title: "Community of Practice",
    description: "Connect with like-minded principals, coordinators, and teachers committed to human-centered education.",
    icon: "🤝",
  }
];

export default function SummitOffers() {
  return (
    <section className="py-24 bg-gray-50 border-y border-black/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">What This Summit Offers</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-secondary leading-relaxed">
            Through immersive and practical workshops, participants will gain actionable frameworks, refined strategies, and personal practices designed to strengthen the leadership, culture, and internal foundations essential for long-term school excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`p-8 bg-white border border-black/5 rounded-2xl hover:border-primary/30 transition-colors ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-3xl mb-4">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{offer.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
