import React from "react";
import Wrapper from "../../layouts/Wrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import jsImg from "../../assets/js.png";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import reactImg from "../../assets/react.png";
import nodeImg from "../../assets/node.png";
import angularImg from "../../assets/angular.png";
import awsImg from "../../assets/aws.png";
import typescriptImg from "../../assets/typescript.png";
import cypressImg from "../../assets/cypress.png";
import sassImg from "../../assets/sass.png";
import playwrightImg from "../../assets/playwright.png";
import figmaImg from "../../assets/figma.png";
import gitImg from "../../assets/git.png";
import tailwindImg from "../../assets/tailwind.png";
import jestImg from "../../assets/jest.png";
import nextImg from "../../assets/next.png";
import styledComponentsImg from "../../assets/styled-components.png";
import pythonImg from "../../assets/python.png";
import openAiImg from "../../assets/openai-icon.svg";
import langchainImg from "../../assets/langchain.svg";
import expoImg from "../../assets/expo.webp";
import githubActionsImg from "../../assets/githubactions.png";
import maestroImg from "../../assets/meastro.jpg";

type SkillItem = { name: string; img: string };

type SkillGroup = { title: string; skills: SkillItem[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    skills: [
      { name: "React Native", img: reactImg },
      { name: "Expo", img: expoImg },
    ],
  },
  {
    title: "AI / Agentic",
    skills: [
      { name: "OpenAI", img: openAiImg },
      { name: "LangChain", img: langchainImg },
      { name: "Python", img: pythonImg },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "TypeScript", img: typescriptImg },

      { name: "React.js", img: reactImg },
      { name: "Next.js", img: nextImg },
      { name: "Tailwind", img: tailwindImg },
      { name: "Angular", img: angularImg },
      { name: "Styled Components", img: styledComponentsImg },
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "JavaScript", img: jsImg },
      { name: "Sass", img: sassImg },
      { name: "Node.js", img: nodeImg },
    ],
  },
  {
    title: "Design",
    skills: [{ name: "Figma", img: figmaImg }],
  },
  {
    title: "Cloud / QA / Ops",
    skills: [
      { name: "Expo EAS", img: expoImg },

      { name: "AWS", img: awsImg },
      { name: "GitHub Actions", img: githubActionsImg },
      { name: "Maestro", img: maestroImg },
      { name: "Playwright", img: playwrightImg },
      { name: "Cypress", img: cypressImg },
      { name: "Jest", img: jestImg },
      { name: "Git", img: gitImg },
    ],
  },
];

const Skills: React.FC = () => {
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
                      <img
                        src={skill.img}
                        alt=""
                        className="h-11 w-11 object-contain md:h-12 md:w-12"
                        loading="lazy"
                        decoding="async"
                      />
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
