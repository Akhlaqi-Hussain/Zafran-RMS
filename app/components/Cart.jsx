"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculate the subtotal dynamically
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, newQuantity), // Ensure the quantity is at least 1
    }));
  };

  const handleCheckout = () => {
    toast.success("Your Order has been created!");
    clearCart();
  };

  return (
    <div className="mx-auto p-6 bg-white max-w-5xl">
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your cart is empty!
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <div className="mt-6">
            <Link
              href="menu"
              className="text-indigo-600 font-medium hover:underline"
            >
              Go to Menu →
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ul role="list" className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex py-6 items-center justify-between md:space-x-6"
              >
                {/* Image */}
                <div className="hidden md:block flex-shrink-0">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    width={100}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </div>

                {/* Name and Category */}
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>

                {/* Quantity */}
                <div className="w-24 flex items-center justify-center">
                  <input
                    type="number"
                    className="w-16 px-2 py-1 text-sm border rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                  />
                </div>

                <div className="w-24 text-center">
                  <div className="text-base font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="container border-4 border-goldenBrown w-full"></div>

          {/* Subtotal Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between text-base font-medium text-gray-900 px-7">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <button
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-600"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="menu"
                className="text-sm text-gray-900 hover:text-orange-500"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
