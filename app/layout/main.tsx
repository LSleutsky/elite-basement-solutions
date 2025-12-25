import { useState } from "react";
import { Link, Outlet } from "react-router";

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Services", href: "/" },
  { name: "Projects", href: "/" },
  { name: "About", href: "/" }
];

const trustItems = [
  "Licensed & Insured",
  "Lifetime Warranty",
  "Free Estimates",
  "Same-Day Response"
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-canvas relative flex min-h-screen flex-col overflow-hidden">
      <header className="sticky top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav className="border-primary/10 bg-surface/80 flex w-full max-w-3xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl md:px-6 md:py-3">
          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="text-muted hover:text-primary p-1 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            )}
          </button>
          <Logo className="h-7 w-7 md:h-8 md:w-8" variant="icon" />
          <nav className="text-muted hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} className="hover:text-primary transition-colors" to={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              className="bg-elite-teal hidden rounded-full px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-90 md:block"
              to="/"
            >
              Contact
            </Link>
            {/* Mobile call button */}
            <Link
              className="bg-elite-teal rounded-full px-3 py-1 text-xs text-white md:hidden"
              to="tel:2155550123"
            >
              Call
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="bg-surface/95 absolute top-16 right-4 left-4 z-40 rounded-2xl border border-white/10 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="text-primary hover:bg-primary/5 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-primary/10 my-2" />
            <Link
              className="bg-elite-teal rounded-full px-4 py-3 text-center text-sm font-medium text-white"
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <main className="relative z-10 flex-1 px-4 py-6 md:px-8 md:py-10 md:pb-24">
        <Outlet />
      </main>
      <footer className="relative z-40 hidden px-4 pb-4 md:block md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#0d0d0d] p-4 dark:bg-[#0a0a0a]">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-2">
            {trustItems.map((item, index) => (
              <span key={index} className="text-xs text-[#555] md:text-sm">
                {item}
              </span>
            ))}
            <span className="text-elite-teal text-xs font-medium md:text-sm">(215) 555-0123</span>
          </div>
        </div>
      </footer>
      {/* Mobile CTA */}
      <div className="bg-canvas/95 fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 p-4 backdrop-blur-lg md:hidden">
        <Link
          className="bg-elite-olive flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white"
          to="tel:2155550123"
        >
          <span>📞</span>
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
