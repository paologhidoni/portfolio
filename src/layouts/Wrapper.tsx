import React from "react";

interface Props {
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  extraClasses?: string;
}

const Wrapper: React.FC<Props> = ({
  children,
  paddingX = "px-8",
  paddingY = "py-8",
  bgColor = "bg-primaryColor",
  extraClasses,
}) => {
  return (
    <div className={`${paddingY} ${paddingX} ${bgColor} ${extraClasses}`}>
      {children}
    </div>
  );
};

export default Wrapper;
