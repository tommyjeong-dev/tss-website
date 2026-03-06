# 제품 상세 페이지 이미지 교체 가이드

**이미지 파일은 직접 추가해야 합니다.** (Cursor/AI는 프로젝트에 이미지 파일을 생성·업로드할 수 없습니다.)  
PDF나 사진 파일을 `public/images/`에 넣고, `lib/product-data.ts`에서 경로만 연결하면 됩니다.

---

## 1. 이미지 파일 위치

- 프로젝트 루트의 **`public/images/`** 폴더에 이미지를 넣습니다.
- 예: `public/images/cutting-hero.jpg`, `public/images/equipment-tanaka.jpg`

## 2. 메인 상단 이미지 (히어로)

- **절단 페이지**: PDF 1페이지의 플라즈마/절단 제품 사진 → `public/images/cutting-hero.jpg` 등으로 저장 후, `lib/product-data.ts`의 `cutting` 객체에 다음을 추가합니다.
  ```ts
  imageUrl: "/images/cutting-hero.jpg",
  imageAlt: "플라즈마·레이저 절단 가공",
  ```
- **후판/코일 페이지**: `coils` 객체에 `imageUrl`, `imageAlt`를 같은 방식으로 추가할 수 있습니다.
- **단조·플랜지 페이지**: PDF 3페이지의 '3000 TON FORGING PRESS' 사진 → `public/images/forging-press.jpg`로 저장 후, `lib/product-data.ts`의 `forging` 객체에 `imageUrl: "/images/forging-press.jpg"`, `imageAlt: "3,000톤 단조 프레스"`를 추가합니다.

## 3. 관련 설비 사진 (썸네일)

- PDF 2페이지의 TANAKA, ESAB 등 장비 사진을 `public/images/`에 저장한 뒤, `lib/product-data.ts`의 `equipment` 배열 각 항목에 `imageUrl`을 넣습니다.
  ```ts
  { name: "TANAKA 레이저 절단기 6k", table: "3,500 × 9,000 mm", imageUrl: "/images/equipment-tanaka.jpg" },
  { name: "ESAB 플라즈마 절단기 800A", table: "3,524 × 13,000 mm", spec: "800A 고출력, 두꺼운 후판 절단", imageUrl: "/images/equipment-esab.jpg" },
  ```
- `imageUrl`이 있는 설비만 썸네일이 표시됩니다. 없으면 기존처럼 텍스트만 표시됩니다.

## 4. 권장 파일명 예시

| 용도           | 권장 경로                          |
|----------------|------------------------------------|
| 후판/코일 메인 | `public/images/coils-hero.jpg`     |
| 절단 메인      | `public/images/cutting-hero.jpg`   |
| 단조 프레스    | `public/images/forging-press.jpg`  |
| TANAKA 설비    | `public/images/equipment-tanaka.jpg` |
| ESAB 설비      | `public/images/equipment-esab.jpg` |
| 특수강/니켈 합금 메인 | `public/images/alloys-hero.jpg` (선택) |
| 찾아오시는 길 지도  | `public/images/directions-map.png` (푸터 썸네일·팝업) |
| **OG 공유 이미지** | `public/images/og-image.png` (1200×630 권장, 카카오톡·링크드인 등 미리보기) |

---

## 5. 적용 순서 요약

1. **폴더 만들기**: 프로젝트 루트에 `public/images/` 폴더가 없으면 생성합니다.
2. **이미지 저장**: PDF에서 추출하거나 촬영한 사진을 위 표의 파일명으로 `public/images/`에 저장합니다. (jpg, png, webp 등 사용 가능)
3. **데이터 연결**: `lib/product-data.ts`를 열어 해당 제품 객체(coils / cutting / forging / alloys)에 `imageUrl`, `imageAlt`를 추가하거나, equipment 항목에 `imageUrl`을 추가합니다.
4. **확인**: `npm run dev` 실행 후 해당 제품 상세 페이지(`/products/coils`, `/products/cutting` 등)에서 이미지가 나오는지 확인합니다.
