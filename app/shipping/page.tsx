"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">Delivery Policy</h1>
        <p className="text-brand-gray mb-10">Last updated: June 2026</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Overview</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All Span Hattan products are digital — themes, plugins, UI kits, and related software solutions delivered electronically. There are no physical shipments, warehouses, or couriers involved. This Delivery Policy outlines exactly how and when you receive access to the products you purchase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Instant Digital Delivery</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            As soon as your payment is confirmed, you will receive an order confirmation email containing a secure download link, your license key, and setup documentation for every product in your order. Most customers receive their files within <strong className="text-white">a few minutes</strong> of completing checkout.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Download Access</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Download links are valid for <strong className="text-white">365 days</strong> from the date of purchase and can be re-accessed at any time by signing in to your account or by using the link in your confirmation email. If your download link expires, contact us and we will happily reissue it at no charge.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. License Keys & Updates</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Every product purchase includes a license key that unlocks automatic updates and premium support for the term stated on the product page. Renewing your license extends access to future versions, bug fixes, and compatibility updates. Products can continue to be used after a license lapses, but updates and support will no longer be available.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Delivery Issues</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you have not received your delivery email within 30 minutes of a successful payment, please check your spam or promotions folder first. If you still cannot locate it, contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> with your order number and we will resend your files immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. International Availability</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Because every product is delivered digitally, there are no customs duties, import taxes, or regional shipping restrictions. Our products are available to customers anywhere in the world, and pricing is displayed in your chosen currency at checkout.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            For any delivery-related enquiries, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or call us on <a href="tel:+2347012408331" className="text-brand-teal hover:underline">+234 701 240 8331</a>. Our customer care team is available Monday to Saturday, 9 AM to 6 PM (WAT).
          </p>
        </section>
      </motion.div>
    </main>
  );
}
