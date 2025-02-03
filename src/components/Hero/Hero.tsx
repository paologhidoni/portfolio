import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="text-center max-w-xl m-auto">
      <h1 className="text-secondaryColor text-6xl mb-6">
        PAOLO <span className="text-white italic">GHIDONI</span>
        <span className="text-4xl mt-6 mb-8 block text-white">
          Full stack developer
        </span>
      </h1>

      <p className="leading-8">
        I am a Software Developer with a passion for building intuitive,
        user-focused applications that make a tangible difference in people’s
        lives. <br /> I combine technical expertise with a commitment to
        meaningful innovation.
      </p>
    </header>
  );
};

export default Hero;
