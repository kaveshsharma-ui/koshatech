"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toast } from "@/components/Toast";

// ─── Constants ───────────────────────────────────────────────────────────────
const PHONE_RAW   = "918924099542"; // no + or spaces
const PHONE_LABEL = "+91 8924099542";
const EMAIL       = "sales@koshatech.com";
const WA_URL      = `https://wa.me/${PHONE_RAW}?text=Hi%20Koshatech%2C%20I%20am%20interested%20in%20your%20services.`;

const SERVICES = [
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native iOS & Android apps and cross-platform solutions with Flutter & React Native — fast, beautiful, and scalable.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    color: "from-blue-600 to-cyan-500",
    border: "border-blue-400/30",
  },
  {
    icon: "🌐",
    title: "Web App Development",
    desc: "Full-stack web products built with modern frameworks — pixel-perfect UI, clean APIs, and rock-solid architecture.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
    color: "from-violet-600 to-purple-500",
    border: "border-violet-400/30",
  },
  {
    icon: "🤖",
    title: "AI & ML Integration",
    desc: "Add powerful AI features to your product — chatbots, recommendation engines, automation, and predictive analytics.",
    tags: ["GPT", "LLMs", "ML Models", "Data Pipelines"],
    color: "from-emerald-600 to-teal-500",
    border: "border-emerald-400/30",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Deploy with confidence using CI/CD pipelines, containerisation, and scalable cloud infrastructure.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    color: "from-orange-600 to-amber-500",
    border: "border-orange-400/30",
  },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "2+",  label: "Years Experience" },
  { value: "24h", label: "Avg. Response Time" },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Founder, Retail Startup",
    text: "Koshatech built our entire eCommerce app in 3 months. The quality was outstanding and they were a pleasure to work with.",
    avatar: "RS",
    color: "bg-blue-600",
  },
  {
    name: "Priya Mehta",
    role: "CTO, FinTech Company",
    text: "They delivered our dashboard product ahead of schedule with zero compromise on quality. Highly recommended.",
    avatar: "PM",
    color: "bg-violet-600",
  },
  {
    name: "Alex Thompson",
    role: "Product Manager, SaaS",
    text: "The team was proactive, communicative, and technically excellent. We plan to work with them on our next product too.",
    avatar: "AT",
    color: "bg-emerald-600",
  },
];

const COUNTRY_CODES = [
  "India (+91)", "United States (+1)", "United Kingdom (+44)",
  "Canada (+1)", "Australia (+61)", "UAE (+971)", "Singapore (+65)",
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "India (+91)",
    service: "Mobile App Development",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res  = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: "🎉 Message sent! We'll reply within 24 hours.", type: "success" });
        setFormData({ fullName: "", email: "", phone: "", countryCode: "India (+91)", service: "Mobile App Development", message: "" });
      } else {
        setToast({ message: data.message || "Something went wrong. Please try again.", type: "error" });
      }
    } catch {
      setToast({ message: "Server error. Please email us directly.", type: "error" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/koshatech_logo.svg"
              alt="Koshatech"
              width={180}
              height={48}
              className="h-9 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_LABEL}`}
              className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 hover:border-white/30 transition"
            >
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              {PHONE_LABEL}
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-violet-500 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pt-20 pb-32 text-center">
        {/* background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[80px]" />
        </div>
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          {/* badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">Trusted by 20+ Businesses Globally</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Apps & Websites
            </span>
            <br />
            That Actually Scale
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We design and develop world-class mobile apps, web platforms, and AI-powered products — on time, on budget, with zero compromise on quality.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/30 hover:from-blue-500 hover:to-violet-500 transition-all hover:-translate-y-0.5"
            >
              Start Your Project →
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/10 px-8 py-4 text-base font-semibold text-green-400 hover:bg-green-500/20 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* floating devices mockup hint */}
          <div className="mt-16 flex items-center justify-center gap-6 opacity-50 select-none">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Free consultation
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              No-commitment quote
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Reply within 24h
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What We Build</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Development Services
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
              From idea to launch and beyond — we handle every part of the product lifecycle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className={`group rounded-2xl border ${svc.border} bg-slate-900 p-6 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} text-2xl shadow-lg`}>
                  {svc.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KOSHATECH ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                We Ship Products,<br />Not Just Code
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Koshatech is a software studio obsessed with quality. We combine sharp product thinking with strong engineering so you get something that actually works for your users — and your business.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Transparent Communication", desc: "Daily updates, clear timelines, no surprises." },
                  { title: "Fixed-Price Engagements", desc: "Scope agreed upfront — you know exactly what you're paying for." },
                  { title: "Post-Launch Support", desc: "We don't disappear after delivery. We're here for the long run." },
                  { title: "Modern Tech Stack", desc: "We use the latest, most reliable frameworks — no legacy baggage." },
                ].map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{p.title}</p>
                      <p className="text-sm text-slate-500">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl ring-1 ring-white/10">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">koshatech-project</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <p className="text-slate-400"><span className="text-blue-400">const</span> <span className="text-white">project</span> <span className="text-slate-400">= {"{"}</span></p>
                  <p className="pl-4 text-slate-300">  idea: <span className="text-green-400">"Your vision"</span>,</p>
                  <p className="pl-4 text-slate-300">  timeline: <span className="text-yellow-400">"4-12 weeks"</span>,</p>
                  <p className="pl-4 text-slate-300">  quality: <span className="text-purple-400">100</span>,</p>
                  <p className="pl-4 text-slate-300">  support: <span className="text-cyan-400">true</span>,</p>
                  <p className="text-slate-400">{"}"}</p>
                  <p className="mt-4 text-slate-400"><span className="text-violet-400">await</span> koshatech.<span className="text-blue-400">build</span>(project)</p>
                  <div className="mt-4 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2">
                    <p className="text-green-400 text-xs">✓ Project delivered on time &amp; on budget</p>
                  </div>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 px-5 py-3 shadow-xl">
                <p className="text-white font-bold text-lg">50+</p>
                <p className="text-blue-200 text-xs">Apps Shipped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Client Love</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Our Clients Say</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 hover:shadow-lg transition-shadow">
                {/* stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────────────── */}
      <section id="contact" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">

            {/* Left info */}
            <div className="lg:pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Get Started Today</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Let's Build Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Next Big Thing
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Fill in the form and we'll get back to you within 24 hours with a free consultation and project estimate.
              </p>

              <div className="space-y-5">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-4 hover:bg-green-500/10 transition"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Chat on WhatsApp</p>
                    <p className="text-green-400 text-sm font-medium">{PHONE_LABEL}</p>
                  </div>
                  <svg className="ml-auto w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 hover:bg-blue-500/10 transition"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Send us an email</p>
                    <p className="text-blue-400 text-sm">{EMAIL}</p>
                  </div>
                  <svg className="ml-auto w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-3xl bg-white p-7 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Get a Free Quote</h3>
              <p className="text-slate-500 text-sm mb-6">Fill in the form — we reply within 24 hours.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Country</label>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                    >
                      {COUNTRY_CODES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="9876543210"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition"
                  >
                    <option>Mobile App Development</option>
                    <option>Web App Development</option>
                    <option>Mobile + Web Development</option>
                    <option>AI / ML Integration</option>
                    <option>UI/UX Design</option>
                    <option>Cloud & DevOps</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your idea, goals, and timeline…"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-violet-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  data-cursor-exclude
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Free Quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 Your information is private and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/koshatech_logo.svg"
              alt="Koshatech"
              width={140}
              height={40}
              className="h-8 w-auto brightness-0 invert opacity-70"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500">
            <a href={`tel:${PHONE_LABEL}`} className="hover:text-slate-300 transition">{PHONE_LABEL}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-slate-300 transition">{EMAIL}</a>
            <a href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</a>
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Koshatech. All rights reserved.</p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ────────────────────────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-green-500/60"
        data-cursor-exclude
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <svg className="relative w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* tooltip */}
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us!
        </span>
      </a>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={!!toast}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
