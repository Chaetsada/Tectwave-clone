import Link from 'next/link';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

interface Props{
    name: string,
    link: string,
};

const LinkButton = ({ name, link }: Props) => {
    return (
        <div className="w-fit relative overflow-hidden group">
            <Link href={link}>
                <div className="flex items-center gap-2 mb-2 transition-all duration-300 group-hover:-translate-y-6  ">
                    <h6 className="text-xs lg:text-base">{name}</h6>
                    <GoArrowRight />
                </div>
                <div className="absolute top-[100%] flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-7 lg:group-hover:-translate-y-8 ">
                    <h6 className="text-xs lg:text-base">{name}</h6>
                    <GoArrowRight />
                </div>
                <div className="h-px w-full bg-gray-300 flex justify-center">
                    <div className="h-px w-0 transition-all duration-500 opacity-0 bg-black group-hover:opacity-100 group-hover:w-full" />
                </div>
            </Link>
        </div>
    )
}

export default LinkButton