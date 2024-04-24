import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
} from "@/app/components/MotionComponent";
import Accordion from "@/app/components/Accordion";
import { AccordianProp } from "@/app/lib/type";
import { accordionData as data } from "@/app/lib/constant";
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



export default function Support() {
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
            Support
          </MotionHeading>
          <MotionParagraph
            variants={variant}
            className="text-xs lg:text-base text-center text-gray-500 px-5 lg:px-0 lg:max-w-4xl"
          >
            Whether you need assistance with product setup, troubleshooting, or
            general inquiries, our knowledgeable and friendly support staff is
            just a phone call or email away.
          </MotionParagraph>
        </MotionDiv>
        <section className="h-fit w-full">
          <div className="w-full md:w-[70%] mx-auto flex flex-col gap-5">
            {data.map((item: AccordianProp) => (
              <Accordion key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
