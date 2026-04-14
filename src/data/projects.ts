import huksoImg from "../assets/hukso.png";
import musicPlayerImg from "../assets/music-player.png";
import facQuestImg from "../assets/facquest.png";
import facApplicationImg from "../assets/facApplication.png";
import ticTacToeImg from "../assets/tictactoe.png";
import investmentImg from "../assets/investmentcalculator.png";
// import workInProgressImg from "../assets/inprogress.jpg";
import gamekitImg from "../assets/gamekit.png";
import hairTrackerImg from "../assets/hairtracker.png";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live: string;
  website?: string;
  aiPowered?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "project-8",
    title: "HairTracker",
    description:
      "I worked as Full-Stack Developer on HairTracker. HairTracker is a modern, easy-to-use app that puts you in charge of your client records. It lets you securely store everything you need in one place, from hair photos and formulas to detailed client notes, all from your phone or tablet. No more guessing what you did last time, and no more awkward moments forgetting a client's colour or cut. With HairTracker, you'll walk into every appointment confident, prepared, and professional.",
    image: hairTrackerImg,
    technologies: [
      "React Native",
      "TypeScript",
      "Zustand",
      "Expo EAS",
      "Expo Router",
      "AWS Lambda",
      "AWS S3",
      "AWS Cognito",
      "AWS DynamoDB",
      "Deep Linking",
      "Google OAuth",
      "Apple Sign-In (OAuth)",
      "Biometric Authentication",
      "Zod",
      "Maestro",
      "GitHub Actions",
    ],
    website: "https://hairtracker.app/",
    live: "https://play.google.com/store/apps/details?id=app.hairtracker&pli=1",
  },
  {
    id: "project-7",
    title: "GameKit",
    description:
      "A full-stack Game Discovery Platform featuring AI-powered natural language search built with React, TypeScript and OpenAI GPT-4o-mini. Discover games through conversational queries like 'cozy RPG games on Game Boy' with intelligent LLM validation, hybrid scoring algorithms and distributed rate limiting via Upstash Redis. Each game also offers an AI assistant with threaded follow-ups for detailed questions. Integrates Vercel serverless functions, Supabase authentication, RAWG API, TanStack Query for state management and a responsive Tailwind CSS design with custom themes. Automated testing via GitHub Actions workflow using Vitest for unit and API coverage and Playwright for end-to-end browser flows.",
    image: gamekitImg,
    technologies: [
      "React",
      "TypeScript",
      "OpenAI GPT-4o-mini",
      "Vercel Serverless Functions",
      "Upstash Redis",
      "TanStack Query",
      "React Router",
      "Tailwind",
      "RAWG API",
      "Supabase",
      "Lucide",
      "Vitest",
      "Playwright",
      "GitHub Actions",
    ],
    github: "https://github.com/paologhidoni/gamekit",
    live: "https://gamekit-six.vercel.app/",
    aiPowered: true,
  },
  {
    id: "project-6",
    title: "Investment Calculator",
    description:
      "An investment calculator app that helps users visualize investment growth by inputting initial investment, annual contributions, expected return and investment duration. The app provides a yearly breakdown of investment, returns and total value, displayed in an interactive line chart. It is fully responsive and accessible, allowing users to toggle chart metrics, view results in their chosen currency and interact with the app in an intuitive, user-friendly way.",
    image: investmentImg,
    technologies: ["React", "TypeScript", "Tailwind", "Recharts"],
    github: "https://github.com/paologhidoni/investmentcalculator",
    live: "https://paologhidoni.github.io/investmentcalculator/",
  },
  {
    id: "project-5",
    title: "Tic Tac Toe",
    description:
      "I built a Tic-Tac-Toe game for fun and to practice React, TypeScript and styling. It is fully responsive and features a hidden audio player that can be toggled on and off.",
    image: ticTacToeImg,
    technologies: ["React", "Typescript", "Css"],
    github: "https://github.com/paologhidoni/tictactoe",
    live: "https://paologhidoni.github.io/tictactoe/",
  },
  {
    id: "project-4",
    title: "Hukso",
    description:
      "Website for a Scandinavian startup. I provided the client with Laptop, mobile and tablet website mockups designed with Photoshop. I then wrote the code to generate a responsive, light website.",
    image: huksoImg,
    technologies: ["Html", "Sass"],
    github: "https://github.com/paologhidoni/hukso",
    live: "https://paologhidoni.github.io/hukso/",
  },
  {
    id: "project-3",
    title: "Music Player",
    description:
      "A music player that combines my passions for coding and music production. This simple yet functional music player allows users to play, shuffle, pause, skip and go back to previous songs. Built with HTML, JavaScript and CSS, the player features intuitive controls for seamless navigation through tracks, creating a smooth listening experience.",
    image: musicPlayerImg,
    technologies: ["Html", "JavaScript", "Css"],
    github: "https://github.com/paologhidoni/musicplayer",
    live: "https://paologhidoni.github.io/musicplayer/",
  },
  {
    id: "project-2",
    title: "Founders & Coders Quest",
    description:
      "A text based adventure game coded during the Founders and Coders bootcamp to learn React.",
    image: facQuestImg,
    technologies: ["React"],
    github: "https://github.com/fac-23/week5-react-paolo-miah",
    live: "https://sleepy-meitner-5e2ffb.netlify.app/",
  },
  {
    id: "project-1",
    title: "F&C Application website",
    description:
      "A website I built to apply for the Founders and Coders Bootcamp in London. I enjoyed exploring some less commonly used APIs, such as the Intersection Observer and the Web Audio API.",
    image: facApplicationImg,
    technologies: ["Html", "Sass", "Javasript"],
    github: "https://github.com/paologhidoni/fac-application",
    live: "https://paologhidoni.github.io/fac-application/",
  },
];
