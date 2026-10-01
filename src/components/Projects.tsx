import { memo } from "react";
import { PROJECTS, type Project } from "../data/content";
import { useReveal } from "../hooks/useInteractions";
import ProjectCard from "./ProjectCard";
import { ArrowRight, Lightning, Squiggle, Sparks } from "./Decorations";

type Props = { onOpen: (p: Project) => void; onViewAll: () => void };

const Projects = ({ onOpen, onViewAll }: Props) => {
  const ref = useReveal<HTMLElement>(0.12);
  return (
    <section ref={ref} id="projects" className="section projects container" aria-labelledby="projects-title">
      <div className="card projects__card rv rv-fade">
        <div className="projects__head">
          <h2 id="projects-title" className="section-title rv rv-up">
            Featured Projects
            <Squiggle className="projects__squiggle rv-draw" />
          </h2>
          <button type="button" className="text-link text-link--plain rv rv-up" style={{ ["--d" as string]: "0.15s" }} onClick={onViewAll}>
            View All Projects <ArrowRight className="text-link__arrow" />
          </button>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
      <Sparks className="projects__sparks rv-draw" color="var(--lime)" />
      <Lightning className="projects__bolt float-c" color="var(--lime)" />
    </section>
  );
};

export default memo(Projects);
