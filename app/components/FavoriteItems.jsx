"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("https://akhlaqi-hussain.github.io/RMS-Json-Server/db.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.menu) {
          const mainDishes = data.menu
            .filter((item) => item.category === "mainDish")
            .slice(0, 2); // Get the first 2 main dishes
          const beverages = data.menu
            .filter((item) => item.category === "beverage")
            .slice(0, 1); // Get the first beverage
          const desserts = data.menu
            .filter((item) => item.category === "dessert")
            .slice(0, 1); // Get the first dessert
          const combined = [...mainDishes, ...beverages, ...desserts];
          setFavorites(combined);
        } else {
          console.error("Unexpected JSON structure:", data);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <section className="bg-goldenBrown py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Favorites</h2>
        <p className="mb-8">
          Explore customer favorites at Zafran, where every dish celebrates the
          authentic flavors of Afghan cuisine.
        </p>
        <div className="grid justify-items-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 group">
          {favorites.length > 0 ? (
            favorites.map((item, index) => (
              <FavoritesCard key={index} item={item} />
            ))
          ) : (
            <p>Loading favorites...</p>
          )}
        </div>
      </div>
      <Link
        href="/menu"
        className="flex justify-end pt-5 px-16 text-xl font-semibold"
      >
        Discover
      </Link>
    </section>
  );
};

export default Favorites;
