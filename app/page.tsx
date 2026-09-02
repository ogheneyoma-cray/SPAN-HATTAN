"use client";

import Link from "next/link";
import { ArrowRight, LayoutTemplate, Puzzle, Blocks } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <LayoutTemplate size={28} />,
    title: "Themes & Templates",
    desc: "Pixel-perfect WordPress, Shopify, and website themes built for speed and conversion.",
  },
  {
    icon: <Puzzle size={28} />,
    title: "Plugins & Extensions",
    desc: "Battle-tested plugins that add SEO, payments, forms, and automation to any site.",
  },
  {
    icon: <Blocks size={28} />,
    title: "UI Kits & Software Solutions",
    desc: "Coded and Figma component libraries that help product teams ship faster.",
  },
];

const whyChooseUs = [
  { title: "Built by Engineers", desc: "Every product is written by experienced developers and designers, reviewed for performance, accessibility, and clean code." },
  { title: "Quality Guaranteed", desc: "We stand behind every product we sell. If something isn't working as expected, our team is here to make it right — no hassle, no delay." },
  { title: "Instant Digital Delivery", desc: "No warehouses, no couriers. Your files, license key, and documentation land in your inbox the moment payment is confirmed." },
];

const process = [
  { step: "1", title: "Browse Our Catalog", desc: "Explore our curated range of themes, plugins, UI kits, and software solutions — built for every stack and platform." },
  { step: "2", title: "Place Your Order", desc: "Add products to your cart, choose your currency, and complete a secure checkout in under two minutes." },
  { step: "3", title: "Download & Deploy", desc: "Get instant access to your files, license key, and setup docs by email — install and start building right away." },
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
            Build Faster. Ship Better.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Welcome to Span Hattan — a digital products studio based in Katsina, Nigeria. We build premium website themes, plugins, UI kits, and software solutions that help developers, designers, and businesses launch faster.
          </p>
          <Link
            href="/shop"
            className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
          >
            Explore Our Products <ArrowRight size={16} />
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
          Engineered with Care, Shipped with Confidence.
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          At Span Hattan, we believe great software starts with great craft. Born in Katsina and built by a team of developers and designers, our themes, plugins, and UI kits blend clean code with thoughtful design to create digital products that stand apart. Every line, every component, and every release is a reflection of our commitment to quality.
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
              Something for Every Stack
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              From launching a new site to scaling a product, we have the tool that completes your build:
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
          We do not just sell code. We build relationships with our customers through the shared values of quality, reliability, and impeccable support.
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
            Simple. Secure. Instant.
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
          Ready to Level Up Your Build?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Join a growing community of developers, designers, and businesses across Nigeria and the world who choose Span Hattan for digital products that speak for themselves.
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
