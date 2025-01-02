import React from "react";
import Image from "next/image";
import image from "../../public/assets/hero2.png";
import ButtonPrimary from "./misc/ButtonPrimary";
import ContactInfo from "./ContactInfo";

const Hero = () => {
  return (
    <section className="bg-gray-900 md:min-h-[75vh] flex flex-col items-center justify-center lg:justify-start">
      {/* Main Content */}
      <div className="grid max-w-screen-2xl px-4 py-14 md:py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto text-center text-pretty md:space-y-10 place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            🍴 Savor the Flavor,
            <br />
            Delight in Every Bite!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl line-clamp-3">
            Discover a world of culinary excellence where every dish is crafted
            with passion and precision. From farm-fresh ingredients to
            unforgettable flavors, your next favorite meal awaits.
          </p>

          <div className="space-x-4 space-y-4">
            <ButtonPrimary>ORDER NOW</ButtonPrimary>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex justify-center">
          <Image
            className="animate-spin-slow w-9/12 h-9/12"
            src={image}
            loading="lazy"
            alt="food"
          />
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full">
        <ContactInfo />
      </div>
    </section>
  );
};

export default Hero;
