"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGES = ["/hero-bg.png", "/Screenshot001.png", "/Screenshot002.png", "/Screenshot003.png"];
const ROTATE_INTERVAL_MS = 10_000;

const HERO_OVERLAY = "linear-gradient(180deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.96) 100%)";

export default function Hero() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-5 pt-6 pb-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
        {/* 배경 이미지를 겹쳐 쌓아 opacity로 크로스페이드 */}
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out motion-reduce:transition-none"
            style={{
              backgroundImage: `${HERO_OVERLAY}, url('${src}')`,
              opacity: index === currentIndex ? 1 : 0,
            }}
            aria-hidden
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-[30.8rem] mx-auto">
        <p className="text-white/90 text-base md:text-lg mb-2">
          {t("hero.subtitle")}
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
          <span className="text-[#0d9488]">{t("hero.titleHighlight1")}</span> {t("hero.titleAnd")}{" "}
          <span className="text-[#0d9488]">{t("hero.titleHighlight2")}</span> {t("hero.titleSuffix")}
        </h1>
        <p className="text-white/80 text-sm md:text-base mb-8">
          {t("hero.description")}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[280px] mt-6">
          <Link
            href="#products"
            className="w-full py-3.5 px-5 rounded-lg bg-[#0d9488] text-white font-medium text-center hover:bg-[#0f766e] transition-colors"
          >
            {t("hero.ctaProducts")}
          </Link>
          <Link
            href="#contact"
            className="w-full py-3.5 px-5 rounded-lg bg-white/10 text-white font-medium text-center border border-white/20 hover:bg-white/15 transition-colors"
          >
            {t("hero.ctaContact")}
          </Link>
        </div>
      </div>

      {/* 배경 이미지 인디케이터 (클릭 시 해당 슬라이드로 전환) */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-2.5">
        {HERO_IMAGES.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={t("hero.slideLabel").replace("{n}", String(index + 1))}
            aria-current={index === currentIndex}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-[#0d9488]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
