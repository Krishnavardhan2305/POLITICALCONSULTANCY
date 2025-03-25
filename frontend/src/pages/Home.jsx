import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col w-full h-screen pt-[4rem]">
      <Navbar 
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        clientsRef={clientsRef}
        contactRef={contactRef}
      />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={aboutRef}><AboutUs /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={clientsRef}><Clients /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer 
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        clientsRef={clientsRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Home;
