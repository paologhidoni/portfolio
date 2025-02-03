import "./App.css";
import { VscGithub } from "react-icons/vsc";
import { SiCodewars, SiLeetcode } from "react-icons/si";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <main className="bg-primaryColor min-h-screen p-8 pt-16 text-white font-quicksand">
        <Hero />
        <section id="navigation" className="text-center">
          <nav className="p-8 mb-12 inline-flex justify-between text-xl">
            <ul className="flex gap-6">
              <li className="icon">
                <a href="#">
                  <VscGithub />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <SiCodewars />
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}

export default App;
