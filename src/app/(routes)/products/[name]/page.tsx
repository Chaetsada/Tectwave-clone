import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/app/components/LinkButton";
import { MotionDiv } from "@/app/components/MotionComponent";
import { products ,relateProducts, testimonial } from "@/app/lib/data";

//icon
import { ProductProp } from "@/app/lib/type";
import { FaStripe } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";

const fadeInVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.75,
    },
  },
};
const relateProdVarient = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

const page = ({ params }: any) => {


  const filteredProduct = products.filter(
    (item: ProductProp) => item.link === `/products/${params.name}`
  );

  return (
    <main className="p-[24px] lg:p-[40px] relative">
      {filteredProduct.map((product: ProductProp) => (
        <div key={product.id} className="flex flex-col gap-10">
          <ul className="flex items-center justify-center md:justify-start gap-3">
            <li className="text-xs md:text-base text-neutral-500">
              <Link className="hover:underline hover:text-black" href="/store">
                Store
              </Link>
            </li>
            <li className="text-xs md:text-base text-neutral-500">/</li>
            <li className="text-xs md:text-base text-neutral-500">
              <Link
                className="hover:underline hover:text-black"
                href="/store/gear"
              >
                Gear
              </Link>
            </li>
            <li className="text-xs md:text-base text-neutral-500">/</li>
            <li className="text-xs md:text-base">{product.title}</li>
          </ul>
          {/*------------------------------ END TOP BREADCRUMBS ----------------------------*/}
          <div className="h-fit flex flex-col lg:flex-row gap-10">
            <MotionDiv
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="h-fit w-full lg:w-1/2 flex flex-col gap-5 relative"
            >
              <MotionDiv
                variants={fadeInVariants}
                className="h-[350px] md:h-[480px] w-full rounded-[56px] overflow-hidden relative "
              >
                <Image
                  className="object-cover"
                  src={product.images[0]}
                  alt={product.title}
                  fill
                />
              </MotionDiv>
              {/*--- END THUMBNAIL IMAGE---*/}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                <MotionDiv
                  variants={fadeInVariants}
                  className="h-[260px] w-full rounded-[56px] overflow-hidden relative"
                >
                  <Image
                    className="object-cover"
                    src={product.images[1]}
                    alt={product.title}
                    fill
                  />
                </MotionDiv>
                {/*--- END SUB IMAGE ---*/}
                <MotionDiv
                  variants={fadeInVariants}
                  className="h-[260px] w-full rounded-[56px] overflow-hidden relative"
                >
                  <Image
                    className="object-cover"
                    src={product.images[2]}
                    alt={product.title}
                    fill
                  />
                </MotionDiv>
                {/*--- END SUB IMAGE ---*/}
                <MotionDiv
                  variants={fadeInVariants}
                  className="h-[260px] w-full rounded-[56px] overflow-hidden relative"
                >
                  <Image
                    className="object-cover"
                    src={product.images[3]}
                    alt={product.title}
                    fill
                  />
                </MotionDiv>
                {/*--- END SUB IMAGE ---*/}
                <MotionDiv
                  variants={fadeInVariants}
                  className="h-[260px] w-full rounded-[56px] overflow-hidden relative"
                >
                  <Image
                    className="object-cover"
                    src={product.images[4]}
                    alt={product.title}
                    fill
                  />
                </MotionDiv>
                {/*--- END SUB IMAGE ---*/}
              </div>
            </MotionDiv>
            <div className="sticky top-10 h-fit w-full lg:w-1/2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h1 className=" text-2xl lg:text-5xl">{product.title}</h1>
                <p className="text-xs md:text-base text-neutral-500">
                  {product.description}
                </p>
                <p className="text-base md:text-2xl mt-3">
                  ${product.price} USD
                </p>
              </div>
              {/*--- END HEADER TEXT ---*/}
              <div>
                <button className="bg-black text-white font-semibold rounded-[56px] w-full py-4">
                  Buy Now
                </button>
              </div>
              {/*--- END BUY BUTTON ---*/}
              <section className="flex flex-col gap-5">
                <div className="lg:mb-4">
                  <p className="text-xs md:text-base text-neutral-500">
                    Our small crossbody pack bag is the perfect bag for carrying
                    everyday essentials when you don't want to lug around a
                    backpack. It's large enough to fit things such as a water
                    bottle, a small camera, and even an iPad Mini.
                  </p>
                </div>
                <ul
                  style={{ listStyleType: "disc", paddingLeft: "1.5em" }}
                  className="flex flex-col gap-1 marker:text-neutral-500"
                >
                  <li>
                    <p className="text-xs md:text-base text-neutral-500">
                      30cm width x 17cm height x 10cm depth
                    </p>
                  </li>
                  <li>
                    <p className="text-xs md:text-base text-neutral-500">
                      Water-resistant canvas
                    </p>
                  </li>
                  <li>
                    <p className="text-xs md:text-base text-neutral-500">
                      Adjustable shoulder strap
                    </p>
                  </li>
                  <li>
                    <p className="text-xs md:text-base text-neutral-500">
                      Front zip pocket
                    </p>
                  </li>
                  <li>
                    <p className="text-xs md:text-base text-neutral-500">
                      Large inside compartment also has a zip pocket on one side
                      and two open pockets on the other.
                    </p>
                  </li>
                </ul>
              </section>
              {/*--- END DETAILS SECTION ---*/}
              <hr />
              <section className="flex  items-center justify-between">
                <div>
                  <p className="text-xs md:text-base">
                    Accepted payment methods
                  </p>
                </div>
                <ul className="flex items-center gap-3">
                  <li className="px-4 py-2 bg-neutral-100 rounded-2xl">
                    <FaStripe className="w-8 h-8" />
                  </li>
                  <li className="px-4 py-2 bg-neutral-100 rounded-2xl">
                    <FaCcPaypal className="w-8 h-8" />
                  </li>
                  <li className="px-4 py-2 bg-neutral-100 rounded-2xl">
                    <FaCcMastercard className="w-8 h-8" />
                  </li>
                </ul>
              </section>
              {/*--- END PAYMENT SECTION ---*/}
            </div>
          </div>
          {/*------------------------------ END MAIN CONTENT -------------------------------*/}
          <div className=" pt-[40px] pb-[100px] lg:px-[64px] lg:py-[80px] flex flex-col gap-10">
            <div className="flex items-center justify-center">
              <h2 className="text-3xl">What customers are saying</h2>
            </div>
            <MotionDiv
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col gap-5 lg:grid lg:grid-cols-3"
            >
              {testimonial.map((item, i) => (
                <MotionDiv
                  variants={fadeInVariants}
                  key={i}
                  className="h-fit w-full p-[30px] lg:h-[360px] bg-neutral-100 rounded-[40px]"
                >
                  <div className="flex flex-col gap-5">
                    <p className="text-xs lg:text-base text-neutral-500">
                      {item.phrase}
                    </p>
                    <h6 className="text-xs lg:text-base font-semibold">
                      {item.name}
                    </h6>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
          {/*----------------------------- END TESTIMONIAL SECTION --------------------------*/}
          <div className=" pt-[80px] pb-[140px] border-t">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-5  items-center justify-between">
                <h2 className="text-2xl lg:text-3xl">Related Products</h2>
                <div>
                  <LinkButton name={"Browse all products"} link={"/store"} />
                </div>
              </div>
              <MotionDiv
                variants={relateProdVarient}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col gap-5 lg:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3"
              >
                {relateProducts.map(
                  (product, index: number) => (
                    <div
                      key={index}
                      className="transition-all duration-300 group lg:hover:scale-110"
                    >
                      <Link href={product.link}>
                        <div className="w-full h-[315px] rounded-2xl overflow-hidden relative">
                          <div className="absolute top-3 left-3 z-20 bg-white p-3 shadow-2xl rounded-full">
                            <p className="text-xs text-gray-500">
                              {product.category}
                            </p>
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
                          <p className="text-xs lg:text-base text-gray-500">
                            {product.description}
                          </p>
                          <h6 className="font-semibold mt-5">
                            ${product.price} USD
                          </h6>
                        </div>
                      </Link>
                    </div>
                  )
                )}
              </MotionDiv>
            </div>
          </div>
          {/*------------------------------ END RELATED PRODUCT -----------------------------*/}
        </div>
      ))}
    </main>
  );
};

export default page;
