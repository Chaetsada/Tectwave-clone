"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PartnerSection() {
  return (
    <section className="h-[360px] p-[24px] ">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10 p-[24px] bg-neutral-100 rounded-[50px]">
        <motion.div variants={variants} initial="hidden" whileInView="animate">
          <motion.h2 variants={variants} className="text-2xl lg:text-4xl">
            Our partners
          </motion.h2>
        </motion.div>
        <div>
          <ul className="flex items-center justify-center flex-wrap gap-5">
            <li>
              <Image
                src="/images/About-page/partners-section/1.webp"
                alt="logo"
                height={50}
                width={120}
              />
            </li>
            <li>
              <Image
                src="/images/About-page/partners-section/2.webp"
                alt="logo"
                height={50}
                width={120}
              />
            </li>
            <li>
              <Image
                src="/images/About-page/partners-section/3.webp"
                alt="logo"
                height={50}
                width={120}
              />
            </li>
            <li>
              <Image
                src="/images/About-page/partners-section/4.webp"
                alt="logo"
                height={50}
                width={120}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
