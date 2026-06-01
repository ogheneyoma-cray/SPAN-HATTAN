"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "NGN";

const USD_TO_NGN = 1625;

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convert: (usdPrice: number) => number;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convert = (usdPrice: number) =>
    currency === "NGN" ? usdPrice * USD_TO_NGN : usdPrice;

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
