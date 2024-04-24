"use client";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";

const navlinks = [
  { name: "Store", href: "/store" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center px-5 lg:px-12 py-5 relative z-10 bg-red-50">
      <div>
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          Techwave
        </Link>
      </div>
      <ul className="hidden md:flex ml-auto items-center space-x-3 relative ">
        {navlinks.map((link, index) => (
          <li
            className="font-semibold text-neutral-500 px-3 py-2 transition-all duration-300 rounded-xl hover:bg-neutral-100 hover:text-neutral-800"
            key={index}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden ml-auto hover:cursor-pointer relative z-[99]">
        <Hamburger toggle={setOpen} toggled={open} size={25} />
      </div>

      <div className={` absolute bottom-0 left-0 w-screen ${open ? "-h-[300px]":"h-0"} transition-all duration-300 bg-red-500 p-10 overflow-hidden `}>
        <ul>
        {navlinks.map((link, index) => (
          <li
            className="font-semibold text-neutral-500 px-3 py-2 transition-all duration-300 rounded-xl hover:bg-neutral-100 hover:text-neutral-800"
            key={index}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
