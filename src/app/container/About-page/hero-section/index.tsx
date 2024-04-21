"use client";
import Column from "@/app/components/Column";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const variant = {
  initial: {
    y: 30,
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
const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
];

const HeroSection = () => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [50, -150]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <main ref={ref} className="overflow-hidden">
      <div className="flex flex-col gap-[72px] pt-[60px] lg:pt-[120px]">
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-8"
        >
          <motion.h1
            variants={variant}
            className="text-3xl lg:text-5xl text-center"
          >
            About our products
          </motion.h1>
          <motion.p
            variants={variant}
            className="text-xs lg:text-base text-center text-gray-500 px-[60px] lg:px-0 lg:max-w-4xl"
          >
            We're a passionate team dedicated to delivering exceptional products
            and experiences to our valued customers. With a commitment to
            quality and innovation, we handpick each item in our collection to
            ensure it meets our stringent standards.
          </motion.p>
        </motion.div>

        <div className="w-screen h-fit flex justify-center gap-3 lg:justify-evenly lg:-10 px-10 relative z-[-1]">
          <Column images={[images[0], images[1]]} y={y2} />
          <Column images={[images[2], images[3]]} y={y} />
          <Column images={[images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7]]} y={y} />
          <Column images={[images[8], images[9]]} y={y2} />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)]" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
