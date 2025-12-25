"use client";

import MainHero from "@/components/about/MainHero";

export default function EducatorsPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="For Educators"
        breadcrumbs={[{ label: "for educators" }]}
      />

 

    </main>
  );
}
