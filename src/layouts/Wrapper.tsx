import React from "react";

interface Props {
  children: React.ReactNode;
  id: string;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  extraClasses?: string;
  skewedTop?: boolean;
  skewedEnd?: boolean;
}

const Wrapper: React.FC<Props> = ({
  children,
  id,
  paddingX = "px-8 md:px-24 lg:px-36",
  paddingY = "py-8",
  bgColor = "bg-primaryColor",
  extraClasses,
  skewedTop = false,
  skewedEnd = false,
}) => {
  if (skewedTop) paddingY = "py-10";
  if (skewedEnd) paddingY = "py-10";

  const wrappingElClass = `relative ${paddingY} ${paddingX} ${bgColor} ${
    skewedTop ? "mt-10" : ""
  } ${skewedEnd ? "mb-10" : ""} ${extraClasses}`;

  const skewedClass = `absolute left-0 w-full h-10 bg-secondaryColor rotate-[-1deg]`;

  return (
    <div id={id} className={wrappingElClass}>
      {skewedTop && (
        <div className={skewedClass + " top-0 origin-bottom-left"}></div>
      )}

      {children}

      {skewedEnd && (
        <div className={skewedClass + " bottom-0 origin-bottom-right"}></div>
      )}
    </div>
  );
};

export default Wrapper;
