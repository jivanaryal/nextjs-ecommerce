import React from "react";
import ProductsList from "../home-page/products/products-list";

type Props = {};

const SimilarProducts = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl mb-20 font-medium capitalize">
        you may also like this products
      </h1>
      <ProductsList variant="similar-product" />
    </div>
  );
};

export default SimilarProducts;
