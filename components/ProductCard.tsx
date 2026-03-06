import Link from "next/link";

type ProductCardProps = {
  icon: React.ReactNode;
  title: string;
  slug?: string;
};

export default function ProductCard({ icon, title, slug }: ProductCardProps) {
  const content = (
    <>
      <div className="text-[#0d9488] mb-4 w-12 h-12 flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10">
        {icon}
      </div>
      <h3 className="text-white font-medium text-base">{title}</h3>
    </>
  );

  const className =
    "rounded-xl bg-[#0f0f12] border border-white/10 p-6 flex flex-col items-center text-center hover:border-white/20 transition-colors min-h-[180px]";

  if (slug) {
    return (
      <Link href={`/products/${slug}`} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
