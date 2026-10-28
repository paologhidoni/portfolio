import type { SimpleIcon } from "simple-icons";
import {
  siAmazonaws,
  siAngular,
  siCss3,
  siCypress,
  siExpo,
  siFigma,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJest,
  siLangchain,
  siNodedotjs,
  siNextdotjs,
  siOpenai,
  siPlaywright,
  siPython,
  siReact,
  siSass,
  siStyledcomponents,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import maestroLight from "../assets/skills/maestro-light.svg";
import maestroDark from "../assets/skills/maestro-dark.svg";

export type SkillIconSource =
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "custom"; light: string; dark: string };

/** Brand icons — transparent SVG, no PNG white boxes */
export const skillIconByName: Record<string, SkillIconSource> = {
  "React Native": { kind: "simple", icon: siReact },
  Expo: { kind: "simple", icon: siExpo },
  "Expo EAS": { kind: "simple", icon: siExpo },
  OpenAI: { kind: "simple", icon: siOpenai },
  LangChain: { kind: "simple", icon: siLangchain },
  Python: { kind: "simple", icon: siPython },
  TypeScript: { kind: "simple", icon: siTypescript },
  "React.js": { kind: "simple", icon: siReact },
  "Next.js": { kind: "simple", icon: siNextdotjs },
  Tailwind: { kind: "simple", icon: siTailwindcss },
  Angular: { kind: "simple", icon: siAngular },
  "Styled Components": { kind: "simple", icon: siStyledcomponents },
  HTML: { kind: "simple", icon: siHtml5 },
  CSS: { kind: "simple", icon: siCss3 },
  JavaScript: { kind: "simple", icon: siJavascript },
  Sass: { kind: "simple", icon: siSass },
  "Node.js": { kind: "simple", icon: siNodedotjs },
  Figma: { kind: "simple", icon: siFigma },
  AWS: { kind: "simple", icon: siAmazonaws },
  "GitHub Actions": { kind: "simple", icon: siGithubactions },
  Maestro: { kind: "custom", light: maestroLight, dark: maestroDark },
  Playwright: { kind: "simple", icon: siPlaywright },
  Cypress: { kind: "simple", icon: siCypress },
  Jest: { kind: "simple", icon: siJest },
  Git: { kind: "simple", icon: siGit },
};

// Dark cards — swap to ivory on low-contrast brand marks
const darkMonochromeSlugs = new Set([
  "amazonaws",
  "git",
  "githubactions",
  "openai",
  "playwright",
]);

export function simpleIconFill(icon: SimpleIcon, theme: "light" | "dark"): string {
  if (theme === "dark" && darkMonochromeSlugs.has(icon.slug)) {
    return "#F7F3EC";
  }
  return `#${icon.hex}`;
}
