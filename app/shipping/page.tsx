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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">Shipping Policy</h1>
        <p className="text-brand-gray mb-10">Last updated: June 2026</p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Overview</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At Span Hattan, we take great pride in delivering your orders safely, promptly, and in perfect condition. All our products are physical goods — handcrafted clothing, accessories, and lifestyle items — shipped directly from our warehouse in Katsina, Nigeria. This Shipping Policy outlines everything you need to know about how we handle and dispatch your orders.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Order Processing</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All orders are processed within <strong className="text-white">1–2 business days</strong> of payment confirmation. Orders placed on weekends or public holidays will be processed on the next available business day. You will receive an order confirmation email immediately after payment, followed by a dispatch notification with tracking information once your package has been handed to our courier partner.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Domestic Shipping (Nigeria)</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We ship to all 36 states and the Federal Capital Territory within Nigeria. Standard domestic delivery takes <strong className="text-white">3–5 business days</strong> from dispatch for most locations. Deliveries to remote or rural areas may take up to 7 business days. We partner with leading Nigerian courier services to ensure reliable and trackable nationwide delivery. Domestic shipping costs are calculated based on the delivery location and weight of your order and are displayed at checkout before payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. International Shipping</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We currently ship internationally to select destinations including the United Kingdom, United States, Canada, Ghana, and other West African nations. International delivery typically takes <strong className="text-white">7–14 business days</strong> from the date of dispatch, depending on the destination country and customs clearance. International shipping costs and estimated delivery times will be calculated and displayed at checkout. Please note that international customers are responsible for any customs duties, import taxes, or fees levied by their country&apos;s customs authority. Span Hattan has no control over these charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">5. Order Tracking</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Once your order is dispatched, you will receive a dispatch confirmation email containing your tracking number and a link to monitor your shipment in real time. If you have not received your tracking information within 3 business days of placing your order, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> and we will investigate immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">6. Delivery Issues</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            If your order is marked as delivered but you have not received it, please first check with neighbours or building management in case the parcel was left with them. If the package still cannot be located, contact us within <strong className="text-white">48 hours</strong> of the marked delivery date. For orders that are lost in transit, we will either resend the order at no additional cost or issue a full refund at your preference. Span Hattan is not responsible for delays caused by natural disasters, civil disruptions, or events beyond our reasonable control.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">7. Packaging</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All Span Hattan orders are packaged with care using durable, branded materials designed to protect your items during transit. We are mindful of our environmental footprint and continually work to reduce the use of single-use plastics in our packaging. For gifting occasions, please note in your order comments if you would like gift wrapping and our team will do our best to accommodate your request.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">8. Contact Us</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            For any shipping-related enquiries, please contact us at <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">care@spanhattan.com</a> or call us on <a href="tel:+2347018869436" className="text-brand-teal hover:underline">+234 701 886 9436</a>. Our customer care team is available Monday to Saturday, 9 AM to 6 PM (WAT).
          </p>
        </section>
      </motion.div>
    </main>
  );
}
