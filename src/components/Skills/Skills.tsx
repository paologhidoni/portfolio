import React from "react";
import Wrapper from "../../layouts/Wrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import { skillIconByName, simpleIconFill } from "../../data/skillIcons";
import { Theme } from "../../hooks/useTheme";

type SkillItem = { name: string };

type SkillGroup = { title: string; skills: SkillItem[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
    ],
  },
  {
    title: "AI / Agentic",
    skills: [
      { name: "OpenAI" },
      { name: "LangChain" },
      { name: "Python" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Angular" },
      { name: "Styled Components" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Sass" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Design",
    skills: [{ name: "Figma" }],
  },
  {
    title: "Cloud / QA / Ops",
    skills: [
      { name: "Expo EAS" },
      { name: "AWS" },
      { name: "GitHub Actions" },
      { name: "Maestro" },
      { name: "Playwright" },
      { name: "Cypress" },
      { name: "Jest" },
      { name: "Git" },
    ],
  },
];

const SkillIcon: React.FC<{ skillName: string; theme: Theme }> = ({ skillName, theme }) => {
  const iconSource = skillIconByName[skillName];

  if (!iconSource) {
    return null;
  }

  if (iconSource.kind === "custom") {
    const iconSrc = theme === "dark" ? iconSource.dark : iconSource.light;
    return (
      <img
        src={iconSrc}
        alt=""
        className="h-11 w-11 object-contain md:h-12 md:w-12"
        loading="lazy"
        decoding="async"
      />
    );
  }

  // Simple icon
  const fill = simpleIconFill(iconSource.icon, theme);
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-11 w-11 md:h-12 md:w-12"
      fill={fill}
    >
      <title>{skillName}</title>
      <path d={iconSource.icon.path} />
    </svg>
  );
};

const Skills: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <section
      id="skills"
      className="project-surface relative overflow-hidden rounded-t-[2rem] pb-12 pt-16 text-ink md:rounded-t-[2.5rem] md:pb-16 md:pt-20"
    >
      {/* Above pattern wash */}
      <div className="relative z-10">
        <SectionHeading title="Skills" variant="onLight" />

        <Wrapper
          bgColor="bg-transparent"
          extraClasses="text-ink"
          paddingX="px-5 md:px-10 lg:px-14"
          paddingY="py-0"
        >
          {/* Skill groups */}
          <div className="mx-auto max-w-6xl space-y-12 md:space-y-14">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-ink md:mb-6 md:text-sm">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 md:gap-7">
                  {group.skills.map((skill) => (
                    <li
                      key={`${group.title}-${skill.name}`}
                      className="flex flex-col items-center gap-3 rounded-2xl bg-surfaceRaised p-4 text-center shadow-md md:p-5"
                    >
                      <SkillIcon skillName={skill.name} theme={theme} />
                      <span className="text-[11px] font-bold leading-tight text-ink md:text-xs">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Skills;
