"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { currency, convert } = useCurrency();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
        <p className="text-white/50 mb-8">You haven&apos;t added anything yet.</p>
        <Link
          href="/shop"
          className="bg-brand-teal text-brand-dark font-semibold px-6 py-3 rounded-full hover:bg-brand-teal-light transition"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-white/10 rounded-2xl p-5 bg-white/5"
          >
            <div>
              <span className="text-xs text-brand-teal uppercase tracking-widest">{item.category}</span>
              <h2 className="font-semibold mt-1">{item.name}</h2>
              <p className="text-white/40 text-sm">{item.sku} · Qty: {item.quantity}</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold text-brand-teal">
                {formatPrice(convert(item.price * item.quantity), currency)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 text-sm hover:text-red-300 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
        <div>
          <p className="text-white/50 text-sm">Total</p>
          <p className="text-2xl font-bold text-brand-teal">
            {formatPrice(convert(total), currency)}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="border border-white/20 text-sm px-4 py-2 rounded-full hover:bg-white/10 transition"
          >
            Clear Cart
          </button>
          <Link
            href="/checkout"
            className="bg-brand-teal text-brand-dark font-semibold px-6 py-2 rounded-full hover:bg-brand-teal-light transition"
          >
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
