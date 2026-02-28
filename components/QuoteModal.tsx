"use client";

import { useQuoteModal } from "./QuoteModalContext";
import { contactForm } from "@/data/contact";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toast } from "@/components/Toast";
// import { LazyReCAPTCHA } from "@/components/LazyReCAPTCHA";
// import type ReCAPTCHA from "react-google-recaptcha";
export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();

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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setLoading(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setToast({ message: "Form submitted successfully!", type: "success" });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "India (+91)",
          service: "Mobile App Development",
          message: "",
        });
  
        // Close modal after a short delay to show success message
        setTimeout(() => {
          closeModal();
          setToast(null);
        }, 1500);
      } else {
        setToast({ message: data.message || "Something went wrong.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Server error. Please try again later.", type: "error" });
    }
  
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="bg-white w-full max-w-lg rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Tell us what you’re building
            </h2>
            <p className="text-primary-700 font-bold text-xl mt-2">
              We’ll reply within 1 business day
            </p>

            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="quote-fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  id="quote-fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="quote-email" className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="quote-phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  id="quote-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="quote-countryCode" className="block text-sm font-medium text-slate-700 mb-1">Country code</label>
                <select
                  id="quote-countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                >
                  <option>India (+91)</option>
                  <option>United States (+1)</option>
                  <option>United Kingdom (+44)</option>
                  <option>Canada (+1)</option>
                  <option>Australia (+61)</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-slate-700 mb-1">Service</label>
                <select
                  id="quote-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                >
                  <option>Mobile App Development</option>
                  <option>Website Development</option>
                  <option>Website & Mobile App Development</option>
                  <option>Customized Software</option>
                  <option>Business Intelligence</option>
                  <option>AI/ML Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-message" className="block text-sm font-medium text-slate-700 mb-1">Describe your project</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  placeholder="Describe your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-slate-300 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                {loading ? "Sending..." : contactForm.submitLabel}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={!!toast}
          onClose={() => setToast(null)}
        />
      )}
    </AnimatePresence>
  );
}