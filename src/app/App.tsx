import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Check, Instagram, ExternalLink, ArrowRight, ChevronRight } from "lucide-react";

import heroImg from "@/imports/magnific_2_9RCbwkpNYZ-1.png";
import model2Img from "@/imports/magnific_2_62uk3GriJO-1.png";
import clinicalImg from "@/imports/magnific_3-2_1sVBFL0r4r-1.png";
import model3Img from "@/imports/magnific_62u1qfEiJO-1.png";
import maskPeelImg from "@/imports/magnific_model3-1_gJpm0kjSXO-1.png";
import maskOnImg from "@/imports/magnific_model3-1_ubA0eljQLD-1.png";
import productSideImg from "@/imports/magnific_rlMIB0wxtc-1.png";
import productPackImg from "@/imports/______________________________.png";
import ingredientsBgImg from "@/imports/Generated_Image_July_25__2026_-_9_05PM.jpg";
import { MenadioneMolecule } from "@/app/components/MenadioneMolecule";
import modelFaceImg from "@/imports/magnific_8v7N45TIrU.png";

const PRETENDARD = "'Pretendard Variable', Pretendard, -apple-system, sans-serif";
const CORMORANT = "'Cormorant', serif";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const ingredients = [
  {
    name: "병풀잎수",
    nameEn: "Centella Asiatica",
    tags: ["민감피부케어", "수분공급", "피부진정"],
    desc: "외부 자극으로 예민해진 피부를 빠르게 진정시키고, 피부 기초 체력을 강화하며, 깊은 수분을 전달합니다.",
    color: "#7FA980",
  },
  {
    name: "팥 추출물",
    nameEn: "Red Bean Extract",
    tags: ["활력부여", "건강한 유지", "피부컨디셔닝"],
    desc: "거친 피부결을 정돈하고 생기 있는 안색을 선사하며 맑고 깨끗한 피부 상태를 유지합니다.",
    color: "#B5846A",
  },
  {
    name: "콩 추출물",
    nameEn: "Soybean Extract",
    tags: ["피부컨디셔닝", "피부활력", "피부보습"],
    desc: "풍부한 영양 성분으로 촉촉함을 유지하고 거칠고 건조한 피부를 매끄럽게 가꿔줍니다.",
    color: "#C9B48A",
  },
  {
    name: "식물유래 시너지",
    nameEn: "Pine · Primrose Synergy",
    tags: ["피부청정케어", "피부보호 및 진정", "수분밸런스유지"],
    desc: "대왕소나무잎과 달맞이꽃 추출물의 시너지로 피부 컨디셔닝과 수분 밸런스를 동시에 관리합니다.",
    color: "#5A7A5E",
  },
];

const specialCare = [
  {
    title: "피부보호",
    desc: "외부 환경 자극으로부터 피부 장벽을 강화하고 보호합니다.",
  },
  {
    title: "피부컨디셔닝",
    desc: "피부 상태를 최적화하여 건강한 컨디션을 유지합니다.",
  },
  {
    title: "건강한 피부관리",
    desc: "일상의 피부 밸런스를 정상화하여 지속적인 건강을 유지합니다.",
  },
  {
    title: "생기있는 피부표현",
    desc: "칙칙하고 피로한 피부에 생기와 활력을 불어넣습니다.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showIngredients, setShowIngredients] = useState(false);

  const PURCHASE_URL =
    "https://z-shop.xyz/product/%EB%8B%A5%ED%84%B0%EB%8F%84%EC%9E%90%EA%B8%B0-%ED%95%98%EC%9D%B4%EB%93%9C%EB%9D%BC-%EB%B6%80%EC%8A%A4%ED%8A%B8-%EB%A7%88%EC%8A%A4%ED%81%AC%ED%8C%A9/51/category/162/display/1/";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-[#1A1A1A] overflow-x-hidden"
      style={{ fontFamily: PRETENDARD }}
    >
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
          <span
            className="text-lg tracking-[0.2em] font-light text-[#2B2B2B]"
            style={{ fontFamily: CORMORANT }}
          >
            Dr. DOJAGI
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "브랜드", href: "#brand" },
              { label: "성분", href: "#ingredients" },
              { label: "메나다이온", href: "#menadione" },
              { label: "구매", href: "#purchase" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] tracking-[0.15em] text-[#5A5A5A] hover:text-[#3F5E43] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://z-shop.xyz/product/%EB%8B%A5%ED%84%B0%EB%8F%84%EC%9E%90%EA%B8%B0-%ED%95%98%EC%9D%B4%EB%93%9C%EB%9D%BC-%EB%B6%80%EC%8A%A4%ED%8A%B8-%EB%A7%88%EC%8A%A4%ED%81%AC%ED%8C%A9/51/category/162/display/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] px-5 py-2.5 bg-[#3F5E43] text-white hover:bg-[#2E4631] transition-colors duration-300"
          >
            구매하기
          </a>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#F5F6F3]">
        <div className="absolute right-0 top-0 bottom-0 w-[60%]">
          <ImageWithFallback
            src={heroImg}
            alt="Dr. DOJAGI 하이드라 부스트 마스크팩을 들고 있는 모델"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center top" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(245,246,243,1) 0%, rgba(245,246,243,0.4) 30%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-36 w-full">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6 uppercase">
              Dojagi Clinic — Clinical Skincare
            </p>
            <h1
              className="text-[1.44rem] md:text-[2.88rem] font-light text-[#1A1A1A] leading-[1.2] mb-6"
              style={{ fontFamily: PRETENDARD }}
            >
              도자기의원에서 시작된,<br />
              <span className="text-[#3F5E43]">닥터도자기 데일리 하이드라케어</span>
            </h1>
            <p
              className="text-sm md:text-base text-[#5A5A5A] font-light leading-relaxed max-w-sm mb-10"
              style={{ wordBreak: "keep-all" }}
            >
              피부가 편안해야 일상도 편안해진다는 믿음으로 설계했습니다.
            </p>
          </RevealSection>
        </div>

        <div className="absolute bottom-8 right-8 md:right-12">
          <p
            className="text-xs tracking-[0.25em] text-[#7A8C7B]"
            style={{ writingMode: "vertical-rl" }}
          >
            HYDRA BOOST MASK PACK · 23g
          </p>
        </div>
      </section>

      {/* ─── Brand Story / Trust Section ─── */}
      <section id="brand" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <RevealSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EFF2ED] -z-10" />
                <ImageWithFallback
                  src={clinicalImg}
                  alt="도자기의원 의료진이 Dr. DOJAGI 마스크팩을 전달하는 장면"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#B7D3AE] -z-10" />
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-8 uppercase">
                  Since Dojagi Clinic
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.45] mb-8"
                  style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
                >
                  성형·피부과·줄기세포를 통합하는 회복 기반 클리닉,{" "}
                  <span className="text-[#3F5E43]">도자기의원의 임상 노하우</span>
                </h2>
                <p
                  className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-6"
                  style={{ wordBreak: "keep-all" }}
                >
                  도자기의원이 직접 설계한 데일리 스킨 레시피입니다. 가볍게 밀착되는 에센스와 촉촉한 보습감으로 피부 본연의 건강함을 회복시킵니다.
                </p>
                <p
                  className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-10"
                  style={{ wordBreak: "keep-all" }}
                >
                  처방의 정밀함과 일상의 편안함, 두 가지를 동시에 담았습니다.
                </p>
                <a
                  href="https://www.dojagiclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#3F5E43] border-b border-[#B7D3AE] pb-1 hover:border-[#3F5E43] transition-colors duration-300"
                >
                  도자기의원 바로가기
                  <ExternalLink size={11} />
                </a>
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
            alt="마스크 시트를 얼굴에 붙이고 있는 모델"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(15,25,17,0.65) 0%, rgba(15,25,17,0.35) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full">
          <RevealSection>
            <div
              className="max-w-lg"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.14)",
                padding: "48px",
              }}
            >
              <p className="text-xs tracking-[0.3em] text-[#B7D3AE] mb-6 uppercase">
                Core Solution
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-white leading-[1.45] mb-6"
                style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
              >
                붓기케어 솔루션 &amp; 메나다이온 집중케어
              </h2>
              <p
                className="text-sm text-white/70 font-light leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                피부 컨디션을 편안하게 만드는 진정 및 보호 솔루션
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
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6">
                  01. INTRODUCTION
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.4] mb-8"
                  style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
                >
                  붓고 지친 피부를 위한{" "}
                  <span className="text-[#3F5E43]">휴식</span>
                </h2>
                <div className="space-y-5">
                  {[
                    "현대인의 불규칙한 생활습관과 외부 환경 자극은 피부 붓기와 피로의 주된 원인입니다.",
                    "민감해진 피부를 즉각적으로 진정시키고 편안한 상태를 유지하는 것이 핵심입니다.",
                    "식물 유래 추출물의 힘으로 피부 본연의 건강함을 되찾아줍니다.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-5">
                      <span
                        className="text-xs text-[#B7D3AE] font-light mt-1 shrink-0"
                        style={{ fontFamily: CORMORANT }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p
                        className="text-sm text-[#5A5A5A] font-light leading-[1.8]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="relative">
                <p
                  className="text-xs tracking-[0.35em] font-light text-[#C8D4C8] select-none mb-3 text-right"
                  style={{ fontFamily: CORMORANT }}
                >
                  Dr. DOJAGI — HYDRA BOOST MASK PACK
                </p>
                <ImageWithFallback
                  src={modelFaceImg}
                  alt="맑고 촉촉한 피부의 모델 클로즈업"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Key Ingredients Section ─── */}
      <section
        id="ingredients"
        className="py-24 md:py-36 relative overflow-hidden"
      >
        <ImageWithFallback
          src={ingredientsBgImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(245,246,243,0.78) 0%, rgba(245,246,243,0.68) 50%, rgba(245,246,243,0.78) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">
                  02. KEY INGREDIENTS
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A]"
                  style={{ fontFamily: PRETENDARD }}
                >
                  핵심 성분
                </h2>
              </div>
              <p
                className="text-sm text-[#7A8C7B] font-light max-w-xs leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                자연 유래 4가지 핵심 성분이 피부 깊은 곳에서부터 케어합니다.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E4E4]">
            {ingredients.map((ing, i) => (
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
                  <div className="w-10 h-px mb-8" style={{ background: ing.color }} />
                  <p className="text-xs tracking-[0.18em] text-[#7A8C7B] mb-2 uppercase">
                    {ing.nameEn}
                  </p>
                  <h3
                    className="text-xl font-medium text-[#1A1A1A] mb-6"
                    style={{ fontFamily: PRETENDARD }}
                  >
                    {ing.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {ing.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1"
                        style={{
                          background: `${ing.color}15`,
                          color: ing.color,
                          border: `1px solid ${ing.color}28`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-xs text-[#7A8C7B] font-light leading-[1.9]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {ing.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
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
                  alt="Dr. DOJAGI 마스크팩을 들고 아래를 바라보는 모델"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(to top, #EFF2ED, transparent)" }}
                />
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-8">
                  03. CORE STRATEGY
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-2"
                  style={{ fontFamily: PRETENDARD }}
                >
                  붓기케어의 핵심
                </h2>
                <p className="text-lg text-[#3F5E43] font-light mb-10">
                  피부 밸런스 회복
                </p>

                <div className="space-y-0 mb-10">
                  {["피부진정케어", "피부컨디션개선", "수분충전", "건강한 피부밸런스유지"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 py-5"
                        style={{ borderBottom: "1px solid rgba(63,94,67,0.15)" }}
                      >
                        <div className="w-5 h-5 rounded-full bg-[#3F5E43] flex items-center justify-center shrink-0">
                          <Check size={10} color="white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm text-[#2B2B2B]">{item}</span>
                        <ChevronRight size={14} className="ml-auto text-[#B7D3AE]" />
                      </div>
                    )
                  )}
                </div>

                <p
                  className="text-xs text-[#7A8C7B] font-light leading-[2]"
                  style={{ wordBreak: "keep-all" }}
                >
                  풍부한 식물 유래 성분이 피부에 수분과 영양을 공급하여 외부 환경으로 인해 예민해진 피부를 건강하게 관리해줍니다. 무너진 피부 장벽과 유수분 밸런스를 정상화하여 피부 본연의 힘을 길러주는 것이 붓기케어의 진정한 시작입니다.
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
              <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">
                04. SPECIAL INGREDIENT
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-2"
                style={{ fontFamily: CORMORANT }}
              >
                What Is Menadione?
              </h2>
              <p className="text-sm text-[#5A5A5A] font-light tracking-wide">
                메나다이온 (Vitamin K3)
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <RevealSection>
              <div
                className="p-8 md:p-10"
                style={{
                  background: "linear-gradient(135deg, #EFF2ED 0%, #F5F6F3 50%, #EFF2ED 100%)",
                }}
              >
                <p
                  className="text-sm text-[#5A5A5A] font-light leading-[1.9] mb-7"
                  style={{ wordBreak: "keep-all" }}
                >
                  비타민K 계열 성분으로 피부 컨디셔닝 및 피부 보호에 사용되는 특별한 성분입니다. 도자기의원의 임상 처방을 기반으로 최적의 함량과 배합을 설계했습니다.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "비타민K 유도체", sub: "Vitamin K Derivative" },
                    { label: "피부보호솔루션", sub: "Skin Protection" },
                    { label: "집중컨디셔닝", sub: "Intensive Care" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-4"
                      style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}
                    >
                      <div className="w-6 h-px mx-auto mb-3" style={{ background: "#7FA980" }} />
                      <p className="text-xs font-medium text-[#2B2B2B] mb-1 leading-snug" style={{ wordBreak: "keep-all" }}>
                        {item.label}
                      </p>
                      <p className="text-[13px] text-[#7A8C7B] font-light leading-snug">
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <ImageWithFallback
                src={productPackImg}
                alt="Dr. DOJAGI 하이드라 부스트 마스크팩 제품 단독 컷"
                className="w-full aspect-square object-contain bg-[#F5F6F3] p-10"
              />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Menadione Detail Section ─── */}
      <section className="py-16 md:py-24 bg-[#F5F6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <RevealSection>
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-4">MENADIONE — VITAMIN K3</p>
              <h2
                className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-[1.4] mb-4 max-w-2xl"
                style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
              >
                피부 본연의 생기를 깨우는 핵심 솔루션,{" "}
                <span className="text-[#3F5E43]">메나다이온</span>
              </h2>
              <p
                className="text-sm text-[#5A5A5A] font-light leading-[1.9] max-w-xl"
                style={{ wordBreak: "keep-all" }}
              >
                자극받은 피부 붉은기와 멍 흔적을 빠르게 케어하고, 맑고 건강한 피부 바탕을 완성하는 순수 비타민 K 전구체 에너지.
              </p>
            </div>
          </RevealSection>

          {/* 4 Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8DFD8] mb-12">
            {[
              {
                num: "01",
                ko: "붉은기 & 멍 케어",
                en: "Vascular Care & Recovery",
                desc: "시술 후 흔적, 자극으로 인한 붉은기 및 멍을 빠르게 안정시키고 피부 톤을 균일하게 정돈합니다.",
              },
              {
                num: "02",
                ko: "다크서클 개선",
                en: "Microcirculation Boost",
                desc: "미세 혈순환 촉진을 통해 눈가 어두움(혈관성 다크서클) 및 부기를 개선하여 생기 있는 눈가를 연출합니다.",
              },
              {
                num: "03",
                ko: "강력한 피부 활력",
                en: "High Bio-activity",
                desc: "비타민 K1, K2 대비 높고 효율적인 활성력으로 피부 세포 본연의 컨디셔닝을 극대화합니다.",
              },
              {
                num: "04",
                ko: "항산화 & 장벽 보호",
                en: "Skin Barrier Protection",
                desc: "외부 유해 환경으로부터 피부를 보호하고 스트레스받은 피부 장벽을 탄탄하게 강화합니다.",
              },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-[#F5F6F3] p-8 h-full">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-2xl font-light text-[#C8D4C8] shrink-0 leading-none mt-1"
                      style={{ fontFamily: CORMORANT }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <p className="text-xs tracking-[0.18em] text-[#7FA980] mb-1 uppercase">{item.en}</p>
                      <h3
                        className="text-base font-medium text-[#1A1A1A] mb-3"
                        style={{ fontFamily: PRETENDARD }}
                      >
                        {item.ko}
                      </h3>
                      <p
                        className="text-xs text-[#5A5A5A] font-light leading-[1.9]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Chemical Identity + Molecule SVG */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <RevealSection>
              <div
                className="p-8 md:p-10 h-full flex flex-col justify-between"
                style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}
              >
                <div>
                  <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-6">CHEMICAL IDENTITY</p>
                  <div className="space-y-0">
                    {[
                      { label: "성분명", value: "메나다이온 (Menadione / Vitamin K3)" },
                      { label: "화학식", value: "C₁₁H₈O₂" },
                      { label: "분자량", value: "172.18 g/mol" },
                      { label: "구조명", value: "2-Methylnaphthalene-1,4-dione" },
                      { label: "계열", value: "나프토퀴논(Naphthoquinone) 골격 비타민 K 전구체" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex gap-4 py-4"
                        style={{ borderBottom: "1px solid rgba(63,94,67,0.08)" }}
                      >
                        <span className="text-xs tracking-wide text-[#7A8C7B] font-light w-20 shrink-0 pt-px">
                          {row.label}
                        </span>
                        <span
                          className="text-sm text-[#2B2B2B] font-light leading-relaxed"
                          style={{ wordBreak: "keep-all" }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div
                className="p-6 md:p-8 flex flex-col items-center justify-center h-full"
                style={{ background: "white", border: "1px solid rgba(63,94,67,0.12)" }}
              >
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
                <h3
                  className="text-lg font-medium text-[#1A1A1A]"
                  style={{ fontFamily: PRETENDARD }}
                >
                  비타민 K 계열 비교
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderTop: "1px solid rgba(63,94,67,0.1)", borderBottom: "2px solid rgba(63,94,67,0.15)" }}>
                      <th className="text-left px-8 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">비교 항목</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">비타민 K1</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] text-[#7A8C7B] font-medium w-1/4">비타민 K2</th>
                      <th
                        className="text-left px-6 py-4 text-xs tracking-[0.15em] font-medium w-1/4"
                        style={{ color: "#3F5E43", background: "rgba(127,169,128,0.06)" }}
                      >
                        메나다이온 (K3) ✦
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "주요 유래",
                        k1: "식물성 추출물",
                        k2: "발효 유제품 / 장내 세균",
                        k3: "고순도 활성 전구체",
                      },
                      {
                        label: "피부 흡수율",
                        k1: "보통",
                        k2: "보통 ~ 높음",
                        k3: "매우 높음 (K2 대비 2~3배)",
                      },
                      {
                        label: "주요 역할",
                        k1: "일반 영양 공급",
                        k2: "뼈 및 혈액 케어",
                        k3: "피부 컨디셔닝 & 빠른 진정",
                      },
                      {
                        label: "특징",
                        k1: "기초 영양",
                        k2: "부가 기능",
                        k3: "고효능 타겟 케어 솔루션",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{ borderBottom: "1px solid rgba(63,94,67,0.08)" }}
                      >
                        <td className="px-8 py-4 text-xs text-[#7A8C7B] font-light">{row.label}</td>
                        <td className="px-6 py-4 text-xs text-[#5A5A5A] font-light">{row.k1}</td>
                        <td className="px-6 py-4 text-xs text-[#5A5A5A] font-light">{row.k2}</td>
                        <td
                          className="px-6 py-4 text-xs font-medium"
                          style={{ color: "#3F5E43", background: "rgba(127,169,128,0.06)" }}
                        >
                          {row.k3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Special Care Section ─── */}
      <section className="py-24 bg-[#F5F6F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-12">
              05. SPECIAL CARE
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E4E4E4]">
            {specialCare.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-[#F5F6F3] p-10 h-full">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-xs text-[#B7D3AE] font-light mt-0.5 shrink-0"
                      style={{ fontFamily: CORMORANT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-medium text-[#1A1A1A] mb-3"
                        style={{ fontFamily: PRETENDARD }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs text-[#7A8C7B] font-light leading-[1.9]"
                        style={{ wordBreak: "keep-all" }}
                      >
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

      {/* ─── Closing / CTA Section ─── */}
      <section id="purchase" className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={maskOnImg}
            alt="마스크 시트를 얼굴에 반쯤 붙인 모델의 클로즈업"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,38,23,0.93) 0%, rgba(20,38,23,0.72) 55%, rgba(20,38,23,0.42) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] text-[#B7D3AE] mb-8 uppercase">
              Experience Dr. DOJAGI
            </p>
            <h2
              className="text-4xl md:text-6xl font-light text-white leading-[1.2] mb-8"
              style={{ fontFamily: PRETENDARD, wordBreak: "keep-all" }}
            >
              입체적인 피부관리
            </h2>
            <p
              className="text-sm text-white/70 font-light leading-[2] max-w-md mb-12"
              style={{ wordBreak: "keep-all" }}
            >
              단순한 보습을 넘어 피부의 방어력을 높이고 컨디션을 회복시키는 메나다이온만의 특별한 메커니즘을 경험해보세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-4 bg-[#7FA980] text-white text-sm tracking-[0.1em] hover:bg-[#6A9270] transition-colors duration-300"
              >
                지금 구매하기
                <ArrowRight size={14} />
              </a>
              <button
                onClick={() => setShowIngredients(true)}
                className="flex items-center gap-3 px-10 py-4 border border-white/40 text-white text-sm tracking-[0.1em] hover:bg-white/10 transition-colors duration-300"
              >
                성분 자세히 보기
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
            {/* 모달 헤더 */}
            <div className="flex items-end justify-between px-8 pt-8 pb-5" style={{ borderBottom: "1px solid rgba(63,94,67,0.12)" }}>
              <div>
                <p className="text-xs tracking-[0.3em] text-[#7FA980] mb-1">Dr. DOJAGI</p>
                <h3 className="text-xl font-medium text-[#1A1A1A]" style={{ fontFamily: PRETENDARD }}>
                  전성분 안내
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

            {/* 테이블 */}
            <div className="overflow-y-auto flex-1 px-8 py-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(63,94,67,0.15)" }}>
                    <th className="text-left py-3 pr-6 text-xs tracking-[0.2em] text-[#3F5E43] font-medium w-1/2">
                      성분명
                    </th>
                    <th className="text-left py-3 text-xs tracking-[0.2em] text-[#3F5E43] font-medium w-1/2">
                      Ingredients
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
                      <td className="py-3 text-[#5A5A5A] font-light text-xs leading-relaxed">
                        {item.en}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 모달 푸터 */}
            <div className="px-8 py-4 text-xs text-[#7A8C7B] font-light" style={{ borderTop: "1px solid rgba(63,94,67,0.1)" }}>
              총 {ingredientsList.length}가지 성분 · 도자기의원 임상 처방 기반
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <footer className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div>
              <p
                className="text-2xl tracking-[0.25em] font-light text-white mb-1"
                style={{ fontFamily: CORMORANT }}
              >
                Dr. DOJAGI
              </p>
              <p className="text-xs tracking-[0.2em] text-[#7A8C7B]">
                HYDRA BOOST MASK PACK
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#7A8C7B] font-light leading-[2]">
              <div>
                <p className="text-[#B7D3AE] mb-3 tracking-[0.15em]">BRAND</p>
                <p style={{ wordBreak: "keep-all" }}>
                  본 제품은 도자기의원의 임상 노하우를 바탕으로 개발되었습니다.
                </p>
              </div>
              <div>
                <p className="text-[#B7D3AE] mb-3 tracking-[0.15em]">CLINIC</p>
                <a
                  href="https://www.dojagiclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B7D3AE] transition-colors duration-300"
                >
                  도자기의원 공식 홈페이지
                  <ExternalLink size={10} />
                </a>
                <p className="mt-1">www.dojagiclinic.com</p>
              </div>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs text-[#5A5A5A] font-light">
              © 2024 Dr. DOJAGI. All rights reserved. — Dojagi Clinic
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
