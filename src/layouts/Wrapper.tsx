import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  extraClasses?: string;
}

const Wrapper: React.FC<Props> = ({
  children,
  id = "",
  paddingX = "px-8 md:px-24 lg:px-36",
  paddingY = "py-16",
  bgColor = "bg-primaryColor",
  extraClasses,
}) => {
  const wrappingElClass = `relative ${paddingY} ${paddingX} ${bgColor} ${extraClasses}`;

  return (
    <div id={id} className={wrappingElClass}>
      {children}
    </div>
  );
};

export default Wrapper;
