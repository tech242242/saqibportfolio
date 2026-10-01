import type { CSSProperties, ReactNode } from "react";

type DecoProps = {
  className?: string;
  style?: CSSProperties;
  color?: string;
};

const Svg = ({
  viewBox,
  className = "",
  style,
  children,
}: {
  viewBox: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) => (
  <svg viewBox={viewBox} className={className} style={style} aria-hidden="true" fill="none">
    {children}
  </svg>
);

const stroke = (color: string, w = 3) => ({
  stroke: color,
  strokeWidth: w,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  pathLength: 1,
  className: "draw-path",
});

/** Global SVG filter defs (rough / grainy edges for blobs). Render once. */
export const SvgDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <filter id="rough-edge" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
        <feColorMatrix type="saturate" values="0" in="n" result="g" />
        <feComposite in="g" in2="SourceGraphic" operator="in" result="gg" />
        <feBlend in="SourceGraphic" in2="gg" mode="multiply" />
      </filter>
    </defs>
  </svg>
);

export const Crown = ({ className, style, color = "var(--lime)" }: DecoProps) => (
  <Svg viewBox="0 0 80 60" className={className} style={style}>
    <path d="M10 48 L6 14 L24 32 L38 6 L50 30 L70 12 L66 48 Z" {...stroke(color, 3.5)} />
    <path d="M12 54 C 30 51, 50 51, 66 53" {...stroke(color, 3.5)} />
  </Svg>
);

export const CurvedArrow = ({
  className,
  style,
  color = "#fff",
  variant = "short",
}: DecoProps & { variant?: "short" | "long" | "loop" }) => {
  if (variant === "long")
    return (
      <Svg viewBox="0 0 90 120" className={className} style={style}>
        <path d="M40 6 C 6 24, 2 70, 30 96 C 42 106, 58 110, 76 108" {...stroke(color, 3)} />
        <path d="M64 98 L78 108 L64 116" {...stroke(color, 3)} />
      </Svg>
    );
  if (variant === "loop")
    return (
      <Svg viewBox="0 0 120 60" className={className} style={style}>
        <path d="M6 40 C 30 10, 60 6, 70 26 C 78 44, 52 50, 56 30 C 60 14, 90 14, 110 22" {...stroke(color, 3)} />
        <path d="M98 12 L112 22 L100 32" {...stroke(color, 3)} />
      </Svg>
    );
  return (
    <Svg viewBox="0 0 60 50" className={className} style={style}>
      <path d="M8 8 C 10 26, 22 36, 46 36" {...stroke(color, 2.6)} />
      <path d="M36 28 L48 36 L37 44" {...stroke(color, 2.6)} />
    </Svg>
  );
};

export const Star = ({
  className,
  style,
  color = "#ffc629",
  outline = false,
}: DecoProps & { outline?: boolean }) => (
  <Svg viewBox="0 0 50 50" className={className} style={style}>
    <path
      d="M25 4 L31 18 L46 19 L34.5 29 L38.5 44 L25 36 L11.5 44 L15.5 29 L4 19 L19 18 Z"
      fill={outline ? "none" : color}
      stroke={color}
      strokeWidth={outline ? 3 : 2}
      strokeLinejoin="round"
    />
  </Svg>
);

export const Scribble = ({ className, style, color = "var(--blue)" }: DecoProps) => (
  <Svg viewBox="0 0 140 70" className={className} style={style}>
    <path
      d="M6 50 C 20 20, 40 14, 44 32 C 48 48, 28 50, 34 34 C 42 16, 70 12, 84 26 C 96 38, 112 34, 134 18"
      {...stroke(color, 3)}
    />
  </Svg>
);

export const Squiggle = ({ className, style, color = "var(--purple)" }: DecoProps) => (
  <Svg viewBox="0 0 120 24" className={className} style={style}>
    <path d="M4 14 C 16 4, 24 4, 34 14 S 54 24, 64 14 S 84 4, 94 14 S 110 20, 116 12" {...stroke(color, 4)} />
  </Svg>
);

export const Smiley = ({ className, style, color = "var(--lime)" }: DecoProps) => (
  <Svg viewBox="0 0 60 60" className={className} style={style}>
    <path d="M30 5 C 46 4, 56 16, 55 31 C 54 46, 42 56, 28 55 C 14 54, 4 42, 5 28 C 6 15, 16 6, 31 6" {...stroke(color, 3)} />
    <path d="M21 22 L21 27" {...stroke(color, 4)} />
    <path d="M38 22 L38 27" {...stroke(color, 4)} />
    <path d="M17 35 C 24 46, 38 46, 44 34" {...stroke(color, 3)} />
  </Svg>
);

export const Lightning = ({ className, style, color = "var(--lime)" }: DecoProps) => (
  <Svg viewBox="0 0 40 60" className={className} style={style}>
    <path d="M24 2 L6 34 L20 34 L14 58 L36 22 L22 22 Z" fill={color} stroke={color} strokeWidth="2" strokeLinejoin="round" />
  </Svg>
);

export const Sparks = ({ className, style, color = "var(--red)" }: DecoProps) => (
  <Svg viewBox="0 0 50 50" className={className} style={style}>
    <path d="M8 30 L20 26" {...stroke(color, 3)} />
    <path d="M14 14 L24 20" {...stroke(color, 3)} />
    <path d="M28 6 L30 18" {...stroke(color, 3)} />
  </Svg>
);

export const Dashes = ({ className, style, color = "var(--purple)" }: DecoProps) => (
  <Svg viewBox="0 0 60 50" className={className} style={style}>
    <path d="M6 44 L30 30" {...stroke(color, 3.5)} />
    <path d="M14 20 L36 14" {...stroke(color, 3.5)} />
    <path d="M40 40 L54 30" {...stroke(color, 3.5)} />
  </Svg>
);

export const Plus = ({ className, style, color = "var(--blue)" }: DecoProps) => (
  <Svg viewBox="0 0 20 20" className={className} style={style}>
    <path d="M10 2 L10 18 M2 10 L18 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </Svg>
);

export const BigLoops = ({ className, style, color = "var(--purple)" }: DecoProps) => (
  <Svg viewBox="0 0 120 120" className={className} style={style}>
    <path
      d="M20 110 C 10 70, 40 40, 60 60 C 76 76, 50 96, 44 78 C 36 54, 70 20, 90 30 C 110 40, 96 70, 80 64 C 64 58, 80 20, 110 8"
      {...stroke(color, 4)}
    />
  </Svg>
);

export const Swoosh = ({ className, style, color = "var(--purple)" }: DecoProps) => (
  <Svg viewBox="0 0 140 60" className={className} style={style}>
    <path d="M6 44 C 30 20, 46 10, 50 20 C 54 30, 30 44, 44 44 C 60 44, 80 14, 90 20 C 98 26, 80 40, 96 38 C 110 36, 120 26, 134 20" {...stroke(color, 4)} />
    <path d="M40 54 L128 44" {...stroke(color, 3)} />
  </Svg>
);

export const Oval = ({ className, style, color = "var(--lime)" }: DecoProps) => (
  <Svg viewBox="0 0 200 80" className={className} style={style}>
    <path
      d="M40 12 C 90 0, 170 4, 190 30 C 204 52, 150 72, 96 74 C 40 76, 4 62, 8 40 C 12 20, 60 8, 120 8"
      {...stroke(color, 3.5)}
    />
  </Svg>
);

export const DoodleFace = ({ className, style, color = "var(--orange)" }: DecoProps) => (
  <Svg viewBox="0 0 70 70" className={className} style={style}>
    <path d="M14 20 C 8 8, 22 4, 26 14 C 32 4, 48 6, 46 18 C 60 18, 64 34, 54 40 C 62 54, 44 64, 34 56 C 24 66, 6 56, 12 44 C 2 38, 4 24, 14 20" {...stroke(color, 2.5)} />
    <path d="M24 30 L28 32 M40 28 L44 30" {...stroke(color, 3)} />
    <path d="M24 42 C 30 50, 40 50, 44 40" {...stroke(color, 2.5)} />
  </Svg>
);

export const HeartTiny = ({ className, style, color = "var(--blue)" }: DecoProps) => (
  <Svg viewBox="0 0 30 30" className={className} style={style}>
    <path d="M15 26 C 4 18, 2 10, 8 6 C 12 4, 15 8, 15 10 C 15 8, 18 4, 22 6 C 28 10, 26 18, 15 26 Z" {...stroke(color, 2.5)} />
  </Svg>
);

/** Brush-stroke underline (filled, tapered). Draws left→right via clip-path in CSS. */
export const BrushUnderline = ({ className, style, color = "var(--lime)" }: DecoProps) => (
  <Svg viewBox="0 0 400 44" className={className} style={style}>
    <path
      d="M6 32 C 70 24, 180 14, 300 9 C 340 7, 372 5, 394 6 C 399 7, 398 13, 392 14 C 330 18, 250 22, 170 28 C 110 32, 60 37, 16 41 C 4 42, 0 34, 6 32 Z"
      fill={color}
    />
    <path d="M60 36 C 120 30, 200 24, 280 20" stroke="rgba(0,0,0,.18)" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

type BlobVariant = "purple" | "blue" | "orange";

const BLOB_PATHS: Record<BlobVariant, string> = {
  purple:
    "M0 0 L330 0 C 320 40, 280 70, 230 76 C 190 80, 176 110, 132 128 C 90 146, 40 138, 0 150 Z",
  blue:
    "M0 30 C 40 6, 90 16, 120 40 C 150 64, 190 60, 206 86 C 222 112, 190 140, 150 146 C 110 152, 80 170, 40 168 C 18 167, 6 160, 0 156 Z",
  orange:
    "M120 0 L120 260 C 96 250, 70 230, 60 206 C 48 178, 20 170, 16 140 C 12 110, 40 96, 34 70 C 28 44, 50 20, 80 16 C 98 14, 110 6, 120 0 Z",
};

const BLOB_VIEWBOX: Record<BlobVariant, string> = {
  purple: "0 0 330 160",
  blue: "0 0 230 175",
  orange: "0 0 120 260",
};

const BLOB_COLOR: Record<BlobVariant, string> = {
  purple: "var(--purple)",
  blue: "var(--blue)",
  orange: "var(--orange)",
};

export const Blob = ({ className, style, variant }: DecoProps & { variant: BlobVariant }) => (
  <Svg viewBox={BLOB_VIEWBOX[variant]} className={className} style={style}>
    <g filter="url(#rough-edge)">
      <path d={BLOB_PATHS[variant]} fill={BLOB_COLOR[variant]} />
      {variant === "purple" && (
        <>
          <circle cx="250" cy="100" r="9" fill={BLOB_COLOR[variant]} />
          <circle cx="200" cy="120" r="5" fill={BLOB_COLOR[variant]} />
          <circle cx="160" cy="146" r="4" fill={BLOB_COLOR[variant]} />
        </>
      )}
      {variant === "blue" && (
        <>
          <circle cx="170" cy="30" r="7" fill={BLOB_COLOR[variant]} />
          <circle cx="200" cy="50" r="4" fill={BLOB_COLOR[variant]} />
          <circle cx="215" cy="150" r="5" fill={BLOB_COLOR[variant]} />
        </>
      )}
      {variant === "orange" && (
        <>
          <circle cx="30" cy="40" r="4" fill={BLOB_COLOR[variant]} />
          <circle cx="6" cy="120" r="3" fill={BLOB_COLOR[variant]} />
        </>
      )}
    </g>
  </Svg>
);

/** Circular arrow icon used for "Watch Now" / "Know More" links. */
export const CircleArrow = ({ className, play = false }: { className?: string; play?: boolean }) => (
  <span className={`circle-arrow ${className ?? ""}`} aria-hidden="true">
    {play ? (
      <svg viewBox="0 0 16 16" width="9" height="9">
        <path d="M4 2.5 L13 8 L4 13.5 Z" fill="currentColor" />
      </svg>
    ) : (
      <svg viewBox="0 0 16 16" width="10" height="10" fill="none">
        <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </span>
);

export const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" className={className} aria-hidden="true">
    <path d="M4 12 L12 4 M5.5 4 H12 V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 16" width="16" height="14" fill="none" className={className} aria-hidden="true">
    <path d="M2 8 H17 M12 3 L17 8 L12 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
