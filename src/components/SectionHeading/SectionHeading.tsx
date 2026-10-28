import React from "react";

interface Props {
  title: string;
  variant?: "onDark" | "onLight";
}

const SectionHeading: React.FC<Props> = ({
  title,
  variant = "onDark",
}) => {
  const onLight = variant === "onLight";

  return (
    <div className="mb-14 text-center md:mb-20">
      {/* Section label */}
      <h2
        className={`text-3xl font-semibold uppercase tracking-[0.18em] md:tracking-[0.2em] ${
          onLight ? "text-ink" : "text-secondaryColor"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
