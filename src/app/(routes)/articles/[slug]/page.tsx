import getArticle from "@/app/actions/getArticle";
import ArticleSection from "@/app/components/ArticleSection";
import { MotionDiv, MotionHeading } from "@/app/components/MotionComponent";
import { ArticleProps } from "@/app/lib/type";
import Image from "next/image";
import Link from "next/link";



const imageVaraient = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const textVarient = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};


const page = async ({ params }: any) => {

  const data = await getArticle();

  const article = data.filter( (item:ArticleProps) => item.link === `/articles/${params.slug}`);
  return (
    <main className="min-h-screen py-[80px] px-[24px] md:px-[80px]">
        {article.map( (article:ArticleProps) => (
          <div key={article.id} className="w-full lg:w-[80%] mx-auto flex flex-col gap-5 lg:gap-14">
            <header className="flex flex-col items-center gap-3 lg:gap-5">
              <MotionDiv
                variants={textVarient}
                initial="initial"
                animate="animate"
                className="flex items-center gap-4"
              >
                <Link
                  className="text-neutral-500 hover:underline hover:text-neutral-800"
                  href="/articles"
                >
                  Articles
                </Link>
                <span className="text-neutral-500 text-2xl">/</span>
                <p className="text-neutral-500">{article.date}</p>
              </MotionDiv>
              <div className="p-2 overflow-hidden">
                <MotionHeading
                  variants={textVarient}
                  initial="initial"
                  animate="animate"
                  className="text-2xl md:text-3xl lg:text-5xl text-center text-pretty"
                >
                  {article.title}
                </MotionHeading>
              </div>
            </header>
            {/*--- END HEADER ---*/}
            <MotionDiv
              variants={imageVaraient}
              initial="initial"
              animate="animate"
              className="h-[450px] w-full rounded-[40px] overflow-hidden relative"
            >
              <Image
                className="object-cover"
                src={article.thumbnail}
                alt={article.title}
                fill
              />
            </MotionDiv>
              {/*--- END IMAGE SECTION ---*/}
            <ArticleSection />
            {/*--- END PARAGRAPH SECTION ---*/}
          </div>
        ))}
     
    </main>
  );
};

export default page;
