export type Locale = "ko" | "en";

export const translations: Record<
  Locale,
  {
    nav: { products: string; history: string; contact: string; home: string; menuOpen: string; menuClose: string };
    hero: {
      subtitle: string;
      titleHighlight1: string;
      titleHighlight2: string;
      titleAnd: string;
      titleSuffix: string;
      description: string;
      ctaProducts: string;
      ctaContact: string;
    };
    products: {
      sectionTitle: string;
      coils: string;
      cutting: string;
      forging: string;
      alloys: string;
    };
    history: {
      title: string;
      subtitle: string;
      isoPlaceholder: string;
      isoLogo: string;
      certArea: string;
      items: { year: number; month?: string; title: string; description?: string }[];
    };
    footer: {
      brand: string;
      companyName: string;
      tssLabel: string;
      samgaeLabel: string;
      tssAddr: string;
      samgaeAddr: string;
      tssAddrEn: string;
      samgaeAddrEn: string;
      directions: string;
      directionsTitle: string;
    };
    productDetail: {
      backToProducts: string;
      keyFacts: string;
      keyHighlights: string;
      keyAchievements: string;
      globalPartners: string;
      gradesDetail: string;
      supplyContracts: string;
      partner: string;
      year: string;
      note: string;
      productExamples: string;
      tableItem: string;
      tableSpec: string;
      mainSuppliers: string;
      relatedEquipment: string;
      workTable: string;
      gradesColumn: string;
    };
  }
> = {
  ko: {
    nav: {
      products: "제품",
      history: "연혁",
      contact: "문의",
      home: "홈",
      menuOpen: "메뉴 열기",
      menuClose: "메뉴 닫기",
    },
    hero: {
      subtitle: "Total Stainless Solution",
      titleHighlight1: "스테인리스",
      titleHighlight2: "단조",
      titleAnd: "및",
      titleSuffix: "솔루션의 리더",
      description: "1967년부터 이어온 기술력으로 최고의 품질을 약속합니다.",
      ctaProducts: "제품 카탈로그 보기",
      ctaContact: "문의하기",
    },
    products: {
      sectionTitle: "주요 제품 및 서비스",
      coils: "스테인레스 후판/코일",
      cutting: "플라즈마/레이저 절단물",
      forging: "단조제품 및 플랜지",
      alloys: "특수강 및 니켈 합금",
    },
    history: {
      title: "연혁",
      subtitle: "History",
      isoPlaceholder: "ISO 9001",
      isoLogo: "로고",
      certArea: "인증 로고 영역",
      items: [
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
      ],
    },
    footer: {
      brand: "TSS / SG",
      companyName: "(주)티에스에스 · Total Stainless Solution / SAM GAE",
      tssLabel: "TSS (가달)",
      samgaeLabel: "삼개 (사상)",
      tssAddr: "부산광역시 강서구 가달2로 55번길 50",
      samgaeAddr: "부산광역시 사상구 낙동대로 1468번길 29",
      tssAddrEn: "50, Gadal 2-ro 55beon-gil, Gangseo-gu, Busan, Korea",
      samgaeAddrEn: "29, Nakdong-daero 1468beon-gil, Sasang-gu, Busan, Korea",
      directions: "찾아오시는 길",
      directionsTitle: "찾아오시는 길",
    },
    productDetail: {
      backToProducts: "← 제품 목록",
      keyFacts: "핵심 사항",
      keyHighlights: "Key Highlights",
      keyAchievements: "핵심 실적",
      globalPartners: "글로벌 파트너십 (Mill)",
      gradesDetail: "강종 상세",
      supplyContracts: "공급 계약 이력",
      partner: "파트너",
      year: "연도",
      note: "비고",
      productExamples: "가공 제품 예시",
      tableItem: "항목",
      tableSpec: "규격 / 비고",
      mainSuppliers: "주요 공급사 (Mill)",
      relatedEquipment: "관련 설비",
      workTable: "작업정반",
      gradesColumn: "취급 강종",
    },
  },
  en: {
    nav: {
      products: "Products",
      history: "History",
      contact: "Contact",
      home: "Home",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      subtitle: "Total Stainless Solution",
      titleHighlight1: "Stainless",
      titleHighlight2: "Forging",
      titleAnd: "and",
      titleSuffix: "Solution Leader",
      description: "We promise the highest quality with expertise since 1967.",
      ctaProducts: "View Products",
      ctaContact: "Contact Us",
    },
    products: {
      sectionTitle: "Products & Services",
      coils: "Stainless Coils & Plates",
      cutting: "Plasma & Laser Cutting",
      forging: "Forgings & Flanges",
      alloys: "Duplex & Nickel Alloys",
    },
    history: {
      title: "History",
      subtitle: "연혁",
      isoPlaceholder: "ISO 9001",
      isoLogo: "Logo",
      certArea: "Certification logo area",
      items: [
        { year: 1967, title: "Sam Gae (SG) founded" },
        { year: 2013, month: "11", title: "TSS Co., Ltd. established" },
        { year: 2013, month: "12", title: "Slab import contract with UK Outokumpu", description: "Outokumpu: Global stainless steel manufacturer" },
        { year: 2015, month: "03", title: "Angle bar import contract with India VIRAJ" },
        { year: 2015, month: "07", title: "Import contract with South Africa Columbus" },
        { year: 2016, month: "05", title: "Coil import contract with Finland Outokumpu" },
        { year: 2016, month: "09", title: "Factory relocated to Mieum Industrial Complex, Gangseo-gu, Busan" },
        { year: 2019, month: "10", title: "Bystar 3015 & FS3015 laser cutters introduced", description: "Precision laser cutting equipment" },
        { year: 2019, month: "11", title: "LNG SUS CORNER (304L 9% Nickel) supply started" },
        { year: 2020, month: "03", title: "TANAKA 6k laser cutter installed" },
        { year: 2020, month: "09", title: "9% Nickel 304L supply agreement with POSCO" },
        { year: 2021, month: "01", title: "Bandsaw 500H, 600H, 1100H lineup established" },
        { year: 2022, month: "05", title: "Additional import contract with UK Outokumpu" },
        { year: 2025, month: "11", title: "New factory relocated to Sasang-gu, Busan" },
        { year: 2025, month: "12", title: "ISO 9001 QMS certification from JAS-ANZ", description: "ISO 9001: International Quality Management System" },
      ],
    },
    footer: {
      brand: "TSS / SG",
      companyName: "TSS Co., Ltd. · Total Stainless Solution / SAM GAE",
      tssLabel: "TSS (Gadal)",
      samgaeLabel: "Sam Gae (Sasang)",
      tssAddr: "50, Gadal 2-ro 55beon-gil, Gangseo-gu, Busan, Korea",
      samgaeAddr: "29, Nakdong-daero 1468beon-gil, Sasang-gu, Busan, Korea",
      tssAddrEn: "50, Gadal 2-ro 55beon-gil, Gangseo-gu, Busan, Korea",
      samgaeAddrEn: "29, Nakdong-daero 1468beon-gil, Sasang-gu, Busan, Korea",
      directions: "Directions",
      directionsTitle: "Directions",
    },
    productDetail: {
      backToProducts: "← Products",
      keyFacts: "Key facts",
      keyHighlights: "Key Highlights",
      keyAchievements: "Key achievements",
      globalPartners: "Global partners (Mill)",
      gradesDetail: "Grades",
      supplyContracts: "Supply contracts",
      partner: "Partner",
      year: "Year",
      note: "Note",
      productExamples: "Product examples",
      tableItem: "Item",
      tableSpec: "Spec / Note",
      mainSuppliers: "Main suppliers (Mill)",
      relatedEquipment: "Related equipment",
      workTable: "Work table",
      gradesColumn: "Grade",
    },
  },
};

function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => (acc && typeof acc === "object" && key in acc ? (acc as Record<string, unknown>)[key] : undefined), obj);
}

export function t(locale: Locale, key: string): string {
  const value = getNested(translations[locale] as unknown as Record<string, unknown>, key);
  return typeof value === "string" ? value : (value != null ? String(value) : key);
}
