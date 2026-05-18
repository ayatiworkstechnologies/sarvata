"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className=" bg-white py-0">
      <div className="container-max ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-soft-bg/30 p-4 shadow-sm"
        >
          <div className="h-[450px] w-full overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6401614741366!2d80.268482!3d12.994111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ecf453a29b%3A0xc3f6050b1076f030!2sT%2077%2C%2029th%20Cross%20St%2C%20Besant%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600090!5e0!3m2!1sen!2sin!4v1711463100000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarvata Educational Consultancy Location"
              className="rounded-xl"
            />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Visit Our Office
              </h3>
              <p className="mt-1 text-sm text-muted">
                T 77, 29th Cross Street, Besant Nagar, Chennai, TN 600090, India
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Sarvata+Educational+Consultancy+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
