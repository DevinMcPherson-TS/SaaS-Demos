import type { ReactNode } from "react";
import type { RoomVariant } from "@/lib/site-content";

const ink = "#2a241e";

function Window({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  const midX = x + width / 2;
  const midY = y + height / 2;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#f6e7c3" stroke={ink} strokeWidth="1.6" />
      <line x1={midX} y1={y} x2={midX} y2={y + height} stroke={ink} strokeWidth="1.4" />
      <line x1={x} y1={midY} x2={x + width} y2={midY} stroke={ink} strokeWidth="1.4" />
    </g>
  );
}

function Floor({ y = 318 }: { y?: number }) {
  return (
    <g>
      <rect x="28" y={y} width="584" height={456 - y} fill="#e7d4bc" />
      <line x1="28" y1={y} x2="612" y2={y} stroke={ink} strokeWidth="1.5" />
      <line x1="28" y1={y + 28} x2="612" y2={y + 28} stroke="#d3bea4" strokeWidth="1" />
      <line x1="28" y1={y + 56} x2="612" y2={y + 56} stroke="#d3bea4" strokeWidth="1" />
    </g>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <rect width="640" height="480" fill="#efe8dc" />
      <rect x="28" y="24" width="584" height="432" fill="#f7f4ee" />
      {children}
      <rect x="28" y="24" width="584" height="432" fill="none" stroke={ink} strokeWidth="1.6" />
    </>
  );
}

const scenes: Record<RoomVariant, ReactNode> = {
  living: (
    <Frame>
      <Floor />
      <Window x={246} y={62} width={148} height={156} />
      <rect x="78" y="86" width="92" height="118" fill="#f7f4ee" stroke={ink} strokeWidth="1.5" />
      <rect x="90" y="100" width="68" height="78" fill="#e7d3c0" />
      <rect x="148" y="268" width="344" height="78" rx="16" fill="#d9c7b0" stroke={ink} strokeWidth="1.5" />
      <rect x="148" y="246" width="344" height="42" rx="14" fill="#cbb59a" stroke={ink} strokeWidth="1.5" />
      <line x1="262" y1="268" x2="262" y2="346" stroke={ink} strokeWidth="1.2" />
      <line x1="378" y1="268" x2="378" y2="346" stroke={ink} strokeWidth="1.2" />
      <rect x="168" y="352" width="18" height="22" fill={ink} />
      <rect x="454" y="352" width="18" height="22" fill={ink} />
      <rect x="176" y="378" width="288" height="52" rx="4" fill="#efe2d0" stroke="#cbb89a" strokeWidth="1.2" />
      <rect x="268" y="388" width="132" height="14" rx="2" fill="#b5834a" stroke={ink} strokeWidth="1.3" />
      <rect x="286" y="402" width="8" height="18" fill="#8d6234" />
      <rect x="374" y="402" width="8" height="18" fill="#8d6234" />
      <path d="M520 250h46l-8 28h-30z" fill="#f4efe4" stroke={ink} strokeWidth="1.4" />
      <line x1="543" y1="278" x2="543" y2="318" stroke={ink} strokeWidth="1.5" />
      <ellipse cx="543" cy="324" rx="16" ry="6" fill="#8d6234" stroke={ink} strokeWidth="1.2" />
      <rect x="96" y="286" width="36" height="32" rx="3" fill="#a15b45" stroke={ink} strokeWidth="1.3" />
      <ellipse cx="104" cy="272" rx="16" ry="22" fill="#6e8474" />
      <ellipse cx="124" cy="266" rx="14" ry="20" fill="#3f5348" />
    </Frame>
  ),
  kitchen: (
    <Frame>
      <Floor y={334} />
      <rect x="70" y="78" width="390" height="92" fill="#c4a574" stroke={ink} strokeWidth="1.5" />
      <line x1="200" y1="78" x2="200" y2="170" stroke={ink} strokeWidth="1.3" />
      <line x1="330" y1="78" x2="330" y2="170" stroke={ink} strokeWidth="1.3" />
      <Window x={214} y={92} width={102} height={64} />
      <rect x="70" y="186" width="390" height="28" fill="#d9d4cc" stroke={ink} strokeWidth="1.4" />
      <rect x="70" y="214" width="390" height="120" fill="#b5834a" stroke={ink} strokeWidth="1.5" />
      <line x1="200" y1="214" x2="200" y2="334" stroke={ink} strokeWidth="1.3" />
      <line x1="330" y1="214" x2="330" y2="334" stroke={ink} strokeWidth="1.3" />
      <rect x="92" y="248" width="86" height="18" rx="2" fill="#f7f4ee" stroke={ink} strokeWidth="1.2" />
      <rect x="222" y="248" width="86" height="18" rx="2" fill="#f7f4ee" stroke={ink} strokeWidth="1.2" />
      <rect x="352" y="248" width="86" height="18" rx="2" fill="#f7f4ee" stroke={ink} strokeWidth="1.2" />
      <rect x="250" y="292" width="150" height="78" fill="#e7d8c4" stroke={ink} strokeWidth="1.5" />
      <rect x="250" y="284" width="150" height="14" fill="#d5d0c8" stroke={ink} strokeWidth="1.3" />
      <rect x="268" y="372" width="28" height="46" rx="8" fill="#6e8474" stroke={ink} strokeWidth="1.3" />
      <rect x="354" y="372" width="28" height="46" rx="8" fill="#6e8474" stroke={ink} strokeWidth="1.3" />
      <line x1="300" y1="48" x2="300" y2="78" stroke={ink} strokeWidth="1.4" />
      <line x1="360" y1="48" x2="360" y2="78" stroke={ink} strokeWidth="1.4" />
      <ellipse cx="300" cy="86" rx="16" ry="8" fill="#c6a15a" stroke={ink} strokeWidth="1.2" />
      <ellipse cx="360" cy="86" rx="16" ry="8" fill="#c6a15a" stroke={ink} strokeWidth="1.2" />
      <circle cx="168" cy="200" r="7" fill="#c6a15a" stroke={ink} strokeWidth="1.2" />
    </Frame>
  ),
  bath: (
    <Frame>
      <Floor y={340} />
      <rect x="28" y="250" width="584" height="90" fill="#e7e2da" />
      <line x1="28" y1="250" x2="612" y2="250" stroke={ink} strokeWidth="1.4" />
      <Window x={250} y={58} width={140} height={120} />
      <ellipse cx="220" cy="300" rx="92" ry="36" fill="#f7f4ee" stroke={ink} strokeWidth="1.6" />
      <ellipse cx="220" cy="292" rx="70" ry="22" fill="#f3efe6" stroke={ink} strokeWidth="1.2" />
      <rect x="128" y="318" width="18" height="28" fill="#d9d4cc" stroke={ink} strokeWidth="1.2" />
      <rect x="294" y="318" width="18" height="28" fill="#d9d4cc" stroke={ink} strokeWidth="1.2" />
      <rect x="390" y="250" width="150" height="90" fill="#b5834a" stroke={ink} strokeWidth="1.5" />
      <rect x="390" y="238" width="150" height="16" fill="#d5d0c8" stroke={ink} strokeWidth="1.3" />
      <ellipse cx="465" cy="230" rx="28" ry="12" fill="#f7f4ee" stroke={ink} strokeWidth="1.4" />
      <rect x="430" y="118" width="86" height="100" fill="#f7f4ee" stroke={ink} strokeWidth="1.5" />
      <line x1="448" y1="250" x2="448" y2="300" stroke={ink} strokeWidth="1.2" />
      <circle cx="400" cy="168" r="5" fill="#c6a15a" />
      <circle cx="546" cy="168" r="5" fill="#c6a15a" />
    </Frame>
  ),
  bedroom: (
    <Frame>
      <Floor />
      <rect x="168" y="70" width="304" height="36" fill="#8d6234" />
      <rect x="188" y="106" width="264" height="150" rx="8" fill="#efe2d0" stroke={ink} strokeWidth="1.5" />
      <rect x="206" y="124" width="92" height="64" rx="8" fill="#f7f4ee" stroke={ink} strokeWidth="1.3" />
      <rect x="342" y="124" width="92" height="64" rx="8" fill="#e7d7c6" stroke={ink} strokeWidth="1.3" />
      <rect x="188" y="214" width="264" height="56" fill="#d9c7b0" stroke={ink} strokeWidth="1.4" />
      <rect x="118" y="214" width="56" height="70" fill="#cbb59a" stroke={ink} strokeWidth="1.4" />
      <rect x="466" y="214" width="56" height="70" fill="#cbb59a" stroke={ink} strokeWidth="1.4" />
      <path d="M136 196h22l-4 18h-14z" fill="#f4efe4" stroke={ink} strokeWidth="1.2" />
      <path d="M484 196h22l-4 18h-14z" fill="#f4efe4" stroke={ink} strokeWidth="1.2" />
      <Window x={70} y={78} width={78} height={120} />
      <path d="M70 78c18 20 18 100 0 120" fill="#e7d3c0" opacity="0.95" />
      <rect x="210" y="360" width="220" height="58" rx="6" fill="#efe2d0" stroke="#cbb89a" strokeWidth="1.2" />
    </Frame>
  ),
  dining: (
    <Frame>
      <Floor y={300} />
      <rect x="70" y="250" width="180" height="50" fill="#b5834a" stroke={ink} strokeWidth="1.5" />
      <rect x="86" y="266" width="148" height="8" fill="#f7f4ee" />
      <rect x="78" y="92" width="110" height="86" fill="#f7f4ee" stroke={ink} strokeWidth="1.5" />
      <rect x="90" y="106" width="86" height="58" fill="#e7d3c0" />
      <ellipse cx="400" cy="300" rx="120" ry="42" fill="#c4a574" stroke={ink} strokeWidth="1.6" />
      <ellipse cx="400" cy="292" rx="96" ry="28" fill="#e7d4bc" stroke={ink} strokeWidth="1.2" />
      <rect x="292" y="250" width="28" height="70" rx="8" fill="#6e8474" stroke={ink} strokeWidth="1.3" />
      <rect x="480" y="250" width="28" height="70" rx="8" fill="#6e8474" stroke={ink} strokeWidth="1.3" />
      <rect x="330" y="330" width="28" height="58" rx="8" fill="#3f5348" stroke={ink} strokeWidth="1.3" />
      <rect x="442" y="330" width="28" height="58" rx="8" fill="#3f5348" stroke={ink} strokeWidth="1.3" />
      <line x1="400" y1="48" x2="400" y2="150" stroke={ink} strokeWidth="1.4" />
      <ellipse cx="400" cy="162" rx="28" ry="12" fill="#c6a15a" stroke={ink} strokeWidth="1.3" />
    </Frame>
  ),
  seat: (
    <Frame>
      <Floor y={348} />
      <Window x={150} y={48} width={340} height={188} />
      <rect x="130" y="248" width="380" height="28" fill="#f7f4ee" stroke={ink} strokeWidth="1.5" />
      <rect x="130" y="276" width="380" height="72" fill="#e7d7c6" stroke={ink} strokeWidth="1.5" />
      <rect x="154" y="258" width="110" height="52" rx="10" fill="#f4efe4" stroke={ink} strokeWidth="1.3" />
      <rect x="300" y="262" width="86" height="46" rx="10" fill="#6e8474" stroke={ink} strokeWidth="1.3" />
      <rect x="70" y="150" width="52" height="198" fill="#d9c7b0" stroke={ink} strokeWidth="1.4" />
      <line x1="70" y1="190" x2="122" y2="190" stroke={ink} strokeWidth="1.2" />
      <line x1="70" y1="230" x2="122" y2="230" stroke={ink} strokeWidth="1.2" />
      <rect x="82" y="202" width="28" height="8" fill="#a15b45" />
      <rect x="86" y="242" width="22" height="8" fill="#8d6234" />
      <rect x="520" y="300" width="22" height="48" fill="#c6a15a" stroke={ink} strokeWidth="1.2" />
      <ellipse cx="531" cy="292" rx="16" ry="8" fill="#f7f4ee" stroke={ink} strokeWidth="1.2" />
    </Frame>
  ),
};

export function RoomArt({ variant }: { variant: RoomVariant }) {
  return (
    <svg className="room-art" viewBox="0 0 640 480" role="img" aria-hidden="true">
      {scenes[variant]}
    </svg>
  );
}
