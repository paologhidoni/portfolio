import React from "react";
import Project from "./Project/Project";
import { projects } from "../../data/projects";

const WorkAndProjects: React.FC = () => {
  return (
    <section id="work-projects" className="relative bg-surface">
      {/* Full-bleed cards; flush with Skills below */}
      <ul className="flex flex-col gap-0">
        {projects.map((project, index) => (
          <li key={project.id}>
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              website={project.website}
              aiPowered={project.aiPowered}
              altSurface={index % 2 === 1}
              sectionLabel={index === 0 ? "Work & Projects" : undefined}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkAndProjects;
