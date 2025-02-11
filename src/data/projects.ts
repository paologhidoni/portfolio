import huksoImg from "../assets/hukso.png";
import musicPlayerImg from "../assets/music-player.png";
import facQuestImg from "../assets/facquest.png";
import facApplicationImg from "../assets/facApplication.png";
import ticTacToeImg from "../assets/tictactoe.png";

export const projects = [
  {
    id: "project-1",
    title: "Tic Tac Toe",
    description:
      "I built a Tic Tac Toe game to have fun and practice React, Typescript and styling.",
    image: ticTacToeImg,
    technologies: ["React", "Typescript"],
    github: "https://github.com/paologhidoni/tictactoe",
    live: "https://paologhidoni.github.io/tictactoe/",
  },
  {
    id: "project-2",
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
      "A music player that combines my passions for coding and music production. This simple yet functional music player allows users to play, shuffle, pause, skip, and go back to previous songs. Built with HTML, JavaScript, and CSS, the player features intuitive controls for seamless navigation through tracks, creating a smooth listening experience.",
    image: musicPlayerImg,
    technologies: ["Html", "JavaScript", "Css"],
    github: "https://github.com/paologhidoni/musicplayer",
    live: "https://paologhidoni.github.io/musicplayer/",
  },
  {
    id: "project-4",
    title: "Founders & Coders Quest",
    description:
      "A text based adventure game coded during the Founders and Coders bootcamp to learn React.",
    image: facQuestImg,
    technologies: ["React"],
    github: "https://github.com/fac-23/week5-react-paolo-miah",
    live: "https://sleepy-meitner-5e2ffb.netlify.app/",
  },
  {
    id: "project-5",
    title: "F&C Application website",
    description:
      "A website I built to apply for the Founders and Coders Bootcamp in London. I enjoyed exploring some less commonly used APIs, such as the Intersection Observer and the Web Audio API.",
    image: facApplicationImg,
    technologies: ["Html", "Sass", "Javasript"],
    github: "https://github.com/paologhidoni/fac-application",
    live: "https://paologhidoni.github.io/fac-application/",
  },
];
