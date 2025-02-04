import React, { useState, useEffect } from "react";
import Wrapper from "../../layouts/Wrapper";
import { VscGithub } from "react-icons/vsc";
import { SiCodewars, SiLeetcode } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.getAttribute("data-target");
    if (!target) return;

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(target);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 w-full transition-all duration-300 bg-primaryColor ${
        isScrolled ? "bg-opacity-90" : null
      }`}
      style={{ minHeight: "60px" }}
    >
      <Wrapper paddingY="py-4">
        <nav className=" text-white flex justify-center md:justify-between items-center flex-wrap gap-2 sm:gap-4">
          <ul className="flex space-x-4">
            {NAV_LINKS.map((link, i) => (
              <li
                key={i + "_" + link.label}
                className="transition-all duration-300 hover:text-secondaryColor"
              >
                <button
                  data-target={link.target}
                  onClick={handleNavigate}
                  className={`${
                    activeLink === link.target ? "text-secondaryColor" : ""
                  } hover:underline underline-offset-8`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <ul className="flex m-0 space-x-4 items-baseline pb-[2px] justify-center">
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
                    className: link.className || "w-6 h-6",
                  })}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </div>
  );
};

const NAV_LINKS = [
  { label: "About", target: "container" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: <GrLinkedinOption />,
    url: "https://www.linkedin.com/in/paologhidoni/",
    className: "w-7 h-7",
  },
  {
    name: "GitHub",
    icon: <VscGithub />,
    url: "https://github.com/paologhidoni",
    className: "w-6 h-6",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/IamPaolo/",
    className: "w-6 h-6",
  },
  {
    name: "Code Wars",
    icon: <SiCodewars />,
    url: "https://www.codewars.com/users/PaoloGhidoni",
    className: "w-6 h-6",
  },
];

export default Navigation;
