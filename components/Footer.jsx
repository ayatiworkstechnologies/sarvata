"use client";

import Link from "next/link";
import Image from "next/image";
import ScheduleConsultationButton from "@/components/ScheduleConsultationButton";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { name: "For Educators", href: "/services/for-educators" },
  { name: "For School Leaders", href: "/services/for-leaders" },
  { name: "For Parents", href: "/services/for-parents" },
];

const socials = [
  {
    Icon: FaLinkedinIn,
    href: "https://in.linkedin.com/in/sarvata-educational-consultancy-6ab205321?trk=public_post_feed-actor-name",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/sarvata_edu_consultancy_?igsh=MTkwdmk0eW15MGZ6dA%3D%3D&utm_source=qr",
  },
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/people/Sarvata-Educational-Consultancy/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-foreground">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(160,102,170,0.05),transparent_40%)]" />

      <div className="relative container-max  py-8 md:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Brand Card */}
          <div className="lg:col-span-5">
            <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[28px] border border-border bg-soft-bg/30 p-7 shadow-sm md:p-10">
              <div>
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Sarvata"
                    width={170}
                    height={64}
                    className="h-14 w-auto object-contain"
                    priority
                  />
                </div>

                <p className="mt-8 max-w-md text-[17px] leading-8 text-muted">
                  Sarvata Educational Consultancy partners directly with
                  educators, school leaders, and families to design actionable,
                  lasting improvements for your unique learning environments.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                {socials.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-primary transition-all duration-300 hover:-translate-y-1 hover:text-primary/70"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FooterCard title="Pages" links={pageLinks} />
              <FooterCard title="Services" links={serviceLinks} />
            </div>

            <div className="rounded-[28px] border border-border bg-soft-bg/30 px-6 py-7 shadow-sm md:px-8 md:py-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    Ready to grow with Sarvata?
                  </h3>
                  <p className="mt-2 text-lg text-muted">
                    Explore pathways built for educators, leaders, and parents.
                  </p>
                </div>

                <ScheduleConsultationButton />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Sarvata Educational Consultancy. All
              rights reserved.
            </p>

            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 transition-opacity duration-300 hover:opacity-80 md:justify-end"
            >
              <span className="text-sm text-muted">
                Designed & Developed by
              </span>
              <Image
                src="/ayati-logo-web.png"
                alt="Ayatiworks"
                width={120}
                height={32}
                className="h-15 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCard({ title, links }) {
  return (
    <div className="rounded-[28px] border border-border bg-soft-bg/30 p-7 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <h4 className="text-[14px] font-bold uppercase tracking-[0.18em] text-foreground">
          {title}
        </h4>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-[16px] font-medium text-muted transition-all duration-300 hover:translate-x-1 hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
