import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import SarvataLoader from "@/components/SarvataLoader";
import ScrollUI from "@/components/ScrollUI";

/* UI Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Body font */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/* Elegant heading font */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
          ${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
          ${playfair.variable}
          antialiased
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
