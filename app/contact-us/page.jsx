import MainHero from "@/components/MainHero";
import ContactLayout from "@/components/contact/ContactLayout";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Sarvata - Get in Touch with Our Team",
  description:
    "Have a question or ready to get started? Contact the Sarvata team to schedule a consultation, explore our educational services, or simply ask how we can support your school, educators, or family.",
  keywords: [
    "contact Sarvata",
    "schedule consultation",
    "educational support",
    "school consultancy contact",
    "get in touch",
  ],
  openGraph: {
    title: "Contact Sarvata - Get in Touch with Our Team",
    description:
      "Reach out to Sarvata to schedule a consultation or learn more about our educational support services for schools, educators, and families.",
    url: "https://sarvata.in/contact",
    siteName: "Sarvata",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630, alt: "Contact Sarvata" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sarvata - Get in Touch",
    description:
      "Schedule a consultation or ask about our educational services for schools, educators, and families.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <MainHero
        webImage="/banners/con1.jpg"
        mobileImage="/banners/con-mob.jpg"
        title="Let's discuss how we can support your learning goals"
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <ContactLayout />
      {/* <ContactMap /> */}
    </main>
  );
}
