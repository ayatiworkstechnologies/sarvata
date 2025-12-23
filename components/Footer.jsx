"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      
      {/* MAIN FOOTER */}
      <div className="container-max py-14 grid gap-10 md:grid-cols-4">

        {/* BRAND + CONTACT */}
        <div className="space-y-4">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Sarvata"
              className="h-20"
            />
          </Link>

          <h4 className="font-semibold">Contact Us</h4>

          <p className="text-sm">
            Sarvata Educational Consultancy
          </p>

          <p className="text-sm">
            <span className="font-medium">Email :</span>{" "}
            <a
              href="mailto:sarvata.edu@gmail.com"
              className="hover:text-primary"
            >
              sarvata.edu@gmail.com
            </a>
          </p>

          <p className="text-sm">
            <span className="font-medium">Phone :</span>{" "}
            <a
              href="tel:+919150418101"
              className="hover:text-primary"
            >
              +91 91504 18101
            </a>
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/philosophy" className="hover:text-primary">
                Our Philosophy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* LEARNING PATHWAYS */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Learning Pathways
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/pathways/educators" className="hover:text-primary">
                For Educators
              </Link>
            </li>
            <li>
              <Link href="/pathways/leaders" className="hover:text-primary">
                For Leaders
              </Link>
            </li>
            <li>
              <Link href="/pathways/parents" className="hover:text-primary">
                For Parents
              </Link>
            </li>
            <li>
              <Link href="/pathways/learners" className="hover:text-primary">
                For Learners
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-primary inline-block pb-1">
            Follow Us
          </h4>

          <div className="flex items-center gap-4 text-primary">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t">
        <div className="container-max py-4 text-center text-sm text-muted">
          © {new Date().getFullYear()} Sarvata Educational Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
