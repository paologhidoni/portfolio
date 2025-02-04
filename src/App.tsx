import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div id="container" className="bg-primaryColor min-h-screen pb-8 pt-4">
      <Navigation />
      <main className="text-white font-quicksand">
        <Hero />
        <Skills />

        <h1>PROJECTS</h1>
        <p id="projects">
          <br></br>
          TEST! <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          deleniti sunt illo fugit, nostrum libero sed ipsa dolorem architecto?
          Quis, facere delectus dolores rem animi rerum veritatis ipsum
          reprehenderit quisquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus debitis id nemo molestiae quam nihil eos
          dolores non, obcaecati aut repellat odit vel reprehenderit eveniet ea,
          vero tempore, nostrum est. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime velit vel sed praesentium, placeat ducimus
          vero facilis eligendi assumenda id! Voluptatem reiciendis natus
          assumenda architecto eveniet dolorem! Repudiandae, repellendus
          numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident voluptas neque deserunt pariatur, vitae officia incidunt.
          Officiis, aliquid nulla. Deleniti molestias ipsa fugiat omnis error
          necessitatibus adipisci facere amet quibusdam!
        </p>
      </main>
    </div>
  );
}

export default App;
