import React from "react";
import Image from "next/image";

const FavoritesCard = ({ item }) => {
  return (
    <div className="bg-white cursor-pointer w-80 h-96 max-w-sm rounded overflow-hidden shadow-lg flex flex-col group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
      <div className="relative w-full h-48">
        <Image
          className="object-cover"
          src={item.imagePath}
          alt={item.name}
          layout="fill" // Ensures the image fills its container
        />
      </div>
      <div className="flex-1 px-4 py-6">
        <div className="font-bold text-xl mb-3 text-center">{item.name}</div>
        <p className="text-gray-700 text-sm text-center line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default FavoritesCard;
