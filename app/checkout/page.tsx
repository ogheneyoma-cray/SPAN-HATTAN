"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ShieldCheck, CreditCard, Lock } from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-teal transition text-sm";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { currency, convert } = useCurrency();
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", country: "Nigeria",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 16);
      const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
      setForm((prev) => ({ ...prev, cardNumber: formatted }));
      return;
    }

    if (name === "expiry") {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
      setForm((prev) => ({ ...prev, expiry: formatted }));
      return;
    }

    if (name === "cvv") {
      setForm((prev) => ({ ...prev, cvv: value.replace(/\D/g, "").slice(0, 4) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <ShieldCheck className="text-brand-teal mx-auto mb-6" size={64} />
        <h1 className="font-display text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-brand-gray mb-2">
          Thank you for shopping with Span Hattan.
        </p>
        <p className="text-brand-gray mb-8">
          A confirmation has been sent to <span className="text-white font-semibold">{form.email}</span>. We will process and ship your order within 2 business days.
        </p>
        <Link
          href="/shop"
          className="bg-brand-teal text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-teal-light transition"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-brand-gray mb-8">Add some items before checking out.</p>
        <Link
          href="/shop"
          className="bg-brand-teal text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-teal-light transition"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 pt-28">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* FORM — left 3 cols */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">

          {/* Shipping Info */}
          <div className="border border-white/10 rounded-2xl p-6 bg-white/3 space-y-4">
            <h2 className="font-display text-xl font-bold mb-2">Shipping Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" required placeholder="First Name" value={form.firstName} onChange={handleChange} className={inputClass} />
              <input name="lastName" required placeholder="Last Name" value={form.lastName} onChange={handleChange} className={inputClass} />
            </div>

            <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange} className={inputClass} />
            <input name="phone" type="tel" required placeholder="Phone Number" value={form.phone} onChange={handleChange} className={inputClass} />
            <input name="address" required placeholder="Street Address" value={form.address} onChange={handleChange} className={inputClass} />

            <div className="grid grid-cols-2 gap-4">
              <input name="city" required placeholder="City" value={form.city} onChange={handleChange} className={inputClass} />
              <input name="state" required placeholder="State / Region" value={form.state} onChange={handleChange} className={inputClass} />
            </div>

            <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Payment Info */}
          <div className="border border-white/10 rounded-2xl p-6 bg-white/3 space-y-4">
            <h2 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
              <CreditCard size={20} className="text-brand-teal" />
              Payment Details
            </h2>

            <div className="flex items-center gap-2 text-xs text-brand-gray bg-white/5 rounded-lg px-3 py-2">
              <Lock size={12} className="text-brand-teal" />
              Your payment information is encrypted and secure.
            </div>

            <input
              name="cardName"
              required
              placeholder="Cardholder Name"
              value={form.cardName}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="cardNumber"
              required
              placeholder="Card Number (1234 5678 9012 3456)"
              value={form.cardNumber}
              onChange={handleChange}
              inputMode="numeric"
              className={inputClass}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="expiry"
                required
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                inputMode="numeric"
                className={inputClass}
              />
              <input
                name="cvv"
                required
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                inputMode="numeric"
                type="password"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-teal text-brand-dark py-4 font-bold rounded-full hover:bg-brand-teal-light transition flex items-center justify-center gap-2 text-sm tracking-widest uppercase"
          >
            <Lock size={16} />
            Place Order Securely
          </button>
        </form>

        {/* ORDER SUMMARY — right 2 cols */}
        <div className="lg:col-span-2">
          <div className="border border-white/10 rounded-2xl p-6 bg-white/3 sticky top-28">
            <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-sm">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-white/40 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-brand-teal font-semibold">
                    {formatPrice(convert(item.price * item.quantity), currency)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>{formatPrice(convert(total), currency)}</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span className="text-brand-teal">Calculated at dispatch</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-brand-teal">{formatPrice(convert(total), currency)}</span>
              </div>
            </div>

            <p className="text-xs text-white/30 mt-4 leading-relaxed">
              Questions? Contact us at{" "}
              <a href="mailto:care@spanhattan.com" className="text-brand-teal hover:underline">
                care@spanhattan.com
              </a>{" "}
              or call{" "}
              <a href="tel:+2347012408331" className="text-brand-teal hover:underline">
                +234 701 240 8331
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
