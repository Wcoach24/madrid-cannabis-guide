"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Laws", href: "/cannabis-laws-spain" },
  { label: "How to Join", href: "/how-to-join-cannabis-club" },
  { label: "Neighborhoods", href: "/best-neighborhoods-cannabis-madrid" },
  { label: "Etiquette", href: "/cannabis-club-etiquette" },
  { label: "Prices", href: "/prices-what-to-expect" },
  { label: "Madrid vs Amsterdam", href: "/madrid-vs-amsterdam" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-7 h-7 text-[var(--color-cannabis-medium)] group-hover:text-[var(--color-cannabis-light)] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-label="Cannabis leaf"
            >
              <path d="M12 22V12M12 12c0-3.5-2.5-6.5-6-8 1.5 2 2 4.5 1.5 7-.5 2.5-2 4-3.5 5 2.5 0 5-.5 7-2.5l1-.5M12 12c0-3.5 2.5-6.5 6-8-1.5 2-2 4.5-1.5 7 .5 2.5 2 4 3.5 5-2.5 0-5-.5-7-2.5l-1-.5M12 12c0-4.5-1-8-2-10 0 0 2 3.5 2 7M12 12c0-4.5 1-8 2-10 0 0-2 3.5-2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            <span className="font-bold text-lg text-[var(--color-text-primary)] hidden sm:inline">
              Madrid Cannabis Guide
            </span>
            <span className="font-bold text-lg text-[var(--color-text-primary)] sm:hidden">
              MCG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-cannabis-light)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-cannabis-medium)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent-amber)] text-[var(--color-bg-primary)] font-semibold rounded-lg hover:bg-[#f59e0b]/90 hover:shadow-lg hover:shadow-[var(--color-accent-amber)]/30 transition-all duration-200"
          >
            Get Invited
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className={`w-6 h-6 text-[var(--color-text-primary)] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-3 space-y-2 border-t border-[var(--color-border)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-cannabis-light)] hover:bg-[var(--color-bg-secondary)] rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
              target="_blank"
              rel="noopener"
              className="block w-full mt-4 px-4 py-2.5 bg-[var(--color-accent-amber)] text-[var(--color-bg-primary)] font-semibold rounded-lg text-center hover:bg-[#f59e0b]/90 transition-colors duration-200"
            >
              Get Invited →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
