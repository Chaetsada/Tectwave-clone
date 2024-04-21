import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
} from "@/app/components/MotionComponent";
import { shippingInfo as data } from "@/app/lib/contant";
import React from "react";

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

export default function Shipping() {
  return (
    <main className="pt-[60px] px-[24px] pb-[100px] md:pt-[80px] md:px-[40px] ">
      <div className="flex flex-col gap-[60px]">
        <MotionDiv
          variants={variant}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-8"
        >
          <MotionHeading
            variants={variant}
            className="text-3xl lg:text-5xl text-center"
          >
            Shipping
          </MotionHeading>
          <MotionParagraph
            variants={variant}
            className="text-xs md:text-base text-center text-gray-500 px-5 lg:px-0 lg:max-w-3xl"
          >
            From the moment you place your order, we work diligently to process,
            package, and dispatch your items as quickly as possible.
          </MotionParagraph>
        </MotionDiv>
        <section className="h-fit w-full">
          <ul className="flex flex-col gap-5 w-full lg:w-[70%] mx-auto">
            {data.map((item, i) => (
              <li
                key={i}
                className="flex flex-col gap-2 p-[24px] lg:p-[32px] rounded-[35px] bg-neutral-100"
              >
                <p className="text-base md:text-xl font-semibold">{item.title}</p>
                <p className="text-xs md:text-xl lg:leading-8 ">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
