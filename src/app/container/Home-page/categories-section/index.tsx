import LinkButton from "@/app/components/LinkButton";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/app/components/MotionComponent";

const variants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function CategoriesSection() {
  return (
    <main className="min-h-fit px-[24px] py-[80px] lg:px-[64px] lg:py-[120px] flex flex-col gap-5">
      <MotionDiv
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.2, duration: 0.75 }}
        viewport={{ once: true }}
        className="h-fit flex flex-col md:flex-row gap-5"
      >
        <MotionDiv
          variants={variants}
          className="w-full h-[260px] md:flex-1 md:h-[390px] p-10 lg:p-16  flex flex-col justify-end rounded-[56px] bg-gray-50 relative overflow-hidden"
        >
          <div className="flex flex-col gap-5 mb-10 relative z-20">
            <h5 className="text-2xl lg:text-4xl">Technology</h5>
            <p className="text-xs lg:text-base text-gray-500 max-w-[250px] lg:max-w-[350px]">
              Explore the Latest Innovations and Unleash the Power of Technology
            </p>
          </div>
          <div className="relative z-20">
            <LinkButton name={"Explore category"} link={"/store/technology"} />
          </div>
          <div className="w-[250px] h-[150px] md:h-[180px] lg:w-[530px] lg:h-[390px] absolute -right-16 md:-right-0 top-0 z-10">
            <Image
              className="object-cover"
              src="/images/Home-page/categories-section/cam.webp"
              alt="camera"
              fill
            />
          </div>
        </MotionDiv>
        {/*----- END TECHNOLIOGY CATEGORIES -----*/}
        <MotionDiv
          variants={variants}
          className="w-full h-[260px] md:flex-1 md:h-[390px] lg:flex-none lg:w-[540px] p-10 lg:p-16  flex flex-col justify-end rounded-[56px] bg-gray-50 relative overflow-hidden"
        >
          <div className="flex flex-col gap-5 mb-10 relative z-20">
            <h5 className="text-2xl lg:text-4xl">Gear</h5>
            <p className="text-xs lg:text-base text-gray-500 max-w-[200px] lg:max-w-[250px]">
              Equip Yourself with Top-Notch Gear for Every Adventure
            </p>
          </div>
          <div>
            <LinkButton name={"Explore category"} link={"/store/gear"} />
          </div>
          <div className="w-[210px] lg:w-[370px] h-[210px] lg:h-[370px] absolute -right-20 -top-10 ">
            <Image
              className="object-cover"
              src="/images/Home-page/categories-section/headphone.webp"
              alt="headphone"
              fill
            />
          </div>
        </MotionDiv>
        {/*--- END GEAR CATEGORIES(HEADPHONE) ---*/}
      </MotionDiv>
      {/* END TOP SECTION */}
      <MotionDiv
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.2, duration: 0.75 }}
        viewport={{ once: true }}
        className="h-fit flex flex-col md:flex-row gap-5"
      >
        <MotionDiv
          variants={variants}
          className="w-full h-[260px] md:flex-1 md:h-[390px] lg:flex-none lg:w-[540px] p-10 lg:p-16  flex flex-col justify-end rounded-[56px] bg-gray-50 relative overflow-hidden"
        >
          <div className="flex flex-col gap-5 mb-10 relative z-20">
            <h5 className="text-2xl lg:text-4xl">Gear</h5>
            <p className="text-xs lg:text-base text-gray-500 max-w-[200px] lg:max-w-[250px]">
              Equip Yourself with Top-Notch Gear for Every Adventure
            </p>
          </div>
          <div>
            <LinkButton name={"Explore category"} link={"/store/gear"} />
          </div>
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]  absolute -right-10 -top-8 lg:-right-10 lg:-top-10 ">
            <Image
              className="object-cover"
              src="/images/Home-page/categories-section/radio.webp"
              alt="radio"
              fill
            />
          </div>
        </MotionDiv>
        {/*--- END GEAR CATEGORIES(RADIO) ---*/}
        <MotionDiv
          variants={variants}
          className="w-full h-[260px] md:flex-1 md:h-[390px] p-10 lg:p-16  flex flex-col justify-end rounded-[56px] bg-gray-50 relative overflow-hidden"
        >
          <div className="flex flex-col gap-5 mb-10 relative z-20">
            <h5 className="text-2xl lg:text-4xl">Accessory</h5>
            <p className="text-xs lg:text-base text-gray-500 max-w-[250px] lg:max-w-[350px]">
              Find the Perfect Finishing Touch with Stylish and Functional
              Accessories
            </p>
          </div>
          <div>
            <LinkButton name={"Explore category"} link={"/store/accessory"} />
          </div>
          <div className="w-[250px] h-[150px] md:h-[180px] lg:w-[410px] lg:h-[560px] absolute -right-24 -top-0 lg:-top-48 z-10">
            <Image
              className="object-cover"
              src="/images/Home-page/categories-section/clock.webp"
              alt="clock"
              fill
            />
          </div>
        </MotionDiv>
        {/*--- END ACCESSORY CATEGORIES ---*/}
      </MotionDiv>
      {/* END BOTTOM SECTION */}
    </main>
  );
}
