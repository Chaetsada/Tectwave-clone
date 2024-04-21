import Image from "next/image";
import Link from "next/link";
import React from "react";



export default function ValuePropSection() {
  return (
    <main className="min-h-fit lg:h-[510px] px-6  lg:px-16">
      <div className="h-fit lg:h-full flex flex-col lg:flex-row rounded-2xl overflow-hidden">
        <div className="flex-1 h-full bg-neutral-100 text-black  flex flex-col justify-center gap-5 p-8 lg:p-12">
          <h1 className="text-2xl lg:text-5xl max-w-3xl text-balance">
            We are committed to designing high quality, human-centered products
          </h1>
          <p className="text-gray-500 max-w-3xl">
            From the initial concept to the final product, we prioritize
            meticulous attention to detail and rigorous testing to ensure the
            utmost satisfaction of our customers.
          </p>
          <div className="flex mt-5">
            <Link href="/store">
              <div className=" bg-black py-3 md:py-5 px-5 md:px-10 border border-black rounded-full overflow-hidden group relative z-10 group hover:bg-neutral-100 hover:border-neutral-100">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className="transition-all duration-300 text-white text-xs md:text-base  group-hover:-translate-y-10">
                    Browse products
                  </p>
                  <p className="transition-all duration-300 text-black text-xs md:text-base  absolute top-[100%] z-20 group-hover:-translate-y-4 lg:group-hover:-translate-y-6">
                    Browse products
                  </p>
                </div>
                <div className="transition-all duration-300 absolute top-[100%] left-1/2 z-10 -translate-x-1/2 w-[120%] h-[240px] rounded-full  bg-neutral-200 group-hover:-top-10" />
              </div>
            </Link>
          </div>
        </div>

        <div className="h-[350px] flex-none lg:flex-1 lg:h-full  relative">
          <Image
            className="object-cover"
            src="/images/About-page/valueprop-section/valueprop.jpg"
            alt="smart-phone"
            fill
          />
        </div>
      </div>
    </main>
  );
}
