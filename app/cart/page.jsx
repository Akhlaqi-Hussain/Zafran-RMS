import React from "react";
import Hero2 from "../components/Hero2";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <>
      <Hero2 pageTitle="Cart" />

      <div className="flex justify-center items-center">
        <Cart />
      </div>
    </>
  );
};

export default CartPage;
