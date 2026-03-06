"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

/** 언어 변경 아이콘 (SVG) — 문의 오른쪽에 배치 */
function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { value: Locale; label: string }[] = [
    { value: "ko", label: "한국어" },
    { value: "en", label: "English" },
  ];

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
        aria-label={locale === "ko" ? "언어 변경" : "Change language"}
        aria-expanded={open}
      >
        <LanguageIcon className="w-5 h-5" />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 mt-1 py-1 min-w-[120px] rounded-lg bg-[#0f0f12] border border-white/10 shadow-xl z-50"
          role="listbox"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={locale === opt.value}
              onClick={() => {
                setLocale(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                locale === opt.value
                  ? "text-[#0d9488] font-medium bg-[#0d9488]/10"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
