import { GiPencilRuler } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { IoLeafOutline } from "react-icons/io5";

const values = [
  {
    icon: <GiPencilRuler className="w-8 h-8" />,
    title: "Design",
    desc: "We believe in the power of thoughtful design, creating products that blend aesthetically and functionally.",
  },
  {
    icon: <SlBadge className="w-8 h-8" />,
    title: "Quality",
    desc: "Quality is at the forefront of everything we do. From materials selection to manufacturing processes.",
  },
  {
    icon: <FaRegLightbulb className="w-8 h-8" />,
    title: "Innovation",
    desc: `We foster a culture of innovation, constantly pushing the boundaries of what's possible and embracing new technologies.`,
  },
  {
    icon: <CiHeart className="w-8 h-8" />,
    title: "Passion",
    desc: "We are deeply passionate about what we do, and that passion fuels our commitment to delivering exceptional products.",
  },
  {
    icon: <RiTeamLine className="w-8 h-8" />,
    title: "Team Work",
    desc: "By fostering an environment of trust and open communication, we leverage the diverse skills and perspectives of our team.",
  },
  {
    icon: <IoLeafOutline className="w-8 h-8" />,
    title: "Sustainability",
    desc: "We are committed to sustainability and minimizing our environmental footprints and promoting eco-friendly practices",
  },
];

export default function ValueSection() {
  return (
    <main className="h-fit px-[40px] pt-[80px] pb-[64px] lg:px-[64px] lg:pt-[80px] lg:pb-[64px]">
      <div className="flex flex-col gap-10">
        <header className="flex flex-col items-center gap-5">
          <h1 className="text-2xl lg:text-5xl">Our Values</h1>
          <p className="text-neutral-500 text-center max-w-4xl">
            We value innovation and continuously seek to push boundaries,
            delivering products that inspire and delight. Join us in embracing
            these values and become part of our mission to make a positive
            difference in the world.
          </p>
        </header>
        <div className="flex flex-col gap-[24px] md:grid  md:grid-cols-2 lg:grid-cols-3 ">
          {values.map((val, i) => (
            <div
              key={i}
              className="flex flex-col gap-10 items-center p-[24px] md:p-[32px] bg-neutral-100 rounded-2xl"
            >
              <div className="flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-12">
                {val.icon}
                <h5 className="text-xl md:text-2xl">{val.title}</h5>
              </div>
              <div>
                <p className="text-xs md:text-base text-neutral-500 text-center">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
