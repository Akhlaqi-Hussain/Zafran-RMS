import React from "react";
import Hero2 from "../components/Hero2";
import Reservation from "../components/Reservation";
import Favorites from "../components/FavoriteItems";

const reservationsPage = () => {
  return (
    <>
      <Hero2 pageTitle="Reservartions" />
      <Reservation />
      <Favorites />
    </>
  );
};

export default reservationsPage;
