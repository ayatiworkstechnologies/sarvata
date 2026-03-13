import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SarvataLoader from "@/components/SarvataLoader";
import ScrollUI from "@/components/ScrollUI";
import { ConsultationProvider } from "@/context/ConsultationContext";
import ConsultationModalWrapper from "@/components/ConsultationModalWrapper";

/* Primary Heading font - Manrope */
const primaryFont = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* Secondary Body font - Inter */
const secondaryFont = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://sarvata.in"),
  title: {
    default: "Sarvata - Transforming Educators & Schools, Every Day",
    template: "%s | Sarvata",
  },
  description:
    "Sarvata is a premier educational consultancy empowering schools, educators, and families with practical, research-driven strategies for truly inclusive, learner-centered education.",
  keywords: [
    "educational consultancy India",
    "personalized learning",
    "inclusive education",
    "school transformation",
    "educator professional development",
    "Sarvata",
  ],
  authors: [{ name: "Sarvata", url: "https://sarvata.in" }],
  creator: "Sarvata",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarvata.in",
    siteName: "Sarvata",
    title: "Sarvata - Transforming Educators & Schools, Every Day",
    description:
      "Practical, research-driven educational consulting for schools, educators, and families.",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "Sarvata - Transforming Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvata - Transforming Educators & Schools, Every Day",
    description:
      "Practical, research-driven educational consulting for schools, educators, and families.",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${primaryFont.variable}
          ${secondaryFont.variable}
          antialiased
          bg-background text-foreground
        `}
      >
        <ConsultationProvider>
          <Header />
          <Suspense fallback={<SarvataLoader />}>
            {children}
            <ScrollUI />
          </Suspense>
          <Footer />
          {/* Single modal instance - driven by global ConsultationContext */}
          <ConsultationModalWrapper />
        </ConsultationProvider>
      </body>
    </html>
  );
}
