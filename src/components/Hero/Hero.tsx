import React from "react";
import Wrapper from "../../layouts/Wrapper";
import { HiChevronDown } from "react-icons/hi";
import heroBg from "../../assets/hero-bg.jpg";
import scrollDown from "../../assets/scroll-down.gif";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("work-projects");
    if (!section) return;

    const nav = document.getElementById("navigation");
    const navHeight = nav?.getBoundingClientRect().height ?? 0;

    window.scrollTo({
      top: section.offsetTop - navHeight - 12,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Unsplash: modern glass architecture at dusk */}
      <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden>
        <img
          src={heroBg}
          alt=""
          className="hero-photo h-full w-full scale-105 object-cover object-center"
        />
        {/* Faded scrim — photo visible, copy stays readable */}
        <div className="hero-scrim-stack" />
      </div>

      <Wrapper
        bgColor="bg-transparent"
        paddingY="pt-12 pb-10 md:pb-14 md:pt-20"
        extraClasses="relative z-10"
      >
        <header className="m-auto max-w-5xl text-center text-white">
          {/* Name block */}
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-secondaryColor">Paolo</span>{" "}
            <span className="font-normal">Ghidoni</span>
            {/* Role line */}
            <span className="mt-6 mb-8 block text-lg font-normal leading-snug text-white/95 md:text-xl">
              Full-stack engineer · Agentic AI · React Native
            </span>
          </h1>

          {/* Bio */}
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed tracking-wide text-white/95 md:text-lg md:leading-relaxed">
            <p>
              I am a Software Developer with a passion for building intuitive,
              user-focused applications that make a tangible difference in
              people’s lives.
            </p>
            <p>
              I combine technical expertise with a commitment to meaningful
              innovation.
            </p>
          </div>

          {/* Scroll to Work & Projects */}
          <button
            type="button"
            onClick={scrollToProjects}
            className="mx-auto mt-10 block text-white/55 transition hover:opacity-80 hover:text-secondaryColor md:mt-12"
            aria-label="Scroll to Work and Projects"
          >
            {/* Mobile: chevron; desktop: mouse scroll gif */}
            <HiChevronDown className="mx-auto h-7 w-7 animate-bounce md:hidden" />
            <img
              src={scrollDown}
              alt=""
              className="mx-auto hidden w-10 md:inline"
            />
          </button>
        </header>
      </Wrapper>
    </section>
  );
};

export default Hero;
