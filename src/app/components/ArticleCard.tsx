import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ArticleProps } from "../lib/type";

interface Prop{
  item:ArticleProps
}

const ArticleCard = ({ item }: Prop) => {
  return (
    <div className="group">
      <Link href={item.link}>
        <div className="flex flex-col gap-3">
          <div className="h-[480px] w-full rounded-[56px] overflow-hidden relative">
            <Image
              className="object-cover transition-all duration-300 group-hover:scale-110"
              src={item.thumbnail}
              alt={item.title}
              fill
            />
          </div>

          <div className="mt-3 flex flex-col gap-5">
            <h2 className="text-2xl lg:text-4xl">{item.title}</h2>
            <p className="text-xs md:text-base text-gray-500">{item.description}</p>
          </div>

          <div className="w-full h-px bg-gray-300 relative">
            <div className="absolute left-0 top-0 w-0 h-px transition-all duration-300 bg-black group-hover:w-full" />
          </div>

          <div className=" mt-3 flex justify-between items-center">
            <button className="w-[64px] h-[48px] flex justify-center items-center transition-all duration-300 bg-black rounded-full group-hover:w-[72px]">
              <IoIosArrowRoundForward className="w-8 h-8 text-white" />
            </button>
            <p className="text-gray-500">{item.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
