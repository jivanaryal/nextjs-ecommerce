import React from "react";
// import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import SingleProductCard from "@/components/home-page/products/single-product-card";
import { getProductData } from "@/components/home-page/products/products-list";

type Props = {
  params: {
    id: string;
  };
};

const SingleCategoryPage = async ({ params }: Props) => {
  const productData = await getProductData();

  const filterCategory = productData.filter((product) => {
    console.log(product.category.name);
    return product.category.name === params.id;
  });
  console.log(filterCategory);
  return (
    <main>
      <h1 className="text-2xl font-bold  my-10 mx-10">
        List of {params.id} Products{" "}
      </h1>
      <section className="grid grid-cols-4 gap-10 ml-10  min-h-96">
        {filterCategory.length > 0 ? (
          (filterCategory as TProduct[]).map((product, ind) => {
            return <SingleProductCard key={ind} product={product} />;
          })
        ) : (
          <div className=" w-full font-mono text-red-500">
            there is no product available to display back to homepage
          </div>
        )}
      </section>
    </main>
  );
};

export default SingleCategoryPage;
