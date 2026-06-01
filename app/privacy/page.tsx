"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">Privacy Policy</h1>
        <p className="text-brand-gray mb-10">Last updated: June 2026</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Introduction</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Welcome to Span Hattan. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard information you provide when visiting our website or placing an order with us. By using our site, you consent to the practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Information We Collect</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We collect information necessary to process your orders and provide you with the best possible service. This includes: <strong className="text-white">Identity Data</strong> such as your first and last name; <strong className="text-white">Contact Data</strong> such as your email address, phone number, billing address, and delivery address; <strong className="text-white">Financial Data</strong> such as payment card details (processed securely and not stored on our servers); <strong className="text-white">Transaction Data</strong> including details about payments you have made and products you have purchased; and <strong className="text-white">Technical Data</strong> such as your IP address, browser type, and device information collected automatically when you visit our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. How We Use Your Data</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We use your personal data strictly for purposes that are lawful and necessary. Your information is used to: process and fulfil your orders, including dispatching products and sending you delivery updates; manage our relationship with you, including responding to customer service enquiries; send you transactional emails such as order confirmations and receipts; comply with legal obligations including maintaining accurate financial records; and improve our website and product offerings based on aggregate usage patterns. We will never sell your personal data to third parties. We do not use your data for profiling, automated decision-making, or marketing without your explicit consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Data Security</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We take the security of your personal data seriously. We employ industry-standard technical and organisational measures to protect your information from unauthorised access, disclosure, alteration, or destruction. All data transmitted between your browser and our servers is encrypted using SSL/TLS technology. Payment card details are processed through secure, PCI-DSS compliant payment channels and are never stored on our servers. Despite these precautions, no method of data transmission over the internet is entirely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Data Retention</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the satisfaction of any legal, accounting, or reporting requirements. Order records are typically retained for a period of seven (7) years for legal and tax compliance purposes. After this period, your data will be securely deleted or anonymised.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Your Rights</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            You have the right to request access to the personal data we hold about you, request correction of any inaccurate data, and request deletion of your data where it is no longer necessary for us to retain it. To exercise any of these rights, or if you have any questions about how we handle your personal data, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a>. We will respond to all requests within 30 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Cookies</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our website uses essential cookies to enable core functionality such as session management and shopping cart persistence. We do not use tracking or advertising cookies. You may configure your browser to block cookies; however, doing so may affect the functionality of certain features of our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">8. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our team at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or visit us at Kofar Marusa Katsina Quarters, Behind Yan Doma Hause, Katsina, Nigeria. We are committed to addressing your concerns promptly and transparently.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
