import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
// import Contributions from "../components/Contributions/Contributions";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contributions /> */}
      <Education />
      <Experience />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
