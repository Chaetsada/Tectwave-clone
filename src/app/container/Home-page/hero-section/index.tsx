'use client'
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";


const textVariant = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const imageVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main
      ref={ref}
      className="h-[calc(100vh-68px)] w-screen grid place-items-center overflow-hidden relative z-20"
    >
      <motion.div
        variants={textVariant}
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-5 items-center"
      >
        <div className="overflow-hidden max-w-xl">
          <motion.h1
            variants={textVariant}
            className="text-2xl lg:text-5xl text-center "
          >
            High-quality tech gadgets & accessories
          </motion.h1>
        </div>
        {/*--- END HERO TEXT ---*/}
        <div className="overflow-hidden max-w-xl px-5 md:px-0">
          <motion.p
            variants={textVariant}
            className="text-xs md:text-base text-neutral-500 text-center"
          >
            Shop our curated selection of premium products, designed to elevate
            your everyday experiences
          </motion.p>
        </div>
        {/*--- END PARAGRAPH ---*/}
        <motion.div variants={textVariant} className="flex items-center gap-5">
          <div>
            <Link href="/store">
              <div className=" py-3 px-5 md:py-4 md:px-10 bg-black  border border-black rounded-full overflow-hidden group relative z-10 group">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className=" text-white text-xs md:text-base transition-all duration-300  group-hover:-translate-y-10">
                    Browse products
                  </p>
                  <p className="absolute top-[100%] z-20 text-black text-xs md:text-base transition-all duration-300  group-hover:-translate-y-4 md:group-hover:-translate-y-6">
                    Browse products
                  </p>
                </div>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 z-10 bg-white w-[120%] h-[240px] transition-all duration-300 rounded-full group-hover:-top-10" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <div className=" py-3 px-5 md:py-4 md:px-10 bg-white  border border-black rounded-full overflow-hidden group relative z-10 group">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className=" text-black text-xs md:text-base transition-all duration-300  group-hover:-translate-y-10">
                    About Us
                  </p>
                  <p className="absolute top-[100%] z-20 text-white text-xs md:text-base transition-all duration-300 group-hover:-translate-y-4 md:group-hover:-translate-y-6">
                    About Us
                  </p>
                </div>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 z-10 bg-black w-[120%] h-[240px] transition-all duration-300 rounded-full group-hover:-top-10" />
              </div>
            </Link>
          </div>
        </motion.div>
        {/*------ END CTA -----*/}
      </motion.div>
      <motion.div
        variants={imageVariant}
        initial="initial"
        animate="animate"
        className="absolute -left-16 md:left-20 top-0 md:top-20 z-[-1] w-[120px] md:w-[240px] h-[170px] md:h-[370px] rounded-2xl overflow-hidden "
        style={{ y: y2 }}
      >
        <Image
          className="object-cover"
          src="/images/Home-page/hero-section/5.webp"
          alt="iphone-case"
          fill
        />
      </motion.div>
      {/*--- END IPHONE CASE ---*/}
      <motion.div
        variants={imageVariant}
        initial="initial"
        animate="animate"
        className="absolute -right-8 md:right-10 top-0 z-[-1] w-[160px] md:w-[240px] h-[140px] md:h-[280px] rounded-2xl overflow-hidden blur-[3px]"
        style={{ y: y2 }}
      >
        <Image
          className="object-cover"
          src="/images/Home-page/hero-section/4.webp"
          alt="white-shoes"
          fill
        />
      </motion.div>
      {/*--- END WHITE SHOES ---*/}
      <motion.div
        style={{ y }}
        variants={imageVariant}
        initial="initial"
        animate="animate"
        className="hidden md:block absolute right-24 -bottom-10 z-[-1] w-[240px] h-[370px] rounded-2xl overflow-hidden "
      >
        <Image
          className="object-cover"
          src="/images/Home-page/hero-section/3.webp"
          alt="black-watch"
          fill
        />
      </motion.div>
      {/*---END BLACK WATCH ---*/}
      <motion.div
        style={{ y }}
        variants={imageVariant}
        initial="initial"
        animate="animate"
        className="absolute -right-16 md:left-32 bottom-16 md:-bottom-[280px] z-[-1]  w-[150px] md:w-[240px] h-[200px] md:h-[392px] rounded-2xl overflow-hidden "
      >
        <Image
          className="object-cover"
          src="/images/Home-page/hero-section/1.webp"
          alt="blue-watch"
          fill
        />
      </motion.div>
      {/*--- END BLUE WATCH ---*/}
      <motion.div
        style={{ y }}
        variants={imageVariant}
        initial="initial"
        animate="animate"
        className="absolute  md:right-1/2 -bottom-5 md:bottom-0  z-[-1] w-[200px] h-[150px] rounded-2xl overflow-hidden  blur-[7px]"
      >
        <Image
          className="object-cover"
          src="/images/Home-page/hero-section/2.webp"
          alt="silver-watch"
          fill
        />
      </motion.div>
      {/*--- END SILVER WATCH ---*/}
    </main>
  );
}
