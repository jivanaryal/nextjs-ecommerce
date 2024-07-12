import RatingStars from "@/components/shared-component/rating-stars";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import QauntityInput from "./quantity-input";
import ReviewProduct from "./review-product";

type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const primaryImage = product.images[0];
  return (
    <main className="flex bg-[#FFFFFF]    pt-4  px-10 border-2  border-none  justify-center  outline-none     gap-10 ">
      <section className="">
        <figure>
          <Image
            src={primaryImage}
            alt={product.name}
            height={300}
            width={500}
            className="max-h-[300px] min-h-[300px] min-w-[420px] rounded max-w-[420px]"
          />
        </figure>

        <section className="flex gap-2 py-1">
          {product.images.map((imageUrl, index) => (
            <figure key={index} className="flex">
              <Image
                src={imageUrl}
                alt={product.name}
                width={100}
                height={40}
                className=" object-cover max-w-[200px] max-h-[80px] rounded "
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

        <section>
          <RatingStars rating={product.avgRating} />
        </section>

        <QauntityInput stockQuantity={product.stockQuantity} />
        <section>
          <div className="buttons mt-10">
            <button className="buy w-5/12 mr-4 bg-blue-500  text-white py-3 opacity-100 hover:opacity-75  rounded-sm">
              Buy Now
            </button>
            <button className="buy w-5/12 bg-[#F85606] text-white py-3  opacity-100 hover:opacity-75 rounded-sm ">
              Add to Cart
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SingleProductHero;
