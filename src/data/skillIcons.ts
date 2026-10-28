import type { SimpleIcon } from "simple-icons";
import {
  siAngular,
  siCss,
  siCypress,
  siFigma,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJest,
  siNodedotjs,
  siNextdotjs,
  siPython,
  siReact,
  siSass,
  siStyledcomponents,
  siTailwindcss,
  siTypescript,
} from "simple-icons/icons";
import maestroLight from "../assets/skills/maestro.png";
import maestroDark from "../assets/skills/maestro.png";
import openaiLight from "../assets/skills/openai-light.svg";
import openaiDark from "../assets/skills/openai-dark.svg";
import langchainLight from "../assets/skills/langchain-light.svg";
import langchainDark from "../assets/skills/langchain-dark.svg";
import awsLight from "../assets/skills/aws-light.svg";
import awsDark from "../assets/skills/aws-dark.svg";
import playwrightLight from "../assets/skills/playwright-light.svg";
import playwrightDark from "../assets/skills/playwright-dark.svg";
import expoLight from "../assets/skills/expo.svg";
import expoDark from "../assets/skills/expo-dark.svg";

export type SkillIconSource =
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "custom"; light: string; dark: string };

/** Brand icons — transparent SVG, no PNG white boxes */
export const skillIconByName: Record<string, SkillIconSource> = {
  "React Native": { kind: "simple", icon: siReact },
  Expo: { kind: "custom", light: expoLight, dark: expoDark },
  "Expo EAS": { kind: "custom", light: expoLight, dark: expoDark },
  OpenAI: { kind: "custom", light: openaiLight, dark: openaiDark },
  LangChain: { kind: "custom", light: langchainLight, dark: langchainDark },
  Python: { kind: "simple", icon: siPython },
  TypeScript: { kind: "simple", icon: siTypescript },
  "React.js": { kind: "simple", icon: siReact },
  "Next.js": { kind: "simple", icon: siNextdotjs },
  Tailwind: { kind: "simple", icon: siTailwindcss },
  Angular: { kind: "simple", icon: siAngular },
  "Styled Components": { kind: "simple", icon: siStyledcomponents },
  HTML: { kind: "simple", icon: siHtml5 },
  CSS: { kind: "simple", icon: siCss },
  JavaScript: { kind: "simple", icon: siJavascript },
  Sass: { kind: "simple", icon: siSass },
  "Node.js": { kind: "simple", icon: siNodedotjs },
  Figma: { kind: "simple", icon: siFigma },
  AWS: { kind: "custom", light: awsLight, dark: awsDark },
  "GitHub Actions": { kind: "simple", icon: siGithubactions },
  Maestro: { kind: "custom", light: maestroLight, dark: maestroDark },
  Playwright: { kind: "custom", light: playwrightLight, dark: playwrightDark },
  Cypress: { kind: "simple", icon: siCypress },
  Jest: { kind: "simple", icon: siJest },
  Git: { kind: "simple", icon: siGit },
};

// Dark cards — swap to ivory on low-contrast brand marks
const darkMonochromeSlugs = new Set([
  "git",
  "githubactions",
  "angular",
  "nextdotjs",
  "expo",
]);

export function simpleIconFill(
  icon: SimpleIcon,
  theme: "light" | "dark",
): string {
  if (theme === "dark" && darkMonochromeSlugs.has(icon.slug)) {
    return "#F7F3EC";
  }
  return `#${icon.hex}`;
}
