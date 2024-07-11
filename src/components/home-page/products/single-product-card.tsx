import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

export default function SingleProductCard({ product }: Props) {
  return (
    <Card
      className="rounded-lg overflow-hidden  hover:scale-105 hover:shdaow-lg hover:shadow-gray-500 transition-all duration-300 delay-50 "
      title={product.name}
    >
      <CardHeader>
        <Image
          src={product.images[0]}
          alt={product.name}
          height={200}
          width={100}
          className="w-full object-cover max-h-40 rounded hover:shadow-sm"
        />
        <CardTitle className=" line-clamp-2 text-md leading-5">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-blue-500 text-lg font-black">
          $ {getDiscountedPrice(product.price, product.discount)}
        </p>

        <div className="">
          <p className="text-gray-500 line-through  mr-6 flex ">
            $ {product.price}
          </p>
          <span>{product.discount} %</span>
        </div>
        {/* <button className="px-1 py-1 rounded border-2 outline-none  bg-blue-500 text-white ">
            buy now
          </button> */}
      </CardContent>
    </Card>
  );
}
