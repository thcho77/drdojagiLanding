export function MenadioneMolecule() {
  const bond    = "#2B2B2B";
  const carbon  = "#1A1A1A";
  const ox      = "#C0392B";
  const muted   = "#7A8C7B";
  const bg      = "#FFFFFF"; // halo matches card background

  // ── Atom coordinates (pointy-top hexagons, r=50) ──
  // Benzene center (135,130)  Quinone center (221,130)
  //
  //  C8  (135, 80)          C1  (221, 80)  →  =O up
  //  C7  ( 92,105)          C2  (264,105)  →  CH₃
  //  C6  ( 92,155)          C3  (264,155)  →  H
  //  C5  (135,180)          C4  (221,180)  →  =O down
  //  C8a (178,105)  shared  C4a (178,155)  shared

  // Labeled atoms (quinone ring + shared junction atoms)
  const labeled: [number, number][] = [
    [221,  80], // C1
    [264, 105], // C2
    [264, 155], // C3
    [221, 180], // C4
    [178, 105], // C8a (shared)
    [178, 155], // C4a (shared)
  ];

  return (
    <svg
      viewBox="55 15 330 248"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="메나다이온 분자 구조식 C₁₁H₈O₂"
    >
      {/* ══ 1. NAPHTHALENE OUTER SKELETON — single path, no double-drawing ══
           Traces outer perimeter: C1→C2→C3→C4→C4a→C5→C6→C7→C8→C8a→(close to C1)
      */}
      <path
        d="M221,80 L264,105 L264,155 L221,180
           L178,155 L135,180 L92,155 L92,105
           L135,80 L178,105 Z"
        fill="none"
        stroke={bond}
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* ══ 2. SHARED BOND C8a(178,105) – C4a(178,155) ══ */}
      <line
        x1="178" y1="105" x2="178" y2="155"
        stroke={bond} strokeWidth="2.2" strokeLinecap="round"
      />

      {/* ══ 3. KEKULÉ INNER DOUBLE BONDS — benzene ring (3 lines) ══ */}
      {/* C4a–C8a shared-edge inner (offset toward benzene center x=135) */}
      <line x1="173" y1="111" x2="173" y2="149"
        stroke={bond} strokeWidth="1.6" strokeLinecap="round"/>
      {/* C7–C8 inner (toward benzene center) */}
      <line x1="99" y1="107" x2="133" y2="87"
        stroke={bond} strokeWidth="1.6" strokeLinecap="round"/>
      {/* C5–C6 inner */}
      <line x1="133" y1="173" x2="99" y2="153"
        stroke={bond} strokeWidth="1.6" strokeLinecap="round"/>

      {/* ══ 4. C2=C3 INNER DOUBLE BOND — quinone ring ══
           Right edge at x=264; inner line at x=259 (toward quinone center x=221)
      */}
      <line x1="259" y1="111" x2="259" y2="149"
        stroke={bond} strokeWidth="1.6" strokeLinecap="round"/>

      {/* ══ 5. C1=O — two parallel lines going straight up from outside halo ══ */}
      <line x1="218" y1="71" x2="218" y2="44"
        stroke={ox} strokeWidth="2" strokeLinecap="round"/>
      <line x1="224" y1="71" x2="224" y2="44"
        stroke={ox} strokeWidth="2" strokeLinecap="round"/>

      {/* ══ 6. C4=O — two parallel lines going straight down from outside halo ══ */}
      <line x1="218" y1="189" x2="218" y2="216"
        stroke={ox} strokeWidth="2" strokeLinecap="round"/>
      <line x1="224" y1="189" x2="224" y2="216"
        stroke={ox} strokeWidth="2" strokeLinecap="round"/>

      {/* ══ 7. CH₃ bond from C2 outward
           direction (0.860,−0.500); start outside halo ≈ (271,101)
      ══ */}
      <line x1="271" y1="101" x2="293" y2="90"
        stroke={bond} strokeWidth="2" strokeLinecap="round"/>

      {/* ══ 8. H bond from C3 outward
           direction (0.860,+0.500); start outside halo ≈ (271,159)
      ══ */}
      <line x1="271" y1="159" x2="287" y2="167"
        stroke={bond} strokeWidth="2" strokeLinecap="round"/>

      {/* ══ 9. WHITE HALOS — mask skeleton lines behind labeled atoms ══ */}
      {labeled.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={9} fill={bg}/>
      ))}

      {/* ══ 10. C ATOM LABELS ══ */}
      {labeled.map(([cx, cy], i) => (
        <text
          key={i}
          x={cx} y={cy + 5}
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={carbon}
          fontFamily="Georgia, serif"
        >C</text>
      ))}

      {/* ══ 11. O LABELS (red) ══ */}
      <text x="221" y="37"
        textAnchor="middle" fontSize="15" fontWeight="700"
        fill={ox} fontFamily="Georgia, serif">O</text>
      <text x="221" y="232"
        textAnchor="middle" fontSize="15" fontWeight="700"
        fill={ox} fontFamily="Georgia, serif">O</text>

      {/* ══ 12. CH₃ & H LABELS ══ */}
      <text x="297" y="90"
        textAnchor="start" fontSize="13"
        fill={carbon} fontFamily="Georgia, serif">CH₃</text>
      <text x="291" y="172"
        textAnchor="start" fontSize="13"
        fill={carbon} fontFamily="Georgia, serif">H</text>

      {/* ══ 13. MOLECULAR FORMULA + IUPAC ══ */}
      <text x="215" y="246"
        textAnchor="middle" fontSize="11" fontStyle="italic"
        fill={muted} fontFamily="Georgia, serif">
        C₁₁H₈O₂ · 2-methyl-1,4-naphthoquinone · 172.18 g/mol
      </text>
    </svg>
  );
}
