"use client";

import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const { currency, convert } = useCurrency();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Shop Our Collection</h1>
        <p className="text-brand-gray text-lg">Premium fashion, traditional wear, and handcrafted accessories from Katsina.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="group border border-white/10 rounded-2xl overflow-hidden flex flex-col bg-white/5 hover:bg-white/8 transition-all border-t-2 border-t-brand-teal hover:border-t-brand-teal-light hover:shadow-lg hover:shadow-brand-teal/20"
          >
            <div className="relative w-full aspect-square overflow-hidden bg-white/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold">{product.category}</span>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-white/60 text-sm flex-1">{product.shortDesc}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-brand-teal">
                  {formatPrice(convert(product.price), currency)}
                </span>
                <span className="bg-brand-teal text-brand-dark text-sm font-semibold px-4 py-2 rounded-full group-hover:bg-brand-teal-light transition">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
