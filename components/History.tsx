"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export type TimelineItem = {
  year: number;
  month?: string;
  title: string;
  description?: string;
};

function TimelineNode({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  const dateLabel = item.month ? `${item.year}.${item.month}` : String(item.year);

  return (
    <li className="relative flex gap-6 group">
      {/* 세로 라인 */}
      {!isLast && (
        <span
          className="absolute left-6 top-12 bottom-0 w-px bg-white/15"
          aria-hidden
        />
      )}
      {/* 연도 노드 (동그라미) — 크기만 확대, 폰트는 text-xs 유지 */}
      <div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#0d9488] bg-[#0a0a0a] text-xs font-semibold text-[#0d9488] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#0d9488] group-hover:text-white group-hover:border-[#0d9488]"
        aria-hidden
      >
        {item.year}
      </div>
      {/* 콘텐츠 카드 */}
      <div className="flex-1 pb-10">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 group-hover:border-[#0d9488]/40 group-hover:bg-white/[0.06]">
          <p className="text-sm font-medium text-[#0d9488] mb-1">{dateLabel}</p>
          <h3 className="text-white font-medium mb-1">{item.title}</h3>
          {item.description && (
            <p className="text-zinc-400 text-sm">{item.description}</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default function History() {
  const { t, tn } = useLanguage();
  const items = (tn<TimelineItem[]>("history.items") ?? []) as TimelineItem[];

  return (
    <section id="history" className="scroll-mt-20 px-4 py-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-2">{t("history.title")}</h2>
        <p className="text-zinc-400 text-sm mb-10">{t("history.subtitle")}</p>

        <ul className="space-y-0">
          {items.map((item, index) => (
            <TimelineNode
              key={`${item.year}-${item.month ?? ""}-${index}`}
              item={item}
              isLast={index === items.length - 1}
            />
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-lg border border-dashed border-white/20 bg-white/[0.02] py-8 px-6">
          <div className="text-center text-zinc-500 text-sm">
            <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center text-xs">
              {t("history.isoPlaceholder")}
              <br />
              {t("history.isoLogo")}
            </div>
            <span>{t("history.certArea")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
