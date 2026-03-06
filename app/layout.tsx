import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tss-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "(주)티에스에스 / 삼개 - Total Stainless Solution",
    template: "%s | (주)티에스에스 / 삼개",
  },
  description:
    "1967년 설립 이래 스테인리스 및 단조 솔루션을 이끌어 온 (주)티에스에스와 삼개. 3,000톤 단조 프레스 보유, POSCO·Outokumpu 등 글로벌 Mill 협력으로 최고 품질을 약속합니다.",
  keywords: ["스테인리스", "단조", "플랜지", "TSS", "삼개", "Total Stainless Solution", "부산", "강서구", "사상구"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "(주)티에스에스 / 삼개",
    title: "(주)티에스에스 / 삼개 - Total Stainless Solution",
    description:
      "1967년 설립. 3,000톤 단조 프레스 보유, 스테인리스 후판·코일, 플라즈마/레이저 절단, 단조·플랜지, 특수강·니켈 합금. 부산 강서구·사상구.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "(주)티에스에스 / 삼개 - Total Stainless Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "(주)티에스에스 / 삼개 - Total Stainless Solution",
    description: "1967년 설립. 3,000톤 단조 프레스, 스테인리스·단조 솔루션. 부산 강서구·사상구.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-[#0a0a0a]" suppressHydrationWarning>
      <body className="antialiased min-h-screen text-white bg-[#0a0a0a]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
