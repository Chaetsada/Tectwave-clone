"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Contact() {
  return (
    <main className="min-h-fit py-[40px] px-[24px] md:py-[96px] md:px-[56px]">
      <div className="h-fit w-full flex flex-col md:flex-row gap-[36px]">
        <div className="flex-1 flex flex-col gap-10">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ ease: "easeInOut", delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-6xl">Contact</h1>
            <p className="text-neutral-500">
              Send a message and our team will get back to within 24 hrs
            </p>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            transition={{ ease: "easeInOut", delay: 0.2 }}
            className="w-full h-full"
          >
            <form className="w-full h-full flex flex-col justify-between gap-3">
              <input
                className="bg-neutral-100 text-semibold p-[24px] rounded-[40px] focus:outline-none placeholder:font-semibold"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-neutral-100 text-semibold p-[24px] rounded-[40px] focus:outline-none placeholder:font-semibold"
                name="email"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="bg-neutral-100 text-semibold p-[24px] rounded-[40px] focus:outline-none placeholder:font-semibold"
                name="message"
                placeholder="Message"
                cols={30}
                rows={5}
              />
              <button className="w-full py-4 rounded-[40px] bg-black text-white font-semibold hover:opacity-70">
                Send message
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut" }}
          className="flex-1 flex flex-col gap-7 p-[36px] lg:p-[48px] bg-neutral-100 rounded-[40px]"
        >
          <section>
            <small className="text-neutral-500 uppercase">location</small>
            <hr className="border-neutral-300 my-2" />
            <address className="text-xl">
              Greenfields, Citytown <br />
              London, UK, 52050
            </address>
          </section>
          {/*--- END LOCATION SECTION ---*/}

          <section>
            <small className="text-neutral-500 uppercase">working hours</small>
            <hr className="border-neutral-300 my-2" />
            <div>
              <p className="text-xl">
                Monday To Friday <br />
                9:00 AM to 8.00 PM
              </p>
              <small className="text-neutral-500">
                Our Support Team is available 24 Hrs
              </small>
            </div>
          </section>
          {/*--- END WORKING HOURS ---*/}

          <section>
            <small className="text-neutral-500 uppercase">contact us</small>
            <hr className="border-neutral-300 my-2" />
            <p className="text-xl">020 7993 2905</p>
            <small className="text-neutral-500">Sayhello@tectwave.com</small>
          </section>
          {/*--- END CONTACT SECTION ---*/}

          <ul className="flex gap-3">
            <li className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center group hover:cursor-pointer">
              <a href="#" target="_blank">
                <FaXTwitter className="text-neutral-500 group-hover:text-black" />
              </a>
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center group hover:cursor-pointer">
              <a href="#" target="_blank">
                <FaInstagram className="text-neutral-500 group-hover:text-black" />
              </a>
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center group hover:cursor-pointer">
              <a href="#" target="_blank">
                <FaFacebookF className="text-neutral-500 group-hover:text-black" />
              </a>
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center group hover:cursor-pointer">
              <a href="#" target="_blank">
                <FaLinkedinIn className="text-neutral-500 group-hover:text-black" />
              </a>
            </li>
          </ul>
          {/*--- END SOCAIL LINK ---*/}
        </motion.div>
      </div>
    </main>
  );
}
