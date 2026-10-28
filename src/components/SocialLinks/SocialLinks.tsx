import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiCodewars, SiLeetcode } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

interface Props {
  justify?: string;
  className?: string;
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: <GrLinkedinOption />,
    url: "https://www.linkedin.com/in/paologhidoni/",
    className: "w-6 h-6",
  },
  {
    name: "GitHub",
    icon: <VscGithub />,
    url: "https://github.com/paologhidoni",
    className: "w-5 md:w-6 h-5 md:w-6",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/IamPaolo/",
    className: "w-5 md:w-6 h-5 md:w-6",
  },
  {
    name: "Code Wars",
    icon: <SiCodewars />,
    url: "https://www.codewars.com/users/PaoloGhidoni",
    className: "w-5 md:w-6 h-5 md:w-6",
  },
];

const SocialLinks: React.FC<Props> = ({
  justify = "justify-center md:justify-end",
  className = "text-white",
}) => {
  return (
    <ul
      className={`m-0 flex items-baseline space-x-4 pb-[2px] ${justify} ${className}`}
    >
      {SOCIAL_LINKS.map((link, i) => (
        <li
          key={i + "_" + link.url}
          className="transition-all duration-300 hover:text-secondaryColor"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Opens ${link.name} in a new tab.`}
          >
            {React.cloneElement(link.icon, {
              className: [
                link.className || "w-3 md:w-6 h-3 md:h-6",
                "text-current",
              ].join(" "),
            })}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
