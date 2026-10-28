import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import WorkAndProjects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      id="container"
      className="min-h-screen bg-surface bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(201,169,110,0.1),transparent_55%)] font-quicksand"
    >
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      {/* Text color lives on dark sections, not here */}
      <main className="bg-surface">
        <Hero />
        <WorkAndProjects />
        <Skills theme={theme} />
      </main>
      <Footer theme={theme} />
      <ScrollToTop />
    </div>
  );
}

export default App;
