import React, { forwardRef } from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  extraClasses?: string;
}

const Wrapper = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      id = "",
      paddingX = "px-8 md:px-24 lg:px-36",
      paddingY = "py-16",
      bgColor = "bg-primaryColor",
      extraClasses,
    },
    ref
  ) => {
    const wrappingElClass = `relative ${paddingY} ${paddingX} ${bgColor} ${extraClasses}`;

    return (
      <div id={id} ref={ref} className={wrappingElClass}>
        {children}
      </div>
    );
  }
);

export default Wrapper;
