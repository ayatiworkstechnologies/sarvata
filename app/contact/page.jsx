"use client";

import MainHero from "@/components/MainHero";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/contact-web.jpg"
        mobileImage="/contact-mobile.jpg"
        title="Have a Question or Need Support? We’re Here to Help"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

    <ContactSection />

    </main>
  );
}
