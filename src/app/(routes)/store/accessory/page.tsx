import { products as data } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { ProductProp } from "@/app/lib/type";
import { MotionDiv } from "@/app/components/MotionComponent";

const animVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export default async function Store() {
 
  const filteredData = data.filter(
    (item: ProductProp) => item.category === "accessory"
  );

  return (
    <main className="pt-[80px] px-[24px] pb-[80px] md:pt-[80px] md:px-[40px] md:pb-[120px] lg:px-[64px] lg:pb-[160px]">
      <div className="flex flex-col gap-10">
        <header>
          <h1 className="text-4xl">Store</h1>
        </header>
        {/*--- END HEADER TEXT ---*/}
        <section>
        <div className="flex flex-wrap gap-4">
            <Link
              href="/store"
              className="text-xs md:text-base font-semibold px-5 py-2 rounded-full inactive hover:cursor-pointer"
            >
              All
            </Link>
            <Link
              href="/store/gear"
              className="text-xs md:text-base font-semibold px-5 py-2 rounded-full  inactive hover:cursor-pointer"
            >
              Gear
            </Link>
            <Link
              href="/store/technology"
              className="text-xs md:text-base font-semibold px-5 py-2 rounded-full  inactive hover:cursor-pointer"
            >
              Technology
            </Link>
            <Link
              href="/store/accessory"
              className="text-xs md:text-base font-semibold px-5 py-2 rounded-full  active hover:cursor-pointer"
            >
              Accessory
            </Link>
           
          </div>
        </section>
        {/*---END TAGLINKS SECTION ---*/}
        <MotionDiv
          variants={animVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredData.map((product: ProductProp) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </MotionDiv>
        {/*--- END ALL PRODUCT SECTION ---*/}
      </div>
    </main>
  );
}
