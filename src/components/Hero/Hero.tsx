import React from "react";
import Wrapper from "../../layouts/Wrapper";

const Hero: React.FC = () => {
  return (
    <Wrapper id="hero" paddingY="pt-6 pb-24 md:pt-10 md:pb-36">
      <header className="text-center max-w-2xl m-auto">
        <h1 className="text-secondaryColor text-4xl md:text-7xl mb-6">
          PAOLO <span className="text-white italic">GHIDONI</span>
          <span className="text-2xl md:text-4xl mt-6 mb-8 block text-white">
            Full stack developer
          </span>
        </h1>

        <p className="leading-6 md:leading-8 md:text-lg">
          I am a Software Developer with a passion for building intuitive,
          user-focused applications that make a tangible difference in people’s
          lives. <br /> I combine technical expertise with a commitment to
          meaningful innovation.
        </p>
      </header>
    </Wrapper>
  );
};

export default Hero;
