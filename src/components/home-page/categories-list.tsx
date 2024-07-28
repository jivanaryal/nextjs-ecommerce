import React from "react";
import CategoreisData from "@/data/categories.json";
import { Category } from "@/types/category";
import SingleCategoryItem from "./single-card-item";
import Link from "next/link";

type Props = {};

export async function getCategory() {
  const res = await fetch("http:localhost:3000/api/categories");
  if (!res.ok) {
    throw new Error("failed to fetched data");
  }

  return res.json();
}

const CategoriesList = async (props: Props) => {
  const data = await getCategory();

  return (
    <section className="grid grid-cols-6 gap-5 mt-5">
      {(data as Category[]).map((category, index) => {
        return (
          <Link href={`/categories/${category.name}`} key={index}>
            {" "}
            <div key={index}>
              <SingleCategoryItem category={category} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default CategoriesList;
