import { Fragment } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}

export default App;
