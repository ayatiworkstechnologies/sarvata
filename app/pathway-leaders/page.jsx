"use client";

import MainHero from "@/components/about/MainHero";

export default function LeadersPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="for Leaders"
        breadcrumbs={[{ label: "for leaders" }]}
      />

 

    </main>
  );
}
