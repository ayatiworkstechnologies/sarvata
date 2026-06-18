import { Lexend, Mulish } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Script from "next/script";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SarvataLoader from "@/components/SarvataLoader";
import ScrollUI from "@/components/ScrollUI";
import { ConsultationProvider } from "@/context/ConsultationContext";
import ConsultationModalWrapper from "@/components/ConsultationModalWrapper";

/* Primary Heading font - Lexend */
const primaryFont = Lexend({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* Secondary Body font - Mulish */
const secondaryFont = Mulish({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://sarvata.org"),
  alternates: {
    canonical: '/',
  },
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
  authors: [{ name: "Sarvata", url: "https://sarvata.org" }],
  creator: "Sarvata",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarvata.org",
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
  verification: {
    google: "BpTNEhMic906_f8ofxX6jP9DmhyCAR3zIjhs-MpSKrI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`
          ${primaryFont.variable}
          ${secondaryFont.variable}
          antialiased
          bg-background text-foreground
        `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSB89XSV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSB89XSV');
          `}
        </Script>
      </body>
    </html>
  );
}
