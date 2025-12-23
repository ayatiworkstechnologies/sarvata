"use client";

import Link from "next/link";

export default function PersonalisedLearningCTA() {
  return (
    <section className="section bg-white">
      <div className="container-max text-center max-w-3xl mx-auto">
        <h2 className="heading-lg mb-4">
          Personalised Learning Experience
        </h2>

        <p className="text-muted max-w-4xl text-sm md:text-base mx-auto mb-8">
          We provide tailored courses designed around your unique learning
          style. Our engaging programs ensure you grasp every concept while
          making learning an enjoyable journey.
        </p>

        <Link
          href="/subscribe"
          className="inline-flex items-center justify-center
                     px-6 py-3 rounded
                     bg-[color:var(--color-primary)]
                     text-white text-sm font-semibold
                     hover:opacity-90 transition"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
}
