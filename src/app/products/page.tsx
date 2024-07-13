import ProductsList from "@/components/home-page/products/products-list";
import React from "react";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <section>
      <ProductsList variant="all-product" />
    </section>
  );
};

export default ProductPage;
