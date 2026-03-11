"use client";

import MainHero from "@/components/MainHero";
import ServicesLayout from "@/components/services/ServicesLayout";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/contact-web.jpg"
        mobileImage="/contact-mobile.jpg"
        title="How We Support Your Educational Community"
        breadcrumbs={[{ label: "Services" }]}
      />

      <ServicesLayout />
    </main>
  );
}
