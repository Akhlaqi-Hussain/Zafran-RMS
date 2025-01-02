import React from "react";
import Hero from "./components/Hero";
import UserCard from "./components/UserCard";
import Favorites from "./components/FavoriteItems";
import About from "./components/About";
import Reservation from "./components/Reservation";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Favorites />
      <Reservation />
    </>
  );
};

export default page;
