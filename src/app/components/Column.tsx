import Image from "next/image";
import React from "react";
import { MotionDiv } from "./MotionComponent";

interface Prop {
  images: string[];
  y: any;
}

const Column = ({ images, y }: Prop) => {
  return (
    <MotionDiv style={{ y }} className="min-h-fit flex flex-col gap-5">
      {images.map((images, i) => (
        <div
          key={i}
          className="h-[250px] w-[262px] rounded-[40px] overflow-hidden relative"
        >
          <Image
            className="object-cover"
            src={`/images/About-page/column/${images}`}
            alt="about-images"
            fill
          />
        </div>
      ))}
    </MotionDiv>
  );
};

export default Column;
