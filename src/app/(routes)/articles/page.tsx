import getArticle from "@/app/actions/getArticle";
import ArticleCard from "@/app/components/ArticleCard";
import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
} from "@/app/components/MotionComponent";
import { ArticleProps } from "@/app/lib/type";
import React from "react";

const varaiant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export default async function Articles() {
  const data = await getArticle();
  return (
    <main className="py-[80px]">
      <div className="flex flex-col gap-5 lg:gap-20">
        <MotionDiv
          variants={varaiant}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-5"
        >
          <MotionHeading
            variants={varaiant}
            className="text-3xl lg:text-5xl text-center"
          >
            Articles
          </MotionHeading>
          <MotionParagraph
            variants={varaiant}
            className="text-xs lg:text-base text-center text-gray-500 px-[60px] lg:px-0 lg:max-w-4xl"
          >
            Welcome to our articles section, where our team of experts and
            industry professionals curates and shares valuable insights, tips,
            and inspiration on a variety of topics.
          </MotionParagraph>
        </MotionDiv>
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 px-[24px] pb-[40px] pt-[40px] lg:pt-[24px] lg:px-[64px] lg:pb-[64px] ">
          {data.map((item:ArticleProps)=>(
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
