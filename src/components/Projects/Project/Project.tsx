import React from "react";
import AiIcon from "../../../assets/ai-white.svg";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live: string;
  website?: string;
  isOdd: boolean;
  aiPowered?: boolean;
}

const Project: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
  live,
  website,
  isOdd,
  aiPowered,
}) => {
  const textColor = isOdd ? "text-primaryColor" : "text-secondaryColor";
  const bgColor = isOdd ? "bg-secondaryColor" : "bg-primaryColor";
  const linkTxtColor = isOdd ? "text-secondaryColor" : "text-primaryColor";
  // Primary link config
  const primaryLink = github
    ? {
        href: github,
        label: "View on GitHub",
        ariaLabel: `View the ${title} project on GitHub`,
      }
    : website
      ? {
          href: website,
          label: "View Website",
          ariaLabel: `View the ${title} project website`,
        }
      : null;

  return (
    <li id={id} className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <div className="mb-4 px-6 py-12 bg-black bg-opacity-50 clip-polygon-wave-top">
          <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>

        <ul className="mb-4 flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <li
              key={tech}
              className={`text-md font-bold px-2 py-1 rounded ${textColor} ${bgColor}`}
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Project links */}
        <div className="flex justify-between flex-wrap">
          {/* Primary repository/website link */}
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              className={`${linkTxtColor} font-bold underline underline-offset-8 mt-4`}
              aria-label={primaryLink.ariaLabel}
            >
              {primaryLink.label} &rarr;
            </a>
          ) : null}
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className={`${linkTxtColor} font-bold underline underline-offset-8 mt-4`}
            aria-label={`See the ${title} project Live`}
          >
            See Live &rarr;
          </a>
        </div>
      </div>

      {/* Project preview */}
      <div className="flex-1">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`block relative overflow-hidden rounded-lg shadow-sm transition-all duration-500 hover:scale-[100.5%] hover:shadow-lg hover:shadow-gray-600`}
          aria-label={`See the ${title} project Live`}
        >
          {/* Ai Ribbon Wrap Badge */}
          {aiPowered && (
            <div className="absolute top-[28px] -right-[40px] w-[180px] py-1.5 bg-gradient-to-r from-blue-600 to-purple-700 rotate-45 shadow-xl flex items-center justify-center gap-2 border-y border-blue-400/30 z-10">
              <img src={AiIcon} alt="AI" className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-[0.1em]">
                Powered
              </span>
            </div>
          )}

          <img
            src={image}
            alt={title}
            className="w-full h-56 md:h-72 object-cover object-top border-2 border-s-8 border-e-8 border-white"
          />
        </a>
      </div>
    </li>
  );
};

export default Project;
