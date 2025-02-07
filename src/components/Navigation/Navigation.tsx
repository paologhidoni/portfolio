import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../../layouts/Wrapper";
import SocialLinks from "../SocialLinks/SocialLinks";

const Navigation: React.FC = () => {
  const [isScrolledNav, setIsScrolledNav] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("about");
  const navRef = useRef<HTMLDivElement | null>(null);

  const getPositionFromTop = (target: string) => {
    const section = document.getElementById(target);
    const navHeight = navRef.current?.getBoundingClientRect().height || 0;
    return section ? section.offsetTop - navHeight - 28 : 0; // 28 is half the height of the section heading
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.getBoundingClientRect().height || 0;
      const projectsScrollY = getPositionFromTop("projects");
      const skillsScrollY = getPositionFromTop("skills");

      // If the user has scrolled past the nav height, set `isScrolledNav` to `true` (makes it semi-transparent).
      // Otherwise, only update the state if it was previously `true`, ensuring unnecessary re-renders are avoided.
      setIsScrolledNav((prev) =>
        window.scrollY > navHeight ? true : prev !== false && false
      );

      // set active link on user scroll, only when there are changes from prev state
      if (window.scrollY < projectsScrollY) {
        setActiveLink((prev) => (prev !== "about" ? "about" : prev));
      } else if (
        window.scrollY >= projectsScrollY &&
        window.scrollY < skillsScrollY
      ) {
        setActiveLink((prev) => (prev !== "projects" ? "projects" : prev));
      } else {
        setActiveLink((prev) => (prev !== "skills" ? "skills" : prev));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.getAttribute("data-target");
    if (!target) return;

    window.scrollTo({
      top: getPositionFromTop(target),
      behavior: "smooth",
    });
    setActiveLink(target);
  };

  return (
    <Wrapper
      ref={navRef}
      id="navigation"
      paddingY="py-4"
      extraClasses={`navigation sticky top-0 w-full transition-all duration-300 bg-primaryColor min-h-[60px] ${
        isScrolledNav ? "bg-opacity-95" : ""
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
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
];

export default Navigation;
