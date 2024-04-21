"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const variant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export default function QualitySection() {
  return (
    <main className="h-fit  px-[40px] pt-[60px] pb-[60px] lg:px-[64px] lg:pt-[80px] lg:pb-[120px]">
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[750px] w-full flex flex-col gap-5 md:flex-row"
      >
        <motion.div
          variants={variant}
          className="h-[500px] w-full lg:w-2/3 md:h-full relative rounded-[50px] overflow-hidden"
        >
          <Image
            className="object-cover"
            src="/images/About-page/quality-section/quality.jpg"
            alt="macbook"
            fill
          />
        </motion.div>
        <motion.div
          variants={variant}
          className="h-[400px] w-full lg:w-[560px] md:h-full bg-neutral-100 rounded-[50px] p-[32px] lg:p-[50px] flex flex-col justify-center gap-10"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl lg:text-3xl">
              Care and love for creating high quality design
            </h1>
            <p className="text-xs lg:text-base text-stone-500  ">
              We believe that exceptional design goes beyond aesthetics; it
              encompasses functionality, user experience, and attention to
              detail. With meticulous care and an unwavering commitment to
              quality, our talented designers and engineers bring forth products
              that are both visually stunning and intuitive to use.
            </p>
          </div>
          <div className="flex">
            <Link href="/store">
              <div className=" bg-black py-3 md:py-5 px-5 md:px-10 border border-black rounded-full overflow-hidden group relative z-10 group hover:border-neutral-300 hover:bg-neutral-300">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className="transition-all duration-300 text-white text-xs md:text-base  group-hover:-translate-y-10">
                    Browse Products
                  </p>
                  <p className="transition-all duration-300 text-black text-xs md:text-base  absolute top-[100%] z-20 group-hover:-translate-y-4 lg:group-hover:-translate-y-6">
                    Browse Products
                  </p>
                </div>
                <div className="transition-all duration-300 absolute top-[100%] left-1/2 z-10 -translate-x-1/2 w-[120%] h-[240px] rounded-full  bg-neutral-300 group-hover:-top-10" />
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
