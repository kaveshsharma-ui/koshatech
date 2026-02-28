"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Our Work", href: "#portfolio" },
  { label: "Services", href: "#problems" },
  { label: "Technologies", href: "#technologies" },
  { label: "Client Reviews", href: "#testimonials" },
  { label: "Case Studies", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

const BOTTOM_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function AppDevHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-black">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:flex focus:h-auto focus:w-auto focus:px-4 focus:py-3 focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:bg-primary-400 focus:text-black focus:outline-none focus:ring-2 focus:ring-white focus:m-0 focus:[clip:auto]"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] items-center"
            aria-label="Koshatech – Home"
          >
            <Image
              src="/koshatech_logo.svg"
              alt=""
              width={160}
              height={48}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] min-w-[44px] flex items-center text-sm font-medium text-white hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <nav className="border-t border-white/10" aria-label="Site links">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-6 px-4 py-3 sm:gap-8 sm:px-6 lg:justify-center lg:px-12">
          {BOTTOM_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-sm text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
