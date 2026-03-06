"use client";

import ProductCard from "./ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

/* PDF(회사소개서) 주요 품목에 맞춘 아이콘 */
const icons = {
  coils: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M8 10h8M8 14h8" />
    </svg>
  ),
  cutting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9l7 7-2 2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M19 5l-2 2M15 9l-2 2" />
    </svg>
  ),
  forging: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  ),
  alloys: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  ),
};

const productSlugs = ["coils", "cutting", "forging", "alloys"] as const;

export default function ProductSection() {
  const { t } = useLanguage();
  return (
    <section id="products" className="relative z-10 scroll-mt-20 mt-24 md:mt-32 px-4 py-10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-6">
          {t("products.sectionTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {productSlugs.map((slug) => (
            <ProductCard
              key={slug}
              slug={slug}
              icon={icons[slug]}
              title={t(`products.${slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
