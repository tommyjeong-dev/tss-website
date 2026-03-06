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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tss-website.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidProductSlug(slug)) return { title: "제품" };
  const data = getProductData(slug);
  const title = data.titleKo;
  const description = `${data.titleKo}(${data.titleEn}) 상세 규격 및 설비 정보. (주)티에스에스 / 삼개 - Total Stainless Solution.`;
  const ogImage = data.imageUrl ? `${SITE_URL}${data.imageUrl}` : `${SITE_URL}/images/og-image.png`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | (주)티에스에스 / 삼개`,
      description,
      url: `${SITE_URL}/products/${slug}`,
      type: "website",
      locale: "ko_KR",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!isValidProductSlug(slug)) notFound();
  const data = getProductData(slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.titleKo,
    description: `${data.titleEn} - ${data.titleKo}. (주)티에스에스 / 삼개 제품.`,
    brand: { "@type": "Organization", name: "(주)티에스에스 / 삼개" },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <ProductDetail slug={slug} />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return VALID_PRODUCT_SLUGS.map((slug) => ({ slug }));
}
