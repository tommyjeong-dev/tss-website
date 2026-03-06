export type ProductSlug = "coils" | "cutting" | "forging" | "alloys";

export type SpecRow = {
  label: string;
  value: string;
  /** 테이블 값 안에서 강조할 부분 (예: "30 tons") — 굵게+강조색 */
  highlight?: string;
  /** 값 셀에 적용할 추가 클래스 (예: 작업정반 수치 강조) */
  valueClassName?: string;
  /** 강종 카테고리별 행 배경 구분 (예: Carbon Steel, Stainless Steel) */
  category?: string;
};
export type EquipmentItem = {
  name: string;
  spec?: string;
  table?: string;
  /** 설비 사진 경로 (예: /images/equipment-tanaka.jpg) */
  imageUrl?: string;
};
/** 공급 계약 이력 (연도·비고) */
export type SupplyContract = { partner: string; year: string; note?: string };

export type ProductDetailData = {
  titleKo: string;
  titleEn: string;
  imagePlaceholder?: string;
  imagePlaceholderEn?: string;
  /** 메인 상단 이미지 경로 (예: /images/coils-hero.jpg) — 없으면 placeholder 표시 */
  imageUrl?: string;
  imageAlt?: string;
  imageAltEn?: string;
  specTable?: { caption: string; rows: SpecRow[] };
  specTableEn?: { caption: string; rows: SpecRow[] };
  equipment?: EquipmentItem[];
  equipmentEn?: EquipmentItem[];
  highlights?: string[];
  highlightsEn?: string[];
  keyAchievements?: string[];
  keyAchievementsEn?: string[];
  globalPartners?: string[];
  gradesDetail?: string[];
  gradesDetailEn?: string[];
  supplyContracts?: SupplyContract[];
  supplyContractsEn?: SupplyContract[];
  productExamples?: string[];
  productExamplesEn?: string[];
};

const PRODUCT_DATA: Record<ProductSlug, ProductDetailData> = {
  coils: {
    titleKo: "스테인레스 후판/코일",
    titleEn: "Stainless Coils & Plates",
    imagePlaceholder: "후판·코일 이미지",
    imagePlaceholderEn: "Coils & Plates image",
    highlights: [
      "2020년 POSCO와 9% 니켈 304L 공급 협약 체결",
      "글로벌 밀(Mill) 협력 관계를 통한 안정적 공급",
    ],
    highlightsEn: [
      "2020 9% Nickel 304L supply agreement with POSCO",
      "Stable supply through global mill partnerships",
    ],
    keyAchievements: [
      "2020년 POSCO와 체결한 '9% 니켈 304L 공급 협약' — LNG 탱크 및 저온 저장 용도, 고품질 스테인리스 안정 공급 기반 구축",
      "LNG용 SUS CORNER 공급 실적 — LNG 저장·운송 분야 부품 소재 납품 이력",
    ],
    keyAchievementsEn: [
      "2020 '9% Nickel 304L supply agreement' with POSCO — LNG tank & cryogenic storage applications, stable high-quality supply",
      "LNG SUS CORNER supply track record — components for LNG storage and transport",
    ],
    supplyContracts: [
      { partner: "POSCO", year: "2020", note: "9% 니켈 304L 공급 협약" },
      { partner: "Outokumpu (영국/핀란드)", year: "2016", note: "슬래브·코일 수입 계약" },
      { partner: "Outokumpu (영국/핀란드)", year: "2013", note: "슬래브·코일 수입 계약" },
    ],
    supplyContractsEn: [
      { partner: "POSCO", year: "2020", note: "9% Nickel 304L supply agreement" },
      { partner: "Outokumpu (UK/Finland)", year: "2016", note: "Slab & coil import contract" },
      { partner: "Outokumpu (UK/Finland)", year: "2013", note: "Slab & coil import contract" },
    ],
    globalPartners: [
      "Outokumpu",
      "Columbus",
      "Viraj",
      "Industeel",
      "POSCO",
      "SEAH",
    ],
    gradesDetail: [
      "304 / 316 계열 (일반 스테인리스)",
      "321 (Ti 안정화 고온용)",
      "310S (고온 내식)",
      "347H (Nb 안정화 고온·내식)",
      "기타 특수 강종 문의",
    ],
    gradesDetailEn: [
      "304 / 316 series (general stainless)",
      "321 (Ti-stabilized, high temp)",
      "310S (high temp / oxidation resistant)",
      "347H (Nb-stabilized, high temp)",
      "Other grades on request",
    ],
    specTable: {
      caption: "주요 공급사 (Mill)",
      rows: [
        { label: "POSCO", value: "9% 니켈 304L 등" },
        { label: "OUTOKUMPU", value: "슬래브·코일" },
        { label: "Columbus / Viraj / Industeel", value: "글로벌 Mill 협력" },
        { label: "SEAH", value: "스테인리스 후판/코일" },
      ],
    },
    specTableEn: {
      caption: "Main suppliers (Mill)",
      rows: [
        { label: "POSCO", value: "9% Nickel 304L, etc." },
        { label: "OUTOKUMPU", value: "Slab & coil" },
        { label: "Columbus / Viraj / Industeel", value: "Global mill partnership" },
        { label: "SEAH", value: "Stainless plate & coil" },
      ],
    },
  },
  cutting: {
    titleKo: "플라즈마/레이저 절단",
    titleEn: "Plasma & Laser Cutting",
    imagePlaceholder: "프라즈마 모형절단제품 / Sus Corner 레이저 절단물",
    imagePlaceholderEn: "Plasma cutting / Sus Corner laser cutting",
    productExamples: [
      "Sus Corner 레이저 절단물",
      "플라즈마 절단 제품 (두꺼운 후판 가공)",
    ],
    productExamplesEn: [
      "Sus Corner laser-cut products",
      "Plasma-cut products (heavy plate)",
    ],
    specTable: {
      caption: "작업정반 및 설비",
      rows: [
        {
          label: "TANAKA 레이저 절단기 6k",
          value: "작업정반 3,500 × 9,000 mm",
          valueClassName: "font-semibold text-[#0d9488]",
        },
        { label: "BYSTAR 3015 레이저 절단기 4k", value: "정밀 레이저 절단 전용" },
        {
          label: "ESAB 플라즈마 절단기 800A (고출력)",
          value: "800A — 두꺼운 후판 절단 가능, 작업정반 3,524 × 13,000 mm",
          valueClassName: "font-semibold text-[#0d9488]",
        },
      ],
    },
    specTableEn: {
      caption: "Work table & equipment",
      rows: [
        {
          label: "TANAKA laser cutter 6k",
          value: "Table 3,500 × 9,000 mm",
          valueClassName: "font-semibold text-[#0d9488]",
        },
        { label: "BYSTAR 3015 laser cutter 4k", value: "Precision laser cutting" },
        {
          label: "ESAB plasma cutter 800A (high power)",
          value: "800A — thick plate cutting, table 3,524 × 13,000 mm",
          valueClassName: "font-semibold text-[#0d9488]",
        },
      ],
    },
    equipment: [
      { name: "TANAKA 레이저 절단기 6k", table: "3,500 × 9,000 mm" },
      { name: "BYSTAR 3015 레이저 절단기 4k", spec: "정밀 레이저 절단 전용" },
      {
        name: "ESAB 플라즈마 절단기 800A",
        table: "3,524 × 13,000 mm",
        spec: "800A 고출력, 두꺼운 후판 절단",
      },
    ],
    equipmentEn: [
      { name: "TANAKA laser cutter 6k", table: "3,500 × 9,000 mm" },
      { name: "BYSTAR 3015 laser cutter 4k", spec: "Precision laser cutting" },
      {
        name: "ESAB plasma cutter 800A",
        table: "3,524 × 13,000 mm",
        spec: "800A high power, thick plate cutting",
      },
    ],
  },
  forging: {
    titleKo: "단조 제품 및 플랜지",
    titleEn: "Forgings & Flanges",
    imagePlaceholder: "3000 TON FORGING PRESS (PDF 3페이지)",
    imagePlaceholderEn: "3000 TON FORGING PRESS",
    imageUrl: "/images/forging-press.png",
    imageAlt: "3,000톤 단조 프레스 (3000 TON FORGING PRESS)",
    imageAltEn: "3000 ton forging press",
    specTable: {
      caption: "Maximum Size Capacity",
      rows: [
        {
          label: "Forged Ring",
          value: "최대 외경(OD) 3,500 mm, 높이(H) 500 mm, 중량 30 tons",
          highlight: "30 tons",
        },
        {
          label: "Forged Disk",
          value: "최대 외경(OD) 3,000 mm, 두께(T) 350 mm, 중량 30 tons",
          highlight: "30 tons",
        },
      ],
    },
    specTableEn: {
      caption: "Maximum Size Capacity",
      rows: [
        {
          label: "Forged Ring",
          value: "Max OD 3,500 mm, H 500 mm, 30 tons",
          highlight: "30 tons",
        },
        {
          label: "Forged Disk",
          value: "Max OD 3,000 mm, T 350 mm, 30 tons",
          highlight: "30 tons",
        },
      ],
    },
    equipment: [
      { name: "3,000톤 단조 프레스 (MITSUBISHI NAGASAKI MACHINERY)" },
      { name: "MRB 5000 / MRX 3200 링 롤링 밀" },
    ],
    equipmentEn: [
      { name: "3,000 ton forging press (MITSUBISHI NAGASAKI MACHINERY)" },
      { name: "MRB 5000 / MRX 3200 ring rolling mill" },
    ],
  },
  alloys: {
    titleKo: "특수강 및 니켈 합금",
    titleEn: "Duplex & Nickel Alloys",
    imagePlaceholder: "특수 합금 이미지",
    imagePlaceholderEn: "Special alloys image",
    specTable: {
      caption: "취급 강종 (Material Grade, PDF 4페이지 기준)",
      rows: [
        {
          label: "Carbon Steel",
          value: "SA105, SA350, SA266, SA694",
          category: "Carbon Steel",
        },
        {
          label: "Alloy Steel",
          value: "A182 F11, F22",
          category: "Alloy Steel",
        },
        {
          label: "Stainless Steel",
          value: "F304(L), F316(L), F321, F347H, F904L 등",
          category: "Stainless Steel",
        },
        {
          label: "Duplex",
          value: "F51(UNS31803), F53(32750), F60(32205)",
          category: "Duplex",
        },
        {
          label: "Nickel Alloy",
          value: "N06600, N06625, N08020, N08825 등",
          category: "Nickel Alloy",
        },
      ],
    },
    specTableEn: {
      caption: "Material grades",
      rows: [
        { label: "Carbon Steel", value: "SA105, SA350, SA266, SA694", category: "Carbon Steel" },
        { label: "Alloy Steel", value: "A182 F11, F22", category: "Alloy Steel" },
        { label: "Stainless Steel", value: "F304(L), F316(L), F321, F347H, F904L, etc.", category: "Stainless Steel" },
        { label: "Duplex", value: "F51(UNS31803), F53(32750), F60(32205)", category: "Duplex" },
        { label: "Nickel Alloy", value: "N06600, N06625, N08020, N08825, etc.", category: "Nickel Alloy" },
      ],
    },
    globalPartners: [
      "POSCO",
      "SEAH",
      "OUTOKUMPU",
      "INDUSTEEL",
      "HVM",
      "KPCM",
    ],
  },
};

export function getProductData(slug: ProductSlug): ProductDetailData {
  return PRODUCT_DATA[slug] ?? PRODUCT_DATA.coils;
}

export const VALID_PRODUCT_SLUGS: ProductSlug[] = ["coils", "cutting", "forging", "alloys"];

export function isValidProductSlug(slug: string): slug is ProductSlug {
  return VALID_PRODUCT_SLUGS.includes(slug as ProductSlug);
}
