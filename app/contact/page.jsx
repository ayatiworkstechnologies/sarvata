"use client";

import MainHero from "@/components/about/MainHero";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/contact-web.jpg"
        mobileImage="/contact-mobile.jpg"
        title="Let's Connect"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

    <ContactSection />

    </main>
  );
}
