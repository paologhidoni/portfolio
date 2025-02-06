import React, { useState, useEffect } from "react";
import Wrapper from "../../layouts/Wrapper";
import SocialLinks from "../SocialLinks/SocialLinks";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.getAttribute("data-target");
    if (!target) return;

    const navigation = document.querySelector(".navigation");
    const navHeight = navigation?.getBoundingClientRect().height || 0;

    const section = document.getElementById(target);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight - 26,
        behavior: "smooth",
      });
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
    <Wrapper
      id="navigation"
      paddingY="py-4"
      extraClasses={`navigation sticky top-0 w-full transition-all duration-300 bg-primaryColor min-h-[60px] ${
        isScrolled ? "bg-opacity-95" : ""
      } z-[1000]`}
    >
      <nav className="text-white items-center grid gap-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <ul className="text-lg flex space-x-4 justify-center md:justify-start">
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
                aria-label={`${link.label}. ${
                  activeLink === link.target ? "Current section." : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <SocialLinks />
      </nav>
    </Wrapper>
  );
};

const NAV_LINKS = [
  { label: "About", target: "container" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
];

export default Navigation;
