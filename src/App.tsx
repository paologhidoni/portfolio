import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div id="container" className="bg-primaryColor min-h-screen pb-8 pt-4">
      <Navigation />
      <main className="text-white font-quicksand">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
