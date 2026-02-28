"use client";

import Image from "next/image";
import type React from "react";
import type ReCAPTCHAComponent from "react-google-recaptcha";
import {
  appDevelopmentCollaborate,
  appDevelopmentFormServices,
} from "@/data/appDevelopmentCompany";
import { LazyReCAPTCHA } from "@/components/LazyReCAPTCHA";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  countryCode: string;
};

type AppDevContactFormProps = {
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputClass: string;
  countryCodes: string[];
  recaptchaRef: React.RefObject<ReCAPTCHAComponent | null>;
  setCaptchaToken: (token: string | null) => void;
  loading: boolean;
};

export function AppDevContactForm({
  formData,
  onChange,
  onSubmit,
  inputClass,
  countryCodes,
  recaptchaRef,
  setCaptchaToken,
  loading,
}: AppDevContactFormProps) {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="overflow-hidden rounded-[28px]   md:flex">
        {/* Left: Image */}
        <div className="relative h-[280px] w-full flex-shrink-0 md:h-auto md:min-h-[480px] md:w-[45%] lg:w-[42%]">
          <Image
            src="/appdev/humancontact.png"
            alt="Contact our team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
          <h2 className="text-xl font-medium text-white sm:text-2xl">
            {appDevelopmentCollaborate.title}
          </h2>
          <h3 className="mt-1 text-2xl font-bold text-primary-400 sm:text-3xl">
            {appDevelopmentCollaborate.subtitle}
          </h3>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={onChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email*"
              value={formData.email}
              onChange={onChange}
              required
              className={inputClass}
            />
            <div className="grid grid-cols-[auto_1fr] gap-3">
              <select
                id="appdev-contact-countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={onChange}
                aria-label="Country code"
                className={`rounded-lg border border-white/30 bg-black/40 px-3 py-2.5 text-white focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  formData.countryCode.length > 12 ? "text-sm" : ""
                }`}
              >
                {countryCodes.map((code) => (
                  <option key={code} value={code} className="bg-gray-900">
                    {code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={onChange}
                required
                className={inputClass}
              />
            </div>
            <select
              id="appdev-contact-service"
              name="service"
              value={formData.service}
              onChange={onChange}
              aria-label="Service"
              className={inputClass}
            >
              {appDevelopmentFormServices.map((s) => (
                <option key={s} value={s} className="bg-gray-900 text-white">
                  {s}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Tell us your development vision."
              value={formData.message}
              onChange={onChange}
              rows={4}
              className={`${inputClass} resize-none`}
            />
            <div className="flex justify-center pt-2">
              <LazyReCAPTCHA
                recaptchaRef={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token: string | null) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
                theme="dark"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary-400 py-3.5 font-bold text-black transition hover:bg-primary-300 disabled:opacity-70"
            >
              {loading ? "Sending…" : "Request a callback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

