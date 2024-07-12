import { TProduct } from "@/types/product";
import React from "react";

type Props = {
  product: Pick<TProduct, "description">;
};

const ProductDescription = ({ product }: Props) => {
  return (
    <section className="mt-12">
      <h3 className="font-medium text-xl mb-5">
        You can Read more about this product here
      </h3>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDescription;
