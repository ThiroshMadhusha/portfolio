// Use for Shortcuts

import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Testimonial from "./components/testimonia/Testimonials";
import CardSlider from "./components/slider/CardSlider";
import PortfolioHeader from "./components/portfolio/PortfolioHeader";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <PortfolioHeader />
      <CardSlider />
      <Experience />
      {/* <Portfolio /> */}
      <Services />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
