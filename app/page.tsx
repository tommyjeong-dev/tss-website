import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import History from "@/components/History";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <ProductSection />
      <History />
      <Footer />
      {/* 문의(#contact) 클릭 시 푸터가 화면 상단에 오도록 스크롤 여유 확보 */}
      <div className="min-h-[70vh]" aria-hidden />
    </main>
  );
}
