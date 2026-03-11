"use client";

import MainHero from "@/components/MainHero";
import ContactLayout from "@/components/contact/ContactLayout";
import TakeFirstStep from "@/components/contact/TakeFirstStep";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/contact-web.jpg"
        mobileImage="/contact-mobile.jpg"
        title="Have a Question or Need Support? We're Here to Help"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <ContactLayout />
      {/* <TakeFirstStep /> */}
    </main>
  );
}
