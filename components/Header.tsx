"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data";
import { useQuoteModal } from "./QuoteModalContext";

// One accent color per nav item (matches hero word palette)
const NAV_COLORS: Record<string, { text: string; underline: string; bg: string }> = {
  "/":           { text: "hover:text-yellow-500",  underline: "bg-gradient-to-r from-yellow-400 to-orange-500", bg: "hover:bg-yellow-50" },
  "/about":      { text: "hover:text-orange-500",  underline: "bg-gradient-to-r from-orange-400 to-red-500",    bg: "hover:bg-orange-50" },
  "/services":   { text: "hover:text-red-500",     underline: "bg-gradient-to-r from-red-500 to-pink-500",      bg: "hover:bg-red-50"    },
  "/portfolio":  { text: "hover:text-green-600",   underline: "bg-gradient-to-r from-green-500 to-emerald-500", bg: "hover:bg-green-50"  },
  "/blog":       { text: "hover:text-blue-500",    underline: "bg-gradient-to-r from-blue-500 to-cyan-500",     bg: "hover:bg-blue-50"   },
  "/contact":    { text: "hover:text-purple-600",  underline: "bg-gradient-to-r from-purple-500 to-indigo-500", bg: "hover:bg-purple-50" },
};

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { openModal } = useQuoteModal();
  const closeTimerRef = useRef<number | null>(null);

  const openServices = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServicesWithDelay = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      closeTimerRef.current = null;
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 sm:h-18 lg:h-20 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/koshatech_logo.svg"
            alt={`${site.name} logo`}
            width={280}
            height={80}
            priority
            className="h-10 sm:h-12 lg:h-12 w-auto"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = activeDropdown === item.href;
            const colors = NAV_COLORS[item.href] ?? NAV_COLORS["/contact"];
            // active = exact match for "/", prefix match for others
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-slate-900" : `text-slate-600 ${colors.text}`
                  }`}
                >
                  {item.label}
                  {/* Colored underline bar */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2.5px] rounded-full ${colors.underline} transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Trigger */}
                <Link
                  href={item.href}
                  className={`relative group flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                    isActive || isOpen ? "text-slate-900" : `text-slate-600 ${colors.text}`
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Colored underline bar */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2.5px] rounded-full ${colors.underline} transition-all duration-300 ${
                      isActive || isOpen ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {/* Arrow */}
                  <span
                    className={`inline-block text-[10px] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full z-50 mt-4 w-[95vw] max-w-[1000px] -translate-x-1/2 origin-top rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl transition-all duration-300 ${
                    isOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Services
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Select a capability to explore
                      </p>
                    </div>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-red-500 hover:underline"
                      onClick={() => setActiveDropdown(null)}
                    >
                      View all →
                    </Link>
                  </div>

                  {/* Services Grid — each child gets a cycling color dot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {item.children && item.children.map((child, ci) => {
                      const dotColors = [
                        "bg-yellow-400", "bg-orange-400", "bg-red-400", "bg-pink-400",
                        "bg-green-500", "bg-emerald-400", "bg-blue-500", "bg-cyan-400",
                        "bg-purple-500", "bg-indigo-400", "bg-fuchsia-400", "bg-teal-400",
                      ];
                      const dot = dotColors[ci % dotColors.length];
                      const isChildActive = pathname.startsWith(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`group flex items-center gap-2 rounded-xl border px-3 py-2.5 transition-all duration-200 ${
                            isChildActive
                              ? "border-slate-200 bg-slate-50"
                              : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
                          <p className={`text-sm font-medium transition-colors ${
                            isChildActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                          }`}>
                            {child.label}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>


        {/* Top right: phones (blue buttons) + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\s/g, "").replace(/-/g, "")}`}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            <span className="text-slate-600">IN</span> {site.phone}
          </a>
          <button onClick={openModal} className="btn-primary text-sm">
            Get a Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-50 bg-black/30 "
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-200 bg-white overscroll-contain">
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openItem === item.href;
              const colors = NAV_COLORS[item.href] ?? NAV_COLORS["/contact"];
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive ? "bg-slate-100 text-slate-900" : `text-slate-700 ${colors.bg}`
                    }`}
                  >
                    {/* Colored dot */}
                    <span className={`h-2 w-2 shrink-0 rounded-full ${colors.underline.replace("bg-gradient-to-r", "").split(" ")[1] ?? "bg-slate-400"}`} />
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : item.href)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      isActive ? "bg-slate-100 text-slate-900" : `text-slate-700 ${colors.bg}`
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${colors.underline.replace("bg-gradient-to-r", "").split(" ")[1] ?? "bg-slate-400"}`} />
                      {item.label}
                    </span>
                    <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  {isOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l-2 border-slate-100 pl-4 mt-1">
                      {item.children?.map((child, ci) => {
                        const dotColors = [
                          "bg-yellow-400","bg-orange-400","bg-red-400","bg-pink-400",
                          "bg-green-500","bg-emerald-400","bg-blue-500","bg-cyan-400",
                          "bg-purple-500","bg-indigo-400","bg-fuchsia-400","bg-teal-400",
                        ];
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColors[ci % dotColors.length]}`} />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href={`tel:${site.phone.replace(/\s/g, "").replace(/-/g, "")}`}
              className="mt-4 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
            >
              {site.phone}
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="btn-primary mt-2 w-full"
            >
              Get a Quote
            </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
