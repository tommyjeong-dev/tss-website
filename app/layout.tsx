import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TSS & SAM SAE | Total Stainless Solution",
  description:
    "스테인리스 및 단조 솔루션의 리더. 20년 이상의 기술력으로 최고의 품질을 약속합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-[#0a0a0a]">
      <body className="antialiased min-h-screen text-white bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
