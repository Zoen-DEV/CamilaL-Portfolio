import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen bg-gray-100 text-gray-800 flex justify-between px-5 py-2 shadow-md z-50 fixed ">
      <Link href="/">
        <h1 className="text-2xl text-orange-600 font-semibold select-none hover:scale-105 transition-all">
          Camila Lemos
        </h1>
      </Link>
      <ul className="flex w-2/6 justify-evenly items-center">
        <li className="hover:scale-110 transition-all">
          <Link href="/" className="hover:text-orange-500">
            inicio
          </Link>
        </li>
        <li className="hover:scale-110 transition-all">
          <Link href="/portfolio" className="hover:text-orange-500">
            portafolio
          </Link>
        </li>
        <li className="hover:scale-110 transition-all">
          <Link href="/about" className="hover:text-orange-500">
            sobre mi
          </Link>
        </li>
        <li className="hover:scale-110 transition-all">
          <Link href="/contact" className="hover:text-orange-500">
            contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
