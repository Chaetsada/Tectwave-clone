import React from "react";

const statics = [
  { id:1,val: "2010", title: "Year founded" },
  { id:2,val: "+50", title: "Collections" },
  { id:3,val: "70K", title: " Happy Customers" },
  { id:4,val: "+250", title: "Products" },
  { id:5,val: "+25", title: "Team members" },
]
export default function StatisticSection() {
  return (
    <section className="h-fit py-[40px] md:p-[48px] lg:py-[80px] lg:px-0">
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {statics.map((item) => (
          <li key={item.id} className="flex flex-col  items-center md:gap-2">
            <h5 className="text-3xl md:text-4xl lg:text-5xl">{item.val}</h5>
            <p className="text-base lg:text-xl text-neutral-500 font-semibold">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
