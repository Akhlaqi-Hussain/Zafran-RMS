import React from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/assets/background.jpg";
import ContactInfo from "./ContactInfo";

const Hero2 = ({ pageTitle }) => {
  return (
    <>
      <div className="relative h-[75vh] flex items-center justify-center text-white text-center">
        {/* Background Image */}
        <Image
          src={image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="z-[-1]"
        />
        {/* Content */}
        <div className="flex flex-row space-x-8 text-white text-3xl">
          <Link
            href="/"
            className="cursor-pointer animation-hover inline-block relative"
          >
            Home
          </Link>

          <div className="border-r-4 border-white"></div>

          <Link
            href="menu"
            className="cursor-pointer animation-hover inline-block relative"
          >
            {pageTitle}
          </Link>
        </div>
      </div>
      <div className="w-full bg-goldenBrown">
        <ContactInfo />
      </div>
    </>
  );
};

export default Hero2;
