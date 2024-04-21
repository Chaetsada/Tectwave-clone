import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import { PiSwapLight } from "react-icons/pi";
import { MotionDiv } from "@/app/components/MotionComponent";

const variant = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const values = [
  {
    id: 1,
    title: "Free shipping",
    subtitle: "Over $29.00",
    icon: <LiaShippingFastSolid className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Secure Payments",
    subtitle: "With 5+ Payment options",
    icon: <CiCreditCard2 className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "30 days free return",
    subtitle: "No questions asked",
    icon: <PiSwapLight className="h-8 w-8" />,
  },
];

export default function ValuePropSection() {
  return (
    <section className="px-[60px] py-[60px] lg:px-[120px]">
      <MotionDiv
        variants={variant}
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="w-full h-full grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-2 lg:grid-cols-3"
      >
        {values.map((val) => (
          <MotionDiv
            variants={variant}
            key={val.id}
            className="min-w-[240px]  flex items-center  lg:justify-center gap-5"
          >
            <div className="w-20 h-20 flex justify-center items-center rounded-2xl bg-neutral-100">
              {val.icon}
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h6 className="font-semibold">{val.title}</h6>
              </div>
              <div>
                <p className="text-xs md:text-base text-neutral-500">
                  {val.subtitle}
                </p>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
