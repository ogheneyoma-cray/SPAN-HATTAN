"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-teal transition text-sm";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-brand-dark text-white font-body min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brand-teal">Get in Touch</h1>
          <p className="text-brand-gray text-lg max-w-xl">
            We&apos;d love to hear from you. Whether you have a question about an order, need sizing advice, or just want to say hello — our team is ready to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a
                    href="mailto:care@spanhattan.com"
                    className="text-brand-gray hover:text-brand-teal transition-colors"
                  >
                    care@spanhattan.com
                  </a>
                  <p className="text-white/30 text-xs mt-1">We respond within 24 hours on business days.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Call or WhatsApp</p>
                  <a
                    href="tel:+2347012408331"
                    className="text-brand-gray hover:text-brand-teal transition-colors"
                  >
                    +234 701 240 8331
                  </a>
                  <p className="text-white/30 text-xs mt-1">Mon – Sat, 9 AM – 6 PM (WAT)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Visit Our Store</p>
                  <address className="text-brand-gray not-italic leading-relaxed">
                    Kofar Marusa Katsina Quarters<br />
                    Behind Yan Doma Hause<br />
                    Katsina, Katsina State<br />
                    Nigeria
                  </address>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/3">
              <h3 className="font-display text-lg font-bold mb-3">Business Hours</h3>
              <table className="w-full text-sm text-brand-gray">
                <tbody className="space-y-2">
                  <tr><td className="py-1 font-medium text-white">Monday – Friday</td><td className="text-right">9:00 AM – 6:00 PM</td></tr>
                  <tr><td className="py-1 font-medium text-white">Saturday</td><td className="text-right">10:00 AM – 4:00 PM</td></tr>
                  <tr><td className="py-1 font-medium text-white">Sunday</td><td className="text-right text-white/30">Closed</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="border border-brand-teal/30 rounded-2xl p-10 bg-brand-teal/5 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                <Send size={48} className="text-brand-teal mb-4" />
                <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-brand-gray">
                  Thank you for reaching out. We&apos;ll get back to you at <span className="text-white">{form.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 border border-white/10 rounded-2xl p-6 bg-white/3">
                <h2 className="font-display text-xl font-bold mb-2">Send a Message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} />
                  <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange} className={inputClass} />
                </div>

                <input name="subject" required placeholder="Subject" value={form.subject} onChange={handleChange} className={inputClass} />

                <textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={inputClass + " resize-none"}
                />

                <button
                  type="submit"
                  className="w-full bg-brand-teal text-brand-dark py-3 font-bold rounded-full hover:bg-brand-teal-light transition flex items-center justify-center gap-2 text-sm tracking-widest uppercase"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
