"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">Terms and Conditions</h1>
        <p className="text-brand-gray mb-10">Last updated: June 2026</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Overview</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            This website is operated by Span Hattan, a fashion and lifestyle brand based in Katsina, Nigeria. By visiting our website and/or purchasing products from us, you agree to be bound by the following terms and conditions, including our Privacy Policy, Refund Policy, and Shipping Policy, all of which are incorporated herein by reference. Please read these terms carefully before using our site. If you do not agree to these terms, you may not access or use our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Use of Our Website</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            You agree to use our website for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the website. Prohibited uses include transmitting unsolicited commercial communications, attempting to gain unauthorised access to any part of our systems, reproducing or copying our content without permission, and using our site in any way that is fraudulent, misleading, or harmful. We reserve the right to suspend or terminate access to our website for any user who violates these terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Products and Pricing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time without notice. Prices are listed in US Dollars (USD) and Nigerian Naira (NGN) using an indicative exchange rate. Final pricing at checkout may reflect current exchange rates. We make every effort to display our products accurately, including colours and dimensions; however, we cannot guarantee that your display accurately reflects the product&apos;s appearance. We reserve the right to correct any errors in pricing or product descriptions and to cancel orders placed at an incorrect price.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Orders and Payment</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            By placing an order, you confirm that you are legally entitled to use the payment method provided and that all information supplied is true and accurate. We reserve the right to refuse or cancel any order at our sole discretion, including where we suspect fraudulent activity. Payment is collected at the time of order. You will receive an order confirmation email once your payment has been successfully processed. We will not be held liable for any loss resulting from delays caused by incorrect contact information provided by you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Intellectual Property</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All content on this website — including but not limited to text, images, logos, graphics, and product descriptions — is the intellectual property of Span Hattan and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content on our website without our express written permission. Our brand name, logo, and associated marks are trademarks of Span Hattan and may not be used without authorisation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Limitation of Liability</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            To the fullest extent permitted by law, Span Hattan, its directors, employees, and partners shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products, including but not limited to loss of profits, data, or goodwill. Our total liability to you for any claim arising from your use of our services shall not exceed the total amount paid by you for the specific product giving rise to the claim. Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of these exclusions may not apply to you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Governing Law</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Katsina State, Nigeria. We reserve the right to update these terms at any time. Continued use of our website following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">8. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or call us on <a href="tel:+2347018869436" className="text-brand-teal hover:underline">+234 701 886 9436</a>.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
