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

type SkillItem = { name: string; img: string };

type SkillGroup = { title: string; skills: SkillItem[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    skills: [
      { name: "React.js", img: reactImg },
      { name: "TypeScript", img: typescriptImg },
      { name: "Expo / RN", img: expoImg },
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
      { name: "Next.js", img: nextImg },
      { name: "Tailwind", img: tailwindImg },
      { name: "Angular", img: angularImg },
      { name: "Styled Components", img: styledComponentsImg },
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "JavaScript", img: jsImg },
      { name: "Sass", img: sassImg },
      { name: "Node.js", img: nodeImg },
      { name: "Figma", img: figmaImg },
    ],
  },
  {
    title: "Cloud / QA / Ops",
    skills: [
      { name: "AWS", img: awsImg },
      { name: "Expo EAS", img: expoImg },
      { name: "Playwright", img: playwrightImg },
      { name: "Cypress", img: cypressImg },
      { name: "Jest", img: jestImg },
      { name: "Git", img: gitImg },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative pb-16">
      <SectionHeading title="Skills" />

      <Wrapper
        bgColor="bg-white"
        extraClasses="text-black font-bold text-primaryColor"
        paddingY="py-12 md:py-16"
      >
        {/* Skill groups */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg md:text-xl mb-4 text-center md:text-left border-b border-primaryColor/20 pb-2">
                {group.title}
              </h3>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
                {group.skills.map((skill) => (
                  <li
                    key={`${group.title}-${skill.name}`}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <img
                      src={skill.img}
                      alt=""
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-xs md:text-sm font-semibold leading-tight">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
