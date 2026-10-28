import React, { useState, useEffect, useRef } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import Wrapper from "../../layouts/Wrapper";
import SocialLinks from "../SocialLinks/SocialLinks";
import type { Theme } from "../../hooks/useTheme";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

const Navigation: React.FC<Props> = ({ theme, onToggleTheme }) => {
  const [isScrolledNav, setIsScrolledNav] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("about");
  const navRef = useRef<HTMLDivElement | null>(null);
  const isNavigating = useRef(false);

  const getPositionFromTop = (target: string) => {
    const section = document.getElementById(target);
    const navHeight = navRef.current?.getBoundingClientRect().height || 0;
    return section ? section.offsetTop - navHeight - 28 : 0; // 28 is half the height of the section heading
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) return; // Prevent running while navigating

      const navHeight = navRef.current?.getBoundingClientRect().height || 0;
      const workProjectsPositionY = getPositionFromTop("work-projects");
      const skillsPositionY = getPositionFromTop("skills");

      // If the user has scrolled past the nav height, set `isScrolledNav` to `true` (makes it semi-transparent).
      // Otherwise, only update the state if it was previously `true`, ensuring unnecessary re-renders are avoided.
      setIsScrolledNav((prev) =>
        window.scrollY > navHeight ? true : prev !== false && false
      );

      // set active link on user scroll, only when there are changes from prev state
      if (window.scrollY < workProjectsPositionY) {
        setActiveLink((prev) => (prev !== "about" ? "about" : prev));
      } else if (
        // - 50 is to compensate skills not being "tall" enough to trigger it as active link, will remove when skills is "tall" enough
        window.scrollY >= workProjectsPositionY - 50 &&
        window.scrollY < skillsPositionY - 50
      ) {
        setActiveLink((prev) =>
          prev !== "work-projects" ? "work-projects" : prev
        );
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

    isNavigating.current = true;

    window.scrollTo({
      top: getPositionFromTop(target),
      behavior: "smooth",
    });
    setActiveLink(target);

    // Re-enable handleScroll after the scrolling animation (~600ms for smooth behavior, 700 to avoid glitch)
    setTimeout(() => {
      isNavigating.current = false;
    }, 700);
  };

  return (
    <Wrapper
      ref={navRef}
      id="navigation"
      paddingX="px-4 md:px-6 lg:px-10"
      paddingY="py-4"
      bgColor="bg-canvas"
      extraClasses={`site-nav navigation sticky top-0 z-[1000] w-full min-h-[60px] text-white shadow-sm shadow-black/20 transition-shadow duration-300 ${
        isScrolledNav ? "shadow-md" : ""
      }`}
    >
      {/* Same rail as project cards */}
      <nav className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 md:flex-row md:justify-between">
        <ul className="flex justify-center space-x-1 text-sm md:justify-start md:space-x-2 md:text-base">
          {NAV_LINKS.map((link, i) => (
            <li
              key={i + "_" + link.label}
              className="transition-colors duration-200"
            >
              <button
                data-target={link.target}
                onClick={handleNavigate}
                className={`nav-link rounded-full px-3 py-1.5 font-medium text-white/90 transition duration-300 ease-out hover:bg-white/10 hover:text-secondaryColor ${
                  activeLink === link.target
                    ? "is-active bg-white/10 text-secondaryColor"
                    : ""
                }`}
                aria-label={`${link.label}. ${
                  activeLink === link.target ? "Current section." : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme + socials */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="nav-icon-btn rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-secondaryColor"
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
          >
            {theme === "light" ? (
              <HiMoon className="h-5 w-5" />
            ) : (
              <HiSun className="h-5 w-5" />
            )}
          </button>
          <SocialLinks
            justify="justify-center"
            className="nav-social text-white/90"
          />
        </div>
      </nav>
    </Wrapper>
  );
};

const NAV_LINKS = [
  { label: "About", target: "about" },
  { label: "Work & Projects", target: "work-projects" },
  { label: "Skills", target: "skills" },
];

export default Navigation;
