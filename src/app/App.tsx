import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Check, Instagram, ExternalLink, ArrowRight, ChevronRight } from "lucide-react";
import { TRANSLATIONS, INGREDIENT_META, type Lang } from "@/app/components/i18n";

import faviconImg from "@/imports/image-1.png";
import heroImg from "@/imports/magnific_2_9RCbwkpNYZ-1.png";
import model2Img from "@/imports/magnific_2_62uk3GriJO-1.png";
import clinicalImg from "@/imports/magnific_3-2_1sVBFL0r4r-1.png";
import maskPeelImg from "@/imports/magnific_model3-1_gJpm0kjSXO-1.png";
import maskOnImg from "@/imports/magnific_model3-1_ubA0eljQLD-1.png";
import productPackImg from "@/imports/______________________________.png";
import memo1Img from "@/imports/________________________1.png";
import memo2Img from "@/imports/________________________2.png";
import memo3Img from "@/imports/________________________3.png";
import biLogoImg from "@/imports/______BI-removebg-preview-________.png";
import ingredientsBgImg from "@/imports/Generated_Image_July_25__2026_-_9_05PM.jpg";
import modelFaceImg from "@/imports/magnific_8v7N45TIrU.png";
import { MenadioneMolecule } from "@/app/components/MenadioneMolecule";

const PRETENDARD = "'Pretendard Variable', Pretendard, -apple-system, sans-serif";
const CORMORANT = "'Cormorant', serif";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const ingredientsList = [
  { ko: "병풀잎수", en: "Centella Asiatica Leaf Water" },
  { ko: "글리세린", en: "Glycerin" },
  { ko: "다이프로필렌글라이콜", en: "Dipropylene Glycol" },
  { ko: "1,2-헥산다이올", en: "1,2-Hexanediol" },
  { ko: "부틸렌글라이콜", en: "Butylene Glycol" },
  { ko: "클로페네신", en: "Chlorphenesin" },
  { ko: "피이지-60하이드로제네이티드캐스터오일", en: "PEG-60 Hydrogenated Castor Oil" },
  { ko: "정제수", en: "Water" },
  { ko: "알지닌", en: "Arginine" },
  { ko: "카보머", en: "Carbomer" },
  { ko: "하이드록시에틸셀룰로오스", en: "Hydroxyethylcellulose" },
  { ko: "암모늄아크릴로일다이메틸타우레이트/브이피코폴리머", en: "Ammonium Acryloyldimethyltaurate/VP Copolymer" },
  { ko: "판테놀", en: "Panthenol" },
  { ko: "베타인", en: "Betaine" },
  { ko: "향료", en: "Fragrance" },
  { ko: "폴리아크릴릭애씨드", en: "Polyacrylic Acid" },
  { ko: "카프릴릭/카프릭트라이글리세라이드", en: "Caprylic/Capric Triglyceride" },
  { ko: "소듐하이알루로네이트", en: "Sodium Hyaluronate" },
  { ko: "팥추출물", en: "Vigna Angularis Seed Extract" },
  { ko: "메나다이온", en: "Menadione" },
  { ko: "대왕소나무잎추출물", en: "Pinus Palustris Leaf Extract" },
  { ko: "당느릅나무뿌리추출물", en: "Ulmus Davidiana Root Extract" },
  { ko: "달맞이꽃꽃추출물", en: "Oenothera Biennis (Evening Primrose) Extract" },
  { ko: "칡뿌리추출물", en: "Pueraria Lobata Root Extract" },
  { ko: "당호박추출물", en: "Cucurbita Pepo (Pumpkin) Fruit Extract" },
  { ko: "콩추출물", en: "Glycine Max (Soybean) Seed Extract" },
];

const PURCHASE_URL =
  "https://z-shop.xyz/product/%EB%8B%A5%ED%84%B0%EB%8F%84%EC%9E%90%EA%B8%B0-%ED%95%98%EC%9D%B4%EB%93%9C%EB%9D%BC-%EB%B6%80%EC%8A%A4%ED%8A%B8-%EB%A7%88%EC%8A%A4%ED%81%AC%ED%8C%A9/51/category/162/display/1/";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showIngredients, setShowIngredients] = useState(false);
  const [lang, setLang] = useState<Lang>("ko");

  const T = TRANSLATIONS[lang];

  useEffect(() => {
    document.title = T.docTitle;
    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "/favicon.ico?v=" + Date.now();
    document.head.appendChild(link);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showIngredients) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setShowIngredients(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showIngredients]);

  const toggleLang = () => setLang(l => l === "ko" ? "en" : "ko");

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] overflow-x-hidden" style={{ fontFamily: PRETENDARD }}>

      {/* ─── Sticky Header ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(63,94,67,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <img
            src={biLogoImg}
            alt="Dr. DOJAGI"
            style={{ height: "36px", width: "auto", display: "block", objectFit: "contain" }}
          />
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: T.nav.brand,       href: "#brand" },
              { label: T.nav.ingredients, href: "#ingredients" },
              { label: T.nav.menadione,   href: "#menadione" },
              { label: T.nav.purchase,    href: "#purchase" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[16px] tracking-[0.15em] text-[#5A5A5A] hover:text-[#3F5E43] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] px-5 py-2.5 bg-[#3F5E43] text-white hover:bg-[#2E4631] transition-colors duration-300"
            >
              {T.nav.buyNow}
            </a>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="text-xs tracking-[0.15em] px-3 py-2.5 border border-[#3F5E43] text-[#3F5E43] hover:bg-[#EFF2ED] transition-colors duration-300 font-medium"
              aria-label="Toggle language"
            >
              {T.nav.langToggle}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#F5F6F3]">
        <div className="absolute right-0 top-0 bottom-0 w-[60%]">
          <ImageWithFallback
            src={heroImg}
            alt="Dr. DOJAGI Hydra Boost Mask Pack model"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(245,246,243,1) 0%, rgba(245,246,243,0.4) 30%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-36 w-full">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6 uppercase">
              Dojagi Clinic — Clinical Skincare
            </p>
            <h1
              className="text-[1.44rem] md:text-[2.88rem] font-light text-[#1A1A1A] leading-[1.2] mb-6"
              style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
            >
              {T.hero.tagline}<br />
              <span className="text-[#3F5E43]">{T.hero.title}</span>
            </h1>
            <p className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed max-w-sm mb-10" style={{ wordBreak: "keep-all" }}>
              {T.hero.desc}
            </p>
          </RevealSection>
        </div>

        <div className="absolute bottom-8 right-8 md:right-12">
          <p className="text-xs tracking-[0.25em] text-[#7A8C7B]" style={{ writingMode: "vertical-rl" }}>
            HYDRA BOOST MASK PACK · 23g
          </p>
        </div>
      </section>

      {/* ─── Brand Story Section ─── */}
      <section id="brand" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <RevealSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EFF2ED] -z-10" />
                <ImageWithFallback
                  src={clinicalImg}
                  alt="Dojagi Clinic — Dr. DOJAGI Mask Pack"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#B7D3AE] -z-10" />
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-8 uppercase">Since Dojagi Clinic</p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.45] mb-8"
                  style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
                >
                  {T.brand.h2first}{" "}
                  <span className="text-[#3F5E43]">{T.brand.h2accent}</span>
                </h2>
                <p className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-6" style={{ wordBreak: "keep-all" }}>
                  {T.brand.p1}
                </p>
                <p className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-10" style={{ wordBreak: "keep-all" }}>
                  {T.brand.p2}
                </p>
                <a
                  href="https://www.dojagiclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#3F5E43] border-b border-[#B7D3AE] pb-1 hover:border-[#3F5E43] transition-colors duration-300"
                >
                  {T.brand.link}
                  <ExternalLink size={11} />
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Memo Gallery Section ─── */}
      <section className="py-20 md:py-28 bg-[#F5F6F3] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-16 md:mb-20">
              {lang === "ko" ? "클리닉에서 전하는 이야기" : "From the Clinic"}
            </p>
          </RevealSection>

          {/* Scattered memo / polaroid layout */}
          <div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            style={{ alignItems: "center" }}
          >
            {/* Card 1 — Instagram post (focus on left video side) */}
            <RevealSection delay={0}>
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/p/DZzn-1Jyfpj/", "_blank", "noopener,noreferrer")}
                style={{
                  transform: "rotate(-3.5deg) translateY(28px)",
                  background: "#fff",
                  padding: "10px 10px 44px 10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(-1.5deg) translateY(20px) scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(-3.5deg) translateY(28px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)";
                }}
              >
                <ImageWithFallback
                  src={memo1Img}
                  alt="도자기의원 닥터도자기 마스크팩 SNS 게시물"
                  className="w-40 md:w-56"
                  style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "left top", display: "block" }}
                />
                <p className="text-center text-[10px] text-[#AAAAAA] mt-3 tracking-[0.15em]" style={{ fontFamily: CORMORANT }}>
                  @dojagiclinic
                </p>
              </div>
            </RevealSection>

            {/* Card 2 — Doctor with product (portrait photo) */}
            <RevealSection delay={120}>
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/p/DZhh9o5zoi5/", "_blank", "noopener,noreferrer")}
                style={{
                  transform: "rotate(2.5deg) translateY(-22px)",
                  background: "#fff",
                  padding: "10px 10px 44px 10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(0.5deg) translateY(-14px) scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(2.5deg) translateY(-22px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)";
                }}
              >
                <ImageWithFallback
                  src={memo2Img}
                  alt="도자기의원 의료진과 닥터도자기 마스크팩"
                  className="w-36 md:w-48"
                  style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                <p className="text-center text-[10px] text-[#AAAAAA] mt-3 tracking-[0.15em]" style={{ fontFamily: CORMORANT }}>
                  Dojagi Clinic
                </p>
              </div>
            </RevealSection>

            {/* Card 3 — Instagram post 2 (Thai doctors visit) */}
            <RevealSection delay={240}>
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/p/DZCS_-uzy4A/", "_blank", "noopener,noreferrer")}
                style={{
                  transform: "rotate(-1.8deg) translateY(16px)",
                  background: "#fff",
                  padding: "10px 10px 44px 10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(0.2deg) translateY(8px) scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(-1.8deg) translateY(16px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)";
                }}
              >
                <ImageWithFallback
                  src={memo3Img}
                  alt="태국 원장님들과 도자기의원 방문"
                  className="w-40 md:w-56"
                  style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "left top", display: "block" }}
                />
                <p className="text-center text-[10px] text-[#AAAAAA] mt-3 tracking-[0.15em]" style={{ fontFamily: CORMORANT }}>
                  @dojagiclinic
                </p>
              </div>
            </RevealSection>

            {/* Card 4 — Product pack */}
            <RevealSection delay={360}>
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => window.open("https://smartstore.naver.com/zshop_official/products/13703821553", "_blank", "noopener,noreferrer")}
                style={{
                  transform: "rotate(3.8deg) translateY(-18px)",
                  background: "#fff",
                  padding: "10px 10px 44px 10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(1.5deg) translateY(-10px) scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(3.8deg) translateY(-18px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.07)";
                }}
              >
                <ImageWithFallback
                  src={productPackImg}
                  alt="닥터도자기 하이드라 부스트 마스크팩 23g"
                  className="w-32 md:w-44 bg-[#F0F0F0]"
                  style={{ aspectRatio: "1/1", objectFit: "contain", display: "block" }}
                />
                <p className="text-center text-[10px] text-[#AAAAAA] mt-3 tracking-[0.15em]" style={{ fontFamily: CORMORANT }}>
                  Hydra Boost · 23g
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Core Solution Section ─── */}
      <section className="relative py-0 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={maskPeelImg}
            alt="Mask sheet application"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,25,17,0.65) 0%, rgba(15,25,17,0.35) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full">
          <RevealSection>
            <div
              className="max-w-lg"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.14)", padding: "48px" }}
            >
              <p className="text-xs tracking-[0.3em] text-[#B7D3AE] mb-6 uppercase">Core Solution</p>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-[1.45] mb-6" style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}>
                {T.coreSolution.h2}
              </h2>
              <p className="text-sm text-white/70 font-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
                {T.coreSolution.desc}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Introduction Section ─── */}
      <section className="py-12 md:py-16 bg-[#F5F6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <RevealSection>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6">01. INTRODUCTION</p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.4] mb-8"
                  style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
                >
                  {T.intro.h2}{" "}
                  <span className="text-[#3F5E43]">{T.intro.h2accent}</span>
                </h2>
                <div className="space-y-5">
                  {T.intro.lines.map((text, i) => (
                    <div key={i} className="flex gap-5">
                      <span className="text-xs text-[#B7D3AE] font-light mt-1 shrink-0" style={{ fontFamily: CORMORANT }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-[#5A5A5A] font-light leading-[1.8]" style={{ wordBreak: "keep-all" }}>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="relative">
                <p className="text-xs tracking-[0.35em] font-light text-[#C8D4C8] select-none mb-3 text-right" style={{ fontFamily: CORMORANT }}>
                  Dr. DOJAGI — HYDRA BOOST MASK PACK
                </p>
                <ImageWithFallback
                  src={modelFaceImg}
                  alt="Clear, hydrated skin model close-up"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Key Ingredients Section ─── */}
      <section id="ingredients" className="py-24 md:py-36 relative overflow-hidden">
        <ImageWithFallback
          src={ingredientsBgImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(245,246,243,0.78) 0%, rgba(245,246,243,0.68) 50%, rgba(245,246,243,0.78) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">02. KEY INGREDIENTS</p>
                <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A]" style={{ fontFamily: PRETENDARD }}>
                  {T.keyIngredients.h2}
                </h2>
              </div>
              <p className="text-sm text-[#7A8C7B] font-light max-w-xs leading-relaxed" style={{ wordBreak: "keep-all" }}>
                {T.keyIngredients.desc}
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E4E4]">
            {INGREDIENT_META.map((meta, i) => {
              const txt = T.ingredients[i];
              const altName = lang === "ko" ? meta.subtitleKo : meta.subtitleEn;
              return (
                <RevealSection key={i} delay={i * 80}>
                  <div
                    className="bg-white p-8 h-full relative"
                    style={{
                      boxShadow: activeCard === i ? "0 20px 60px rgba(63,94,67,0.12)" : "none",
                      transform: activeCard === i ? "translateY(-4px)" : "none",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      zIndex: activeCard === i ? 1 : 0,
                    }}
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="w-10 h-px mb-8" style={{ background: meta.color }} />
                    <p className="text-xs tracking-[0.18em] text-[#7A8C7B] mb-2 uppercase">{altName}</p>
                    <h3 className="text-xl font-medium text-[#1A1A1A] mb-6" style={{ fontFamily: PRETENDARD }}>
                      {txt.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {txt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1"
                          style={{ background: `${meta.color}15`, color: meta.color, border: `1px solid ${meta.color}28` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[#7A8C7B] font-light leading-[1.9]" style={{ wordBreak: "keep-all" }}>
                      {txt.desc}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Core Strategy Section ─── */}
      <section className="py-24 md:py-36 bg-[#EFF2ED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <RevealSection>
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={model2Img}
                  alt="Dr. DOJAGI Mask Pack model"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #EFF2ED, transparent)" }} />
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-8">03. CORE STRATEGY</p>
                <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-2" style={{ fontFamily: PRETENDARD }}>
                  {T.coreStrategy.h2}
                </h2>
                <p className="text-lg text-[#3F5E43] font-light mb-10">{T.coreStrategy.sub}</p>
                <div className="space-y-0 mb-10">
                  {T.coreStrategy.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-5" style={{ borderBottom: "1px solid rgba(63,94,67,0.15)" }}>
                      <div className="w-5 h-5 rounded-full bg-[#3F5E43] flex items-center justify-center shrink-0">
                        <Check size={10} color="white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-[#2B2B2B]">{item}</span>
                      <ChevronRight size={14} className="ml-auto text-[#B7D3AE]" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#7A8C7B] font-light leading-[2]" style={{ wordBreak: "keep-all" }}>
                  {T.coreStrategy.desc}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Special Ingredient Section ─── */}
      <section id="menadione" className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealSection>
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">04. SPECIAL INGREDIENT</p>
              <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-2" style={{ fontFamily: CORMORANT }}>
                What Is Menadione?
              </h2>
              <p className="text-sm text-[#5A5A5A] font-light tracking-wide">{T.specialIngredient.subtitle}</p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <RevealSection>
              <div className="p-8 md:p-10" style={{ background: "linear-gradient(135deg, #EFF2ED 0%, #F5F6F3 50%, #EFF2ED 100%)" }}>
                <p className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-7" style={{ wordBreak: "keep-all" }}>
                  {T.specialIngredient.p}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {T.specialIngredient.cards.map((card, i) => (
                    <div key={i} className="text-center p-4" style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}>
                      <div className="w-6 h-px mx-auto mb-3" style={{ background: "#7FA980" }} />
                      <p className="text-xs font-medium text-[#2B2B2B] mb-1 leading-snug" style={{ wordBreak: "keep-all" }}>
                        {card.label}
                      </p>
                      <p className="text-[13px] text-[#7A8C7B] font-light leading-snug">{card.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <ImageWithFallback
                src={productPackImg}
                alt="Dr. DOJAGI Hydra Boost Mask Pack product"
                className="w-full aspect-square object-contain bg-[#F5F6F3] p-10"
              />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Menadione Detail Section ─── */}
      <section className="py-16 md:py-24 bg-[#F5F6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <RevealSection>
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">MENADIONE — VITAMIN K3</p>
              <h2
                className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.4] mb-4 max-w-2xl"
                style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
              >
                {T.menadione.h2}{" "}
                <span className="text-[#3F5E43]">{T.menadione.h2accent}</span>
              </h2>
              <p className="text-sm text-[#5A5A5A] font-light leading-[1.9] max-w-xl" style={{ wordBreak: "keep-all" }}>
                {T.menadione.p}
              </p>
            </div>
          </RevealSection>

          {/* 4 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8DFD8] mb-12">
            {T.menadione.benefits.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-[#F5F6F3] p-8 h-full">
                  <div className="flex items-start gap-5">
                    <span className="text-2xl font-light text-[#C8D4C8] shrink-0 leading-none mt-1" style={{ fontFamily: CORMORANT }}>
                      {item.num}
                    </span>
                    <div>
                      <p className="text-xs tracking-[0.18em] text-[#7FA980] mb-1 uppercase">{item.en}</p>
                      <h3 className="text-base font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: PRETENDARD }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5A5A5A] font-light leading-[1.9]" style={{ wordBreak: "keep-all" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Chemical Identity + Molecule */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <RevealSection>
              <div className="p-8 md:p-10 h-full flex flex-col justify-between" style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}>
                <div>
                  <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6">{T.menadione.chemLabel}</p>
                  <div className="space-y-0">
                    {T.menadione.chemRows.map((row, i) => (
                      <div key={i} className="flex gap-4 py-4" style={{ borderBottom: "1px solid rgba(63,94,67,0.08)" }}>
                        <span className="text-xs tracking-wide text-[#7A8C7B] font-light w-24 shrink-0 pt-px">{row.label}</span>
                        <span className="text-sm text-[#2B2B2B] font-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="p-6 md:p-8 flex flex-col items-center justify-center h-full" style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6 self-start">MOLECULAR STRUCTURE</p>
                <MenadioneMolecule />
              </div>
            </RevealSection>
          </div>

          {/* Vitamin K Comparison Table */}
          <RevealSection>
            <div style={{ border: "1px solid rgba(63,94,67,0.12)", background: "white" }}>
              <div className="px-8 pt-8 pb-4">
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-2">VITAMIN K FAMILY COMPARISON</p>
                <h3 className="text-lg font-medium text-[#1A1A1A]" style={{ fontFamily: PRETENDARD }}>
                  {T.menadione.compTitle}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderTop: "1px solid rgba(63,94,67,0.1)", borderBottom: "2px solid rgba(63,94,67,0.15)" }}>
                      <th className="text-left px-8 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">{T.menadione.compHeader.cat}</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">{T.menadione.compHeader.k1}</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">{T.menadione.compHeader.k2}</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] font-medium w-1/4" style={{ color: "#3F5E43", background: "rgba(127,169,128,0.06)" }}>
                        {T.menadione.compHeader.k3}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {T.menadione.compRows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(63,94,67,0.08)" }}>
                        <td className="px-8 py-4 text-xs text-[#7A8C7B] font-light">{row.label}</td>
                        <td className="px-6 py-4 text-xs text-[#5A5A5A] font-light">{row.k1}</td>
                        <td className="px-6 py-4 text-xs text-[#5A5A5A] font-light">{row.k2}</td>
                        <td className="px-6 py-4 text-xs font-medium" style={{ color: "#3F5E43", background: "rgba(127,169,128,0.06)" }}>{row.k3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-right px-6 py-3 text-[11px] text-[#9A9A9A] font-light" style={{ borderTop: "1px solid rgba(63,94,67,0.06)" }}>
                {lang === "ko"
                  ? "* 상기 비교표는 비타민 K 계열 성분의 비교 내용으로 제품의 의학적 효능을 표시하는 것은 아닙니다."
                  : "* The above comparison is for informational purposes only and does not represent the medical efficacy of the product."}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Special Care Section ─── */}
      <section className="py-24 bg-[#F5F6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-12">05. SPECIAL CARE</p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E4E4E4]">
            {T.specialCare.items.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-[#F5F6F3] p-10 h-full">
                  <div className="flex items-start gap-5">
                    <span className="text-xs text-[#B7D3AE] font-light mt-0.5 shrink-0" style={{ fontFamily: CORMORANT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: PRETENDARD }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#7A8C7B] font-light leading-[1.9]" style={{ wordBreak: "keep-all" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="purchase" className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={maskOnImg}
            alt="Mask pack applied to model face"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,38,23,0.93) 0%, rgba(20,38,23,0.72) 55%, rgba(20,38,23,0.42) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#B7D3AE] mb-8 uppercase">Experience Dr. DOJAGI</p>
            <h2
              className="text-4xl md:text-6xl font-light text-white leading-[1.2] mb-8"
              style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
            >
              {T.cta.h2}
            </h2>
            <p className="text-sm text-white/70 font-light leading-[2] max-w-md mb-12" style={{ wordBreak: "keep-all" }}>
              {T.cta.p}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-4 bg-[#7FA980] text-white text-sm tracking-[0.1em] hover:bg-[#6A9270] transition-colors duration-300"
              >
                {T.cta.btn1}
                <ArrowRight size={14} />
              </a>
              <button
                onClick={() => setShowIngredients(true)}
                className="flex items-center gap-3 px-10 py-4 border border-white/40 text-white text-sm tracking-[0.1em] hover:bg-white/10 transition-colors duration-300"
              >
                {T.cta.btn2}
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Ingredients Modal ─── */}
      {showIngredients && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(20,30,22,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setShowIngredients(false)}
        >
          <div
            className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-end justify-between px-8 pt-8 pb-5" style={{ borderBottom: "1px solid rgba(63,94,67,0.12)" }}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-1">Dr. DOJAGI</p>
                <h3 className="text-xl font-medium text-[#1A1A1A]" style={{ fontFamily: PRETENDARD }}>
                  {T.modal.title}
                </h3>
                <p className="text-xs text-[#7A8C7B] mt-1">Hydra Boost Mask Pack · 23g</p>
              </div>
              <button
                onClick={() => setShowIngredients(false)}
                className="w-8 h-8 flex items-center justify-center text-[#7A8C7B] hover:text-[#1A1A1A] transition-colors duration-200 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 px-8 py-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(63,94,67,0.15)" }}>
                    <th className="text-left py-3 pr-6 text-xs tracking-[0.2em] text-[#3F5E43] font-medium w-1/2">
                      {T.modal.col1}
                    </th>
                    <th className="text-left py-3 text-xs tracking-[0.2em] text-[#3F5E43] font-medium w-1/2">
                      Ingredients (INCI)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ingredientsList.map((item, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid rgba(63,94,67,0.08)" }}
                      className="hover:bg-[#F5F6F3] transition-colors duration-150"
                    >
                      <td className="py-3 pr-6 text-[#2B2B2B] font-light" style={{ wordBreak: "keep-all" }}>
                        <span className="text-xs text-[#C8D4C8] mr-3" style={{ fontFamily: CORMORANT }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.ko}
                      </td>
                      <td className="py-3 text-[#5A5A5A] font-light text-xs leading-relaxed">{item.en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-4 text-xs text-[#7A8C7B] font-light" style={{ borderTop: "1px solid rgba(63,94,67,0.1)" }}>
              {T.modal.footer(ingredientsList.length)}
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <footer className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div>
              <img
                src={biLogoImg}
                alt="Dr. DOJAGI"
                style={{ height: "32px", width: "auto", display: "block", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: "4px" }}
              />
              <p className="text-xs tracking-[0.2em] text-[#7A8C7B]">HYDRA BOOST MASK PACK</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#7A8C7B] font-light leading-[2]">
              <div>
                <p className="text-[#B7D3AE] mb-3 tracking-[0.15em]">BRAND</p>
                <p style={{ wordBreak: "keep-all" }}>{T.footer.brandDesc}</p>
              </div>
              <div>
                <p className="text-[#B7D3AE] mb-3 tracking-[0.15em]">CLINIC</p>
                <a
                  href="https://www.dojagiclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B7D3AE] transition-colors duration-300"
                >
                  {T.footer.clinicLink}
                  <ExternalLink size={10} />
                </a>
                <p className="mt-1">www.dojagiclinic.com</p>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-xs text-[#5A5A5A] font-light">
              © 2026 Dr. DOJAGI. All rights reserved. — Dojagi Clinic
            </p>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-[#3A3A3A] text-[#7A8C7B] hover:border-[#7FA980] hover:text-[#7FA980] transition-colors duration-300"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
