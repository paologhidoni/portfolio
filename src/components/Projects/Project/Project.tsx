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
  return (
    <div id={id} className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
        <div className="mt-4 flex gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i + "_" + tech}
              className="text-sm bg-secondaryColor text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-secondaryColor hover:underline"
        >
          View on GitHub
        </a>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Project;
