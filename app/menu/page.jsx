import React from "react";
import Hero2 from "../components/Hero2";
import Menu from "../components/Menu";

const MenuPage = () => {
  return (
    <>
      {/* Menu Hero */}
      <Hero2 pageTitle="Menu" />

      {/* Button Group */}
      <div className="py-16 flex items-center justify-center flex-col space-y-16">
        <Menu />
        <div className="container border-4 border-goldenBrown w-full"></div>
      </div>
    </>
  );
};

export default MenuPage;
