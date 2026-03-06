"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function LangAttribute() {
  const { locale } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = locale === "ko" ? "ko" : "en";
  }, [locale]);
  return null;
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LangAttribute />
      {children}
    </LanguageProvider>
  );
}
