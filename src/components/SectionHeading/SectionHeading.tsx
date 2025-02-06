import React from "react";

interface Props {
  title: string;
}

const SectionHeading: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-3xl mb-10 clip-polygon-wave-top absolute top-0 left-0 right-0 transform -translate-y-1/2 m-auto w-max bg-primaryColor p-2 z-50 border-2 border-secondaryColor">
      {title.toUpperCase()}
    </h1>
  );
};

export default SectionHeading;
