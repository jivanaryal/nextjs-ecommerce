import React from "react";
import ProductsList from "./products-list";

type Props = {};

export default function ProductsWrapper({}: Props) {
  return (
    <section className="container ">
      <h2 className="text-2xl font-bold my-10">Out latest Products</h2>

      <ProductsList />
    </section>
  );
}
