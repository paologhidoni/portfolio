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
      paddingX = "px-5 md:px-10 lg:px-14 xl:px-16",
      paddingY = "py-16",
      bgColor = "bg-canvas",
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
