"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">Refund Policy</h1>
        <p className="text-brand-gray mb-10">Last updated: June 2026</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Our Commitment</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Span Hattan, we are committed to your satisfaction. Every theme, plugin, and UI kit we sell is tested for functionality and compatibility before release. However, we understand that a product may occasionally not be the right fit for your project. This Refund Policy outlines your rights and the process for requesting a refund on digital goods. Please read it carefully before making a purchase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Refund Eligibility</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Because our products are digital and delivered instantly, refund requests are evaluated on a case-by-case basis. You may request a refund within <strong className="text-white">14 days</strong> of purchase if the product is materially defective, fails to function as described, or is fundamentally incompatible with the platform stated on the product page after our support team has attempted to resolve the issue. Refunds are not available simply because you changed your mind, no longer need the product, or lack the technical skill to install it — for installation help, please contact our support team first.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Defective or Non-Functioning Products</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If a product does not work as described, please contact us within <strong className="text-white">14 days</strong> of purchase at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a>. Include your order number and a clear description of the issue, along with screenshots or a screen recording where possible. Our support team will first attempt to resolve the issue; if we are unable to do so within a reasonable time, we will issue a full refund.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. How to Request a Refund</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            To request a refund, please email us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> with your order number and the reason for your request. Our team will respond within 2 business days. Approved refunds revoke the associated license key and download access, and future updates or support for that product will no longer be available.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Refund Processing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once your refund request is approved, it will be processed to your original payment method. Please allow <strong className="text-white">7–10 business days</strong> for the refund to appear in your account, depending on your bank or card provider.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Non-Refundable Purchases</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            The following are not eligible for a refund: products where the download link has been used and no functional defect has been identified; license renewals and support extensions; custom development or customisation work; and purchases made more than 14 days ago. We reserve the right to refuse a refund if we determine that a request does not meet our eligibility criteria or shows signs of abuse.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you have questions about our Refund Policy, please reach out at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or call <a href="tel:+2347012408331" className="text-brand-teal hover:underline">+234 701 240 8331</a>. We are here to help Monday through Saturday, 9 AM to 6 PM (WAT).
          </p>
        </section>
      </motion.div>
    </main>
  );
}
