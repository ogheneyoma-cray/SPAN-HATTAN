import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-white/10 mt-12 bg-brand-navy/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-brand-gray">
          &copy; {new Date().getFullYear()} Span Hattan. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/privacy" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Terms</Link>
          <Link href="/refund" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Refund Policy</Link>
          <Link href="/shipping" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Delivery</Link>
          <Link href="/contact" className="text-sm text-brand-gray hover:text-brand-teal transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
