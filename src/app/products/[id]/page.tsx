import React from "react";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/home-page/single-product-page/product-hero";
import ProductDescription from "@/components/home-page/single-product-page/product-description";
import ProductReviews from "@/components/home-page/single-product-page/product-review";
import SimilarProducts from "@/components/shared-component/similar-product";

type Props = {
  params: {
    id: string;
  };
  
};

const SingleProductPage = ({ params: { id } }: Props) => {
  const product = (productData as TProduct[]).find(
    (singleProduct) => singleProduct.id === id
  );

  if (product === undefined) notFound();
  return (
    <section className="w-9/12 mx-auto ">
      <h1>hello world</h1>
      <SingleProductHero product={product} />
      <ProductDescription product={product} />
      <ProductReviews product={product} />
      <SimilarProducts />
    </section>
  );
};

export default SingleProductPage;
