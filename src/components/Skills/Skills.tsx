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

const skills = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "Sass", img: sassImg },
  { name: "Git", img: gitImg },
  { name: "Node.js", img: nodeImg },
  { name: "React.js", img: reactImg },
  { name: "Angular.js", img: angularImg },
  { name: "Next.js", img: nextImg },
  { name: "TypeScript", img: typescriptImg },
  { name: "AWS", img: awsImg },
  { name: "Figma", img: figmaImg },
  { name: "Cypress", img: cypressImg },
  { name: "Playwright", img: playwrightImg },
  { name: "Jest", img: jestImg },
  { name: "Tailwind", img: tailwindImg },
  { name: "Styled Components", img: styledComponentsImg },
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
