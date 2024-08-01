import ProductsList from "@/components/home-page/products/products-list";
import React from "react";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <section>
      <h1> This is the products list where you can see all of the product</h1>
      <ProductsList variant="all-product" />
    </section>
  );
};

export default ProductPage;
