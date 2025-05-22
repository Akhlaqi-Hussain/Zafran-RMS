"use client";
import { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const [activeButton, setActiveButton] = useState("Main Dish"); // Default to "Main Dish"
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Handler for button clicks
  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  // Fetch menu data from GitHub-hosted JSON file
  useEffect(() => {
    fetch("https://akhlaqi-hussain.github.io/RMS-Json-Server/db.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.menu) {
          setMenuItems(data.menu); // Assuming the JSON structure has a "menu" key
        } else {
          console.error("Unexpected JSON structure:", data);
        }
      })
      .catch((err) => console.error("Error fetching menu data:", err));
  }, []);

  // Filter menu items based on the active category
  useEffect(() => {
    if (activeButton === "Main Dish") {
      setFilteredItems(
        menuItems.filter((item) => item.category === "mainDish")
      );
    } else if (activeButton === "Drinks") {
      setFilteredItems(
        menuItems.filter((item) => item.category === "beverage")
      );
    } else if (activeButton === "Desserts") {
      setFilteredItems(menuItems.filter((item) => item.category === "dessert"));
    }
  }, [activeButton, menuItems]);

  return (
    <>
      <div className="flex flex-col mx-auto text-center justify-center">
        {/* Buttons */}
        <div className="text-lg space-x-4 mb-8" role="group">
          {["Main Dish", "Drinks", "Desserts"].map((btn, index) => (
            <button
              key={index}
              type="button"
              className={`px-4 py-3 border-b-2 border-goldenBrown ${
                activeButton === btn
                  ? "bg-goldenBrown text-white scale-105"
                  : "text-goldenBrown hover:bg-goldenBrown hover:text-white"
              } focus:z-10 focus:ring-3`}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid justify-items-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))
          ) : (
            <p>No items available in this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
