import { Fragment } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Skills />
    </Fragment>
  );
}

export default App;
