import { memo, useState } from "react";
import { FAQ as ITEMS } from "../data/content";
import { useReveal } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import Button from "./Button";
import { ArrowUpRight, Lightning, Smiley } from "./Decorations";

const FAQ = ({ onContact }: { onContact: () => void }) => {
  const ref = useReveal<HTMLElement>(0.15);
  const [open, setOpen] = useState(0);
  return (
    <section ref={ref} id="faq" className="section faq container" aria-labelledby="faq-title">
      <div className="card faq__card">
        <div className="faq__intro">
          <span className="eyebrow rv rv-up">FAQ</span>
          <SplitTitle id="faq-title" text="Got Questions?" />
          <p className="rv rv-up" style={{ ["--d" as string]: "0.2s" }}>
            Everything you might want to know before we start creating something awesome together.
          </p>
          <div className="rv rv-up" style={{ ["--d" as string]: "0.3s" }}>
            <Button variant="outline" onClick={onContact}>
              Still curious? Say hi <ArrowUpRight className="btn__arrow" />
            </Button>
          </div>
          <Smiley className="faq__smiley float-b" color="var(--blue)" />
          <Lightning className="faq__bolt float-c" />
        </div>
        <ul className="faq__list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className={`faq__item rv rv-up ${isOpen ? "is-open" : ""}`}
                style={{ ["--d" as string]: `${0.1 + i * 0.08}s` }}
              >
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__num">0{i + 1}</span>
                  <span className="faq__text">{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>
                <div className="faq__a" id={`faq-a-${i}`} role="region">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default memo(FAQ);
