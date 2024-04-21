import getProducts from "@/app/actions/getProducts";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { ProductProp } from "@/app/lib/type";
import { MotionDiv } from "@/app/components/MotionComponent";

export const fadeInVariant = {
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
  const products = await getProducts();
  return (
    <main className="pt-[80px] px-[24px] pb-[80px] md:pt-[80px] md:px-[40px] md:pb-[120px] lg:px-[64px] lg:pb-[160px]">
      <div className="flex flex-col gap-10">
        <header>
          <h1 className="text-4xl">Store</h1>
        </header>
        {/*--- END HEADER TEXT ---*/}
        <section>
          <ul className="flex flex-wrap gap-4">
            <li className="px-5 py-2 rounded-full bg-black text-white hover:cursor-pointer">
              <Link
                className="text-xs md:text-base font-semibold"
                href="/store"
              >
                All
              </Link>
            </li>
            <li className="px-5 py-2 rounded-full border border-neutral-200 hover:cursor-pointer">
              <Link
                className="text-xs md:text-base font-semibold"
                href="/store/gear"
              >
                Gear
              </Link>
            </li>
            <li className="px-5 py-2 rounded-full border border-neutral-200 hover:cursor-pointer">
              <Link
                className="text-xs md:text-base font-semibold"
                href="/store/technology"
              >
                Technology
              </Link>
            </li>
            <li className="px-5 py-2 rounded-full border border-neutral-200 hover:cursor-pointer">
              <Link
                className="text-xs md:text-base font-semibold"
                href="/store/accessory"
              >
                Accessory
              </Link>
            </li>
          </ul>
        </section>
        {/*---END TAGLINKS SECTION ---*/}
        <MotionDiv
          variants={fadeInVariant}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product: ProductProp) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </MotionDiv>
        {/*--- END ALL PRODUCT SECTION ---*/}
      </div>
    </main>
  );
}
