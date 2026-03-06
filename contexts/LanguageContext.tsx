"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: string) => string;
  /** Locale-aware nested value (e.g. history.items) — returns the object/array for current locale */
  tn: <T>(key: string) => T | undefined;
};

function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path
    .split(".")
    .reduce(
      (acc: unknown, key) =>
        acc && typeof acc === "object" && key in acc
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      obj
    );
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tss-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "ko" || stored === "en") setLocaleState(stored);
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: string): string => {
      if (!mounted) return key;
      const value = getNested(
        translations[locale] as unknown as Record<string, unknown>,
        key
      );
      return typeof value === "string" ? value : value != null ? String(value) : key;
    },
    [locale, mounted]
  );

  const tn = useCallback(
    <T,>(key: string): T | undefined => {
      if (!mounted) return undefined;
      const value = getNested(
        translations[locale] as unknown as Record<string, unknown>,
        key
      );
      return value as T | undefined;
    },
    [locale, mounted]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
