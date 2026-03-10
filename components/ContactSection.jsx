"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data); // connect API later
    reset();
  };

  return (
    <section className="section bg-white">
      <div className="container grid grid-cols-12 gap-8 md:gap-12 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="
            col-span-12 md:col-span-5
            space-y-5
            text-center md:text-left
          "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-xl sm:text-2xl md:text-3xl">
            Get in Touch
          </h2>

          <p className="text-muted font-secondary text-sm sm:text-base max-w-md mx-auto md:mx-0">
            We partner with educators, leaders, and parents to build learner-centric
            ecosystems. Whether you have a question about our workshops,
            mentoring, or philosophy, we’d love to hear from you.
          </p>

          <div className="space-y-2 font-secondary text-sm sm:text-base">
            <p>
              <span className="font-medium">Email :</span>{" "}
              <a
                href="mailto:sarvata.edu@gmail.com"
                className="text-primary hover:underline"
              >
                sarvata.edu@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone :</span>{" "}
              <a
                href="tel:+919150418101"
                className="text-primary hover:underline"
              >
                +91 91504 18101
              </a>
            </p>
          </div>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="
            col-span-12 md:col-span-7
            space-y-4 sm:space-y-5
          "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* NAME */}
          <FormField
            label="Your Name"
            error={errors.name}
            input={
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter Your Name"
                className="input w-full"
              />
            }
          />

          {/* EMAIL */}
          <FormField
            label="Your Email"
            error={errors.email}
            input={
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Enter Your Email"
                className="input w-full"
              />
            }
          />

          {/* SUBJECT */}
          <FormField
            label="Subject"
            error={errors.subject}
            input={
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Enter Your Subject"
                className="input w-full"
              />
            }
          />

          {/* MESSAGE */}
          <FormField
            label="Message"
            error={errors.message}
            input={
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Write your message"
                rows={4}
                className="textarea w-full"
              />
            }
          />

          {/* SUBMIT */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
            className="
              btn btn-primary
              mt-3
              w-full sm:w-auto
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}

/* ================= REUSABLE FIELD ================= */
function FormField({ label, input, error }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      {input}
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
