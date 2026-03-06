import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import {
  getProductData,
  isValidProductSlug,
  VALID_PRODUCT_SLUGS,
} from "@/lib/product-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidProductSlug(slug)) return { title: "제품 | TSS & SAM SAE" };
  const data = getProductData(slug);
  return {
    title: `${data.titleKo} | TSS & SAM SAE`,
    description: `${data.titleEn} - ${data.titleKo} 상세 규격 및 설비 정보`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!isValidProductSlug(slug)) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <ProductDetail slug={slug} />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return VALID_PRODUCT_SLUGS.map((slug) => ({ slug }));
}
