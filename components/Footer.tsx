"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const DIRECTIONS_IMAGE = "/images/directions-map.png";

export default function Footer() {
  const { t } = useLanguage();
  const [popupOpen, setPopupOpen] = useState(false);

  const closePopup = useCallback(() => setPopupOpen(false), []);

  useEffect(() => {
    if (!popupOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && closePopup();
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [popupOpen, closePopup]);

  return (
    <footer id="contact" className="scroll-mt-20 px-4 py-8 bg-[#0a0a0a] border-t border-white/5 text-zinc-400 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="space-y-6 min-w-0">
          <div>
            <p className="text-[#0d9488] font-bold text-lg">{t("footer.brand")}</p>
            <p className="text-white/90 font-medium">{t("footer.companyName")}</p>
          </div>
          <address className="not-italic space-y-4">
            <div>
              <p className="text-zinc-400 font-medium mb-1">{t("footer.tssLabel")}</p>
              <p className="text-zinc-500">{t("footer.tssAddr")}</p>
              <p className="text-zinc-500 text-xs">{t("footer.tssAddrEn")}</p>
              <p className="mt-1">
                <a href="tel:051-301-2100" className="hover:text-[#0d9488] transition-colors">Tel. 051-301-2100</a>
                <span className="mx-2 text-zinc-600">|</span>
                <span>Fax. 051-301-0265</span>
              </p>
            </div>
            <div>
              <p className="text-zinc-400 font-medium mb-1">{t("footer.samgaeLabel")}</p>
              <p className="text-zinc-500">{t("footer.samgaeAddr")}</p>
              <p className="text-zinc-500 text-xs">{t("footer.samgaeAddrEn")}</p>
              <p className="mt-1">
                <a href="tel:051-507-5531" className="hover:text-[#0d9488] transition-colors">Tel. 051-507-5531</a>
                <span className="mx-2 text-zinc-600">|</span>
                <span>Fax. 051-507-5531</span>
              </p>
            </div>
          </address>
        </div>

        <button
          type="button"
          onClick={() => setPopupOpen(true)}
          className="shrink-0 self-start flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#0d9488]/40 transition-colors"
          aria-label={t("footer.directions")}
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-[#0f0f12] border border-white/10">
            <Image
              src={DIRECTIONS_IMAGE}
              alt={t("footer.directions")}
              fill
              className="object-cover object-center"
              sizes="112px"
            />
          </div>
          <span className="text-xs text-zinc-400 font-medium">{t("footer.directions")}</span>
        </button>
      </div>

      {popupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t("footer.directionsTitle")}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closePopup}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0f0f12] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <h3 className="text-white font-semibold">{t("footer.directionsTitle")}</h3>
              <button
                type="button"
                onClick={closePopup}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label={t("nav.menuClose")}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center p-4 bg-[#0a0a0a]">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden bg-[#0f0f12]">
                <Image
                  src={DIRECTIONS_IMAGE}
                  alt={t("footer.directionsTitle")}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 100vw, 576px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
