"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AccordianProp } from "../lib/type";

interface Prop {
  item: AccordianProp;
}

const Accordion = ({ item }: Prop) => {
  const [tabActive, setTabActive] = useState(false);
  return (
    <div
      onClick={() => setTabActive(!tabActive)}
      className={` flex flex-col p-[20px] bg-neutral-100 rounded-[16px] group ${
        tabActive ? "border-stone-300" : "border-neutral-100"
      } border  hover:border-stone-300 hover:cursor-pointer `}
    >
      <div className="flex items-center">
        <div>
          <p className="text-xs md:text-base">{item.title}</p>
        </div>
        <div
          className={` ml-auto transition-all duration-300 ${
            tabActive ? "rotate-45" : null
          }`}
        >
          <GoPlus className="text-neutral-500 h-6 w-6" />
        </div>
      </div>
      <div
        className={` ${
          tabActive ? "max-h-[150px]" : "max-h-0"
        }  w-full overflow-hidden transition-all duration-300 `}
      >
        <div className="h-px w-full my-3 bg-neutral-300" />
        <p className="text-xs md:text-base py-3 text-stone-500">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
