import { articles as data } from "@/app/lib/data";
import ArticleCard from "@/app/components/ArticleCard";
import { ArticleProps } from "@/app/lib/type";
import Link from "next/link";
import React from "react";


export default async function ArticlesSection() {

  return (
    <main className="pt-[60px] pb-[80px] px-[24px] md:px-[40px] lg:px-[64px] lg:py-[120px]">
      <div className="flex flex-col gap-10">
        
        <header>
          <div className="flex flex-col sm:flex-row gap-5  items-center justify-between">
            <h3 className="text-2xl lg:text-5xl">Our articles and news</h3>
            <div>
              <Link href="/about">
                <div className=" py-3 px-5 md:py-4 md:px-10 bg-white  border border-black rounded-full overflow-hidden group relative z-10 group">
                  <div className="w-fit h-fit overflow-hidden relative">
                    <p className=" text-black text-xs md:text-base transition-all duration-300  group-hover:-translate-y-10">
                      Brows all articles
                    </p>
                    <p className="absolute top-[100%] z-20 text-white text-xs md:text-base transition-all duration-300  group-hover:-translate-y-4 md:group-hover:-translate-y-6">
                    Brows all articles
                    </p>
                  </div>
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 z-10 bg-black w-[120%] h-[240px] transition-all duration-300 rounded-full group-hover:-top-10" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
          {data.slice(0,2).map((item:ArticleProps ) => (
            <ArticleCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
