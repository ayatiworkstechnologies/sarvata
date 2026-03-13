import MainHero from "@/components/MainHero";
import ServicesLayout from "@/components/services/ServicesLayout";

export const metadata = {
  title: "Our Services - Educational Support for Schools, Educators & Families | Sarvata",
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
    title: "Our Services - Educational Support for Schools, Educators & Families",
    description:
      "Sarvata offers practical, research-driven services for educators, school leaders, and parents - tailored to your community's unique needs.",
    url: "https://sarvata.in/services",
    siteName: "Sarvata",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630, alt: "Sarvata Services" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Educational Support for Schools, Educators & Families",
    description:
      "Practical, research-driven services for educators, school leaders, and parents from Sarvata.",
    images: ["/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/banners/services.jpg"
        mobileImage="/banners/services-mob.jpg"
        title="How We Support Your Educational Community"
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesLayout />
    </main>
  );
}
