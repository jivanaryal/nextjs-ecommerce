import React from "react";
// import productData from "@/data/products.json";
import { notFound } from "next/navigation";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/home-page/single-product-page/product-hero";
import ProductDescription from "@/components/home-page/single-product-page/product-description";
import ProductReviews from "@/components/home-page/single-product-page/product-review";
import SimilarProducts from "@/components/shared-component/similar-product";
import { getProductData } from "@/components/home-page/products/products-list";

type Props = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params: { id } }: Props) => {
  const productData = await getProductData();

  // console.log(productData, "this is from singleproductpage");
  const product = (productData as TProduct[]).find((singleProduct) => {
    return singleProduct.id == id;
  });

  if (product === undefined) notFound();
  return (
    <section className="w-9/12 mx-auto ">
      <SingleProductHero product={product} />
      <ProductDescription product={product} />
      <ProductReviews product={product} />
      <SimilarProducts />
    </section>
  );
};

export default SingleProductPage;
