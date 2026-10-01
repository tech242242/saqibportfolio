import { memo } from "react";
import { SKILLS } from "../data/content";
import { useReveal } from "../hooks/useInteractions";
import { SkillIcon } from "./Icons";
import { BigLoops, Squiggle, Dashes } from "./Decorations";

const Skills = () => {
  const ref = useReveal<HTMLElement>(0.2);
  return (
    <section ref={ref} id="skills" className="section skills container" aria-labelledby="skills-title">
      <div className="skills__row">
        <h2 id="skills-title" className="section-title skills__title rv rv-up">
          Skills
          <Squiggle className="skills__underline rv-draw" color="var(--purple)" />
        </h2>
        <ul className="skills__list">
          {SKILLS.map((s, i) => (
            <li key={s.key} className="skill rv rv-up" style={{ ["--d" as string]: `${0.1 + i * 0.08}s` }}>
              <span className="skill__icon">
                <SkillIcon name={s.key} />
              </span>
              <span className="skill__label">
                {s.label.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <BigLoops className="skills__loops rv-draw" />
      </div>
      <Dashes className="skills__dashes rv-draw" color="var(--blue)" />
    </section>
  );
};

export default memo(Skills);
