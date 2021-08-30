import React from "react";
import { Route, Switch } from "react-router";
import Services from "./components/Services";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
