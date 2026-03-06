# TSS — Corporate Identity Site

기업 신뢰도와 설비 역량을 보여주는 **브랜드 사이트**입니다.  
프론트엔드 중심 SPA/SSG 방식으로, Next.js 정적 내보내기를 사용합니다.

## 스택

- **Next.js 15** (App Router, `output: 'export'`)
- **TypeScript**
- **Tailwind CSS**

## 사전 요구사항

- Node.js 18.x 이상

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 정적 빌드 (out/ 에 생성)
npm run build

# 빌드 결과물 로컬 서버로 확인 (선택)
npx serve out
```

## 프로젝트 구조

```
TSS&/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx      # 메인 (히어로 + 제품 카드 플레이스홀더)
├── components/       # 공통 컴포넌트 (추가 예정)
├── next.config.ts    # output: 'export' 로 SSG
├── tailwind.config.ts
└── package.json
```

## 히어로 배경 이미지

PDF 회사소개서 3페이지(3000톤 단조 프레스·Ring Rolling Mill 등) 사진을 사용하려면:

1. 해당 페이지에서 이미지를 추출해 저장합니다.
2. `public/hero-bg.jpg` 로 넣습니다.
3. 빌드/개발 서버를 다시 실행하면 히어로 섹션 배경에 어두운 오버레이와 함께 표시됩니다. (이미지가 없으면 어두운 그라데이션만 표시됩니다.)

## 다음 단계

- 연혁, 설비 현황 등 섹션/페이지 추가
- 메타데이터·SEO·접근성 점검
