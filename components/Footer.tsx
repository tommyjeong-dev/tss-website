export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 px-4 py-8 bg-[#0a0a0a] border-t border-white/5 text-zinc-400 text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-white/90 font-medium">TSS & SAM SAE</p>
        <address className="not-italic space-y-2">
          <p>
            <span className="text-zinc-500">TSS</span> 부산광역시 강서구 가달2로 55번길 50
          </p>
          <p>
            <span className="text-zinc-500">삼개</span> 부산광역시 사상구 낙동대로 1468번길 29
          </p>
        </address>
        <p>
          <a href="tel:051-301-2100" className="hover:text-[#0d9488] transition-colors">
            전화 051-301-2100
          </a>
        </p>
      </div>
    </footer>
  );
}
