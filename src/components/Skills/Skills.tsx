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

const skills = [
  { name: "LangChain", img: langchainImg },
  { name: "OpenAi", img: openAiImg },
  { name: "React.js", img: reactImg },
  { name: "Next.js", img: nextImg },
  { name: "Tailwind", img: tailwindImg },
  { name: "TypeScript", img: typescriptImg },
  { name: "Styled Components", img: styledComponentsImg },
  { name: "Python", img: pythonImg },
  { name: "Node.js", img: nodeImg },
  { name: "AWS", img: awsImg },
  { name: "Playwright", img: playwrightImg },
  { name: "Cypress", img: cypressImg },
  { name: "Jest", img: jestImg },
  { name: "Angular.js", img: angularImg },
  { name: "Figma", img: figmaImg },
  { name: "Git", img: gitImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "Sass", img: sassImg },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative">
      <SectionHeading title="Skills" />

      <Wrapper
        bgColor="bg-white"
        extraClasses="text-black font-bold text-primaryColor"
      >
        <ul className="grid grid-cols-4 md:grid-cols-5 gap-12 pt-6">
          {skills.map((skill, index) => (
            <li key={index + "_" + skill.name}>
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-auto justify-self-center"
              />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Skills;
