import React from "react";
import Wrapper from "../../layouts/Wrapper";
import Project from "./Project/Project";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative pb-12 bg-secondaryColor">
      <SectionHeading title="Projects" />

      <ul className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Wrapper
            key={i + "_" + project.title}
            skewedTop={true}
            skewedEnd={true}
            bgColor={i % 2 === 0 ? "bg-secondaryColor" : "bg-primaryColor"}
          >
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              i={i}
            />
          </Wrapper>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
