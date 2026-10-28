import React from "react";
import { SiCodewars, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import type { Theme } from "../../hooks/useTheme";

interface Props {
  justify?: string;
  className?: string;
  theme?: Theme;
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/paologhidoni/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/paologhidoni",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/IamPaolo/",
  },
  {
    name: "Codewars",
    icon: SiCodewars,
    url: "https://www.codewars.com/users/PaoloGhidoni",
  },
];

const SocialLinks: React.FC<Props> = ({
  justify = "justify-center md:justify-end",
  className = "text-white",
}) => {
  return (
    <ul
      className={`m-0 flex items-center space-x-4 ${justify} ${className}`}
    >
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <li
            key={link.url}
            className="transition-transform duration-200 hover:scale-110"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Opens ${link.name} in a new tab.`}
              className="inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 hover:text-secondaryColor focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondaryColor"
            >
              <Icon
                className="h-5 w-5 md:h-[22px] md:w-[22px] text-current"
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
