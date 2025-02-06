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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative">
      <SectionHeading title="Skills" />

      <Wrapper
        bgColor="bg-white"
        skewedTop={true}
        skewedEnd={true}
        extraClasses="text-black font-bold text-primaryColor"
      >
        <div className="grid grid-cols-4 md:grid-cols-5 gap-12 py-12">
          <img
            src={htmlImg}
            alt="HTML"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={cssImg}
            alt="CSS"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={jsImg}
            alt="JavaScript"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={sassImg}
            alt="Sass"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={gitImg}
            alt="Git"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={nodeImg}
            alt="Node.js"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={reactImg}
            alt="React"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={angularImg}
            alt="Angular"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={typescriptImg}
            alt="TypeScript"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={awsImg}
            alt="Aws"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={figmaImg}
            alt="Figma"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={cypressImg}
            alt="Cypress"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={playwrightImg}
            alt="Playwright"
            className="w-20 h-auto justify-self-center"
          />
          <img
            src={tailwindImg}
            alt="Tailwind"
            className="w-20 h-auto justify-self-center"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          deleniti sunt illo fugit, nostrum libero sed ipsa dolorem architecto?
          Quis, facere delectus dolores rem animi rerum veritatis ipsum
          reprehenderit quisquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus debitis id nemo molestiae quam nihil eos
          dolores non, obcaecati aut repellat odit vel reprehenderit eveniet ea,
          vero tempore, nostrum est. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime velit vel sed praesentium, placeat ducimus
          vero facilis eligendi assumenda id! Voluptatem reiciendis natus
          assumenda architecto eveniet dolorem! Repudiandae, repellendus
          numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident voluptas neque deserunt pariatur, vitae officia incidunt.
          Officiis, aliquid nulla. Deleniti molestias ipsa fugiat omnis error
          necessitatibus adipisci facere amet quibusdam!
        </p>
      </Wrapper>
    </section>
  );
};

export default Skills;
