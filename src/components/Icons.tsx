import type { SkillKey, SocialKey } from "../data/content";

export const SkillIcon = ({ name }: { name: SkillKey }) => {
  switch (name) {
    case "react":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <ellipse cx="32" cy="32" rx="8" ry="24" fill="none" stroke="#61dafb" strokeWidth="2.5" />
          <ellipse cx="32" cy="32" rx="8" ry="24" transform="rotate(60 32 32)" fill="none" stroke="#61dafb" strokeWidth="2.5" />
          <ellipse cx="32" cy="32" rx="8" ry="24" transform="rotate(120 32 32)" fill="none" stroke="#61dafb" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <path
            d="M16 28 C 19 20, 25 18, 31 22 C 37 26, 40 28, 48 26 C 45 34, 39 36, 33 32 C 27 28, 24 26, 16 28 Z"
            fill="#38bdf8"
          />
          <path
            d="M24 38 C 27 30, 33 28, 39 32 C 45 36, 48 38, 56 36 C 53 44, 47 46, 41 42 C 35 38, 32 36, 24 38 Z"
            fill="#38bdf8"
            opacity="0.8"
          />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <rect x="14" y="14" width="36" height="36" rx="8" fill="#130d2a" stroke="#a855f7" strokeWidth="2.5" />
          <path d="M26 14 V8 M38 14 V8 M26 50 V56 M38 50 V56 M14 26 H8 M14 38 H8 M50 26 H56 M50 38 H56" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="28" r="3" fill="#a855f7" />
          <circle cx="38" cy="28" r="3" fill="#a855f7" />
          <path d="M25 39 Q 32 44 39 39" stroke="#d4ff2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <ellipse cx="32" cy="18" rx="20" ry="7" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
          <path d="M12 18 V46 C 12 50, 20 53, 32 53 C 44 53, 52 50, 52 46 V18" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
          <path d="M12 32 C 12 36, 20 39, 32 39 C 44 39, 52 36, 52 32" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        </svg>
      );
    case "pr":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <rect x="4" y="4" width="56" height="56" rx="10" fill="#150b36" stroke="#b9a4ff" strokeWidth="2.5" />
          <text x="32" y="42" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="26" fill="#b9a4ff">
            Pr
          </text>
        </svg>
      );
    case "ae":
      return (
        <svg viewBox="0 0 64 64" className="skill-svg" aria-hidden="true">
          <rect x="4" y="4" width="56" height="56" rx="10" fill="#150b36" stroke="#c084fc" strokeWidth="2.5" />
          <text x="32" y="42" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="26" fill="#c084fc">
            Ae
          </text>
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
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M3 21 L4.8 15 C 3.7 13.1, 3.4 10.9, 4.1 8.8 C 5.2 5.5, 8.4 3.2, 12 3.2 C 16.8 3.2, 20.8 7.2, 20.8 12 C 20.8 16.8, 16.8 20.8, 12 20.8 C 10.1 20.8, 8.3 20.2, 6.7 19.1 Z" />
          <path d="M9.5 9 C 9.5 9, 9.7 10.5, 11 11.8 C 12.3 13.1, 13.8 13.3, 13.8 13.3 L14.7 12.3 C 14.9 12.1, 15.3 12.1, 15.6 12.3 L17.5 13.4 C 17.8 13.6, 17.9 14, 17.7 14.3 C 17.4 15, 16.6 15.6, 15.7 15.6 C 14.1 15.6, 11.3 13.7, 9.8 12.2 C 8.3 10.7, 6.4 7.9, 6.4 6.3 C 6.4 5.4, 7 4.6, 7.7 4.3 C 8 4.1, 8.4 4.2, 8.6 4.5 L9.7 6.4 C 9.9 6.7, 9.9 7.1, 9.7 7.3 Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
          <path d="M12.5 2 L12.5 14.5 C 12.5 16.7, 10.7 18.5, 8.5 18.5 C 6.3 18.5, 4.5 16.7, 4.5 14.5 C 4.5 12.3, 6.3 10.5, 8.5 10.5 C 8.9 10.5, 9.3 10.6, 9.7 10.7 L9.7 7.5 C 9.3 7.5, 8.9 7.4, 8.5 7.4 C 4.6 7.4, 1.4 10.6, 1.4 14.5 C 1.4 18.4, 4.6 21.6, 8.5 21.6 C 12.4 21.6, 15.6 18.4, 15.6 14.5 L15.6 7.8 C 17.2 9, 19.1 9.7, 21.2 9.8 L21.2 6.6 C 19.4 6.5, 17.7 5.5, 16.8 4 C 16.3 3.4, 16 2.7, 15.8 2 Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
          <path d="M14 13.5 H16.5 L17.5 9.5 H14 V7.5 C 14 6.4, 14.4 5.5, 16 5.5 H17.5 V2.1 C 16.8 2, 15.7 1.9, 14.5 1.9 C 11.5 1.9, 9.5 3.7, 9.5 7.1 V9.5 H6.5 V13.5 H9.5 V23 H14 Z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
          <path d="M12 2 C 8.7 2, 6.5 4.3, 6.5 7.3 C 6.5 8, 6.7 8.9, 7 9.5 C 5.5 10, 4.8 11.4, 4.8 12.4 C 4.8 13.4, 5.5 14.3, 6.7 14.5 C 6.3 15.5, 4.8 16.6, 3.2 17.2 C 2.8 17.4, 3 17.9, 3.4 18 C 5.6 18.4, 7.8 17.7, 8.5 17.4 C 9 18.5, 10.3 19.3, 12 19.3 C 13.7 19.3, 15 18.5, 15.5 17.4 C 16.2 17.7, 18.4 18.4, 20.6 18 C 21 17.9, 21.2 17.4, 20.8 17.2 C 19.2 16.6, 17.7 15.5, 17.3 14.5 C 18.5 14.3, 19.2 13.4, 19.2 12.4 C 19.2 11.4, 18.5 10, 17 9.5 C 17.3 8.9, 17.5 8, 17.5 7.3 C 17.5 4.3, 15.3 2, 12 2 Z" />
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

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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

