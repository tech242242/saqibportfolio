import type { SkillKey, SocialKey } from "../data/content";

const AdobeTile = ({ text, color, bg }: { text: string; color: string; bg: string }) => (
  <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
    <rect x="4" y="4" width="56" height="56" rx="10" fill={bg} stroke={color} strokeWidth="2.5" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
      fontSize="25"
      fill={color}
    >
      {text}
    </text>
  </svg>
);

export const SkillIcon = ({ name }: { name: SkillKey }) => {
  switch (name) {
    case "toonboom":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <path
            d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z"
            fill="#071a2e"
            stroke="#3aa6ff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M23 19 V45 M41 19 V45 M23 32 H41" stroke="#3aa6ff" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "ae":
      return <AdobeTile text="Ae" color="#b9a4ff" bg="#150b36" />;
    case "an":
      return <AdobeTile text="An" color="#ff5a36" bg="#2a0905" />;
    case "ps":
      return <AdobeTile text="Ps" color="#31a8ff" bg="#021a30" />;
    case "pr":
      return <AdobeTile text="Pr" color="#a39cff" bg="#12093a" />;
    case "blender":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <path d="M6 26 L30 26" stroke="#ff8a1f" strokeWidth="7" strokeLinecap="round" />
          <path d="M14 40 L30 34" stroke="#ff8a1f" strokeWidth="6" strokeLinecap="round" />
          <path d="M22 16 L36 24" stroke="#ff8a1f" strokeWidth="6" strokeLinecap="round" />
          <circle cx="38" cy="34" r="17" fill="#ff8a1f" />
          <circle cx="39" cy="34" r="11" fill="#ffffff" />
          <circle cx="39" cy="34" r="6.5" fill="#2366c4" />
        </svg>
      );
  }
};

export const SocialIcon = ({ name }: { name: SocialKey }) => {
  const common = {
    viewBox: "0 0 24 24",
    width: 17,
    height: 17,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
        </svg>
      );
    case "dribbble":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5 6.5 C 10 10, 16 10, 19.5 8" />
          <path d="M8.5 3.7 C 12 8, 15 14, 16 20.3" />
          <path d="M3.2 13 C 8 11.5, 14 12.5, 20.8 14" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" stroke="none" />
          <path d="M10 9 L15 12 L10 15 Z" fill="#0d0e13" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
          <rect x="3.5" y="9" width="3.6" height="11" rx="0.6" />
          <circle cx="5.3" cy="5.3" r="2.1" />
          <path d="M10 9 H13.4 V10.6 C 14 9.6, 15.3 8.7, 17 8.7 C 19.6 8.7, 20.5 10.4, 20.5 13 V20 H16.9 V13.8 C 16.9 12.5, 16.5 11.7, 15.3 11.7 C 14.1 11.7, 13.6 12.6, 13.6 13.8 V20 H10 Z" />
        </svg>
      );
  }
};

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6 L12 13 L20.5 6" strokeLinejoin="round" />
  </svg>
);

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M12 21 C 12 21, 5 14.5, 5 9.5 C 5 5.6, 8.1 3, 12 3 C 15.9 3, 19 5.6, 19 9.5 C 19 14.5, 12 21, 12 21 Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const PlayIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
    <path d="M4 2.2 L13.5 8 L4 13.8 Z" fill="currentColor" />
  </svg>
);
