"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/lib/context";
import { translations } from "@/lib/translations";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
} from "lucide-react";

export default function LocationAndContact() {
  const { language, selectedCourseId, setSelectedCourseId } = useApp();
  const t = translations[language];

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          program: selectedCourseId,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSelectedCourseId("");
      } else {
        alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-blue-900 dark:bg-blue-800 mx-auto rounded mb-5" />
          <p
            id="contact-lead"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: Info Cards and Maps (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <div
                id="contact-info-address"
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {t.contact.addressLabel}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>

              {/* Call Card */}
              <div
                id="contact-info-phone"
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-xl text-green-600 dark:text-green-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {t.contact.phoneLabel}
                  </h4>
                  <div className="space-y-1 font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                    <p className="block">025-583511</p>
                    <p className="block">+977 986-2035584</p>
                    <p className="block">+977 9811090814</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                id="contact-info-email"
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-sky-50 dark:bg-sky-950/30 rounded-xl text-sky-600 dark:text-sky-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-sans font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {t.contact.emailLabel}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                    swarojagartrainingcenter@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div
                id="contact-info-hours"
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps container with direction trigger */}
            <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <div className="relative w-full h-80 lg:h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <iframe
                  id="google-maps-embed-frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.339659350293!2d87.26563047631317!3d26.66288107679549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c657f695395%3A0x74cd4121ca459d11!2sSwarojagar%20Training%20Center!5e0!3m2!1sen!2snp!4v1717000000000!5m2!1sen!2snp"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Swarojagar Training Center Map Location"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  📍 Itahari-06 Pragati Chowk, Sunsari (Koshi Province)
                </span>
                <a
                  id="open-maps-direction-btn"
                  href="https://www.google.com/maps/place/Swarojagar+Training+Center/@26.6628811,87.2682054,17z/data=!4m6!3m5!1s0x39ef6c657f695395:0x74cd4121ca459d11!8m2!3d26.6628811!4d87.2682054!16s%2Fg%2F11f1nbzwkv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-xs bg-blue-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all self-stretch sm:self-auto justify-center shadow-md cursor-pointer"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  {t.contact.directionBtn}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Booking Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-center">
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6">
                {t.contact.formTitle}
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    id="form-success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-6 rounded-2xl text-center space-y-4 py-12"
                  >
                    <div className="w-12 h-12 bg-green-150 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 leading-relaxed">
                      {t.contact.formSuccess}
                    </p>
                    <button
                      id="reset-success-btn"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-4 block mx-auto"
                    >
                      {language === "en"
                        ? "Send another inquiry"
                        : "अर्को आवेदन पठाउनुहोस्"}
                    </button>
                  </motion.div>
                ) : (
                  <form
                    id="enrollment-callback-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        {t.contact.formName} *
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-slate-800 dark:text-slate-100 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        {t.contact.formEmail}
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-slate-800 dark:text-slate-100 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        {t.contact.formPhone} *
                      </label>
                      <input
                        id="form-input-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+977 98XXXXXXX"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-slate-800 dark:text-slate-100 transition-colors"
                      />
                    </div>

                    {/* Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        {t.contact.formProgram} *
                      </label>
                      <select
                        id="form-select-program"
                        required
                        value={selectedCourseId}
                        onChange={(e) => setSelectedCourseId(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-slate-800 dark:text-slate-100 transition-colors appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-down'><path d='m6 9 6 6 6-6'/></svg>")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.25rem",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="" disabled className="text-slate-400">
                          -- Select Course --
                        </option>
                        {t.courses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Messages */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        {t.contact.formMessage}
                      </label>
                      <textarea
                        id="form-textarea-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask about hostel booking, next batch starting dates, etc..."
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-slate-800 dark:text-slate-100 transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-blue-900 hover:bg-slate-800 text-white font-sans font-bold text-sm rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t.contact.formSubmit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
