'use client'
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ftLinks = [
  { id:'1',name: "Home", url: "/" },
  { id:'2',name: "Store", url: "/store" },
  { id:'3',name: "About", url: "/about" },
  { id:'4',name: "Articles", url: "/articles" },
];
const utilityLinks = [
  { id:'1',name: "Shipping", url: "/shipping" },
  { id:'2',name: "Contact", url: "/contact" },
  { id:'3',name: "Support", url: "/support" },
];


const Footer = () => {
  const pathname= usePathname();

  return (
    <footer className="bg-ft text-neutral-400 rounded-tl-[56px] rounded-tr-[56px] pt-[120px] px-[40px] pb-[80px] md:pt-[80px] md:px-[40px]  lg:pt-[120px] lg:px-[64px]">
      <div className="flex flex-col xl:flex-row gap-10">
        <section className="h-fit flex flex-col gap-5 w-full xl:max-w-[310px]">
          <h2 className="text-3xl text-white font-semibold">Tech Wave</h2>
          <ul className="flex gap-3">
            <li className="w-[40px] h-[40px] rounded-full bg-neutral-800 flex items-center justify-center group hover:cursor-pointer">
              <FaXTwitter className="text-neutral-500 group-hover:text-white" />
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-neutral-800 flex items-center justify-center group hover:cursor-pointer">
              <FaInstagram className="text-neutral-500 group-hover:text-white" />
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-neutral-800 flex items-center justify-center group hover:cursor-pointer">
              <FaFacebookF className="text-neutral-500 group-hover:text-white" />
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-neutral-800 flex items-center justify-center group hover:cursor-pointer">
              <FaLinkedinIn className="text-neutral-500 group-hover:text-white" />
            </li>
          </ul>
          <hr className="border-neutral-500" />
          <p >
            Selling premium products, designed to elevate your everyday
            experience
          </p>
        </section>
        {/*--- END FOOTER INFO ---*/}
        <div className="flex flex-wrap gap-20 xl:flex-grow justify-between xl:justify-end lg:gap-[180px] ">
          <section>
            <h5 className=" text-neutral-100 uppercase mb-8 font-semibold">menu</h5>
            <ul className="flex flex-col gap-3">
              {ftLinks.map((link) => (
                <li key={link.id}>
                  <Link className={` font-semibold hover:underline ${ pathname == link.url ? "underline": null}`} href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          {/*--- END FOOTER LINKS SECTION ---*/}
          <section>
            <h5 className=" text-neutral-100 uppercase mb-8 font-semibold">utility page</h5>
            <ul className="flex flex-col gap-3">
              {utilityLinks.map((link) => (
                <li key={link.id}>
                  <Link className={` font-semibold hover:underline ${ pathname == link.url ? "underline": null}`} href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          {/*--- END UTILITY LINKS SECTION ---*/}
          <section>
            <h5 className="text-neutral-100 uppercase mb-8 font-semibold">contact us</h5>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <MdOutlineEmail className="w-8 h-8" />
                </div>
                <div>
                  <h6 className="text-neutral-100 font-semibold">Email</h6>
                  <p>contact@techwave.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <BsPhone className="w-8 h-8" />
                </div>
                <div>
                  <h6 className="text-neutral-100 font-semibold">Phone</h6>
                  <p>414687 - 5892</p>
                </div>
              </div>
            </div>
          </section>
          {/*--- END CONTACT SECTION ---*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
