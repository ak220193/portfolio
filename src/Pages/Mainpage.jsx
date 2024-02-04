import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Experince from "../Components/Experience/Experience";
import Services from "../Components/Services/Service";
import Portfolio from "../Components/Portfolio/Portfolio";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Mainpage;
