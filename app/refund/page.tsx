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
            At Span Hattan, we are committed to your satisfaction. Every product we sell is crafted with care and undergoes a thorough quality inspection before dispatch. However, we understand that sometimes a product may not meet your expectations, arrive damaged, or may not be quite right. This Refund Policy outlines your rights and the process for requesting a return or refund. Please read it carefully before making a purchase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Return Eligibility</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            You may return most items purchased from Span Hattan within <strong className="text-white">14 days</strong> of the delivery date. To be eligible for a return, your item must be in its original, unworn condition with all tags attached and in its original packaging. Items that show signs of wear, have been washed, or have been altered in any way will not be accepted for return. For hygiene reasons, accessories that come into direct skin contact (such as jewellery and scarves) may only be returned if they are in their original sealed packaging. Custom or personalised orders are non-refundable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Damaged or Incorrect Items</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you receive an item that is defective, damaged in transit, or is not the product you ordered, please contact us within <strong className="text-white">48 hours</strong> of delivery at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a>. Include your order number, a clear description of the issue, and photographs of the item and its packaging. We will arrange for a replacement or full refund at no additional cost to you, including covering the cost of return shipping for verified defective or incorrect items.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. How to Initiate a Return</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            To initiate a return, please email us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> with your order number, the item(s) you wish to return, and your reason for the return. Our team will respond within 2 business days with a return authorisation and further instructions. Please do not ship items back without first receiving a return authorisation, as unauthorised returns may not be accepted. The cost of return shipping is the responsibility of the customer unless the item is faulty or incorrect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Refund Processing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund within 3 business days. If approved, a refund will be processed to your original payment method. Please allow <strong className="text-white">7–10 business days</strong> for the refund to appear in your account, depending on your bank or card provider. Original shipping charges are non-refundable unless the return is due to our error.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Exchanges</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We are happy to exchange items for a different size or colour where stock is available. To request an exchange, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> within 14 days of receiving your order. Exchange requests are subject to item availability. If the requested item is out of stock, we will process a refund to your original payment method instead.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Non-Returnable Items</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            The following items are not eligible for return or refund: items that have been worn, washed, or altered; items returned after the 14-day return window; customised or personalised orders; items marked as final sale at the time of purchase; and perishable or consumable goods. We reserve the right to refuse a refund if we determine that the returned item does not meet our return eligibility criteria.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">8. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If you have questions about our Refund Policy, please reach out at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or call <a href="tel:+2347012408331" className="text-brand-teal hover:underline">+234 701 240 8331</a>. We are here to help Monday through Saturday, 9 AM to 6 PM (WAT).
          </p>
        </section>
      </motion.div>
    </main>
  );
}
