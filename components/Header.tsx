"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

const mobileNavLinks = [
  { href: "#products", label: "제품" },
  { href: "#history", label: "연혁" },
  { href: "#contact", label: "문의" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
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
      closeMenu();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="홈"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link href="/" className="text-white font-semibold text-lg tracking-tight hover:opacity-90">
            TSS & SAM SAE
          </Link>
        </div>
        <nav className="flex items-center gap-2">
          <Link
            href="#products"
            className="hidden sm:inline text-sm text-zinc-400 hover:text-white transition-colors px-2"
            onClick={(e) => handleAnchorClick(e, "#products")}
          >
            제품
          </Link>
          <Link
            href="#history"
            className="hidden sm:inline text-sm text-zinc-400 hover:text-white transition-colors px-2"
            onClick={(e) => handleAnchorClick(e, "#history")}
          >
            연혁
          </Link>
          <Link
            href="#contact"
            className="hidden sm:inline text-sm text-zinc-400 hover:text-white transition-colors px-2"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            문의
          </Link>
          <button
            type="button"
            className="sm:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
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

      {/* 모바일: 오른쪽 사이드 메뉴 — body에 포털로 렌더해 딤드 클릭이 확실히 동작하도록 */}
      {typeof document !== "undefined" &&
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
                {mobileNavLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors text-base"
                    onClick={(e) => handleAnchorClick(e, href)}
                  >
                    {label}
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
