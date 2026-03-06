type ProductCardProps = {
  icon: React.ReactNode;
  titleKo: string;
  titleEn: string;
};

export default function ProductCard({ icon, titleKo, titleEn }: ProductCardProps) {
  return (
    <article className="rounded-xl bg-[#0f0f12] border border-white/10 p-6 flex flex-col items-center text-center hover:border-white/20 transition-colors min-h-[180px]">
      <div className="text-[#0d9488] mb-4 w-12 h-12 flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10">
        {icon}
      </div>
      <h3 className="text-white font-medium text-base mb-1">{titleKo}</h3>
      <p className="text-zinc-400 text-sm">{titleEn}</p>
    </article>
  );
}
