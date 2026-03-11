"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-new.png"
            alt="Sarvata"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </Link>

        {/* Center: Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Socials */}
        <div className="flex gap-2.5">
          {socials.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>

      {/* Thin copyright line */}
      <div className="border-t border-border/40">
        <div className="container-max py-4 text-center text-xs text-muted/60 font-secondary">
          © {new Date().getFullYear()} Sarvata Transforming Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
