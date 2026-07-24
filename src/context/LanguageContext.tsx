"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { enContent } from "@/data/locales/en";
import { thContent } from "@/data/locales/th";

type Language = "en" | "th";

interface LanguageContextType {
  lang: Language;
  t: typeof enContent;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("branz_lang") as Language | null;
    if (savedLang === "en" || savedLang === "th") {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes("th")) {
        setLangState("th");
      }
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("branz_lang", newLang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "th" : "en");
  };

  const t = lang === "th" ? thContent : enContent;

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
