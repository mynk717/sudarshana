"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { businessInfo } from "@/app/lib/constants/content";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route hash click / escape, better UX on mobile
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0"
            aria-label={`${businessInfo.name} Home`}
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${businessInfo.name} logo`}
                fill
                className="object-contain p-1"
                sizes="40px"
                priority
              />
            </div>

            <div className="min-w-0 leading-tight">
              {/* Apply Playfair via tailwind class added in tailwind.config.ts: font-display */}
              <div className="font-brand text-[18px] sm:text-[20px] font-bold tracking-tight text-brand-primary truncate">
                {businessInfo.fullName}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-600 truncate">
                Manufacturer & Supplier • Raipur (C.G.)
              </div>
            </div>
          </Link>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-primary"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.phone}
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-primary"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-900 active:scale-95 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                {businessInfo.phone}
              </a>
              <a
                href={`tel:${businessInfo.phoneAlt}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                {businessInfo.phoneAlt}
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <Mail className="w-4 h-4 text-brand-primary" />
                {businessInfo.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
