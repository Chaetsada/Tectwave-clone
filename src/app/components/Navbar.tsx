"use client";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const navlinks = [
  { name: "Store", href: "/store" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center px-5 lg:px-12 py-5 relative  ">
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

      <div className={` h-screen ${open ? "w-screen":"w-0"} fixed top-0 right-0 z-[80] bg-black bg-opacity-20 `}>
      </div>
        {/* OVERLAY */}
      <div
        className={` fixed top-0 right-0 z-[90] transition-all duration-300 h-screen ${
          open ? "w-2/3" : "w-0"
        } bg-white shadow-2xl overflow-hidden flex flex-col items-center`}
      >
        <ul className=" w-full h-full flex flex-col gap-1 justify-center items-center">
          {navlinks.map((link, index) => (
            <li
              className="text-xl font-semibold text-neutral-500 px-4 py-2 transition-all duration-500 rounded-xl hover:underline hover:text-neutral-800"
              key={index}
              onClick={() => setOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center py-10 gap-3">
          <li className="w-[40px] h-[40px] rounded-full border border-neutral-300 flex items-center justify-center group hover:cursor-pointer hover:border-black">
            <FaXTwitter className="text-neutral-500 group-hover:text-black" />
          </li>
          <li className="w-[40px] h-[40px] rounded-full border border-neutral-300 flex items-center justify-center group hover:cursor-pointer hover:border-black">
            <FaInstagram className="text-neutral-500 group-hover:text-black" />
          </li>
          <li className="w-[40px] h-[40px] rounded-full border border-neutral-300 flex items-center justify-center group hover:cursor-pointer hover:border-black">
            <FaFacebookF className="text-neutral-500 group-hover:text-black" />
          </li>
          <li className="w-[40px] h-[40px] rounded-full border border-neutral-300 flex items-center justify-center group hover:cursor-pointer hover:border-black">
            <FaLinkedinIn className="text-neutral-500 group-hover:text-black" />
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
