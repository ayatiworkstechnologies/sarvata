"use client";

import MainHero from "@/components/about/MainHero";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

    <ContactSection />

    </main>
  );
}
