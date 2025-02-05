import React from "react";
import Wrapper from "../../layouts/Wrapper";
import SectionHeading from "../SectionHeading/SectionHeading";

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
