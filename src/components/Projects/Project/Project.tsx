import React, { useEffect, useRef, useState } from "react";
import AiIcon from "../../../assets/ai-white.svg";
import { groupTechnologies } from "../../../data/techCategories";
import SectionHeading from "../../SectionHeading/SectionHeading";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live: string;
  website?: string;
  aiPowered?: boolean;
  roundBottom?: boolean;
  altSurface?: boolean;
  sectionLabel?: string;
}

const Project: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
  live,
  website,
  aiPowered,
  roundBottom = false,
  altSurface = false,
  sectionLabel,
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLAnchorElement>(null);
  // Focus toggles with mid-viewport; pills stay after first focus
  const [focused, setFocused] = useState(false);
  const [pillsAnimating, setPillsAnimating] = useState(false);
  const pillsPlayedRef = useRef(false);

  // Scale while card crosses ~50vh; reset when it leaves
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const mid = window.innerHeight * 0.5;
        const crossesMid = rect.top < mid && rect.bottom > mid;
        setFocused(crossesMid);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pill drop once on first focus
  useEffect(() => {
    if (!focused || pillsPlayedRef.current) return;
    pillsPlayedRef.current = true;
    const id = requestAnimationFrame(() => setPillsAnimating(true));
    return () => cancelAnimationFrame(id);
  }, [focused]);

  // Primary link config
  const primaryLink = github
    ? {
        href: github,
        label: "View on GitHub",
        ariaLabel: `View the ${title} project on GitHub`,
      }
    : website
      ? {
          href: website,
          label: "View Website",
          ariaLabel: `View the ${title} project website`,
        }
      : null;

  // Card link treatment
  const linkClassName =
    "inline-flex origin-left items-center text-base font-bold text-ink underline decoration-secondaryColor decoration-4 underline-offset-4 transition duration-200 hover:scale-110 hover:decoration-orange-500 lg:text-sm";

  const techGroups = groupTechnologies(technologies);

  return (
    <article
      ref={cardRef}
      id={id}
      className={`project-surface group w-full overflow-x-clip text-ink ${
        altSurface ? "project-surface-alt" : ""
      } ${
        roundBottom
          ? "overflow-hidden rounded-b-[2rem] md:rounded-b-[2.5rem]"
          : ""
      }`}
    >
      {/* Content rail inside full-bleed surface */}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-10 ${
          sectionLabel
            ? "pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20"
            : "py-12 md:py-16 lg:py-20"
        }`}
      >
        {sectionLabel ? (
          <SectionHeading title={sectionLabel} variant="onLight" />
        ) : null}

        <div className="flex flex-col gap-8 md:gap-9 lg:gap-10">
          {/* Mobile: copy then image; lg: image left, copy right */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
            {/* Copy column */}
            <div className="order-1 flex min-w-0 flex-1 flex-col lg:order-2">
              <h3
                className={`origin-left text-2xl font-bold tracking-tight text-ink transition duration-500 ease-out md:text-2xl ${
                  focused ? "scale-[1.12] max-lg:scale-100" : "scale-100"
                }`}
              >
                {title}
              </h3>
              <p className="mt-4 text-pretty text-lg font-normal leading-7 text-ink md:text-[17px] md:leading-7">
                {description}
              </p>

              {/* Project links */}
              <div className="mt-auto flex w-full flex-wrap items-center justify-between gap-y-3 pt-8 lg:justify-start lg:gap-x-10">
                {primaryLink ? (
                  <a
                    href={primaryLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClassName}
                    aria-label={primaryLink.ariaLabel}
                  >
                    {primaryLink.label} →
                  </a>
                ) : null}
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                  aria-label={`See the ${title} project Live`}
                >
                  See Live →
                </a>
              </div>
            </div>

            {/* Preview column */}
            <div className="order-2 w-full min-w-0 lg:order-1 lg:max-w-lg lg:flex-shrink-0 xl:max-w-xl">
              <a
                ref={previewRef}
                href={live}
                target="_blank"
                rel="noreferrer"
                className={`relative block origin-center overflow-hidden transition duration-500 ease-out ${
                  focused ? "scale-[1.03] max-lg:scale-100" : "scale-100"
                }`}
                aria-label={`See the ${title} project Live`}
              >
                {/* AI ribbon badge */}
                {aiPowered && (
                  <div
                    className={`absolute top-[28px] -right-[40px] z-10 flex w-[180px] origin-center rotate-45 items-center justify-center gap-2 border-y border-blue-400/30 bg-gradient-to-r from-blue-600 to-purple-700 py-1.5 shadow-xl transition duration-500 ease-out ${
                      focused ? "scale-110 max-lg:scale-100" : "scale-100"
                    }`}
                  >
                    <img src={AiIcon} alt="" className="h-6 w-6" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                      Powered
                    </span>
                  </div>
                )}

                <img
                  src={image}
                  alt={title}
                  className={`h-64 w-full max-w-full object-cover object-top transition duration-500 ease-out ${
                    focused ? "scale-[1.04] max-lg:scale-100" : "scale-100"
                  }`}
                />
              </a>
            </div>
          </div>

      {/* Tech columns: equal width, table-style dividers */}
      <div
        className={`mt-4 grid overflow-hidden md:mt-6 ${
          techGroups.length <= 1
            ? "grid-cols-1"
            : "grid-cols-1 border-l border-t border-ink/20 sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--tech-cols),minmax(0,1fr))]"
        }`}
        style={{ ["--tech-cols" as string]: String(techGroups.length) }}
      >
        {techGroups.map((group, groupIndex) => {
          const skillsBefore = techGroups
            .slice(0, groupIndex)
            .reduce((sum, g) => sum + g.skills.length, 0);
          const multi = techGroups.length > 1;
          // Odd last item spans full row on sm 2-col
          const spanFullOnSm =
            multi &&
            techGroups.length % 2 === 1 &&
            groupIndex === techGroups.length - 1;

          return (
            <div
              key={group.category}
              className={`min-w-0 px-5 py-5 text-left md:px-6 md:py-6 ${
                multi ? "border-b border-r border-ink/20" : ""
              } ${spanFullOnSm ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Category title */}
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                {group.category}
              </p>
              {/* Skill pills */}
              <ul className="flex flex-wrap justify-start gap-2.5">
                {group.skills.map((tech, skillIndex) => {
                  const dropIndex = skillsBefore + skillIndex;

                  return (
                    <li
                      key={tech}
                      className={`skill-pill rounded-full px-3 py-1 text-xs font-bold text-ink md:text-sm ${
                        pillsAnimating ? "pill-drop-in" : "pill-drop"
                      }`}
                      style={
                        pillsAnimating
                          ? {
                              animationName: "pill-drop-in",
                              animationDuration: "0.7s",
                              animationTimingFunction:
                                "cubic-bezier(0.22, 1, 0.36, 1)",
                              animationDelay: `${dropIndex * 90}ms`,
                              animationFillMode: "both",
                            }
                          : {
                              opacity: 0,
                              transform: "translateY(-18px) scale(0.85)",
                            }
                      }
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
