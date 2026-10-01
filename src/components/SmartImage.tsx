import { memo, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

/**
 * Fast image: loads eagerly (no lazy delay), decodes off-thread, shows a shimmer
 * placeholder and fades in the moment the bitmap is ready (instantly if cached).
 */
const SmartImage = ({ src, alt, className = "", width, height, priority }: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setReady(true);
  }, [src]);

  return (
    <span className={`smart-img ${ready ? "is-ready" : ""} ${className}`}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setReady(true)}
        onError={() => setReady(true)}
      />
    </span>
  );
};

export default memo(SmartImage);
