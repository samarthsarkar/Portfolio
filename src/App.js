import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Academics from "./components/Academics";
import Internship from "./components/Internship";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Academics />
      <Services />
      <Work />
      <Internship />
      <Contact />
    </div>
  );
};

export default App;
