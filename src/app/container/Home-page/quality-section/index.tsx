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
  },
};

export default function QualitySection() {
  return (
    <main className="h-fit md:h-[600px] px-[24px] lg:px-[64px]">
      <MotionDiv
        variants={variant}
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.3, duration: 0.75, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-full w-full flex flex-col gap-5 md:flex-row"
      >
        <MotionDiv
          variants={variant}
          className="h-[300px] w-full lg:w-2/3 md:h-full relative rounded-[50px] overflow-hidden"
        >
          <Image
            className="object-cover"
            src="/images/Home-page/quality-section/quality.webp"
            alt="macbook"
            fill
          />
        </MotionDiv>
        {/*--- END IMAGE SECTION ---*/}
        <MotionDiv
          variants={variant}
          className="h-[360px] w-full lg:w-[560px] md:h-full bg-neutral-100 rounded-[50px] p-[32px] lg:p-[50px] flex flex-col justify-center gap-10"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl lg:text-5xl">Premium Design and Quality</h1>
            <p className="text-xs lg:text-base text-stone-500  ">
              Born out of a shared love of good design & quality products, we
              create considered solutions fit for the modern lifestyle. Always
              driven by passion, we work to empower others to live the same way.
            </p>
          </div>
          <div className="flex ">
            <Link href="/about">
              <div className=" bg-black py-3 md:py-5 px-5 md:px-10 border border-black rounded-full overflow-hidden group relative z-10 group hover:border-neutral-300 hover:bg-neutral-300">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className="transition-all duration-300 text-white text-xs md:text-base  group-hover:-translate-y-10">
                    Read our Story
                  </p>
                  <p className="transition-all duration-300 text-black text-xs md:text-base  absolute top-[100%] z-20 group-hover:-translate-y-4 lg:group-hover:-translate-y-6">
                    Read our Story
                  </p>
                </div>
                <div className="transition-all duration-300 absolute top-[100%] left-1/2 z-10 -translate-x-1/2 w-[120%] h-[240px] rounded-full  bg-neutral-300 group-hover:-top-10" />
              </div>
            </Link>
          </div>
        </MotionDiv>
        {/*--- END TEXT SECTION ---*/}
      </MotionDiv>
    </main>
  );
}
