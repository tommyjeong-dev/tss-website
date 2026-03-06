"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = ["/hero-bg.png", "/Screenshot001.png", "/Screenshot002.png", "/Screenshot003.png"];
const ROTATE_INTERVAL_MS = 10_000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const backgroundImage = `linear-gradient(180deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.96) 100%), url('${HERO_IMAGES[currentIndex]}')`;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-5 pt-6 pb-12 overflow-hidden">
      {/* 배경: 4장 이미지가 10초마다 로테이션 + 어두운 오버레이 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage,
          backgroundColor: "#0a0a0a",
        }}
      />
      {/* 이미지 없을 때 대비: 배경색 위에 추가 오버레이 (높이 10% 확장) */}
      <div className="absolute top-0 left-0 right-0 bottom-[-10%] bg-[#0a0a0a]/25" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[30.8rem] mx-auto">
        <p className="text-white/90 text-base md:text-lg mb-2">
          Total Stainless Solution
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
          <span className="text-[#0d9488]">스테인리스</span> 및{" "}
          <span className="text-[#0d9488]">단조</span> 솔루션의 리더
        </h1>
        <p className="text-white/80 text-sm md:text-base mb-8">
          1967년부터 이어온 기술력으로 최고의 품질을 약속합니다.
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <Link
            href="#products"
            className="w-full py-3.5 px-5 rounded-lg bg-[#0d9488] text-white font-medium text-center hover:bg-[#0f766e] transition-colors"
          >
            제품 카탈로그 보기
          </Link>
          <Link
            href="#contact"
            className="w-full py-3.5 px-5 rounded-lg bg-white/10 text-white font-medium text-center border border-white/20 hover:bg-white/15 transition-colors"
          >
            문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
