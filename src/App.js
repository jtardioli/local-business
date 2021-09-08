import React from "react";
import { Route, Switch } from "react-router";
import Services from "./components/Services";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ThankYou from "./components/ThankYou";
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
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/thankyou" exact>
          <ThankYou />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
