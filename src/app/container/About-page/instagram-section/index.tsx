"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const varient = {
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
      ease: "easeInOut",
    },
  },
};

export default function InstagramSection() {
  return (
    <div className="px-[24px] pt-[48px] pb-[48px] lg:px-[64px] lg:pt-[80px] lg:pb-[120px]">
      <div className="flex flex-col gap-10">
        <header className="overflow-hidden">
          <motion.div
            variants={varient}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col gap-5 items-center"
          >
            <motion.h1 variants={varient} className="text-4xl text-center">
              Follow us on Instagram
            </motion.h1>
            <motion.p variants={varient} className="text-xl text-stone-500">
              @techwise_official
            </motion.p>
          </motion.div>
        </header>
        {/*-------------------------- END HEADER ----------------------------*/}
        <div className="flex flex-col gap-5">
          <section>
            <motion.ul
              variants={varient}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-5"
            >
              <motion.li
                variants={varient}
                className="h-[250px] w-full xl:flex-1 rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/p/CroaBhFueXc/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/1.webp"
                      alt="phone"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END IPHONE CASE ---*/}
              <motion.li
                variants={varient}
                className="h-[250px] w-full xl:max-w-[640px] rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/p/Cr3mEGepWPj/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/2.webp"
                      alt="person"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END PERSON ---*/}
              <motion.li
                variants={varient}
                className="h-[250px] w-full xl:flex-1 rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/p/CsKWQTqPvsn/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/3.webp"
                      alt="wireless charger"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END WIRELESS CHARGER ---*/}
            </motion.ul>
          </section>
          {/*-------------------------- END SECTION 1 ----------------------------*/}
          <section>
            <motion.ul
              variants={varient}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-5 "
            >
              <motion.li
                variants={varient}
                className="h-[250px] w-full rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/p/CsclzPOL7sH/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/4.webp"
                      alt="white sport slim band"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END SLIM BAND ---*/}
              <motion.li
                variants={varient}
                className="h-[250px] w-full rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/reel/CsUpQTvAMEd/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/5.webp"
                      alt="apple watch"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END APPLE WATCH ---*/}
              <motion.li
                variants={varient}
                className="h-[250px] w-full rounded-[40px] overflow-hidden group"
              >
                <a
                  href="https://www.instagram.com/p/CsZBUJRLf17/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  <div className="h-full w-full relative">
                    <Image
                      className="object-cover"
                      src="/images/About-page/instagram-section/6.webp"
                      alt="white setup"
                      fill
                    />
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
                      <div>
                        <FaInstagram className="text-white h-14 w-14" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
              {/*--- END WHITE SETUP ---*/}
            </motion.ul>
          </section>
          {/*-------------------------- END SECTION 2 ----------------------------*/}
        </div>
      </div>
    </div>
  );
}
