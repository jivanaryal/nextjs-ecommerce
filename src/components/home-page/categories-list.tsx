import React from "react";
import CategoreisData from "@/data/categories.json";
import { Category } from "@/types/category";
import SingleCategoryItem from "./single-card-item";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <section className="grid grid-cols-6 gap-5 mt-5">
      {(CategoreisData as Category[]).map((category, index) => {
        return (
          <div key={index}>
            <SingleCategoryItem category={category} />
          </div>
        );
      })}
    </section>
  );
};

export default CategoriesList;
