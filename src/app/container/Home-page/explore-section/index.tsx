
import Image from "next/image";
import Link from "next/link";

export default function ExploreSection() {
  return (
    <div className="h-fit lg:h-[500px] px-6 lg:px-[64px]">
      <div className="h-fit lg:h-full flex flex-col lg:flex-row rounded-[56px] overflow-hidden">
        <div className="flex-1 h-full bg-black text-white flex flex-col justify-center gap-5 p-8 lg:p-12">
          <h1 className="text-2xl lg:text-5xl">The new Special Experience</h1>
          <p className="text-xs md:text-base text-neutral-300">
            Ignite Your Imagination and Redefine Reality through the
            Cutting-Edge Spacial Experience
          </p>
          <div className="flex mt-5">
            <Link href="/store">
              <div className=" bg-white py-3 md:py-5 px-5 md:px-10 border border-black rounded-full overflow-hidden group relative z-10 group hover:border-white">
                <div className="w-fit h-fit overflow-hidden relative">
                  <p className="transition-all duration-300 text-black text-xs md:text-base  group-hover:-translate-y-10">
                    Browse products
                  </p>
                  <p className="transition-all duration-300 text-white text-xs md:text-base  absolute top-[100%] z-20 group-hover:-translate-y-4 lg:group-hover:-translate-y-6">
                    Browse products
                  </p>
                </div>
                <div className="transition-all duration-300 absolute top-[100%] left-1/2 z-10 -translate-x-1/2 w-[120%] h-[240px] rounded-full  bg-black group-hover:-top-10" />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-[350px] flex-none lg:flex-1 lg:h-full  relative">
          <div className="h-full w-full relative">
            <Image
              className="object-cover"
              src="/images/Home-page/explore-section/explore.webp"
              alt="smart-phone"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
