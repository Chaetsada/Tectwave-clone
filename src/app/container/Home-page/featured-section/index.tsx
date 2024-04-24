import LinkButton from "@/app/components/LinkButton";
import { MotionDiv } from "@/app/components/MotionComponent";
import Image from "next/image";
import Link from "next/link";

const variant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const featuredProd = [
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/r59ibP0ToXB3BqtNzkTUDO9ww.jpg",
    title: "iWatch SE 3",
    price: "$349.99 USD",
    link: "/products/iwatch-se-3",
  },
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/4UnXwoQPTBHjZGDJ1LNhcNeOJ4s.jpg",
    title: "MX Master 3",
    price: "$149.99 USD",
    link: "/products/mx-master-3",
  },
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/MPbVK9bO5c2jVsowVlIWlKUARY.png",
    title: "Purifier",
    price: "$49.99 USD",
    link: "/products/purifier",
  },
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/rt6R4qXulMH19LBMoEWW5QgHgA.png",
    title: "iPhone Case",
    price: "$29.99 USD",
    link: "/products/iphone-case",
  },
];

export default function FeaturedSection() {
  return (
    <main className="min-h-fit py-[80px] px-[24px] lg:py-[160px] lg:px-[64px]">
      <div className="flex flex-col gap-5">
        <header>
          <div className="flex flex-col sm:flex-row gap-5  items-center justify-between">
            <h3 className="text-2xl lg:text-4xl">Featured Products</h3>
            <div>
              <LinkButton name={"Browse all products"} link={"/store"} />
            </div>
          </div>
        </header>
        {/*--- END HEADER ---*/}
        <div className="h-fit w-full flex flex-col gap-5 lg:gap-10 lg:flex-row">
          <div className="h-fit w-full lg:w-1/2 group">
            <Link href="/products/lryx-watch">
              <div className="flex flex-col">
                <div className="h-[310px] w-full lg:h-[720px]  relative rounded-2xl overflow-hidden">
                  <Image
                    className="object-cover"
                    src="https://framerusercontent.com/images/ucSTRAtxT2D1lfGCCOuKVNTIslk.png"
                    alt="lryx-watch"
                    fill
                  />
                  <div className="absolute top-3 left-3 bg-white p-3  rounded-full shadow-2xl">
                    <p className="text-xs text-gray-500">GEAR</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                  <h5 className="text-xs lg:text-base">Lryx Watch</h5>
                  <h6 className="text-xs lg:text-base">$349.99 USD</h6>
                </div>
              </div>
            </Link>
          </div>
          {/*--- END MAIN FEATURE PRODUCT ---*/}
          <div className="h-full w-full lg:w-1/2 flex flex-col gap-5 md:grid md:grid-cols-2">
            {featuredProd.map((product, i) => (
              <MotionDiv
                key={i}
                variants={variant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <Link href={product.link}>
                  <div className="flex flex-col">
                    <div className="h-[310px] w-full relative rounded-[36px] overflow-hidden">
                      <Image
                        className="object-cover"
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                      />
                      <div className="absolute top-5 left-5 bg-white px-5 py-2 rounded-full shadow-2xl">
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                      <h5 className="text-xs lg:text-base">{product.title}</h5>
                      <h6 className="text-xs lg:text-base">{product.price}</h6>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </div>
          {/*--- END SUB FEATURE PRODUCT ---*/}
        </div>
      </div>
    </main>
  );
}
