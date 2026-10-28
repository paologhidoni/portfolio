export type TechCategory =
  | "Mobile"
  | "AI / Agentic"
  | "Web"
  | "Backend / Data"
  | "Auth / Product"
  | "Cloud / QA / Ops"
  | "Design"
  | "Other";

const CATEGORY_ORDER: TechCategory[] = [
  "Mobile",
  "AI / Agentic",
  "Web",
  "Backend / Data",
  "Auth / Product",
  "Cloud / QA / Ops",
  "Design",
  "Other",
];

// Map tech labels → category (case-insensitive lookup)
const TECH_CATEGORY: Record<string, TechCategory> = {
  "react native": "Mobile",
  expo: "Mobile",
  "expo router": "Mobile",
  "expo eas": "Mobile",
  "expo push notifications": "Mobile",
  "biometric app lock": "Mobile",
  "biometric authentication": "Mobile",
  "deep linking": "Mobile",

  openai: "AI / Agentic",
  "openai api": "AI / Agentic",
  "openai gpt-4o-mini": "AI / Agentic",
  langchain: "AI / Agentic",
  "llama.rn": "AI / Agentic",
  lora: "AI / Agentic",
  "generative ui": "AI / Agentic",
  "hugging face": "AI / Agentic",
  python: "AI / Agentic",

  typescript: "Web",
  react: "Web",
  "react.js": "Web",
  "next.js": "Web",
  angular: "Web",
  tailwind: "Web",
  "styled components": "Web",
  html: "Web",
  html5: "Web",
  css: "Web",
  css3: "Web",
  javascript: "Web",
  sass: "Web",
  bootstrap: "Web",
  highcharts: "Web",
  recharts: "Web",
  "react router": "Web",
  "tanstack query": "Web",
  zustand: "Web",
  zod: "Web",
  i18next: "Web",
  lucide: "Web",
  "node.js": "Web",

  supabase: "Backend / Data",
  postgresql: "Backend / Data",
  "row level security": "Backend / Data",
  "deno edge functions": "Backend / Data",
  sqlite: "Backend / Data",
  "aws lambda": "Backend / Data",
  "aws s3": "Backend / Data",
  "aws cognito": "Backend / Data",
  "aws dynamodb": "Backend / Data",
  aws: "Backend / Data",
  "vercel serverless functions": "Backend / Data",
  "upstash redis": "Backend / Data",
  "rawg api": "Backend / Data",

  "google oauth": "Auth / Product",
  "apple sign-in": "Auth / Product",
  "apple sign-in (oauth)": "Auth / Product",
  revenuecat: "Auth / Product",
  posthog: "Auth / Product",
  sentry: "Auth / Product",

  jest: "Cloud / QA / Ops",
  vitest: "Cloud / QA / Ops",
  maestro: "Cloud / QA / Ops",
  playwright: "Cloud / QA / Ops",
  cypress: "Cloud / QA / Ops",
  mocha: "Cloud / QA / Ops",
  chai: "Cloud / QA / Ops",
  sinon: "Cloud / QA / Ops",
  "github actions": "Cloud / QA / Ops",
  git: "Cloud / QA / Ops",

  figma: "Design",
  photoshop: "Design",
};

export type TechGroup = { category: TechCategory; skills: string[] };

export function groupTechnologies(technologies: string[]): TechGroup[] {
  const buckets = new Map<TechCategory, string[]>();

  for (const tech of technologies) {
    const key = tech.trim().toLowerCase();
    const category = TECH_CATEGORY[key] ?? "Other";
    const list = buckets.get(category) ?? [];
    list.push(tech);
    buckets.set(category, list);
  }

  return CATEGORY_ORDER.filter((category) => buckets.has(category)).map(
    (category) => ({
      category,
      skills: buckets.get(category) ?? [],
    })
  );
}
