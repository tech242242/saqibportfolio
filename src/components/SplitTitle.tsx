import { memo, type ReactNode } from "react";

type Props = {
  text: string;
  id?: string;
  className?: string;
  delay?: number;
  children?: ReactNode;
};

/** Section title that reveals letter-by-letter (springy stagger) and waves on hover. */
const SplitTitle = ({ text, id, className = "", delay = 0, children }: Props) => {
  let idx = 0;
  return (
    <h2 id={id} className={`section-title split ${className}`} aria-label={text} style={{ ["--d" as string]: `${delay}s` }}>
      {text.split(" ").map((word, wi) => (
        <span className="split__word" aria-hidden="true" key={wi}>
          {word.split("").map((ch, ci) => (
            <span className="split__ch" key={ci} style={{ ["--i" as string]: idx++ }}>
              {ch}
            </span>
          ))}
        </span>
      ))}
      {children}
    </h2>
  );
};

export default memo(SplitTitle);
