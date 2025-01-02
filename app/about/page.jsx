import React from "react";
import Hero2 from "../components/Hero2";
import About from "../components/About";
import Favorites from "../components/FavoriteItems";

const AboutPage = () => {
  return (
    <>
      <Hero2 pageTitle="About" />
      <About />
      <Favorites />
    </>
  );
};

export default AboutPage;
