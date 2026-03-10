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
    console.log(data);
    reset();
  };

  return (
    <section className="section bg-white">
      <div className="container grid grid-cols-12 gap-8 md:gap-12 items-start">
        <motion.div
          className="col-span-12 md:col-span-5 space-y-5 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-xl sm:text-2xl md:text-3xl">Let’s Start a Conversation</h2>

          <p className="text-muted font-secondary text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Whether you’re exploring options or ready to partner, we’re here to help educators,
            school leaders, and parents.
          </p>

          <div className="space-y-2 font-secondary text-sm sm:text-base">
            <p><span className="font-medium">Email:</span> <a href="mailto:sarvata.edu@gmail.com" className="text-primary hover:underline">sarvata.edu@gmail.com</a></p>
            <p><span className="font-medium">Phone:</span> <a href="tel:+919150418101" className="text-primary hover:underline">+91-9150418101</a></p>
            <p><span className="font-medium">Location:</span> Chennai, Tamil Nadu, IN</p>
            <p><span className="font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM</p>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit(onSubmit)} className="col-span-12 md:col-span-7 space-y-4 sm:space-y-5" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <FormField label="Name" error={errors.name} input={<input {...register("name", { required: "Name is required" })} placeholder="Your name" className="input w-full" />} />

          <FormField label="Email" error={errors.email} input={<input type="email" {...register("email", { required: "Email is required" })} placeholder="you@example.com" className="input w-full" />} />

          <FormField label="Phone (optional)" error={errors.phone} input={<input {...register("phone")} placeholder="+91..." className="input w-full" />} />

          <FormField
            label="I am a"
            error={errors.role}
            input={
              <select {...register("role", { required: "Please select an option" })} className="input w-full">
                <option value="">Select one</option>
                <option>Educator</option>
                <option>School Leader</option>
                <option>Parent</option>
                <option>Other</option>
              </select>
            }
          />

          <FormField label="How can we help?" error={errors.message} input={<textarea {...register("message", { required: "Message is required" })} placeholder="Tell us a bit about your needs" rows={4} className="textarea w-full" />} />

          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} disabled={isSubmitting} className="btn btn-primary mt-3 w-full sm:w-auto">
            {isSubmitting ? "Sending..." : "Submit"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({ label, input, error }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {input}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
