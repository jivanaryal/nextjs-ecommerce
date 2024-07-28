import React from "react";
import { TProduct } from "@/types/product";
import SingleProductCard from "./single-product-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";

type Props = {
  variant?: "similar-product" | "all-product";
};

export async function getData(): Promise<TProduct[]> {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("can't able to fetch the product");
  }

  return res.json();
}

type ProductListProps = {
  productData: TProduct[];
};

export default async function ProductsList({ variant }: Props) {
  const productData = await getData();

  return (
    <section>
      {variant === "similar-product" ? (
        <SimilarProduct productData={productData} />
      ) : variant === "all-product" ? (
        <AllProduct productData={productData} />
      ) : (
        <section className="grid grid-cols-4 gap-10 ">
          {productData.map((product, ind) => {
            return <SingleProductCard key={ind} product={product} />;
          })}
        </section>
      )}
    </section>
  );
}

function SimilarProduct({ productData }: ProductListProps) {
  return (
    <section className="space-y-10">
      {productData.map((product, ind) => (
        <section key={ind}>
          <Card
            className="rounded-lg grid grid-cols-2 items-center overflow-hidden hover:scale-100 hover:shadow-lg hover:shadow-gray-500 transition-all duration-300 delay-50"
            title={product.name}
          >
            <CardHeader>
              <Image
                src={product.images[0]}
                alt={product.name}
                height={0}
                width={0}
                sizes="100vw"
                className="w-full object-cover max-h-72 rounded hover:shadow-sm"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="line-clamp-2 text-md leading-5">
                {product.name}
              </CardTitle>
              <p className="text-blue-500 text-lg font-black">
                $ {getDiscountedPrice(product.price, product.discount)}
              </p>
              <div className="">
                <p className="text-gray-500 line-through mr-6 flex">
                  $ {product.price}
                </p>
                <span>{product.discount} %</span>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </section>
  );
}

function AllProduct({ productData }: ProductListProps) {
  return (
    <section className="space-y-10 p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productData.map((product, ind) => (
          <div
            key={ind}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Card className="overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
              <CardHeader>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  height={200}
                  width={400}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </CardTitle>
                <p className="text-green-600 text-xl font-bold mt-2">
                  ${getDiscountedPrice(product.price, product.discount)}
                </p>
                <div className="flex items-center mt-2">
                  <p className="text-gray-500 line-through mr-4">
                    ${product.price}
                  </p>
                  <span className="text-red-500 font-medium">
                    {product.discount}% off
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
