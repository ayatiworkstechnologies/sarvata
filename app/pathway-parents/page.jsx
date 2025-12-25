"use client";

import MainHero from "@/components/about/MainHero";

export default function ParentsPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/web-banner.jpg"
        mobileImage="/mobile-banner.jpg"
        title="For Parents"
        breadcrumbs={[{ label: "For Parents" }]}
      />

 

    </main>
  );
}
