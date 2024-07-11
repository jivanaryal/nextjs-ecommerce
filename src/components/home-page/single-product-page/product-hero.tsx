import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const primaryImage = product.images[0];
  return (
    <div className="border-2 bg-[#EFF0F5]">
      <main className="flex bg-[#FFFFFF]   pt-4 h-[90vh] px-10 border-2  border-none  justify-center w-9/12  outline-none   mx-auto   gap-10 my-10">
        <section className="">
          <figure>
            <Image
              src={primaryImage}
              alt={product.name}
              height={200}
              width={400}
              className="max-h-[400px] rounded max-w-[600px]"
            />
          </figure>

          <section className="flex gap-2 py-1">
            {product.images.map((imageUrl, index) => (
              <figure key={index} className="flex">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  width={80}
                  height={40}
                  className=" object-cover max-w-[200px] max-h-[80px]  border-[1px] border-orange-500"
                />

                <figcaption className="sr-only">{product.name}</figcaption>
              </figure>
            ))}
          </section>
        </section>
        <section>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-orange-500 font-bold text-2xl">
            Rs. {getDiscountedPrice(product.price, product.discount)}
          </p>
          <div className="flex items-center gap-2">
            <p className="line-through text-gray-500">${product.price}</p>
            <span className="font-black">{product.discount} %</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SingleProductHero;
