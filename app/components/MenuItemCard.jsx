import React from "react";
import Image from "next/image";
import { useCart } from "./CartProvider";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="bg-white w-96 h-96 overflow-hidden shadow-lg flex flex-col">
        <div className="relative w-full h-48">
          <Image
            className="object-cover"
            src={item.imagePath}
            alt={item.name}
            loading="lazy"
            layout="fill" // Ensures the image fills its container
            // width={640}
            // height={427}
          />
        </div>
        <div className="flex-1 px-4 py-6">
          <div className="font-bold text-xl mb-3 text-center">{item.name}</div>
          <p className="text-gray-700 text-sm text-center line-clamp-3">
            {item.description}
          </p>
        </div>
        <div className="flex items-center">
          <h5 className="w-1/2 text-lg font-bold text-gray-900">
            Rs. {item.price}
          </h5>
          <button
            className="bg-goldenBrown hover:bg-gray-900 w-1/2 text-white px-4 py-4 text-lg font-semibold transition"
            onClick={() => addToCart(item)}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
