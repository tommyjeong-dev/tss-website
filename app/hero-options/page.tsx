"use client";

import Image from "next/image";
import Link from "next/link";

const options = [
  { id: "1", file: "hero-option-1.jpg", desc: "옵션 1 (산업/설비)" },
  { id: "2", file: "hero-option-2.jpg", desc: "옵션 2" },
  { id: "3", file: "hero-option-3.jpg", desc: "옵션 3" },
  { id: "4", file: "hero-option-4.jpg", desc: "옵션 4 (산업)" },
];

export default function HeroOptionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#0d9488] hover:underline text-sm mb-6 inline-block">
          ← 메인으로
        </Link>
        <h1 className="text-xl font-semibold mb-2">히어로 배경 후보 (4장)</h1>
        <p className="text-zinc-400 text-sm mb-8">
          골라주시면 해당 이미지로 적용해 드립니다. 개발 서버 실행 후 이 페이지에서 확인하세요.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map((opt) => (
            <figure key={opt.id} className="rounded-lg overflow-hidden border border-white/10">
              <div className="aspect-[3/2] relative bg-zinc-800">
                <Image
                  src={`/${opt.file}`}
                  alt={opt.desc}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-3 text-sm text-zinc-300">
                <strong>옵션 {opt.id}</strong> — {opt.file}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-zinc-500 text-sm">
          선택하시면 &quot;옵션 N번으로 해줘&quot;라고 말씀해 주세요. 그 이미지를 히어로 배경으로 적용해 드립니다.
        </p>
      </div>
    </main>
  );
}
