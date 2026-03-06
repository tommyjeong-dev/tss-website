"use client";

export type TimelineItem = {
  year: number;
  month?: string;
  title: string;
  description?: string;
};

const HISTORY_DATA: TimelineItem[] = [
  { year: 1967, title: "삼개(SG) 설립" },
  { year: 2013, month: "11", title: "㈜티에스에스(TSS) 설립" },
  { year: 2013, month: "12", title: "영국 Outokumpu와 슬래브(Slab) 수입 계약 체결", description: "Outokumpu: 글로벌 스테인리스강 제조사" },
  { year: 2015, month: "03", title: "인도 VIRAJ와 앵글 바(Angle Bar) 수입 계약 체결" },
  { year: 2015, month: "07", title: "남아프리카공화국 Columbus와 수입 계약 체결" },
  { year: 2016, month: "05", title: "핀란드 Outokumpu와 코일(Coil) 수입 계약 체결" },
  { year: 2016, month: "09", title: "부산 강서구 미음산단 공장 이전" },
  { year: 2019, month: "10", title: "Bystar 3015 및 FS3015 레이저 절단기 도입", description: "고정밀 레이저 절단 장비" },
  { year: 2019, month: "11", title: "LNG용 SUS CORNER(304L 9% Nickel) 제품 공급 시작" },
  { year: 2020, month: "03", title: "TANAKA 6k 레이저 절단기 설치" },
  { year: 2020, month: "09", title: "POSCO와 9% 니켈 304L 공급 협약 체결" },
  { year: 2021, month: "01", title: "밴드쇼(Bandsaw) 500H, 600H, 1100H 라인업 구축" },
  { year: 2022, month: "05", title: "영국 Outokumpu와 추가 수입 계약 체결" },
  { year: 2025, month: "11", title: "부산 사상구 신규 공장 이전" },
  { year: 2025, month: "12", title: "JAS-ANZ로부터 ISO 9001 품질 경영 인증 획득", description: "ISO 9001: 국제 품질 경영 시스템 인증" },
];

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
  return (
    <section id="history" className="scroll-mt-20 px-4 py-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-2">연혁</h2>
        <p className="text-zinc-400 text-sm mb-10">History</p>

        <ul className="space-y-0">
            {HISTORY_DATA.map((item, index) => (
              <TimelineNode
                key={`${item.year}-${item.month ?? ""}-${index}`}
                item={item}
                isLast={index === HISTORY_DATA.length - 1}
              />
            ))}
        </ul>

        {/* Placeholder: ISO 인증 로고 자리 */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-lg border border-dashed border-white/20 bg-white/[0.02] py-8 px-6">
          <div className="text-center text-zinc-500 text-sm">
            <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center text-xs">
              ISO 9001
              <br />
              로고
            </div>
            <span>인증 로고 영역</span>
          </div>
        </div>
      </div>
    </section>
  );
}
