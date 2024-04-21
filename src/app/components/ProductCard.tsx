import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductProp } from "../lib/type";

interface Prop{
  product: ProductProp,
}

const ProductCard = ({ product }: Prop) => {
  return (
    <div className="h-[510px] w-full transition-all duration-300 group hover:scale-110">
      <Link href={product.link}>
        <div className="flex flex-col gap-8">
          <div className="h-[315px] w-full rounded-[36px] overflow-hidden relative">
            <div className="absolute top-5 left-5 z-20 bg-white px-5 py-3 shadow-2xl rounded-full">
              <p className="text-xs uppercase text-gray-500">
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
          <div className="h-fit flex flex-col gap-5">
            <h5 className="text-base lg:text-xl ">{product.title}</h5>
            <p className="text-xs lg:text-base text-gray-500">
              {product.description}
            </p>
            <p className="font-semibold">${product.price} USD</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
