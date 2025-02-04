import React from "react";

interface Props {
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
}

const Wrapper: React.FC<Props> = ({
  children,
  paddingX = "px-8",
  paddingY = "py-8",
  bgColor = "bg-primaryColor",
}) => {
  return <div className={`${paddingY} ${paddingX} ${bgColor}`}>{children}</div>;
};

export default Wrapper;
