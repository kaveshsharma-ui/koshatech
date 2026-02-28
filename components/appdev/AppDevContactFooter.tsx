"use client";

import { useRef, useState } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import { AppDevContactForm } from "./AppDevContactForm";
import { appDevelopmentFooterTagline } from "@/data/appDevelopmentCompany";

const countryCodes = ["India (+91)", "US (+1)", "UK (+44)", "Other"];

export function AppDevContactFooter() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    service: "Mobile App Development",
    countryCode: "India (+91)",
  });
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service,
          countryCode: formData.countryCode,
          captchaToken,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          service: "Mobile App Development",
          countryCode: "India (+91)",
        });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else alert("Something went wrong.");
    } catch {
      alert("Server error.");
    }
    setLoading(false);
  };

  const inputClass =
    "w-full rounded-lg border border-white/30 bg-black/40 px-4 py-2.5 text-white placeholder-white/60 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400";

  return (
    <>
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <AppDevContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          inputClass={inputClass}
          countryCodes={countryCodes}
          recaptchaRef={recaptchaRef}
          setCaptchaToken={setCaptchaToken}
          loading={loading}
        />
      </section>

      <footer id="contact" className="bg-black">
     
      {/* Footer: company name, description, badges */}
      <div className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-[900px] px-4 text-center sm:px-6">
          <p className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
            {appDevelopmentFooterTagline.titleLine1}{" "}
            {appDevelopmentFooterTagline.titleLine2}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
            {appDevelopmentFooterTagline.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {/* VERIFIED AGENCY DESIGNRUSH.COM badge */}
            <div className="flex items-center gap-2 rounded-lg border border-primary-400/50 bg-primary-400/10 px-4 py-2.5 text-center">
              <span className="text-lg text-primary-300" aria-hidden>✓</span>
              <div className="text-left">
                <span className="block text-xs font-semibold uppercase leading-tight text-white">
                  {appDevelopmentFooterTagline.badges[0].title}
                </span>
                <span className="block text-xs font-semibold uppercase leading-tight text-primary-200">
                  {appDevelopmentFooterTagline.badges[0].subtitle}
                </span>
              </div>
            </div>
            {/* ISO 9001/2015 COMPANY badge */}
            <div className="flex items-center gap-2 rounded-full border border-primary-400/50 bg-primary-400/10 px-4 py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600/80 text-xs font-bold text-white">
                ISO
              </span>
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">
                  {appDevelopmentFooterTagline.badges[1].middle}
                </span>
                <span className="block text-xs font-semibold uppercase text-primary-200">
                  {appDevelopmentFooterTagline.badges[1].subtitle} COMPANY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
