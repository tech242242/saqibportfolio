import type { ReactNode, CSSProperties } from "react";
import { useMagnetic } from "../hooks/useInteractions";

type Props = {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

const Button = ({ children, variant = "primary", onClick, href, className = "", style, ariaLabel }: Props) => {
  const ref = useMagnetic<HTMLAnchorElement & HTMLButtonElement>(0.25);
  const cls = `btn btn--${variant} magnetic ${className}`;
  const inner = <span className="btn__inner">{children}</span>;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        style={style}
        aria-label={ariaLabel}
        onClick={
          onClick
            ? (e) => {
                e.preventDefault();
                onClick();
              }
            : undefined
        }
      >
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref} type="button" className={cls} style={style} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
};

export default Button;
