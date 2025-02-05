import React from "react";
import Wrapper from "../../layouts/Wrapper";
import Project from "./Project/Project";

const Projects: React.FC = () => {
  return (
    <Wrapper id="projects" paddingY="py-6 md:py-10">
      <Project
        id="project-1"
        title="Project 1"
        description="Description 1"
        image="image-1.jpg"
        technologies={["React", "TailwindCSS", "TypeScript"]}
        github="https://github.com"
      />
    </Wrapper>
  );
};

export default Projects;
