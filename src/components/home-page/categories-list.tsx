import React from "react";
import CategoreisData from "@/data/categories.json";
import { Category } from "@/types/category";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <section>
      {(CategoreisData as Category[]).map((category, index) => {
        return (
          <div key={index}>
            <h3>{category.name}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default CategoriesList;
