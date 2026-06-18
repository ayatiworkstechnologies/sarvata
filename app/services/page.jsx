import MainHero from "@/components/MainHero";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesLayout from "@/components/services/ServicesLayout";

export const metadata = {
  alternates: { canonical: '/services' },
  title:
    "Our Services - Educational Support for Schools, Educators & Families | Sarvata",
  description:
    "Explore Sarvata's educational services tailored for educators, school leaders, and parents. From professional development to strategic school planning and family support - discover how we can partner with your community.",
  keywords: [
    "educational services",
    "school consultancy",
    "educator training",
    "parent support",
    "school leader coaching",
    "personalized learning services",
    "Sarvata services",
  ],
  openGraph: {
    title:
      "Our Services - Educational Support for Schools, Educators & Families",
    description:
      "Sarvata offers practical, research-driven services for educators, school leaders, and parents - tailored to your community's unique needs.",
    url: "https://sarvata.org/services",
    siteName: "Sarvata",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Sarvata Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Services - Educational Support for Schools, Educators & Families",
    description:
      "Practical, research-driven services for educators, school leaders, and parents from Sarvata.",
    images: ["/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/banners/service-web.png"
        mobileImage="/banners/service-mob.png"
        title={
          <>
            Comprehensive solutions for <br />
            <span className="text-[#D9A63A]">educators,</span>{" "}
            <span className="text-[#6B4A8E]">schools,</span> <br />
            <span className="text-[#D9A63A]">and</span>{" "}
            <span className="text-[#6B4A8E]">learners</span>
          </>
        }
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesLayout />
      <ServicesCTA />
    </main>
  );
}
