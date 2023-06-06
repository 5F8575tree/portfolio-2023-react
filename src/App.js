import { Fragment } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
    </Fragment>
  );
}

export default App;
