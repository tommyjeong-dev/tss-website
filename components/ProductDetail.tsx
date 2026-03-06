"use client";

import Link from "next/link";
import Image from "next/image";
import { getProductData, type ProductSlug, type SpecRow } from "@/lib/product-data";
import { useLanguage } from "@/contexts/LanguageContext";

/** 강종 카테고리별 행 배경 — 서버/클라이언트 동일 데이터로 렌더하여 Hydration 불일치 방지 */
const CATEGORY_ROW_BG: Record<string, string> = {
  "Carbon Steel": "bg-[#0d9488]/5",
  "Alloy Steel": "bg-[#0d9488]/10",
  "Stainless Steel": "bg-[#0d9488]/5",
  Duplex: "bg-[#0d9488]/10",
  "Nickel Alloy": "bg-[#0d9488]/5",
};

export default function ProductDetail({ slug }: { slug: ProductSlug }) {
  const { t, locale } = useLanguage();
  const data = getProductData(slug);
  const isEn = locale === "en";
  const title = isEn ? data.titleEn : data.titleKo;
  const subtitle = isEn ? null : data.titleEn;
  const imagePlaceholder = isEn ? (data.imagePlaceholderEn ?? "Image") : (data.imagePlaceholder ?? "이미지");
  const imageAlt = isEn && data.imageAltEn ? data.imageAltEn : (data.imageAlt ?? title);
  const highlights = isEn && data.highlightsEn?.length ? data.highlightsEn : (data.highlights ?? []);
  const keyAchievements = isEn && data.keyAchievementsEn?.length ? data.keyAchievementsEn : (data.keyAchievements ?? []);
  const supplyContracts = isEn && data.supplyContractsEn?.length ? data.supplyContractsEn : (data.supplyContracts ?? []);
  const gradesDetail = isEn && data.gradesDetailEn?.length ? data.gradesDetailEn : (data.gradesDetail ?? []);
  const specTable = isEn && data.specTableEn ? data.specTableEn : data.specTable;
  const productExamples = isEn && data.productExamplesEn?.length ? data.productExamplesEn : (data.productExamples ?? []);
  const equipment = isEn && data.equipmentEn?.length ? data.equipmentEn : (data.equipment ?? []);

  return (
    <article className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm mb-8"
        >
          {t("productDetail.backToProducts")}
        </Link>

        {/* 상단: 제품명 + 대형 이미지 */}
        <header className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h1>
          {subtitle != null && (
            <p className="text-zinc-400 text-lg mb-6">{subtitle}</p>
          )}
          <div className="w-full aspect-video rounded-xl bg-[#0f0f12] border border-white/10 overflow-hidden relative">
            {data.imageUrl ? (
              <Image
                src={data.imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-zinc-500">
                {imagePlaceholder}
              </span>
            )}
          </div>
        </header>

        {/* 하이라이트 (해당 제품만) */}
        {highlights.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">{t("productDetail.keyFacts")}</h2>
            <ul className="space-y-2">
              {highlights.map((text, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-[#94a3b8] mt-1">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Highlights: 핵심 실적 · 글로벌 파트너십 · 강종 상세화 */}
        {keyAchievements.length > 0 || (data.globalPartners?.length ?? 0) > 0 || gradesDetail.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-6 border-b border-[#94a3b8]/30 pb-2">
              {t("productDetail.keyHighlights")}
            </h2>
            <div className="space-y-8">
              {keyAchievements.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-[#94a3b8] mb-3">{t("productDetail.keyAchievements")}</h3>
                  <ul className="space-y-2">
                    {keyAchievements.map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300">
                        <span className="text-[#0d9488] mt-1">▸</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.globalPartners && data.globalPartners.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-[#94a3b8] mb-3">{t("productDetail.globalPartners")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.globalPartners.map((name, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#0f0f12] border border-white/10 text-zinc-300 text-sm"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {gradesDetail.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-[#94a3b8] mb-3">{t("productDetail.gradesDetail")}</h3>
                  <div className="overflow-x-auto rounded-lg border border-[#94a3b8]/40">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#94a3b8]/15 border-b border-[#94a3b8]/30">
                          <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.gradesColumn")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gradesDetail.map((grade, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
                          >
                            <td className="py-3 px-4 text-zinc-300">{grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* 공급 계약 이력 (글로벌 소싱) */}
        {supplyContracts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">{t("productDetail.supplyContracts")}</h2>
            <div className="overflow-x-auto rounded-lg border border-[#94a3b8]/40">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#94a3b8]/15 border-b border-[#94a3b8]/30">
                    <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.partner")}</th>
                    <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.year")}</th>
                    <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.note")}</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyContracts.map((c, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
                    >
                      <td className="py-3 px-4 text-zinc-300">{c.partner}</td>
                      <td className="py-3 px-4 text-white">{c.year}</td>
                      <td className="py-3 px-4 text-zinc-400">{c.note ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 절단/가공 제품 예시 */}
        {productExamples.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">{t("productDetail.productExamples")}</h2>
            <ul className="flex flex-wrap gap-2">
              {productExamples.map((example, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f0f12] border border-white/10 text-zinc-300"
                >
                  <span className="text-[#0d9488]" aria-hidden="true">◇</span>
                  {example}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 스펙 테이블 — 실버 포인트 */}
        {specTable && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">
              {specTable.caption}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#94a3b8]/40">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#94a3b8]/15 border-b border-[#94a3b8]/30">
                    <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.tableItem")}</th>
                    <th className="py-3 px-4 text-[#94a3b8] font-medium">{t("productDetail.tableSpec")}</th>
                  </tr>
                </thead>
                <tbody>
                  {specTable.rows.map((row: SpecRow, i: number) => {
                    const valueCell = row.highlight && row.value.includes(row.highlight) ? (
                      <>
                        {row.value.split(row.highlight).map((part, j, arr) => (
                          <span key={j}>
                            {part}
                            {j < arr.length - 1 ? (
                              <strong className="font-bold text-[#0d9488]">{row.highlight}</strong>
                            ) : null}
                          </span>
                        ))}
                      </>
                    ) : (
                      row.value
                    );
                    const rowBg = row.category && CATEGORY_ROW_BG[row.category] ? CATEGORY_ROW_BG[row.category] : "";
                    return (
                      <tr
                        key={i}
                        className={`border-b border-white/5 last:border-0 hover:bg-white/[0.03] ${rowBg}`}
                      >
                        <td className="py-3 px-4 text-zinc-300">{row.label}</td>
                        <td className={`py-3 px-4 text-white ${row.valueClassName ?? ""}`}>
                          {valueCell}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 주요 공급사 (Mill) — 표 하단 (alloys 등) */}
        {slug === "alloys" && data.globalPartners && data.globalPartners.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">{t("productDetail.mainSuppliers")}</h2>
            <div className="flex flex-wrap gap-2">
              {data.globalPartners.map((name, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#0f0f12] border border-white/10 text-zinc-300 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 관련 설비 정보 */}
        {equipment.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">{t("productDetail.relatedEquipment")}</h2>
            <ul className="space-y-3">
              {equipment.map((eq, i) => (
                <li
                  key={i}
                  className="flex flex-wrap items-center gap-3 py-3 px-4 rounded-lg bg-[#0f0f12] border border-white/10"
                >
                  {eq.imageUrl ? (
                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a]">
                      <Image
                        src={eq.imageUrl}
                        alt={eq.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-2 min-w-0">
                    <span className="text-[#94a3b8] font-medium">{eq.name}</span>
                    {eq.spec && (
                      <span className="text-zinc-400 text-sm">— {eq.spec}</span>
                    )}
                    {eq.table && (
                      <span className="text-zinc-400 text-sm">
                        {t("productDetail.workTable")} {eq.table}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
