import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SarvataLoader from "@/components/SarvataLoader";
import ScrollUI from "@/components/ScrollUI";

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
  title: "Sarvata – Transforming Learning",
  description:
    "Sarvata Educational Consultancy – empowering learners, educators, and leaders.",
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
         <Header />
        <Suspense fallback={<SarvataLoader />}>
          {children}
          <ScrollUI />
        </Suspense>
        <Footer />

      </body>
    </html>
  );
}
