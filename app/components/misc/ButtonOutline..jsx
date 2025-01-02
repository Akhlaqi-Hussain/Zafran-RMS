import React from "react";
import Link from "next/link";

const ButtonOutline = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange"
    >
      {children}
    </Link>
  );
};

export default ButtonOutline;
