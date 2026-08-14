export type Lang = "ko" | "en";

export const TRANSLATIONS = {
  ko: {
    docTitle: "닥터도자기 마스크팩 홈페이지에 오신 것을 환영합니다",
    nav: {
      brand: "브랜드",
      ingredients: "성분",
      menadione: "메나다이온",
      purchase: "구매",
      buyNow: "구매하기",
      langToggle: "EN",
    },
    hero: {
      tagline: "도자기의원에서 시작된,",
      title: "닥터도자기 데일리 하이드라케어",
      desc: "피부가 편안해야 일상도 편안해진다는 믿음으로 설계했습니다.",
    },
    brand: {
      h2first: "성형·피부과·줄기세포를 통합하는 회복 기반 클리닉,",
      h2accent: "도자기의원의 임상 노하우",
      p1: "도자기의원이 직접 설계한 데일리 스킨 레시피입니다. 가볍게 밀착되는 에센스와 촉촉한 보습감으로 피부 본연의 건강함을 회복시킵니다.",
      p2: "처방의 정밀함과 일상의 편안함, 두 가지를 동시에 담았습니다.",
      link: "도자기의원 바로가기",
    },
    coreSolution: {
      h2: "붓기케어 솔루션 & 메나다이온 집중케어",
      desc: "피부 컨디션을 편안하게 만드는 진정 및 보호 솔루션",
    },
    intro: {
      h2: "붓고 지친 피부를 위한",
      h2accent: "휴식",
      lines: [
        "현대인의 불규칙한 생활습관과 외부 환경 자극은 피부 붓기와 피로의 주된 원인입니다.",
        "민감해진 피부를 즉각적으로 진정시키고 편안한 상태를 유지하는 것이 핵심입니다.",
        "식물 유래 추출물의 힘으로 피부 본연의 건강함을 되찾아줍니다.",
      ],
    },
    keyIngredients: {
      h2: "핵심 성분",
      desc: "자연 유래 4가지 핵심 성분이 피부 깊은 곳에서부터 케어합니다.",
    },
    ingredients: [
      {
        name: "병풀잎수",
        tags: ["민감피부케어", "수분공급", "피부진정"],
        desc: "외부 자극으로 예민해진 피부를 빠르게 진정시키고, 피부 기초 체력을 강화하며, 깊은 수분을 전달합니다.",
      },
      {
        name: "팥 추출물",
        tags: ["활력부여", "건강한 유지", "피부컨디셔닝"],
        desc: "거친 피부결을 정돈하고 생기 있는 안색을 선사하며 맑고 깨끗한 피부 상태를 유지합니다.",
      },
      {
        name: "콩 추출물",
        tags: ["피부컨디셔닝", "피부활력", "피부보습"],
        desc: "풍부한 영양 성분으로 촉촉함을 유지하고 거칠고 건조한 피부를 매끄럽게 가꿔줍니다.",
      },
      {
        name: "식물유래 시너지",
        tags: ["피부청정케어", "피부보호 및 진정", "수분밸런스유지"],
        desc: "대왕소나무잎과 달맞이꽃 추출물의 시너지로 피부 컨디셔닝과 수분 밸런스를 동시에 관리합니다.",
      },
    ],
    coreStrategy: {
      h2: "붓기케어의 핵심",
      sub: "피부 밸런스 회복",
      items: ["피부진정케어", "피부컨디션개선", "수분충전", "건강한 피부밸런스유지"],
      desc: "풍부한 식물 유래 성분이 피부에 수분과 영양을 공급하여 외부 환경으로 인해 예민해진 피부를 건강하게 관리해줍니다. 무너진 피부 장벽과 유수분 밸런스를 정상화하여 피부 본연의 힘을 길러주는 것이 붓기케어의 진정한 시작입니다.",
    },
    specialIngredient: {
      subtitle: "메나다이온 (Vitamin K3)",
      p: "비타민K 계열 성분으로 피부 컨디셔닝 및 피부 보호에 사용되는 특별한 성분입니다. 도자기의원의 임상 처방을 기반으로 최적의 함량과 배합을 설계했습니다.",
      cards: [
        { label: "비타민K 유도체", sub: "Vitamin K Derivative" },
        { label: "피부보호솔루션", sub: "Skin Protection" },
        { label: "집중컨디셔닝", sub: "Intensive Care" },
      ],
    },
    menadione: {
      h2: "피부 본연의 생기를 깨우는 핵심 솔루션,",
      h2accent: "메나다이온",
      p: "자극받은 피부 붉은기와 멍 흔적을 빠르게 케어하고, 맑고 건강한 피부 바탕을 완성하는 순수 비타민 K 전구체 에너지.",
      benefits: [
        { num: "01", title: "붉은기 & 멍 케어", en: "Vascular Care & Recovery", desc: "시술 후 흔적, 자극으로 인한 붉은기 및 멍을 빠르게 안정시키고 피부 톤을 균일하게 정돈합니다." },
        { num: "02", title: "다크서클 개선", en: "Microcirculation Boost", desc: "미세 혈순환 촉진을 통해 눈가 어두움(혈관성 다크서클) 및 부기를 개선하여 생기 있는 눈가를 연출합니다." },
        { num: "03", title: "강력한 피부 활력", en: "High Bio-activity", desc: "비타민 K1, K2 대비 높고 효율적인 활성력으로 피부 세포 본연의 컨디셔닝을 극대화합니다." },
        { num: "04", title: "항산화 & 장벽 보호", en: "Skin Barrier Protection", desc: "외부 유해 환경으로부터 피부를 보호하고 스트레스받은 피부 장벽을 탄탄하게 강화합니다." },
      ],
      chemLabel: "CHEMICAL IDENTITY",
      chemRows: [
        { label: "성분명", value: "메나다이온 (Menadione / Vitamin K3)" },
        { label: "화학식", value: "C₁₁H₈O₂" },
        { label: "분자량", value: "172.18 g/mol" },
        { label: "구조명", value: "2-Methylnaphthalene-1,4-dione" },
        { label: "계열", value: "나프토퀴논(Naphthoquinone) 골격 비타민 K 전구체" },
      ],
      compTitle: "비타민 K 계열 비교",
      compHeader: { cat: "비교 항목", k1: "비타민 K1", k2: "비타민 K2", k3: "메나다이온 (K3) ✦" },
      compRows: [
        { label: "주요 유래", k1: "식물성 추출물", k2: "발효 유제품 / 장내 세균", k3: "고순도 활성 전구체" },
        { label: "피부 흡수율", k1: "보통", k2: "보통 ~ 높음", k3: "매우 높음 (K2 대비 2~3배)" },
        { label: "주요 역할", k1: "일반 영양 공급", k2: "뼈 및 혈액 케어", k3: "피부 컨디셔닝 & 빠른 진정" },
        { label: "특징", k1: "기초 영양", k2: "부가 기능", k3: "고효능 타겟 케어 솔루션" },
      ],
    },
    specialCare: {
      items: [
        { title: "피부보호", desc: "외부 환경 자극으로부터 피부 장벽을 강화하고 보호합니다." },
        { title: "피부컨디셔닝", desc: "피부 상태를 최적화하여 건강한 컨디션을 유지합니다." },
        { title: "건강한 피부관리", desc: "일상의 피부 밸런스를 정상화하여 지속적인 건강을 유지합니다." },
        { title: "생기있는 피부표현", desc: "칙칙하고 피로한 피부에 생기와 활력을 불어넣습니다." },
      ],
    },
    cta: {
      h2: "입체적인 피부관리",
      p: "단순한 보습을 넘어 피부의 방어력을 높이고 컨디션을 회복시키는 메나다이온만의 특별한 메커니즘을 경험해보세요.",
      btn1: "지금 구매하기",
      btn2: "성분 자세히 보기",
    },
    modal: {
      title: "전성분 안내",
      col1: "성분명",
      footer: (n: number) => `총 ${n}가지 성분 · 도자기의원 임상 처방 기반`,
    },
    footer: {
      brandDesc: "본 제품은 도자기의원의 임상 노하우를 바탕으로 개발되었습니다.",
      clinicLink: "도자기의원 공식 홈페이지",
    },
  },

  en: {
    docTitle: "Welcome to Dr. DOJAGI Mask Pack Official Website",
    nav: {
      brand: "Brand",
      ingredients: "Ingredients",
      menadione: "Menadione",
      purchase: "Purchase",
      buyNow: "Buy Now",
      langToggle: "한",
    },
    hero: {
      tagline: "Born from Dojagi Clinic,",
      title: "Dr. DOJAGI Daily Hydra Care",
      desc: "Designed with the belief that comfortable skin makes everyday life comfortable.",
    },
    brand: {
      h2first: "Clinical expertise from Dojagi Clinic —",
      h2accent: "a recovery-focused integrative practice",
      p1: "A daily skin recipe designed directly by Dojagi Clinic. A lightly-adhering essence with deep moisture replenishes your skin's natural vitality.",
      p2: "Clinical precision. Everyday comfort. Both in one.",
      link: "Visit Dojagi Clinic",
    },
    coreSolution: {
      h2: "Puffiness Care Solution & Menadione Intensive Care",
      desc: "A soothing and protective solution for comfortable skin condition",
    },
    intro: {
      h2: "Rest for Tired,",
      h2accent: "Puffy Skin",
      lines: [
        "Irregular modern lifestyles and environmental stressors are the main causes of skin puffiness and fatigue.",
        "Immediately calming sensitized skin and maintaining a comfortable state is key.",
        "Powered by plant-derived extracts to restore your skin's innate vitality.",
      ],
    },
    keyIngredients: {
      h2: "Key Ingredients",
      desc: "Four nature-derived key ingredients care for your skin from deep within.",
    },
    ingredients: [
      {
        name: "Centella Asiatica",
        tags: ["Sensitive Care", "Hydration", "Soothing"],
        desc: "Quickly soothes skin sensitized by external stimuli, strengthens fundamental skin resilience, and delivers deep hydration.",
      },
      {
        name: "Red Bean Extract",
        tags: ["Vitality", "Healthy Maintenance", "Conditioning"],
        desc: "Refines rough skin texture, imparts a vibrant complexion, and maintains clear, healthy skin condition.",
      },
      {
        name: "Soybean Extract",
        tags: ["Conditioning", "Vitality", "Moisturizing"],
        desc: "Rich in nutrients, it maintains moisture and smooths rough, dry skin.",
      },
      {
        name: "Plant-derived Synergy",
        tags: ["Purifying Care", "Protection & Soothing", "Moisture Balance"],
        desc: "The synergy of longleaf pine and evening primrose extracts simultaneously manages skin conditioning and moisture balance.",
      },
    ],
    coreStrategy: {
      h2: "The Core of Puffiness Care",
      sub: "Restoring Skin Balance",
      items: ["Skin Soothing Care", "Skin Condition Improvement", "Moisture Replenishment", "Healthy Skin Balance"],
      desc: "Rich plant-derived ingredients supply moisture and nutrients to healthily manage skin sensitized by external environments. Normalizing the disrupted skin barrier and moisture balance to build the skin's innate strength — this is the true beginning of puffiness care.",
    },
    specialIngredient: {
      subtitle: "Menadione (Vitamin K3)",
      p: "A special ingredient in the Vitamin K family used for skin conditioning and protection. Formulated with optimal concentration based on clinical prescriptions from Dojagi Clinic.",
      cards: [
        { label: "Vitamin K Derivative", sub: "Skin Vitality Support" },
        { label: "Skin Protection", sub: "Barrier Reinforcement" },
        { label: "Intensive Care", sub: "Deep Conditioning" },
      ],
    },
    menadione: {
      h2: "The Core Solution That Awakens Skin's Natural Vitality,",
      h2accent: "Menadione",
      p: "Pure Vitamin K precursor energy that rapidly cares for redness and bruising on stressed skin, completing a clear, healthy skin foundation.",
      benefits: [
        { num: "01", title: "Vascular Care & Recovery", en: "Vascular Care & Recovery", desc: "Rapidly stabilizes redness and bruising from procedures and stimulation, evening skin tone uniformly." },
        { num: "02", title: "Microcirculation Boost", en: "Microcirculation Boost", desc: "Promotes microcirculation to improve dark circles (vascular type) and puffiness around the eyes for a vibrant look." },
        { num: "03", title: "High Bio-activity", en: "High Bio-activity", desc: "Maximizes natural skin cell conditioning with higher, more efficient bio-activity compared to Vitamin K1 and K2." },
        { num: "04", title: "Skin Barrier Protection", en: "Skin Barrier Protection", desc: "Protects skin from harmful environmental factors and fortifies the stressed skin barrier." },
      ],
      chemLabel: "CHEMICAL IDENTITY",
      chemRows: [
        { label: "Name", value: "Menadione / Vitamin K3" },
        { label: "Formula", value: "C₁₁H₈O₂" },
        { label: "Mol. Weight", value: "172.18 g/mol" },
        { label: "Structure", value: "2-Methylnaphthalene-1,4-dione" },
        { label: "Family", value: "Naphthoquinone skeleton Vitamin K precursor" },
      ],
      compTitle: "Vitamin K Family Comparison",
      compHeader: { cat: "Category", k1: "Vitamin K1", k2: "Vitamin K2", k3: "Menadione (K3) ✦" },
      compRows: [
        { label: "Main Source", k1: "Plant Extracts", k2: "Fermented Dairy / Gut Bacteria", k3: "High-purity Active Precursor" },
        { label: "Skin Absorption", k1: "Moderate", k2: "Moderate to High", k3: "Very High (2–3× vs K2)" },
        { label: "Main Role", k1: "General Nutrition", k2: "Bone & Blood Care", k3: "Skin Conditioning & Rapid Soothing" },
        { label: "Characteristic", k1: "Basic Nutrition", k2: "Additional Function", k3: "High-efficacy Targeted Care" },
      ],
    },
    specialCare: {
      items: [
        { title: "Skin Protection", desc: "Strengthens and protects the skin barrier from external environmental stressors." },
        { title: "Skin Conditioning", desc: "Optimizes skin condition to maintain a healthy state." },
        { title: "Healthy Skin Management", desc: "Normalizes daily skin balance to sustain lasting health." },
        { title: "Vibrant Skin Expression", desc: "Infuses vitality and energy into dull, fatigued skin." },
      ],
    },
    cta: {
      h2: "Multi-Dimensional Skin Care",
      p: "Go beyond simple moisturization and experience Menadione's unique mechanism that elevates your skin's defense and restores its condition.",
      btn1: "Buy Now",
      btn2: "View Full Ingredients",
    },
    modal: {
      title: "Full Ingredient List",
      col1: "Korean Name",
      footer: (n: number) => `${n} ingredients · Based on Dojagi Clinic clinical formula`,
    },
    footer: {
      brandDesc: "This product was developed based on the clinical expertise of Dojagi Clinic.",
      clinicLink: "Official Dojagi Clinic Website",
    },
  },
} as const;

// Cross-reference for ingredient cards
// subtitleKo = shown as small label in KO mode (English reference)
// subtitleEn = shown as small label in EN mode (INCI / scientific name)
export const INGREDIENT_META = [
  { nameKo: "병풀잎수",       nameEn: "Centella Asiatica",       subtitleKo: "Centella Asiatica",           subtitleEn: "Centella Asiatica Leaf Water",      color: "#7FA980" },
  { nameKo: "팥 추출물",      nameEn: "Red Bean Extract",        subtitleKo: "Red Bean Extract",            subtitleEn: "Vigna Angularis Seed Extract",       color: "#B5846A" },
  { nameKo: "콩 추출물",      nameEn: "Soybean Extract",         subtitleKo: "Soybean Extract",             subtitleEn: "Glycine Max Seed Extract",           color: "#C9B48A" },
  { nameKo: "식물유래 시너지", nameEn: "Pine · Primrose Synergy", subtitleKo: "Pine · Primrose Synergy",     subtitleEn: "Botanical Synergy Complex",          color: "#5A7A5E" },
];
