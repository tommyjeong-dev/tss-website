"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const sectionIds = ["products", "history", "contact"] as const;

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => setMounted(true), []);

  const closeMenu = () => setMenuOpen(false);

  /** 홈이면 인페이지 스크롤, 다른 페이지면 href="/#id"로 이동하므로 기본 동작 유지 */
  const getSectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      const header = document.querySelector("header");
      if (el && header) {
        const headerHeight = header.getBoundingClientRect().height;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
        const targetY = scrollTop + rect.top - headerHeight;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      } else {
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={t("nav.home")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link href="/" className="text-white font-semibold text-lg tracking-tight hover:opacity-90">
            TSS & SAMGAE
          </Link>
        </div>
        <nav className="flex items-center gap-2">
          {sectionIds.map((id) => (
            <Link
              key={id}
              href={getSectionHref(id)}
              className="hidden sm:inline text-sm text-zinc-400 hover:text-white transition-colors px-2"
              onClick={(e) => handleAnchorClick(e, id)}
            >
              {t(`nav.${id}`)}
            </Link>
          ))}
          <LanguageSwitcher />
          <button
            type="button"
            className="sm:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={menuOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* 모바일: mounted일 때만 포털 렌더 (useEffect 이후 = 클라이언트만, 서버/초기 클라이언트는 동일하게 미렌더) */}
      {mounted &&
        createPortal(
          <div
            className={`sm:hidden fixed inset-0 z-[100] ${
              menuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!menuOpen}
          >
            {/* 배경 딤드: 화면 전체 덮고, 클릭 시 메뉴 닫힘 */}
            <div
              role="button"
              tabIndex={0}
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-label="메뉴 닫기"
              onClick={closeMenu}
              onKeyDown={(e) => e.key === "Enter" && closeMenu()}
            />
            {/* 오른쪽 패널: 전체 높이, 불투명 배경 */}
            <aside
              className={`absolute top-0 right-0 min-h-screen h-full w-[min(140px,42.5vw)] bg-[#0a0a0a] border-l border-white/10 shadow-xl transition-transform duration-300 ease-out flex flex-col ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 mt-4 mr-2 ml-auto text-white hover:bg-white/10 rounded-lg transition-colors shrink-0"
                aria-label="메뉴 닫기"
                onClick={closeMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="px-4 py-6 flex flex-col gap-2 flex-1 min-h-[70vh]">
                {sectionIds.map((id) => (
                  <Link
                    key={id}
                    href={getSectionHref(id)}
                    className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors text-base"
                    onClick={(e) => handleAnchorClick(e, id)}
                  >
                    {t(`nav.${id}`)}
                  </Link>
                ))}
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
