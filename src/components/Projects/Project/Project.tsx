import React from "react";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

const Project: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
}) => {
  return <div></div>;
};

export default Project;
