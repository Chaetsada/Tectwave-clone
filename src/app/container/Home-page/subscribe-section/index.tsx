import React from "react";

type Props = {};

export default function SubscribeSection({}: Props) {
  return (
    <section className="lg:h-[360px] px-[24px] md:px-[40px] lg:px-[64px]">

      <div className="h-full w-full rounded-[56px] p-[32px] flex flex-col justify-center items-center gap-10 bg-gray-100">

        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center">
            Subscribe to our email <br /> newsletter and get 10% off
          </h2>
            <p className="text-xs md:text-base text-center">
              Stay in the loop with the latest updates, exclusive offers, and
              exciting product launches by subscribing to our email newsletter.
            </p>
        </div>
        <form className="w-full lg:w-[700px] flex flex-col lg:flex-row items-center gap-3">
          
            <input
              className="w-full px-6 py-4 bg-gray-50 rounded-full focus:outline-none"
              type="email"
              placeholder="Email Address"
            />
        
          <button className="w-full lg:w-[170px] px-6 py-4 bg-black text-white font-semibold rounded-full">
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}
