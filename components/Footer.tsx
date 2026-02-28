import Link from "next/link";
import Image from "next/image";
import { site, footerServices, footerLinks, footerOffices } from "@/data";

// Color per footer column header
const COL_COLORS = [
  "from-yellow-400 to-orange-500",   // Brand / tagline
  "from-red-500 to-pink-500",        // Services
  "from-green-500 to-emerald-500",   // Useful links
  "from-blue-500 to-cyan-500",       // Offices
];

// Hover color per footer link column (Tailwind utility – must be full class names for JIT)
const LINK_HOVER = [
  "hover:text-orange-500",
  "hover:text-pink-500",
  "hover:text-emerald-600",
  "hover:text-cyan-600",
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { facebook, instagram, linkedin } = site.social;

  return (
    <footer className="border-t border-slate-200 bg-[#0b1b3b] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/koshatech_logo.svg"
                alt={`${site.name} logo`}
                width={240}
                height={64}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="sr-only">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Design-led engineering for web, mobile, and AI.
            </p>
            {/* Colored bar under tagline */}
            <div className="mt-4 flex gap-1.5">
              <span className="h-1 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
              <span className="h-1 w-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              <span className="h-1 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            </div>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-white transition-all duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${COL_COLORS[1]} bg-clip-text text-transparent mb-4`}>
              Services
            </h3>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={`text-sm text-white/60 transition-colors duration-200 ${LINK_HOVER[1]}`}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${COL_COLORS[2]} bg-clip-text text-transparent mb-4`}>
              Useful Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`text-sm text-white/60 transition-colors duration-200 ${LINK_HOVER[2]}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {footerOffices.map((office) => (
              <div key={office.title}>
                <h3 className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${COL_COLORS[3]} bg-clip-text text-transparent mb-3`}>
                  {office.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-white/60">
                  <li>{office.address}</li>
                  <li>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className={`transition-colors duration-200 ${LINK_HOVER[3]}`}>
                      {office.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${office.email}`}
                      className={`transition-colors duration-200 ${LINK_HOVER[3]}`}>
                      {office.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <span>© 2018–{currentYear} {site.name}. All Rights Reserved.</span>
          <div className="flex gap-1.5">
            <span className="h-1 w-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
            <span className="h-1 w-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
            <span className="h-1 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            <span className="h-1 w-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
