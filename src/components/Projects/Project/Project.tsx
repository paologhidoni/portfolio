import React from "react";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  i: number;
}

const Project: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
  live,
  i,
}) => {
  const isOdd = i % 2 !== 0;
  const textColor = isOdd ? "text-primaryColor" : "text-secondaryColor";
  const bgColor = isOdd ? "bg-secondaryColor" : "bg-primaryColor";
  const gitHubTxtColor = isOdd ? "text-secondaryColor" : "text-primaryColor";

  return (
    <li id={id} className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <div className="mb-4 px-6 py-12 bg-black bg-opacity-50 clip-polygon-wave-top">
          <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>

        <ul className="mb-4 flex gap-2 flex-wrap">
          {technologies.map((tech, i) => (
            <li
              key={i + "_" + tech}
              className={`text-md font-bold px-2 py-1 rounded ${textColor} ${bgColor}`}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex justify-between flex-wrap">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`${gitHubTxtColor} font-bold underline underline-offset-8 mt-4`}
          >
            View on GitHub &rarr;
          </a>{" "}
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className={`${gitHubTxtColor} font-bold underline underline-offset-8 mt-4`}
          >
            See it Live &rarr;
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className={`w-full h-56 md:h-72 object-cover object-top rounded-lg border-2 border-s-8 border-e-8 shadow-sm border-white`}
        />
      </div>
    </li>
  );
};

export default Project;
