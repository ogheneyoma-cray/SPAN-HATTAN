"use client";

import Link from "next/link";
import { ArrowRight, Shirt, Gem, Package } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <Shirt size={28} />,
    title: "Premium Fashion",
    desc: "Contemporary clothing crafted from the finest fabrics for the modern wardrobe.",
  },
  {
    icon: <Package size={28} />,
    title: "Traditional Wear",
    desc: "Authentic Nigerian attire — kaftans, agbadas, and ankara — honoring our rich heritage.",
  },
  {
    icon: <Gem size={28} />,
    title: "Handcrafted Accessories",
    desc: "Bags, jewellery, and scarves made by skilled Katsina artisans with generations of craft.",
  },
];

const whyChooseUs = [
  { title: "Authentic Craftsmanship", desc: "Every piece is made by skilled hands using time-honoured techniques and premium materials sourced from across Nigeria and beyond." },
  { title: "Quality Guaranteed", desc: "We stand behind every product we sell. If you are not satisfied, our team is here to make it right — no hassle, no delay." },
  { title: "Fast Nationwide Delivery", desc: "Orders are processed and dispatched within 2 business days, with reliable delivery across Nigeria and selected international destinations." },
];

const process = [
  { step: "1", title: "Browse Our Collection", desc: "Explore our curated range of premium fashion, traditional wear, and handcrafted accessories — something for every occasion." },
  { step: "2", title: "Place Your Order", desc: "Add items to your cart, choose your currency, and complete a secure checkout in under two minutes." },
  { step: "3", title: "Delivered to Your Door", desc: "We package your order with care and dispatch it swiftly. Track your shipment from our warehouse straight to your door." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(20, 184, 166, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Wear Your Heritage. Own Your Style.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Welcome to Span Hattan — a premium fashion and lifestyle brand rooted in Katsina, Nigeria. We bring you exquisite clothing, authentic traditional wear, and handcrafted accessories that tell a story of culture, quality, and elegance.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Explore Our Collection <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Crafted with Pride, Worn with Confidence.
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          At Span Hattan, we believe that clothing is more than fabric — it is identity. Born in Katsina and inspired by the rich textile traditions of Northern Nigeria, our collections blend contemporary design with authentic craftsmanship to create pieces that stand apart. Every stitch, every dye, and every cut is a reflection of our commitment to quality.
        </p>
      </motion.section>

      {/* CATEGORIES */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
              Something for Every Occasion
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              From boardrooms to ceremonies, we have the piece that completes your look:
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {categories.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-white/10 p-6 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-6"
        >
          The <span className="text-brand-teal">Span Hattan</span> Difference
        </motion.h2>
        <p className="text-brand-gray text-center max-w-2xl mx-auto mb-16 text-lg">
          We do not just sell clothes. We build relationships with our customers through the shared values of quality, authenticity, and impeccable service.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {whyChooseUs.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            Simple. Secure. Delivered.
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Elevate Your Wardrobe?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Join a growing community of style-conscious individuals across Nigeria and the world who choose Span Hattan for quality that speaks for itself.
        </p>
        <Link
          href="/shop"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Shop All Products
        </Link>
      </motion.section>

    </main>
  );
}
