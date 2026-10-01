import { memo, type CSSProperties } from "react";
import type { Project } from "../data/content";
import { useTilt } from "../hooks/useInteractions";
import { ArrowUpRight } from "./Decorations";
import SmartImage from "./SmartImage";

type Props = { project: Project; index: number; onOpen: (p: Project) => void };

const ProjectCard = ({ project, index, onOpen }: Props) => {
  const ref = useTilt<HTMLAnchorElement>(7);
  return (
    <a
      ref={ref}
      href="#projects"
      className="project-card tilt rv rv-up"
      style={{ ["--d" as string]: `${0.2 + index * 0.1}s`, ["--accent" as string]: project.accent } as CSSProperties}
      onClick={(e) => {
        e.preventDefault();
        onOpen(project);
      }}
      aria-label={`${project.title} — ${project.category}`}
    >
      <div className="project-card__media">
        <SmartImage src={project.image} alt={`${project.title} artwork`} width={800} height={500} />
        <span className="project-card__shine" aria-hidden="true" />
        <span className="project-card__view" aria-hidden="true">
          View Project
        </span>
      </div>
      <div className="project-card__body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
    </a>
  );
};

export default memo(ProjectCard);
