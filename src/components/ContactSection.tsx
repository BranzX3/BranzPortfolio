"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold">
              {t.contact.sectionTag}
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[var(--text-primary)] mt-2 font-bold break-words">
              {t.contact.sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md font-light">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Direct Contact Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 paper-card p-6 sm:p-10 space-y-7 sm:space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-bold leading-snug mb-3 sm:mb-4">
                {t.contact.inviteTitle}
              </h3>
              <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
                {t.contact.inviteParagraph}
              </p>
            </div>

            {/* Email Quick Action */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-3">
              <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] block font-bold">
                {t.contact.directEmailLabel}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                <span className="text-sm sm:text-lg font-mono text-[var(--text-primary)] font-bold break-all sm:truncate">
                  {siteConfig.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[var(--bg-subsurface)] hover:bg-[var(--accent-color)] hover:text-[#FFFBF3] text-[var(--text-primary)] transition-all shrink-0 flex items-center justify-center gap-2 text-sm font-medium w-full sm:w-auto"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span>{t.contact.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Details */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-3.5 text-base text-[var(--text-secondary)]">
                <div className="p-2.5 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{siteConfig.location}</span>
              </div>
            </div>

            {/* Social Connect Links */}
            <div className="pt-6 border-t border-[var(--border-color)]">
              <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] block mb-4 font-bold">
                {t.contact.socialAccountsTitle}
              </span>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-button-secondary text-sm py-2.5 px-5 justify-center"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-button-secondary text-sm py-2.5 px-5 justify-center"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Interactive Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 paper-card p-6 sm:p-10"
          >
            {formSubmitted ? (
              <div className="py-12 sm:py-16 text-center space-y-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--bg-subsurface)] text-[var(--accent-color)] mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-bold">
                  {t.contact.successTitle}
                </h4>
                <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto">
                  {t.contact.successMsg}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="paper-button-secondary text-sm py-3 px-6 mt-4"
                >
                  {t.contact.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                <h3 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] font-bold">
                  {t.contact.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-2 sm:mb-2.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-2 sm:mb-2.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-2 sm:mb-2.5">
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-2 sm:mb-2.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="paper-button-primary w-full justify-center py-4 text-base"
                >
                  <span>{t.contact.sendBtn}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
