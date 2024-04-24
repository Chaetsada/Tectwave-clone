import LinkButton from "@/app/components/LinkButton";
import { MotionDiv } from "@/app/components/MotionComponent";
import Image from "next/image";
import Link from "next/link";

const bestSellerProd = [
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/ucSTRAtxT2D1lfGCCOuKVNTIslk.png",
    title: "Lryx Watch",
    description: "Elevate your style with the sophisticated Lryx Watch, a perfect",
    price: "$349.99 USD",
    link: "/products/lryx-watch",
  },
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/Ora09nEcGUtpkHvjx69B5cntww.png",
    title: "Premium Earbuds",
    description: "Immerse yourself in premium sound quality and enjoy the ultimate ",
    price: "$389.99 USD",
    link: "/products/premium-earbuds",
  },
  {
    category: "GEAR",
    thumbnail: "https://framerusercontent.com/images/r0vQD9uYDPhhCoDQk4QQUCTxaaQ.jpg",
    title: "Headphone 21-Bass",
    description: "Experience deep, powerful bass and crystal-clear audio with the",
    price: "$499.99 USD",
    link: "/products/headphone-21-bass",
  },
  {
    category: "TECHNOLOGY",
    thumbnail: "https://framerusercontent.com/images/c4VlFD3hXnlGGZX0eZBlR3g18U.png",
    title: "VR Headset",
    description: "Step into the realm of virtual reality and unlock immersive experiences ",
    price: "$549.99 USD",
    link: "/products/vr-headset",
  },
];

const variants = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function BestSellerSection() {
  return (
    <main className="py-[80px] px-[24px] lg:py-[160px] lg:px-[48px]">
      <div className="flex flex-col gap-5">
        <header>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div>
              <h2 className="text-2xl lg:text-4xl">Bestsellers</h2>
            </div>
            <div>
              <LinkButton name={"Browse all products"} link={"/store"} />
            </div>
          </div>
        </header>
        <MotionDiv
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col gap-5 lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-4"
        >
          {bestSellerProd.map((product, index) => (
            <div
              key={index}
              className="transition-all duration-300 group lg:hover:scale-110"
            >
              <Link href={product.link}>
                <div className="w-full h-[315px] rounded-[36px] overflow-hidden relative">
                  <div className="absolute top-5 left-5 z-20 bg-white px-5 py-2 shadow-2xl rounded-full">
                    <p className="text-xs text-neutral-500">{product.category}</p>
                  </div>
                  <Image
                    className="object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                  />
                </div>
                <div className="flex flex-col mt-5 gap-3">
                  <h5>{product.title}</h5>
                  <p className="text-xs lg:text-base text-neutral-500 max-w-[280px]">
                    {product.description}
                  </p>
                  <h6 className="mt-5">{product.price}</h6>
                </div>
              </Link>
            </div>
          ))}
        </MotionDiv>
      </div>
    </main>
  );
}
