import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mqadajly", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent — thanks!");
        e.target.reset();
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch (err) {
      setStatus("Failed to send. Try again later.");
    }
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Contact
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 text-center space-y-2"
        >
          <p>
            📧 Email:{" "}
            <a
              href="mailto:evelyndrose19@gmail.com"
              className="text-blue-600 hover:underline"
            >
              evelyndrose19@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+18303310255"
              className="text-blue-600 hover:underline"
            >
              830-331-0255
            </a>
          </p>
          <p>🏠 Address: 309 Kendall Pkwy, Boerne, TX 78015</p>
        </motion.div>

        {/* Contact Form (Formspree) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <textarea
            name="message"
            required
            rows="6"
            placeholder="Message"
            className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && (
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {status}
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
