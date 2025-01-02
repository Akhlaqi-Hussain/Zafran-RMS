import React from "react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href={"/"}
          className="self-center text-3xl font-bold whitespace-nowrap"
        >
          Zafran
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Discover a world of culinary excellence where every dish is crafted
          with passion and precision.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="mr-4 hover:text-orange-500 md:mr-6 "
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            Zafran
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
