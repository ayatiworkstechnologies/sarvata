"use client";

import MainHero from "@/components/about/MainHero";

export default function LearnersPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="For Learners"
        breadcrumbs={[{ label: "for Learners" }]}
      />

 

    </main>
  );
}
