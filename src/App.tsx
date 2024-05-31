import "./App.css";
import { VscGithub } from "react-icons/vsc";
import { SiCodewars, SiLeetcode } from "react-icons/si";

function App() {
  return (
    <>
      <main className="bg-blue-950 min-h-screen p-8 pt-16 text-white font-quicksand">
        <header className="text-center max-w-xl m-auto">
          <h1 className="text-ocra text-6xl mb-6">
            PAOLO <span className="text-white italic">GHIDONI</span>
          </h1>
          <h3 className="text-3xl mb-6">Full stack developer</h3>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, omnis? Eveniet in quod molestias nulla veniam,
            exercitationem nesciunt, quo inventore error natus dignissimos,
            impedit non quas qui soluta laboriosam consequatur.
          </p>
        </header>

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
